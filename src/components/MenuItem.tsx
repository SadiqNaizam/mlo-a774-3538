import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { PlusCircle } from 'lucide-react';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  hasOptions?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  description,
  price,
  imageUrl = 'https://via.placeholder.com/128', // Default placeholder
  hasOptions = false,
}) => {
  console.log(`MenuItem loaded: ${name}`);

  const handleSimpleAdd = () => {
    toast.success(`${name} added to your order.`);
    console.log(`Added simple item to cart: ${id}`);
  };

  const handleCustomizedAdd = () => {
    // In a real app, this would gather selected options from state
    toast.success(`Customized ${name} added to your order.`);
    console.log(`Added customized item to cart: ${id}`);
    // The dialog will close automatically if the button is in the footer
    // and not of type="button" that prevents form submission.
  };

  const renderButton = () => {
    if (hasOptions) {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto">Customize</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{name}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="space-y-2">
                <Label htmlFor="size-group" className="font-semibold">Size</Label>
                <RadioGroup defaultValue="regular" id="size-group">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="regular" id="r1" />
                    <Label htmlFor="r1">Regular</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="r2" />
                    <Label htmlFor="r2">Large (+$2.00)</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Extras</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="topping1" />
                  <label htmlFor="topping1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Extra Cheese (+$1.00)
                  </label>
                </div>
                 <div className="flex items-center space-x-2">
                  <Checkbox id="topping2" />
                  <label htmlFor="topping2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Bacon (+$1.50)
                  </label>
                </div>
            </div>
            </div>
            <DialogFooter>
              <Button onClick={handleCustomizedAdd} className="w-full">Add to Order</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }

    return (
      <Button onClick={handleSimpleAdd} className="w-full sm:w-auto">
        <PlusCircle className="mr-2 h-4 w-4" /> Add
      </Button>
    );
  };

  return (
    <div className="flex items-start justify-between gap-4 py-6 border-b last:border-b-0">
      <div className="flex-1 cursor-pointer group">
        <h3 className="font-semibold text-lg group-hover:text-primary">{name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
        <p className="text-md font-bold mt-2">${price.toFixed(2)}</p>
      </div>
      <div className="flex flex-col items-end gap-3 ml-4 w-24 sm:w-32">
        {imageUrl && (
            <img 
                src={imageUrl} 
                alt={name} 
                className="w-full h-24 sm:h-32 object-cover rounded-md"
            />
        )}
        {renderButton()}
      </div>
    </div>
  );
};

export default MenuItem;