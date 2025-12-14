import { ChangeEvent, FormEvent, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for signing up! We'll be in touch soon.");
    setFormData({ name: "", email: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white text-brand-dark">
      <div className="container">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.6em] text-xs text-brand-dark/60">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[0.2em] mt-4">
            Get in Touch
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="bg-brand-accent/70 rounded-2xl p-8 border border-brand-dark/10">
            <h3 className="text-2xl font-display uppercase tracking-[0.2em] mb-6">
              Join the List
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.4em] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white px-4 py-3 border border-brand-dark/10 rounded focus:ring-2 focus:ring-brand-green"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.4em] mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white px-4 py-3 border border-brand-dark/10 rounded focus:ring-2 focus:ring-brand-green"
                  required
                />
              </div>
              <p className="text-sm text-brand-dark/70">
                Sign up for our email list for updates, promotions, and more.
              </p>
              <button
                type="submit"
                className="w-full bg-brand-dark text-white py-3 rounded-full uppercase tracking-[0.3em] font-semibold hover:bg-brand-green transition-colors"
              >
                Send
              </button>
            </form>
            <p className="text-xs text-brand-dark/60 mt-4">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </div>

          <div className="bg-brand-dark text-white rounded-2xl p-8 border border-brand-dark/10 shadow-brand">
            <h3 className="text-2xl font-display uppercase tracking-[0.2em] mb-4">
              We'll See You There!
            </h3>
            <p className="text-white/80 mb-6">
              For questions regarding our Brazilian Jiu Jitsu Programs please reach out!
            </p>

            <div className="space-y-5 border-t border-white/10 pt-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">
                  Address
                </p>
                <p>
                  5519 Waldos Beach Road, Fayetteville, North Carolina 28306, United States
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">
                  Text
                </p>
                <a href="tel:9109881212" className="text-brand-green hover:underline">
                  (910) 988-1212
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">
                  Hours
                </p>
                <ul className="text-white/80 space-y-2">
                  <li>Monday - Friday: 4:00 pm - 9:00 pm</li>
                  <li>Saturday: 11 am - 2 pm</li>
                  <li>Sunday: 4 pm - 3:30 pm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

