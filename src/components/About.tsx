import { Home, Heart, Coffee, Sun } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Home,
      title: "Chambres confortables",
      description: "Décorées avec goût dans un style occitan authentique"
    },
    {
      icon: Heart,
      title: "Accueil personnalisé",
      description: "Une ambiance conviviale et chaleureuse"
    },
    {
      icon: Coffee,
      title: "Petit déjeuner maison",
      description: "Servi chaque matin avec des produits locaux"
    },
    {
      icon: Sun,
      title: "Espace extérieur",
      description: "Pour se détendre en toute sérénité"
    }
  ];

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Le confort d'une maison d'hôtes au charme occitan
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Nichée dans une rue paisible du centre historique de Nissan-lez-Enserune, Casa d'Oc vous accueille
            dans un décor où se mêlent authenticité, simplicité et douceur de vivre. Que vous soyez en couple,
            en solo ou entre amis, vous trouverez ici un lieu de repos idéal, loin de l'agitation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-stone-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-sm shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div
              className="h-80 md:h-auto bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800')"
              }}
            ></div>
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-stone-800 mb-6">
                Bienvenue à Casa d'Oc
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                Une chambre d'hôtes chaleureuse située à Nissan-lez-Enserune, entre Béziers et Narbonne,
                au cœur du Languedoc. À seulement 13 km des plages, notre maison est le point de départ
                idéal pour explorer les richesses de la région.
              </p>
              <p className="text-stone-600 leading-relaxed italic">
                "Casa d'Oc, c'est plus qu'une chambre d'hôtes : c'est une parenthèse de calme,
                de saveurs et d'authenticité au cœur du Languedoc."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
