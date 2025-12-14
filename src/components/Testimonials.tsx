const Testimonials = () => {
  // Sample Google reviews - Replace with actual Google Reviews API data
  const reviews = [
    {
      id: 1,
      author: "JA Guerrero.",
      rating: 5,
      date: "4 Months ago",
      text: "So many great things to brag about when it comes to Garami Jiu Jitsu located on Waldo’s Beach Road in Fayetteville. From day one, we felt welcomed and supported by the coaches and the community. The instructors are not only skilled and professional, but they also truly care about each student’s growth—on and off the mat. My kids are learning more than techniques—they’re building discipline, resilience, and respect. The gym is clean and well-run, the there are classes available Monday-Saturday and on Sunday at their secondary location in Fayetteville. For those that homeschool or looking for lunchtime class they offer Tuesdays at 12 and the environment is incredibly positive. Whether you’re just starting out or looking to sharpen your skills, this is the place to be. We feel incredibly lucky to have found this gym and to be part of such an inspiring and uplifting community! Something I’ve heard the coaches say is that “You’ll never regret getting on the mat!!!!!!”",
      verified: true,
    },
    {
      id: 2,
      author: "Demonte Foxx",
      rating: 5,
      date: "6 days ag",
      text: "Best gym I ever been to. Coaches pushes you to your very limit. Everyone helps everyone not just the students who just come to learn just for the love of it but even the fighters.. it’s more like a family than a gym. We all bleed and sweat together. It’s a gym where you can grow and push yourself to your very breaking point. Most importantly, it’s a place you can be yourself and not be judged. This is my home away from home and there’s NONE like it. I welcome EVERYONE to come try the free trial and see the greatness that comes from Garami Jiu Jitsu.",
      verified: true,
    },
    {
      id: 3,
      author: "Kate Colonna",
      rating: 5,
      date: "4 Months ago",
      text: "Both of our sons attend classes here and look forward to every session. They have grown so much in confidence, discipline, and skill since they started. The coaches are fantastic with kids and create a great mix of structure, encouragement, and discipline.",
      verified: true,
    },
    {
      id: 4,
      author: "Grady Thomas",
      rating: 5,
      date: "4 months ago",
      text: "This is an amazing gym for all skill levels! The instructors are knowledgeable, technical and helpful. I’m newer to the Fayetteville area and needed a place to train. If you’re looking for a gym to meet your grappling needs, look no further than Garami Jiu Jitsu! Monday classes will test your mettle & the rest of the week will grow your skill level. This is a complete gym and if you have kids, they have an amazing youth program!",
      verified: true,
    },
    {
      id: 5,
      author: "Joanne Duke.",
      rating: 5,
      date: "4 months ago",
      text: "We always feel welcomed at Garami Jiu Jitsu. Coach Greg and the other coaches are encouraging and genuinely care about the kids. My daughter always enjoys coming here and making new friends. She always learns something new and can easily learn it because of how they break down the instructions. She's always excited to tell me about the new moves she learns. It's a fun environment with amazing taste of music! Great culture and a positive community!",
      verified: true,
    },
    {
      id: 6,
      author: "Lydia Strickland",
      rating: 5,
      date: "3 months ago",
      text: "Garami Jiu Jitsu is an amazing and highly motivating place to train for anyone from complete beginner to experienced competitor. The coaches are very passionate about the sport and seeing the people they train grow both mentally and physically. Special shoutout to coach Greg, coach Barbara, and the other ladies who came alongside a newbie like me, making me feel welcome and helping when I needed more one-on-one help!",
      verified: true,
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-brand-accent text-brand-dark">
      <div className="container">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.6em] text-xs text-brand-dark/60">
            Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[0.2em] mt-4">
            What Our Students Say
          </h2>
          <div className="section-divider mt-6" />
          <p className="mt-6 text-brand-dark/70 max-w-2xl mx-auto">
            Real reviews from our Google Business Profile
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-brand-dark/10 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display uppercase tracking-wide text-lg">
                      {review.author}
                    </h3>
                    {review.verified && (
                      <span className="text-xs bg-brand-green/20 text-brand-green px-2 py-0.5 rounded border border-brand-green/30">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-brand-dark/50 mb-2">{review.date}</p>
                </div>
              </div>
              <div className="mb-4">{renderStars(review.rating)}</div>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Garami+Jiu+Jitsu/@35.123456,-78.123456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 uppercase tracking-[0.3em] text-sm font-semibold hover:text-brand-green transition-colors"
          >
            Read More Reviews on Google
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

