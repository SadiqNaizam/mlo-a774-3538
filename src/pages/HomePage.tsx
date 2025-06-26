import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page Components
import CuisineCategoryFilter from '@/components/CuisineCategoryFilter';
import RestaurantCard from '@/components/RestaurantCard';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Icons
import { Search } from 'lucide-react';

// Placeholder data for featured restaurants
const featuredRestaurants = [
  {
    id: 1,
    name: 'The Golden Spoon',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop',
    rating: 4.7,
    cuisineTypes: ['Italian', 'Pasta', 'Pizza'],
    deliveryTime: 25,
  },
  {
    id: 2,
    name: 'Sushi Palace',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop',
    rating: 4.9,
    cuisineTypes: ['Japanese', 'Sushi', 'Asian'],
    deliveryTime: 30,
  },
  {
    id: 3,
    name: 'Burger Bliss',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop',
    rating: 4.5,
    cuisineTypes: ['American', 'Burgers', 'Fries'],
    deliveryTime: 20,
  },
  {
    id: 4,
    name: 'Taco Town',
    imageUrl: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2071&auto=format&fit=crop',
    rating: 4.6,
    cuisineTypes: ['Mexican', 'Tacos', 'Burritos'],
    deliveryTime: 25,
  },
];


const HomePage: React.FC = () => {
  console.log('HomePage loaded');
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to the restaurant listing page with the search query
      // This route is defined in App.tsx
      navigate(`/restaurant-listing?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center py-24 md:py-32" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
          <div className="relative container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              Your next meal, delivered.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Discover local favorites and get them delivered to your door fast.
            </p>
            <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto">
              <div className="relative">
                <Input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Find a restaurant or a dish"
                  className="h-14 pl-5 pr-28 text-lg text-black rounded-full"
                />
                <Button type="submit" size="lg" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </form>
          </div>
        </section>
        
        {/* Cuisine Category Filter Section */}
        <CuisineCategoryFilter />

        {/* Featured Restaurants Section */}
        <section className="bg-gray-50 dark:bg-gray-900/50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Featured Restaurants
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredRestaurants.map((restaurant) => (
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
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;