import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background-hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-block">
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow leading-tight">
          Casa d'Oc
        </h1>

        <p className="text-xl md:text-3xl mb-4 font-light text-shadow">
          Maison d'hôtes de charme en Occitanie
        </p>

        <div className="flex items-center justify-center gap-2 text-lg md:text-xl mb-12 text-shadow">
          <MapPin className="w-5 h-5 text-amber-400" />
          <p>Un havre de paix entre Béziers, Narbonne et la mer</p>
        </div>

        <a
          href="#contact"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-sm text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Réserver votre séjour
        </a>
      </div>


    </section>
  );
}
