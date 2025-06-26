import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-2 items-start">
             <Link to="/" className="flex items-center gap-2 mb-2">
                <UtensilsCrossed className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">FlavorFlow</span>
            </Link>
            <p className="text-sm text-muted-foreground">Your favorite food, delivered.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Company</h4>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Support</Link>
            <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link>
          </div>
           <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Legal</h4>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} FlavorFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;