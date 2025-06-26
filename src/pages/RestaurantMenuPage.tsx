import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page-specific Component
import MenuItem from '@/components/MenuItem';

// shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Placeholder data for the restaurant and its menu
const restaurantData = {
  name: "The Golden Olive",
  address: "123 Culinary Lane, Flavor Town",
  rating: 4.7,
  reviewCount: 512,
  cuisine: "Mediterranean",
  deliveryTime: "25-35 min",
  logoUrl: "https://i.pravatar.cc/150?u=goldenolive",
  bannerUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const menu = {
  appetizers: [
    {
      id: "app1",
      name: "Hummus Platter",
      description: "Creamy chickpea hummus served with warm pita bread and fresh vegetables.",
      price: 9.50,
      imageUrl: "https://images.unsplash.com/photo-1625944239923-29c365313155?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hasOptions: false,
    },
    {
      id: "app2",
      name: "Falafel Bites",
      description: "Crispy fried falafel balls served with a side of tahini sauce.",
      price: 7.99,
      imageUrl: "https://images.unsplash.com/photo-1599119156093-c35091741a4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hasOptions: false,
    },
  ],
  mainCourses: [
    {
      id: "main1",
      name: "Chicken Gyro",
      description: "Tender grilled chicken wrapped in a soft pita with lettuce, tomatoes, and tzatziki sauce.",
      price: 14.00,
      imageUrl: "https://images.unsplash.com/photo-1608848943743-323a56a42a0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hasOptions: true,
    },
    {
      id: "main2",
      name: "Lamb Kebab",
      description: "Skewers of marinated lamb grilled to perfection, served with rice and a side salad.",
      price: 18.50,
      imageUrl: "https://images.unsplash.com/photo-1599974511523-6b194858a7e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hasOptions: true,
    },
    {
      id: "main3",
      name: "Moussaka",
      description: "A rich layered casserole of eggplant, minced meat, and creamy béchamel sauce.",
      price: 16.75,
      imageUrl: "https://images.unsplash.com/photo-1628189839443-41a77418721c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hasOptions: false,
    },
  ],
};

const RestaurantMenuPage = () => {
  console.log('RestaurantMenuPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Restaurant Banner */}
        <section className="relative h-48 md:h-64 bg-cover bg-center" style={{ backgroundImage: `url(${restaurantData.bannerUrl})` }}>
          <div className="absolute inset-0 bg-black/50" />
        </section>

        {/* Restaurant Info */}
        <div className="container -mt-16 md:-mt-24 pb-8">
            <Card className="p-6 shadow-xl">
                <CardContent className="flex flex-col md:flex-row items-center gap-6">
                    <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background">
                        <AvatarImage src={restaurantData.logoUrl} alt={restaurantData.name} />
                        <AvatarFallback>{restaurantData.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{restaurantData.name}</h1>
                        <p className="text-muted-foreground mt-2 flex items-center justify-center md:justify-start gap-2">
                           <MapPin className="h-4 w-4" /> {restaurantData.address}
                        </p>
                        <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
                            <Badge variant="secondary" className="text-base">{restaurantData.cuisine}</Badge>
                            <div className="flex items-center gap-1">
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                <span className="font-bold">{restaurantData.rating}</span>
                                <span className="text-sm text-muted-foreground">({restaurantData.reviewCount}+ reviews)</span>
                            </div>
                            <div className="hidden sm:flex items-center gap-1">
                                <Clock className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm">{restaurantData.deliveryTime}</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>


        {/* Menu Section */}
        <section className="container pb-16">
            <div className="max-w-4xl mx-auto">
                {Object.entries(menu).map(([category, items]) => (
                    <div key={category} className="mb-12">
                        <h2 className="text-2xl font-bold tracking-tight mb-4 capitalize">{category}</h2>
                        <Separator />
                        <div>
                            {items.map((item) => (
                                <MenuItem key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantMenuPage;