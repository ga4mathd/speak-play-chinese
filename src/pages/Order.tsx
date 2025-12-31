import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Order Placed!",
      description: "Redirecting to confirmation...",
    });
    
    navigate("/thank-you");
  };

  return (
    <main className="min-h-screen bg-muted py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Complete Your Order
          </h1>
          <p className="text-muted-foreground">
            You're one step away from helping your child learn Chinese!
          </p>
        </div>

        <div className="bg-card rounded-3xl shadow-card p-6 md:p-8 mb-6">
          {/* Order Summary */}
          <div className="bg-muted rounded-2xl p-4 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-display font-bold text-foreground">Interactive Trilingual Book</p>
                <p className="text-sm text-muted-foreground">80 topics • 3 languages • Quiz mode</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground line-through">$199</p>
                <p className="text-2xl font-bold text-accent font-display">$149</p>
              </div>
            </div>
            <div className="border-t border-border mt-4 pt-4 flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-xl text-foreground">$149 USD</span>
            </div>
            <p className="text-sm text-success mt-2">✓ Free US Shipping Included</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="John Doe" className="mt-1" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="(555) 123-4567" className="mt-1" />
              </div>
            </div>

            <div>
              <Label htmlFor="street">Street Address</Label>
              <Input id="street" name="street" value={formData.street} onChange={handleChange} required placeholder="123 Main St, Apt 4" className="mt-1" />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" value={formData.city} onChange={handleChange} required placeholder="San Francisco" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" name="state" value={formData.state} onChange={handleChange} required placeholder="CA" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required placeholder="94102" className="mt-1" />
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full gradient-cta text-primary-foreground text-xl py-6 h-auto rounded-2xl shadow-cta">
              {isSubmitting ? "Processing..." : "Pay $149"}
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          🔒 Secure checkout • 30-day money-back guarantee
        </p>
      </div>
    </main>
  );
};

export default Order;
