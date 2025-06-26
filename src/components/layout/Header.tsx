import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UtensilsCrossed, ShoppingCart, User, Search } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <UtensilsCrossed className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline-block">FlavorFlow</span>
          </Link>
        </div>

        <div className="flex-1 flex justify-center px-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for restaurants or dishes..."
              className="w-full pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/checkout">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Open Cart</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/user-profile">
              <User className="h-5 w-5" />
              <span className="sr-only">User Profile</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;