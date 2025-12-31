import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Mail, Loader2 } from "lucide-react";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [isVerifying, setIsVerifying] = useState(!!sessionId);

  useEffect(() => {
    if (sessionId) {
      // Brief delay to allow webhook to process
      const timer = setTimeout(() => {
        setIsVerifying(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [sessionId]);

  if (isVerifying) {
    return (
      <main className="min-h-screen bg-muted py-12 flex items-center">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <div className="bg-card rounded-xl shadow-card p-8">
            <Loader2 className="w-12 h-12 text-primary mx-auto mb-4 animate-spin" />
            <h1 className="font-display text-xl font-bold text-foreground mb-2">
              Processing your order...
            </h1>
            <p className="text-muted-foreground text-sm">
              Please wait while we confirm your payment.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted py-8 lg:py-12 flex items-center">
      <div className="container mx-auto px-4 max-w-lg text-center">
        <div className="bg-card rounded-xl shadow-card p-6 lg:p-8">
          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-9 h-9 text-success-foreground" />
          </div>

          <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
            Order Confirmed!
          </h1>

          <p className="text-muted-foreground mb-6 text-sm lg:text-base">
            Thank you for your purchase! Your child is about to start an amazing language learning journey.
          </p>

          <div className="bg-muted rounded-lg p-4 mb-6 text-left">
            <h2 className="font-display font-semibold text-foreground mb-3 text-sm">What's Next?</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">A confirmation email will be sent to your inbox shortly.</p>
              </div>
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">Your order will arrive in <strong>14-20 business days</strong> with free US shipping.</p>
              </div>
            </div>
          </div>

          <Link to="/">
            <Button variant="outline" size="lg" className="rounded-lg w-full lg:w-auto">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
