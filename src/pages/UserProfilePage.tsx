import React from 'react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OrderTracker from '@/components/OrderTracker';

// shadcn/ui Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Lucide Icons
import { User, MapPin, CreditCard, Package } from 'lucide-react';

// Placeholder data for past orders
const pastOrders = [
  {
    id: 'FLW-98765',
    date: '2024-08-15',
    total: '$45.50',
    restaurant: 'The Grand Pizzeria',
    status: 'Delivered' as const,
    items: ['1x Margherita Pizza', '1x Garlic Bread']
  },
  {
    id: 'FLW-98766',
    date: '2024-08-20',
    total: '$22.00',
    restaurant: 'Sushi Central',
    status: 'In the Kitchen' as const,
    items: ['1x California Roll', '1x Miso Soup']
  },
    {
    id: 'FLW-98767',
    date: '2024-08-21',
    total: '$18.75',
    restaurant: 'Burger Hub',
    status: 'Order Placed' as const,
    items: ['1x Classic Cheeseburger', '1x Fries']
  }
];

const UserProfilePage = () => {
    console.log('UserProfilePage loaded');

    return (
        <div className="flex flex-col min-h-screen bg-gray-50/50">
            <Header />

            <main className="flex-grow container mx-auto py-8 px-4">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
                    <p className="text-muted-foreground">Manage your orders, profile, and payment settings.</p>
                </div>

                <Tabs defaultValue="orders" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                        <TabsTrigger value="orders"><Package className="w-4 h-4 mr-2" />My Orders</TabsTrigger>
                        <TabsTrigger value="profile"><User className="w-4 h-4 mr-2" />Profile</TabsTrigger>
                        <TabsTrigger value="addresses"><MapPin className="w-4 h-4 mr-2" />Addresses</TabsTrigger>
                        <TabsTrigger value="payment"><CreditCard className="w-4 h-4 mr-2" />Payment</TabsTrigger>
                    </TabsList>

                    {/* My Orders Tab */}
                    <TabsContent value="orders">
                        <Card>
                            <CardHeader>
                                <CardTitle>Order History</CardTitle>
                                <CardDescription>View your past and current orders.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    {pastOrders.map((order) => (
                                        <AccordionItem value={order.id} key={order.id}>
                                            <AccordionTrigger>
                                                <div className="flex justify-between w-full pr-4 text-sm">
                                                    <span>Order #{order.id}</span>
                                                    <span className="text-muted-foreground hidden sm:inline">{order.date}</span>
                                                    <span>{order.total}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="p-4 bg-muted/20">
                                                <div className="mb-4">
                                                    <h4 className="font-semibold">{order.restaurant}</h4>
                                                    <p className="text-sm text-muted-foreground">{order.items.join(', ')}</p>
                                                </div>
                                                <OrderTracker currentStatus={order.status} />
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Profile Tab */}
                    <TabsContent value="profile">
                        <Card>
                            <CardHeader>
                                <CardTitle>Profile Information</CardTitle>
                                <CardDescription>Update your personal details here.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" defaultValue="Alex Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" defaultValue="alex.doe@example.com" />
                                </div>
                                <Button>Save Changes</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Addresses Tab */}
                    <TabsContent value="addresses">
                        <Card>
                            <CardHeader>
                                <CardTitle>Saved Addresses</CardTitle>
                                <CardDescription>Manage your delivery addresses.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 border rounded-md flex justify-between items-center">
                                    <div>
                                        <p className="font-medium">Home</p>
                                        <p className="text-sm text-muted-foreground">123 Market St, San Francisco, CA 94103</p>
                                    </div>
                                    <Button variant="outline" size="sm">Edit</Button>
                                </div>
                                <div className="p-4 border rounded-md flex justify-between items-center">
                                    <div>
                                        <p className="font-medium">Work</p>
                                        <p className="text-sm text-muted-foreground">456 Tech Ave, Mountain View, CA 94043</p>
                                    </div>
                                    <Button variant="outline" size="sm">Edit</Button>
                                </div>
                                <Button>Add New Address</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Payment Tab */}
                    <TabsContent value="payment">
                        <Card>
                            <CardHeader>
                                <CardTitle>Payment Methods</CardTitle>
                                <CardDescription>Manage your saved payment options.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 border rounded-md flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <CreditCard className="w-8 h-8 text-muted-foreground" />
                                        <div>
                                            <p className="font-medium">Visa ending in 1234</p>
                                            <p className="text-sm text-muted-foreground">Expires 12/2026</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">Remove</Button>
                                </div>
                                <Button>Add New Payment Method</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                </Tabs>
            </main>

            <Footer />
        </div>
    );
};

export default UserProfilePage;