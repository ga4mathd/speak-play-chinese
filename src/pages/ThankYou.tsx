import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Mail } from "lucide-react";

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-muted py-12 flex items-center">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="bg-card rounded-3xl shadow-card p-8 md:p-12">
          <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-success-foreground" />
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Order Confirmed! 🎉
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your purchase! Your child is about to start an amazing language learning journey.
          </p>

          <div className="bg-muted rounded-2xl p-6 mb-8 text-left">
            <h2 className="font-display font-bold text-foreground mb-4">What's Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">A confirmation email will be sent to your inbox shortly.</p>
              </div>
              <div className="flex items-start gap-3">
                <Package className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">Your order will arrive in <strong>14-20 business days</strong> with free US shipping.</p>
              </div>
            </div>
          </div>

          <Link to="/">
            <Button variant="outline" size="lg" className="rounded-xl">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
