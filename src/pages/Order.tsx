import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Shield, Truck, RotateCcw, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Order = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          customerEmail: formData.email,
          customerName: formData.fullName,
          shippingAddress: {
            line1: formData.street,
            city: formData.city,
            state: formData.state,
            postal_code: formData.zipCode,
            country: "US",
            phone: formData.phone,
          },
        },
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: "Error",
        description: "Failed to create checkout session. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-muted py-6 lg:py-12">
      <div className="container mx-auto px-4 max-w-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-1">
            Complete Your Order
          </h1>
          <p className="text-muted-foreground text-sm">
            You're one step away from helping your child learn Chinese
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-card p-4 lg:p-6 mb-4">
          {/* Order Summary - Compact */}
          <div className="bg-muted rounded-lg p-3 mb-5">
            <div className="flex justify-between items-start gap-3">
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-foreground text-sm">Interactive Trilingual Book</p>
                <p className="text-xs text-muted-foreground">80 topics • 3 languages • Quiz mode</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xs text-muted-foreground line-through">$199</p>
                <p className="text-lg font-bold text-primary font-display">$149</p>
              </div>
            </div>
            <div className="border-t border-border mt-3 pt-3 flex justify-between items-center">
              <span className="font-medium text-sm">Total</span>
              <span className="font-bold text-foreground">$149 USD</span>
            </div>
          </div>

          {/* Form - Compact */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-xs">Full Name</Label>
              <Input 
                id="fullName" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                required 
                placeholder="John Doe" 
                className="mt-1 h-10 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="email" className="text-xs">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="john@example.com" 
                  className="mt-1 h-10 text-sm"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-xs">Phone</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  placeholder="(555) 123-4567" 
                  className="mt-1 h-10 text-sm"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="street" className="text-xs">Street Address</Label>
              <Input 
                id="street" 
                name="street" 
                value={formData.street} 
                onChange={handleChange} 
                required 
                placeholder="123 Main St, Apt 4" 
                className="mt-1 h-10 text-sm"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <Label htmlFor="city" className="text-xs">City</Label>
                <Input 
                  id="city" 
                  name="city" 
                  value={formData.city} 
                  onChange={handleChange} 
                  required 
                  placeholder="San Francisco" 
                  className="mt-1 h-10 text-sm"
                />
              </div>
              <div>
                <Label htmlFor="state" className="text-xs">State</Label>
                <Input 
                  id="state" 
                  name="state" 
                  value={formData.state} 
                  onChange={handleChange} 
                  required 
                  placeholder="CA" 
                  className="mt-1 h-10 text-sm"
                />
              </div>
              <div>
                <Label htmlFor="zipCode" className="text-xs">ZIP</Label>
                <Input 
                  id="zipCode" 
                  name="zipCode" 
                  value={formData.zipCode} 
                  onChange={handleChange} 
                  required 
                  placeholder="94102" 
                  className="mt-1 h-10 text-sm"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full gradient-cta text-primary-foreground text-base py-5 h-auto rounded-lg shadow-cta font-semibold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Redirecting to payment...
                </>
              ) : (
                "Pay $149"
              )}
            </Button>
          </form>
        </div>

        {/* Trust badges - Inline */}
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Truck className="w-3.5 h-3.5" />
            <span>Free Shipping</span>
          </div>
          <div className="flex items-center gap-1">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>30-Day Return</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5" />
            <span>Secure</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Order;
