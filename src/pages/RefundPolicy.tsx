import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <>
      <main className="min-h-screen bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/" className="text-primary text-sm hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Refund Policy
          </h1>

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground">
              Last updated: December 31, 2024
            </p>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">30-Day Money-Back Guarantee</h2>
              <p>
                We stand behind the quality of our products. If you are not completely satisfied with your purchase, you may return it within 30 days of delivery for a full refund.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">Return Conditions</h2>
              <p>To be eligible for a refund:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>The item must be in its original condition</li>
                <li>The item must be in its original packaging</li>
                <li>You must have proof of purchase (order confirmation email)</li>
                <li>The return must be initiated within 30 days of delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">How to Request a Refund</h2>
              <p>To initiate a return, please:</p>
              <ol className="list-decimal pl-6 mt-2 space-y-1">
                <li>Email us at <a href="mailto:support@linguabook.com" className="text-primary hover:underline">support@linguabook.com</a> with your order number</li>
                <li>Include the reason for your return</li>
                <li>We will provide you with return shipping instructions</li>
                <li>Once we receive and inspect the returned item, we will process your refund</li>
              </ol>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">Refund Processing</h2>
              <p>
                Refunds will be processed within 5-7 business days after we receive the returned item. The refund will be credited to the original payment method used for the purchase.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">Damaged or Defective Items</h2>
              <p>
                If you receive a damaged or defective item, please contact us immediately at{" "}
                <a href="mailto:support@linguabook.com" className="text-primary hover:underline">
                  support@linguabook.com
                </a>{" "}
                with photos of the damage. We will arrange for a replacement or full refund at no additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">Contact Us</h2>
              <p>
                If you have any questions about our refund policy, please contact us at{" "}
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

export default RefundPolicy;
