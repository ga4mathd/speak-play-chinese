import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <>
      <main className="min-h-screen bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/" className="text-primary text-sm hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground">
              Last updated: December 31, 2024
            </p>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using our website and purchasing our products, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">2. Products and Services</h2>
              <p>
                LinguaBook sells interactive educational books designed for children. All products are subject to availability. We reserve the right to discontinue any product at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">3. Pricing and Payment</h2>
              <p>
                All prices are listed in USD and are subject to change without notice. Payment must be made in full at the time of purchase. We accept major credit cards and other payment methods as displayed at checkout.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">4. Intellectual Property</h2>
              <p>
                All content, including but not limited to text, graphics, logos, images, audio, and software, is the property of LinguaBook and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">5. Limitation of Liability</h2>
              <p>
                LinguaBook shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our products or services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">6. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
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

export default TermsOfService;
