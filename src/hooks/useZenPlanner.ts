import { useEffect } from 'react';

export const useZenPlanner = (containerId: string) => {
  useEffect(() => {
    const win = window as any;
    const doc = document;
    const zenJSHost = 'https://studio.zenplanner.com';
    const src = 'zenplanner/studio/target/zp-widget-direct.js';
    const module = 'freetrial';
    const partitionApiKey = 'ee56b422-dd8a-42b2-ac06-b391e9997b03';
    const widgetInstanceId = '084d47b5-47d1-42c3-8abd-69a3058b873d';

    let tryCount = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    let styleObserver: MutationObserver | null = null;

    // Function to apply spacing and layout fixes
    function applyWidgetStyles() {
      const container = doc.getElementById(containerId);
      if (!container) return;

      // Container constraints
      container.style.width = '100%';
      container.style.maxWidth = '100%';
      container.style.overflowX = 'hidden';
      container.style.boxSizing = 'border-box';
      container.style.padding = '4rem 3rem';

      // Remove duplicate lists
      const directChildren = Array.from(container.children);
      if (directChildren.length > 1) {
        const firstChild = directChildren[0];
        const firstText = firstChild.textContent?.trim() || '';
        
        for (let i = 1; i < directChildren.length; i++) {
          const child = directChildren[i] as HTMLElement;
          const childText = child.textContent?.trim() || '';
          
          if (childText && firstText && childText === firstText) {
            child.style.display = 'none';
          }
        }
      }

      // Force single column layout on all grid/flex containers
      const allElements = container.querySelectorAll('*');
      allElements.forEach((el: Element) => {
        const htmlEl = el as HTMLElement;
        const computedStyle = win.getComputedStyle(htmlEl);
        
        // Force single column for grid
        if (computedStyle.display === 'grid') {
          htmlEl.style.gridTemplateColumns = '1fr';
          htmlEl.style.width = '100%';
        }
        
        // Force single column for flex
        if (computedStyle.display === 'flex' || computedStyle.display === 'inline-flex') {
          htmlEl.style.flexDirection = 'column';
          htmlEl.style.width = '100%';
        }
        
        // Force single column for columns
        if (computedStyle.columnCount && parseInt(computedStyle.columnCount) > 1) {
          htmlEl.style.columnCount = '1';
        }

        // Add proper spacing to text elements
        if (['P', 'SPAN', 'DIV', 'LABEL', 'LI'].includes(htmlEl.tagName)) {
          if (!htmlEl.style.padding || htmlEl.style.padding === '0px') {
            htmlEl.style.padding = '0.75rem 1rem';
          }
          if (!htmlEl.style.margin || htmlEl.style.margin === '0px') {
            htmlEl.style.margin = '0.5rem 0';
          }
          htmlEl.style.lineHeight = '1.6';
          htmlEl.style.display = 'block';
        }

        // Fix text contrast on white backgrounds
        const bgColor = computedStyle.backgroundColor;
        if (bgColor && (
          bgColor.includes('rgb(255, 255, 255)') ||
          bgColor.includes('rgb(255,255,255)') ||
          bgColor === 'white' ||
          bgColor === '#ffffff' ||
          bgColor === '#fff'
        )) {
          if (!htmlEl.style.color || htmlEl.style.color === 'rgb(255, 255, 255)' || htmlEl.style.color === 'white') {
            htmlEl.style.color = '#1a1a1a';
          }
        }
      });
    }

    function afterLoad() {
      if (win.zenplanner.directLoader !== undefined && win.zenplanner.directLoader !== null) {
        if (intervalId) clearInterval(intervalId);
        for (let i = 0, l = win.zenplanner.directLoadArgs.length; l > i; i++) {
          if (win.zenplanner.directLoadArgs[i].widgetInstanceId === widgetInstanceId) {
            win.zenplanner.directLoader.loadWidget(zenJSHost, module, partitionApiKey, widgetInstanceId);
            
            // Wait for widget to render, then apply styles multiple times
            setTimeout(() => {
              applyWidgetStyles();
              setTimeout(() => applyWidgetStyles(), 1000);
              setTimeout(() => applyWidgetStyles(), 2000);
              
              // Set up observer to apply styles when widget content changes
              const container = doc.getElementById(containerId);
              if (container) {
                styleObserver = new MutationObserver(() => {
                  setTimeout(() => applyWidgetStyles(), 100);
                });
                styleObserver.observe(container, {
                  childList: true,
                  subtree: true,
                  attributes: true,
                  attributeFilter: ['style', 'class']
                });
              }
            }, 1000);
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
      s.async = 1;
      s.src = zenJSHost + '/' + src;
      doc.head.appendChild(s);
      intervalId = setInterval(afterLoad, 50);
    } else {
      win.zenplanner.directLoader.loadWidget(zenJSHost, module, partitionApiKey, widgetInstanceId);
      
      // Apply styles after widget loads
      setTimeout(() => {
        applyWidgetStyles();
        setTimeout(() => applyWidgetStyles(), 1000);
        setTimeout(() => applyWidgetStyles(), 2000);
        
        const container = doc.getElementById(containerId);
        if (container) {
          styleObserver = new MutationObserver(() => {
            setTimeout(() => applyWidgetStyles(), 100);
          });
          styleObserver.observe(container, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
          });
        }
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (styleObserver) styleObserver.disconnect();
    };
  }, [containerId]);
};

