import { Button } from "@/components/ui/button";
import heroBannerImg from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative h-96 overflow-hidden">
      <img 
        src={heroBannerImg} 
        alt="Farm to vendor marketplace"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">
              Fresh from Farm to Your Business
            </h1>
            <p className="text-xl mb-6 text-white/90">
              Connect directly with local farmers and suppliers. Get the freshest produce at the best prices with verified quality and delivery tracking.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Shopping
              </Button>
              <Button size="lg" variant="secondary">
                Find Suppliers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;