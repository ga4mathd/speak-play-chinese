import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground/80 py-10 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-display text-lg font-bold text-primary-foreground mb-3">
              LinguaBook
            </h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              The interactive trilingual book helping children learn Mandarin, English, and Cantonese through play.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-primary-foreground transition-colors">Order Now</Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary-foreground transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-primary-foreground transition-colors">Refund Policy</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-primary-foreground transition-colors">Shipping Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@linguabook.com" className="hover:text-primary-foreground transition-colors">
                  support@linguabook.com
                </a>
              </li>
              <li className="text-primary-foreground/60">
                Mon - Fri, 9am - 5pm PST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {currentYear} LinguaBook. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-primary-foreground/50">
            <span>🔒 Secure Checkout</span>
            <span>📦 Free US Shipping</span>
            <span>↩️ 30-Day Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
