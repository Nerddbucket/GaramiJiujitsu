import { useEffect } from 'react';

const Schedule = () => {
  useEffect(() => {
    // Zen Planner widget script loader
    const loadZenPlannerWidget = () => {
      const win = window as any;
      const doc = document;
      const zenJSHost = 'https://studio.zenplanner.com';
      const src = 'zenplanner/studio/target/zp-widget-direct.js';
      const module = 'freetrial';
      const partitionApiKey = 'ee56b422-dd8a-42b2-ac06-b391e9997b03';
      const widgetInstanceId = '084d47b5-47d1-42c3-8abd-69a3058b873d';

      win.zenplanner = win.zenplanner || {};
      win.zenplanner.directLoadArgs = win.zenplanner.directLoadArgs || [];
      
      let tryCount = 0;
      let intervalId: NodeJS.Timeout | null = null;

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
    };

    loadZenPlannerWidget();
  }, []);

  return (
    <section id="schedule" className="bg-brand-dark text-white py-20">
      <div className="container">
        <div className="text-center mb-12">
          <p className="tracking-[0.8em] text-xs text-white/60 uppercase mb-4">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[0.3em] my-4">
            Schedule Your Free Trial
          </h2>
          <div className="section-divider" />
          <p className="max-w-2xl mx-auto text-lg text-white/80 mt-6">
            Ready to begin your Jiu Jitsu journey? Sign up for a free trial class and experience the 
            Garami Jiu Jitsu difference. Choose a time that works for you below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div id="freetrial_084d47b5-47d1-42c3-8abd-69a3058b873d"></div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

