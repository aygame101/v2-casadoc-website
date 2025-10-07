export default function Gallery() {
  const images = [
    {
      url: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Chambre confortable"
    },
    {
      url: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Espace détente"
    },
    {
      url: "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Petit déjeuner"
    },
    {
      url: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Jardin"
    },
    {
      url: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Intérieur charme"
    },
    {
      url: "https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Extérieur"
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
