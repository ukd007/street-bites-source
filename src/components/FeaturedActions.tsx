import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Award, Plus, Star, Clock } from "lucide-react";

const FeaturedActions = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Main Action Section */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-xl"></div>
        <div className="relative bg-gradient-to-br from-primary to-farm-dark-green rounded-3xl p-8 md:p-12 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">Connect & Trade</span>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Find Your Perfect Suppliers
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  Connect with verified local farmers based on location, trust rating, and competitive prices
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Explore Suppliers
              </Button>
            </div>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                Post Requirements
              </Button>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <Clock className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-sm font-medium">Real-time</div>
                  <div className="text-xs text-white/80">Matching</div>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <Star className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-sm font-medium">Verified</div>
                  <div className="text-xs text-white/80">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Best Supplier */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-farm-light-green/30 group">
          <CardContent className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-farm-dark-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">This Month</div>
                <div className="text-xs text-muted-foreground">Top Rated</div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-primary">Best Supplier</h3>
            <p className="text-lg font-semibold mb-2">Green Valley Farms</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-primary">4.9</span>
              <span className="text-muted-foreground">(234 reviews)</span>
            </div>
            
            <Button variant="outline" className="w-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              View Profile
            </Button>
          </CardContent>
        </Card>

        {/* Best Rate of the Day */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-secondary/10 to-secondary/30 group">
          <CardContent className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Today's</div>
                <div className="text-xs text-muted-foreground">Best Deal</div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">Best Rate Today</h3>
            <p className="text-lg font-semibold mb-2">Fresh Organic Tomatoes</p>
            
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-bold text-secondary-foreground">$2.50</span>
              <span className="text-muted-foreground">/kg</span>
              <div className="ml-auto">
                <span className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  ↓ 15% off
                </span>
              </div>
            </div>
            
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold transition-all duration-300 hover:scale-105">
              Buy Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedActions;