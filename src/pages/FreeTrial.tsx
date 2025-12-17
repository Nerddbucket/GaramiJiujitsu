import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const FreeTrial = () => {
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
    <div className="min-h-screen">
      <Banner />
      <Navigation />
      <section className="bg-brand-dark text-white py-20 min-h-[80vh]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="tracking-[0.8em] text-xs text-white/60 uppercase mb-4">Get Started</p>
            <h1 className="text-4xl md:text-5xl font-display uppercase tracking-[0.3em] my-4">
              Schedule Your Free Trial
            </h1>
            <div className="w-28 h-1 bg-brand-green mx-auto mt-6" />
            <p className="max-w-2xl mx-auto text-lg text-white/80 mt-6">
              Ready to begin your Jiu Jitsu journey? Sign up for a free trial class and experience the 
              Garami Jiu Jitsu difference. Choose a time that works for you below.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-brand-gray/30 rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl backdrop-blur-sm">
              <div 
                id="freetrial_084d47b5-47d1-42c3-8abd-69a3058b873d"
                className="zen-planner-widget-container min-h-[600px]"
              ></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FreeTrial;

