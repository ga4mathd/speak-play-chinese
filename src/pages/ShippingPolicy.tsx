import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const ShippingPolicy = () => {
  return (
    <>
      <main className="min-h-screen bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/" className="text-primary text-sm hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Shipping Policy
          </h1>

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground">
              Last updated: December 31, 2024
            </p>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">Free US Shipping</h2>
              <p>
                We offer free standard shipping on all orders within the United States. No minimum purchase required!
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">Delivery Time</h2>
              <p>
                Standard shipping typically takes 14-20 business days from the date of order confirmation. Delivery times may vary depending on your location and any unforeseen circumstances.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">Order Processing</h2>
              <p>
                Orders are processed within 1-2 business days after payment confirmation. You will receive a shipping confirmation email with tracking information once your order has been dispatched.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">Shipping Regions</h2>
              <p>Currently, we only ship to addresses within the United States, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>All 50 states</li>
                <li>Washington D.C.</li>
                <li>US territories (may have extended delivery times)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">Tracking Your Order</h2>
              <p>
                Once your order ships, you will receive an email with a tracking number. You can use this number to track your package through our shipping partner's website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">Lost or Delayed Packages</h2>
              <p>
                If your package appears to be lost or significantly delayed, please contact us at{" "}
                <a href="mailto:support@linguabook.com" className="text-primary hover:underline">
                  support@linguabook.com
                </a>{" "}
                with your order number, and we will work with our shipping partner to resolve the issue.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">Contact Us</h2>
              <p>
                If you have any questions about shipping, please contact us at{" "}
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

export default ShippingPolicy;
