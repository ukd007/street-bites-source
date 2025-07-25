import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock } from "lucide-react";
import tomatoesImg from "@/assets/tomatoes.jpg";
import lettuceImg from "@/assets/lettuce.jpg";
import carrotsImg from "@/assets/carrots.jpg";

const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 3.99,
    unit: "kg",
    supplier: "Green Valley Farms",
    rating: 4.8,
    reviews: 142,
    image: tomatoesImg,
    location: "2.3 km away",
    harvestDate: "2 days ago",
    inStock: true,
    discount: 15
  },
  {
    id: 2,
    name: "Fresh Lettuce",
    price: 2.50,
    unit: "head",
    supplier: "Sunrise Agriculture",
    rating: 4.6,
    reviews: 89,
    image: lettuceImg,
    location: "1.8 km away",
    harvestDate: "1 day ago",
    inStock: true,
    discount: 0
  },
  {
    id: 3,
    name: "Baby Carrots",
    price: 4.25,
    unit: "kg",
    supplier: "Mountain View Farm",
    rating: 4.9,
    reviews: 203,
    image: carrotsImg,
    location: "3.1 km away",
    harvestDate: "3 days ago",
    inStock: true,
    discount: 10
  },
  {
    id: 4,
    name: "Organic Tomatoes",
    price: 3.99,
    unit: "kg",
    supplier: "Garden Fresh Co.",
    rating: 4.7,
    reviews: 156,
    image: tomatoesImg,
    location: "2.8 km away",
    harvestDate: "1 day ago",
    inStock: false,
    discount: 0
  },
  {
    id: 5,
    name: "Iceberg Lettuce",
    price: 2.75,
    unit: "head",
    supplier: "Fresh Fields",
    rating: 4.5,
    reviews: 98,
    image: lettuceImg,
    location: "1.5 km away",
    harvestDate: "2 days ago",
    inStock: true,
    discount: 5
  },
  {
    id: 6,
    name: "Rainbow Carrots",
    price: 5.50,
    unit: "kg",
    supplier: "Organic Roots",
    rating: 4.8,
    reviews: 187,
    image: carrotsImg,
    location: "4.2 km away",
    harvestDate: "1 day ago",
    inStock: true,
    discount: 20
  }
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Fresh Produce</h2>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-border rounded-lg bg-background">
            <option>Sort by: Nearest</option>
            <option>Sort by: Price Low to High</option>
            <option>Sort by: Price High to Low</option>
            <option>Sort by: Rating</option>
            <option>Sort by: Newest</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-farm transition-shadow border-border/50">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {product.discount > 0 && (
                <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground">
                  {product.discount}% OFF
                </Badge>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive">Out of Stock</Badge>
                </div>
              )}
            </div>
            
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="text-right">
                  <div className="font-bold text-lg">
                    ${product.price}
                    <span className="text-sm text-muted-foreground">/{product.unit}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-3">{product.supplier}</p>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span>{product.rating}</span>
                  <span>({product.reviews})</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{product.location}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
                <Clock className="w-4 h-4" />
                <span>Harvested {product.harvestDate}</span>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  disabled={!product.inStock}
                >
                  View Details
                </Button>
                <Button 
                  className="flex-1"
                  disabled={!product.inStock}
                >
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>
    </div>
  );
};

export default ProductGrid;