import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { CreditCard, ShoppingCart, Truck } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';

const deliveryFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  address: z.string().min(5, { message: "Please enter a valid address." }),
  city: z.string().min(2, { message: "Please enter a valid city." }),
  zipCode: z.string().min(5, { message: "Please enter a valid ZIP code." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  promoCode: z.string().optional(),
});

const mockCartItems = [
  { id: 1, name: "Margherita Pizza", price: 12.99, quantity: 1 },
  { id: 2, name: "Garlic Bread", price: 4.50, quantity: 2 },
  { id: 3, name: "Soda", price: 1.99, quantity: 2 },
];

const CheckoutPage = () => {
  console.log('CheckoutPage loaded');
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const form = useForm<z.infer<typeof deliveryFormSchema>>({
    resolver: zodResolver(deliveryFormSchema),
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      zipCode: "",
      phone: "",
      promoCode: "",
    },
  });
  
  const subtotal = mockCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 5.00;
  const taxes = subtotal * 0.08; // 8% tax
  const total = subtotal + deliveryFee + taxes;

  function onSubmit(values: z.infer<typeof deliveryFormSchema>) {
    console.log("Order placed with values:", values);
    toast.success("Order Placed!", {
      description: "Your food is on its way. You can track it in your profile.",
    });
    // Redirect to user profile page after a short delay to allow toast to be seen
    setTimeout(() => {
      navigate('/user-profile'); // Path from App.tsx
    }, 1500);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <Header />
      <main className="flex-1 container py-8 md:py-12">
        <div className="flex items-center gap-4 mb-8">
          <ShoppingCart className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
              {/* Delivery Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Truck className="h-5 w-5"/> Delivery Information</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem className="md:col-span-2"><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="address" render={({ field }) => (
                    <FormItem className="md:col-span-2"><FormLabel>Street Address</FormLabel><FormControl><Input placeholder="123 Flavor St" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="city" render={({ field }) => (
                    <FormItem><FormLabel>City</FormLabel><FormControl><Input placeholder="Foodville" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="zipCode" render={({ field }) => (
                    <FormItem><FormLabel>ZIP Code</FormLabel><FormControl><Input placeholder="12345" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                   <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem className="md:col-span-2"><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="(123) 456-7890" {...field} /></FormControl><FormDescription>In case we need to contact you about your order.</FormDescription><FormMessage /></FormItem>
                  )} />
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><CreditCard className="h-5 w-5"/> Payment Method</CardTitle>
                  <CardDescription>Select your payment method and enter details.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mb-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="credit-card" id="r1" />
                      <Label htmlFor="r1">Credit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paypal" id="r2" />
                      <Label htmlFor="r2">PayPal</Label>
                    </div>
                  </RadioGroup>
                  {paymentMethod === 'credit-card' && (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-4"><Label htmlFor="card-number">Card Number</Label><Input id="card-number" placeholder="1234 5678 9101 1121" /></div>
                      <div className="md:col-span-3"><Label htmlFor="expiry">Expiration Date</Label><Input id="expiry" placeholder="MM / YY" /></div>
                      <div><Label htmlFor="cvc">CVC</Label><Input id="cvc" placeholder="123" /></div>
                    </div>
                  )}
                   {paymentMethod === 'paypal' && (
                     <Button className="w-full mt-2 bg-[#0070BA] hover:bg-[#005ea6]">Pay with PayPal</Button>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {mockCartItems.map(item => (
                      <li key={item.id} className="flex justify-between text-sm">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <Separator />
                  <div className="flex items-center gap-2">
                     <FormField control={form.control} name="promoCode" render={({ field }) => (
                        <FormItem className="flex-grow"><FormControl><Input placeholder="Promo Code" {...field} /></FormControl></FormItem>
                      )} />
                    <Button type="button" variant="outline">Apply</Button>
                  </div>
                  <Separator />
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Delivery Fee</span><span>${deliveryFee.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Taxes</span><span>${taxes.toFixed(2)}</span></div>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Placing Order...' : 'Place Order'}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </form>
        </Form>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;