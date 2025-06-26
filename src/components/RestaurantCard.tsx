import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface RestaurantCardProps {
  id: string | number;
  name: string;
  imageUrl: string;
  rating: number;
  cuisineTypes: string[];
  deliveryTime: number; // in minutes
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  imageUrl,
  rating,
  cuisineTypes,
  deliveryTime,
}) => {
  console.log(`RestaurantCard loaded for: ${name}`);

  // Note: We are linking to a generic menu page and passing the restaurant ID in the state.
  // The RestaurantMenuPage would then use this ID to fetch the correct menu data.
  return (
    <Link 
      to="/restaurant-menu" 
      state={{ restaurantId: id }} 
      className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`View menu for ${name}`}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group h-full flex flex-col">
        <CardHeader className="p-0 border-b">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl || 'https://via.placeholder.com/400x225'}
              alt={`Image of ${name}`}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="mb-2 text-lg font-bold tracking-tight">{name}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Star className="w-4 h-4 mr-1.5 fill-yellow-400 text-yellow-500" />
            <span className="font-semibold text-foreground">{rating.toFixed(1)}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {cuisineTypes.slice(0, 3).map((cuisine) => (
              <Badge key={cuisine} variant="secondary" className="font-normal">
                {cuisine}
              </Badge>
            ))}
            {cuisineTypes.length > 3 && (
                <Badge variant="outline">+{cuisineTypes.length - 3}</Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4 bg-secondary/20">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            <span>{deliveryTime} - {deliveryTime + 10} min</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RestaurantCard;