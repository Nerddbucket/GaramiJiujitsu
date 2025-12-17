import { useEffect } from 'react';

const ZEN_PLANNER_CONFIG = {
  zenJSHost: 'https://studio.zenplanner.com',
  src: 'zenplanner/studio/target/zp-widget-direct.js',
  module: 'freetrial',
  partitionApiKey: 'ee56b422-dd8a-42b2-ac06-b391e9997b03',
  widgetInstanceId: '084d47b5-47d1-42c3-8abd-69a3058b873d',
} as const;

export const useZenPlanner = (containerId: string) => {
  useEffect(() => {
    const win = window as any;
    const doc = document;
    const { zenJSHost, src, module, partitionApiKey, widgetInstanceId } = ZEN_PLANNER_CONFIG;

    let tryCount = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    function afterLoad() {
      if (win.zenplanner.directLoader !== undefined && win.zenplanner.directLoader !== null) {
        if (intervalId) clearInterval(intervalId);
        for (let i = 0, l = win.zenplanner.directLoadArgs.length; l > i; i++) {
          if (win.zenplanner.directLoadArgs[i].widgetInstanceId === widgetInstanceId) {
            win.zenplanner.directLoader.loadWidget(zenJSHost, module, partitionApiKey, widgetInstanceId);
          }
        }
      } else if (tryCount++ > 200) {
        console.log('Zen Planner widget : ' + module + ', failed to load.');
        if (intervalId) clearInterval(intervalId);
      }
    }

    win.zenplanner = win.zenplanner || {};
    win.zenplanner.directLoadArgs = win.zenplanner.directLoadArgs || [];

    if (win.zenplanner.directLoader === undefined || win.zenplanner.directLoader === null) {
      win.zenplanner.directLoadArgs.push({ 
        module: module, 
        partitionApiKey: partitionApiKey, 
        widgetInstanceId: widgetInstanceId 
      });
      const s = doc.createElement('script');
      s.async = true;
      s.src = zenJSHost + '/' + src;
      doc.head.appendChild(s);
      intervalId = setInterval(afterLoad, 50);
    } else {
      win.zenplanner.directLoader.loadWidget(zenJSHost, module, partitionApiKey, widgetInstanceId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [containerId]);
};

