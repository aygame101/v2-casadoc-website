import { Home, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Home className="w-7 h-7 text-amber-500" />
              <span>Casa d'Oc</span>
            </div>
            <p className="text-stone-400 mb-4">
              Une parenthèse de calme, de saveurs et d'authenticité au cœur du Languedoc.
            </p>
            <div className="w-16 h-1 bg-amber-600"></div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-stone-400 hover:text-amber-500 transition-colors">
                  La Maison
                </a>
              </li>
              <li>
                <a href="#location" className="text-stone-400 hover:text-amber-500 transition-colors">
                  Situation
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-stone-400 hover:text-amber-500 transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="text-stone-400 hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-stone-400">
                  1 Rue de l'Horloge<br />
                  34440 Nissan-lez-Enserune
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="tel:+33607366328" className="text-stone-400 hover:text-amber-500 transition-colors">
                  +33 6 07 36 63 28
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="mailto:jlrigamonti@gmail.com" className="text-stone-400 hover:text-amber-500 transition-colors break-all">
                  jlrigamonti@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-stone-500">
          <p>&copy; {new Date().getFullYear()} Casa d'Oc - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
