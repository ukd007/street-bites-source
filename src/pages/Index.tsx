import VendorHeader from "@/components/VendorHeader";
import HeroBanner from "@/components/HeroBanner";
import FeaturedActions from "@/components/FeaturedActions";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <VendorHeader />
      <HeroBanner />
      <FeaturedActions />
      <ProductGrid />
    </div>
  );
};

export default Index;
