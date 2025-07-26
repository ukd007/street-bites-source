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
      {/* Search and Filter Section */}
      <div className="mb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center mb-6">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search for vegetables, fruits, suppliers..."
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {/* Distance Filter */}
          <Button variant="secondary" className="whitespace-nowrap">
            <MapPin className="w-4 h-4 mr-2" />
            Within 25km
          </Button>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button variant="default" size="sm" className="rounded-full">All</Button>
          <Button variant="outline" size="sm" className="rounded-full">Vegetables</Button>
          <Button variant="outline" size="sm" className="rounded-full">Fruits</Button>
          <Button variant="outline" size="sm" className="rounded-full">Herbs</Button>
          <Button variant="outline" size="sm" className="rounded-full">Grains</Button>
          <Button variant="outline" size="sm" className="rounded-full">Dairy</Button>
          <Button variant="outline" size="sm" className="rounded-full">Organic</Button>
        </div>
      </div>

      {/* Header with count and sort */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Available Products ({products.length})</h2>
        <select className="px-4 py-2 border border-border rounded-lg bg-background text-sm">
          <option>Sort by: Best Match</option>
          <option>Sort by: Nearest</option>
          <option>Sort by: Price Low to High</option>
          <option>Sort by: Price High to Low</option>
          <option>Sort by: Rating</option>
          <option>Sort by: Newest</option>
        </select>
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-white">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              
              {/* Discount Badge */}
              {product.discount > 0 && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-red-500 text-white font-semibold">
                    -{product.discount}%
                  </Badge>
                </div>
              )}
              
              {/* Quality/Freshness Indicator */}
              <div className="absolute top-2 right-2">
                <Badge className="bg-primary text-primary-foreground font-semibold">
                  {product.rating > 4.7 ? '98%' : product.rating > 4.5 ? '95%' : '92%'}
                </Badge>
              </div>
              
              {/* Out of Stock Overlay */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive" className="text-lg px-4 py-2">Out of Stock</Badge>
                </div>
              )}
            </div>
            
            <CardContent className="p-4 space-y-3">
              {/* Product Name */}
              <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
              
              {/* Supplier */}
              <p className="text-gray-600 text-sm">{product.supplier}</p>
              
              {/* Rating */}
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-sm">{product.rating}</span>
                <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
              </div>
              
              {/* Harvest Info and Distance */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>Harvested {product.harvestDate}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{product.location.replace(' away', '')}</span>
                </div>
              </div>
              
              {/* Price */}
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500">/{product.unit}</span>
                {product.discount > 0 && (
                  <span className="text-sm text-gray-400 line-through">
                    ${(product.price * (1 + product.discount / 100)).toFixed(2)}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;