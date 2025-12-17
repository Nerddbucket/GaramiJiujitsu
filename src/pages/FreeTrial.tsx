import { useZenPlanner } from '../hooks/useZenPlanner';

const WIDGET_ID = 'freetrial_084d47b5-47d1-42c3-8abd-69a3058b873d';

const FreeTrial = () => {
  useZenPlanner(WIDGET_ID);

  return (
    <section className="bg-brand-dark text-white py-16 md:py-24 min-h-[80vh]">
      <div className="container px-4">
        <div className="text-center mb-16 md:mb-20">
          <p className="tracking-[0.8em] text-xs text-white/60 uppercase mb-4">Get Started</p>
          <h1 className="text-4xl md:text-5xl font-display uppercase tracking-[0.3em] my-4">
            Schedule Your Free Trial
          </h1>
          <div className="w-28 h-1 bg-brand-green mx-auto mt-6" />
          <p className="max-w-2xl mx-auto text-lg text-white/80 mt-8">
            Ready to begin your Jiu Jitsu journey? Sign up for a free trial class and experience the 
            Garami Jiu Jitsu difference. Choose a time that works for you below.
          </p>
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-brand-gray/30 rounded-2xl p-2 md:p-6 lg:p-8 border border-white/10 shadow-xl backdrop-blur-sm w-full overflow-hidden">
            <div 
              id={WIDGET_ID}
              className="zen-planner-widget-container w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;

