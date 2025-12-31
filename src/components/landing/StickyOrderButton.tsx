import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StickyOrderButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg z-50 lg:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground line-through">$199</p>
          <p className="text-2xl font-bold text-accent font-display">$149</p>
        </div>
        <Link to="/order" className="flex-1">
          <Button 
            size="lg" 
            className="gradient-cta text-primary-foreground font-bold rounded-xl shadow-cta w-full"
          >
            ORDER NOW
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StickyOrderButton;
