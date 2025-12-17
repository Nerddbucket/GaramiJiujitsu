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
    let styleObserver: MutationObserver | null = null;

    // Function to apply spacing and contrast fixes
    function applyWidgetStyles() {
      const container = doc.getElementById(containerId);
      if (!container) return;

      // Ensure container has proper width constraints
      container.style.width = '100%';
      container.style.maxWidth = '100%';
      container.style.overflowX = 'hidden';
      container.style.boxSizing = 'border-box';

      // Apply styles to all elements within the widget
      const elements = container.querySelectorAll('*');
      elements.forEach((el: Element) => {
        const htmlEl = el as HTMLElement;
        const computedStyle = win.getComputedStyle(htmlEl);
        const bgColor = computedStyle.backgroundColor;
        
        // Ensure all elements respect width constraints
        htmlEl.style.maxWidth = '100%';
        htmlEl.style.boxSizing = 'border-box';
        
        // Check if element has white background
        if (bgColor && (
          bgColor.includes('rgb(255, 255, 255)') ||
          bgColor.includes('rgb(255,255,255)') ||
          bgColor === 'white' ||
          bgColor === '#ffffff' ||
          bgColor === '#fff'
        )) {
          // Ensure dark text on white backgrounds
          if (!htmlEl.style.color || htmlEl.style.color === 'rgb(255, 255, 255)' || htmlEl.style.color === 'white') {
            htmlEl.style.color = '#1a1a1a';
          }
          
          // Add padding if element is a container-like element
          if (htmlEl.tagName === 'DIV' || htmlEl.tagName === 'SECTION' || htmlEl.classList.toString().toLowerCase().includes('card') || htmlEl.classList.toString().toLowerCase().includes('container')) {
            if (!htmlEl.style.padding || htmlEl.style.padding === '0px') {
              htmlEl.style.padding = '0.875rem 1rem';
            }
            if (!htmlEl.style.margin || htmlEl.style.margin === '0px') {
              htmlEl.style.margin = '0.5rem 0';
            }
            if (!htmlEl.style.borderRadius) {
              htmlEl.style.borderRadius = '0.5rem';
            }
            htmlEl.style.width = '100%';
            htmlEl.style.maxWidth = '100%';
            htmlEl.style.overflowX = 'hidden';
          }
        }

        // Ensure text elements have proper color
        if (['P', 'SPAN', 'DIV', 'LABEL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(htmlEl.tagName)) {
          const parentBg = win.getComputedStyle(htmlEl.parentElement || htmlEl).backgroundColor;
          if (parentBg && (
            parentBg.includes('rgb(255, 255, 255)') ||
            parentBg.includes('rgb(255,255,255)') ||
            parentBg === 'white' ||
            parentBg === '#ffffff' ||
            parentBg === '#fff'
          )) {
            if (!htmlEl.style.color || htmlEl.style.color === 'rgb(255, 255, 255)' || htmlEl.style.color === 'white') {
              htmlEl.style.color = '#1a1a1a';
            }
          }
        }

        // Style buttons and interactive elements
        if (htmlEl.tagName === 'BUTTON' || htmlEl.getAttribute('role') === 'button' || (htmlEl.tagName === 'A' && htmlEl.getAttribute('href'))) {
          htmlEl.style.color = '#ffffff';
          htmlEl.style.backgroundColor = '#1a1a1a';
          htmlEl.style.padding = '0.75rem 1.5rem';
          htmlEl.style.borderRadius = '0.375rem';
          htmlEl.style.fontWeight = '500';
          htmlEl.style.border = 'none';
          htmlEl.style.cursor = 'pointer';
        }

        // Style form inputs
        if (['INPUT', 'SELECT', 'TEXTAREA'].includes(htmlEl.tagName)) {
          htmlEl.style.padding = '0.75rem';
          htmlEl.style.border = '1px solid #d1d5db';
          htmlEl.style.borderRadius = '0.375rem';
          htmlEl.style.color = '#1a1a1a';
          htmlEl.style.backgroundColor = '#ffffff';
          htmlEl.style.width = '100%';
          htmlEl.style.maxWidth = '100%';
          htmlEl.style.boxSizing = 'border-box';
        }

        // Style labels
        if (htmlEl.tagName === 'LABEL') {
          const parentBg = win.getComputedStyle(htmlEl.parentElement || htmlEl).backgroundColor;
          if (parentBg && (
            parentBg.includes('rgb(255, 255, 255)') ||
            parentBg.includes('rgb(255,255,255)') ||
            parentBg === 'white' ||
            parentBg === '#ffffff' ||
            parentBg === '#fff'
          )) {
            htmlEl.style.color = '#1a1a1a';
          }
          htmlEl.style.fontWeight = '500';
          htmlEl.style.marginBottom = '0.5rem';
          htmlEl.style.display = 'block';
        }

        // Ensure tables and lists don't overflow
        if (htmlEl.tagName === 'TABLE') {
          htmlEl.style.width = '100%';
          htmlEl.style.maxWidth = '100%';
          htmlEl.style.tableLayout = 'auto';
          htmlEl.style.overflowX = 'auto';
          htmlEl.style.display = 'block';
        }

        // Ensure images fit
        if (htmlEl.tagName === 'IMG') {
          htmlEl.style.maxWidth = '100%';
          htmlEl.style.height = 'auto';
        }
      });
    }

    function afterLoad() {
      if (win.zenplanner.directLoader !== undefined && win.zenplanner.directLoader !== null) {
        if (intervalId) clearInterval(intervalId);
        for (let i = 0, l = win.zenplanner.directLoadArgs.length; l > i; i++) {
          if (win.zenplanner.directLoadArgs[i].widgetInstanceId === widgetInstanceId) {
            win.zenplanner.directLoader.loadWidget(zenJSHost, module, partitionApiKey, widgetInstanceId);
            
            // Wait a bit for widget to render, then apply styles
            setTimeout(() => {
              applyWidgetStyles();
              
              // Set up observer to apply styles when widget content changes
              const container = doc.getElementById(containerId);
              if (container) {
                styleObserver = new MutationObserver(() => {
                  applyWidgetStyles();
                });
                styleObserver.observe(container, {
                  childList: true,
                  subtree: true,
                  attributes: true,
                  attributeFilter: ['style', 'class']
                });
              }
            }, 500);
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
      
      // Apply styles after widget loads
      setTimeout(() => {
        applyWidgetStyles();
        
        const container = doc.getElementById(containerId);
        if (container) {
          styleObserver = new MutationObserver(() => {
            applyWidgetStyles();
          });
          styleObserver.observe(container, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
          });
        }
      }, 500);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (styleObserver) styleObserver.disconnect();
    };
  }, [containerId]);
};

