import { MapPin, Landmark, Bike, Wine, Waves, Building } from 'lucide-react';

export default function Location() {
  const attractions = [
    {
      icon: Landmark,
      title: "Oppidum d'Ensérune",
      description: "Site archéologique remarquable"
    },
    {
      icon: Bike,
      title: "Canal du Midi",
      description: "Balades le long du canal UNESCO"
    },
    {
      icon: Wine,
      title: "Routes des vins",
      description: "Dégustations dans le Languedoc"
    },
    {
      icon: Waves,
      title: "Plages à 15 min",
      description: "Valras, Sérignan, Vendres"
    },
    {
      icon: Building,
      title: "Villes historiques",
      description: "Béziers, Narbonne, Pézenas"
    },
    {
      icon: MapPin,
      title: "Position centrale",
      description: "Entre mer, vignes et patrimoine"
    }
  ];

  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Une situation idéale pour découvrir l'Occitanie
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Depuis Casa d'Oc, tout est à portée de main pour explorer les merveilles du Languedoc
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {attractions.map((attraction, index) => {
            const Icon = attraction.icon;
            return (
              <div
                key={index}
                className="group bg-stone-50 p-8 rounded-sm hover:bg-amber-50 transition-all duration-300 border border-stone-200 hover:border-amber-300"
              >
                <Icon className="w-12 h-12 text-amber-700 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-stone-800 mb-2">
                  {attraction.title}
                </h3>
                <p className="text-stone-600">
                  {attraction.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-sm shadow-xl p-10 md:p-16 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Pourquoi choisir Casa d'Oc ?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="font-medium">Emplacement central entre mer, vignes et patrimoine</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <p className="font-medium">Atmosphère apaisante typique du Sud</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="font-medium">Accueil attentionné et conseils personnalisés</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-medium">Excellent rapport qualité-prix</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
