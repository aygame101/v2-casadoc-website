export default function Gallery() {
  const images = [
    {
      url: "/images/salon.png",
      alt: "Salon"
    },
    {
      url: "/images/lits-simples.png",
      alt: "Chambre avec lits simples"
    },
    {
      url: "/images/lit-double.png",
      alt: "Chambre avec lit double"
    },
    {
      url: "/images/lit.png",
      alt: "Chambre avec lit double"
    },
    {
      url: "/images/sdb1.png",
      alt: "Evier salle de bain"
    },
    {
      url: "/images/sdb2.png",
      alt: "Evier et douche salle de bain"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Découvrez Casa d'Oc
          </h2>
          <p className="text-lg text-stone-600">
            Un aperçu de notre maison d'hôtes et de son ambiance unique
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-sm group h-80 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
