import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <main className="min-h-screen bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/" className="text-primary text-sm hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground">
              Last updated: December 31, 2024
            </p>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, including your name, email address, shipping address, and payment information when you make a purchase.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our products and services</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website, processing payments, and delivering products.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. Payment processing is handled securely through Stripe, and we do not store your credit card information on our servers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">5. Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience. These cookies help us understand how you use our website and improve our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at{" "}
                <a href="mailto:support@linguabook.com" className="text-primary hover:underline">
                  support@linguabook.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:support@linguabook.com" className="text-primary hover:underline">
                  support@linguabook.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
