import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RestaurantCard from '@/components/RestaurantCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

// Sample data for restaurant cards
const restaurants = [
  {
    id: 1,
    name: "The Pizza Palace",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800",
    rating: 4.5,
    cuisineTypes: ["Italian", "Pizza", "Fast Food"],
    deliveryTime: 25,
  },
  {
    id: 2,
    name: "Sushi Central",
    imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=800",
    rating: 4.8,
    cuisineTypes: ["Japanese", "Sushi", "Asian"],
    deliveryTime: 35,
  },
  {
    id: 3,
    name: "Burger Barn",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800",
    rating: 4.2,
    cuisineTypes: ["American", "Burgers", "Fries"],
    deliveryTime: 20,
  },
  {
    id: 4,
    name: "Taco Town",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800",
    rating: 4.6,
    cuisineTypes: ["Mexican", "Tacos"],
    deliveryTime: 30,
  },
    {
    id: 5,
    name: "Noodle House",
    imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800",
    rating: 4.7,
    cuisineTypes: ["Asian", "Noodles", "Vietnamese"],
    deliveryTime: 40,
  },
  {
    id: 6,
    name: "Healthy Bites",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800",
    rating: 4.9,
    cuisineTypes: ["Salads", "Healthy", "Wraps"],
    deliveryTime: 15,
  },
];

const RestaurantListingPage = () => {
  console.log('RestaurantListingPage loaded');

  const [priceRange, setPriceRange] = useState([0, 50]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Filters & Sort</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Sort Select */}
                  <div className="space-y-2">
                    <Label htmlFor="sort-by">Sort By</Label>
                    <Select defaultValue="rating">
                      <SelectTrigger id="sort-by" className="w-full">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rating">Rating: High to Low</SelectItem>
                        <SelectItem value="delivery_time">Delivery Time: Fastest</SelectItem>
                        <SelectItem value="price_asc">Price: Low to High</SelectItem>
                        <SelectItem value="price_desc">Price: High to Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range Slider */}
                  <div className="space-y-2">
                    <Label htmlFor="price-range">Price Range</Label>
                    <Slider
                      id="price-range"
                      min={0}
                      max={100}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mt-4"
                    />
                     <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>
                  </div>

                  {/* Checkbox Filters */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="free-delivery" />
                      <Label htmlFor="free-delivery" className="font-normal">
                        Free Delivery
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="open-now" defaultChecked />
                      <Label htmlFor="open-now" className="font-normal">
                        Open Now
                      </Label>
                    </div>
                     <div className="flex items-center space-x-2">
                      <Checkbox id="top-rated" />
                      <Label htmlFor="top-rated" className="font-normal">
                        Top Rated (4.5+)
                      </Label>
                    </div>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </CardContent>
              </Card>
            </aside>

            {/* Restaurant Grid */}
            <section className="lg:col-span-3">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Restaurants Near You</h1>
              <p className="text-muted-foreground mb-6">Showing {restaurants.length} results</p>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {restaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    imageUrl={restaurant.imageUrl}
                    rating={restaurant.rating}
                    cuisineTypes={restaurant.cuisineTypes}
                    deliveryTime={restaurant.deliveryTime}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantListingPage;