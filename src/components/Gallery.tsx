import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images from /public/assets/gallery/ folder
  // To add more photos, just add them to the gallery folder and update this array
  const baseUrl = import.meta.env.BASE_URL;
  const galleryImages = [
    `${baseUrl}assets/gallery/IMG_0021.jpg`,
    `${baseUrl}assets/gallery/IMG_0022.jpg`,
    `${baseUrl}assets/gallery/IMG_0023.jpg`,
    `${baseUrl}assets/gallery/IMG_0024.jpg`,
    `${baseUrl}assets/gallery/IMG_0025.jpg`,
    `${baseUrl}assets/gallery/IMG_0026.jpg`,
    `${baseUrl}assets/gallery/IMG_0027.jpg`,
    `${baseUrl}assets/gallery/IMG_0028.jpg`,
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-24 bg-brand-accent text-brand-dark">
      <div className="container">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.6em] text-xs text-brand-dark/60">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[0.2em] mt-4">
            Garami Jiu Jitsu
          </h2>
          <div className="section-divider mt-6" />
          <p className="mt-6 text-brand-dark/70 max-w-2xl mx-auto">
            See our students in action, training sessions, competitions, and community events
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((imageSrc, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openModal(imageSrc)}
            >
              <img
                src={imageSrc}
                alt={`Garami Jiu Jitsu Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  // Hide broken images
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-brand-green transition-colors z-10"
              aria-label="Close gallery"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Gallery view"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

