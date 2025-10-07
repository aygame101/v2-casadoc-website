import { MapPin, Mail, Phone, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Réservez votre séjour
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Que ce soit pour une nuit, un week-end ou des vacances prolongées, Casa d'Oc est l'adresse
            parfaite pour se ressourcer et découvrir les trésors du sud de la France.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-stone-50 p-8 rounded-sm mb-8">
              <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
                <Calendar className="w-7 h-7 text-amber-600" />
                Informations de contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Adresse</h4>
                    <p className="text-stone-600">
                      1 Rue de l'Horloge<br />
                      34440 Nissan-lez-Enserune
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Téléphone</h4>
                    <a
                      href="tel:+33607366328"
                      className="text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      +33 6 07 36 63 28
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Email</h4>
                    <a
                      href="mailto:jlrigamonti@gmail.com"
                      className="text-amber-700 hover:text-amber-800 transition-colors break-all"
                    >
                      jlrigamonti@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-8 rounded-sm text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Distances</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Plages (Valras, Sérignan)</span>
                  <span className="font-semibold">13 km</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Béziers</span>
                  <span className="font-semibold">12 km</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Narbonne</span>
                  <span className="font-semibold">15 km</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Canal du Midi</span>
                  <span className="font-semibold">5 km</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Oppidum d'Ensérune</span>
                  <span className="font-semibold">2 km</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-full">
            <div className="bg-stone-100 rounded-sm overflow-hidden shadow-lg h-full min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.8!2d3.1264!3d43.2889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1f1e5a5a5a5a5%3A0x1234567890abcdef!2s1%20Rue%20de%20l'Horloge%2C%2034440%20Nissan-lez-Ens%C3%A9rune!5e0!3m2!1sfr!2sfr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Casa d'Oc Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
