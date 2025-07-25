import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Award, MapPin } from "lucide-react";

const FeaturedActions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Find Suppliers */}
        <Card className="bg-gradient-to-br from-primary to-farm-dark-green text-primary-foreground border-0 shadow-farm">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Find Suppliers</h3>
            <p className="text-primary-foreground/80 mb-4">
              Connect with verified local farmers and suppliers
            </p>
            <Button variant="secondary" size="lg" className="w-full">
              Explore Suppliers
            </Button>
          </CardContent>
        </Card>

        {/* Best Supplier */}
        <Card className="border-primary/20 shadow-card hover:shadow-farm transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-farm-light-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Best Supplier</h3>
            <p className="text-muted-foreground mb-2">Green Valley Farms</p>
            <div className="flex items-center justify-center space-x-1 mb-4">
              <span className="text-2xl font-bold text-primary">4.9</span>
              <span className="text-muted-foreground">★ (234 reviews)</span>
            </div>
            <Button variant="outline" className="w-full">
              View Profile
            </Button>
          </CardContent>
        </Card>

        {/* Best Rate of the Day */}
        <Card className="border-secondary/50 shadow-card hover:shadow-farm transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Best Rate Today</h3>
            <p className="text-muted-foreground mb-2">Fresh Organic Tomatoes</p>
            <div className="mb-4">
              <span className="text-2xl font-bold text-secondary-foreground">$2.50</span>
              <span className="text-muted-foreground">/kg</span>
              <span className="text-sm text-green-600 ml-2">↓ 15% off</span>
            </div>
            <Button variant="secondary" className="w-full">
              Buy Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedActions;