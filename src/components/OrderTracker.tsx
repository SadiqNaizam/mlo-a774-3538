import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PackageCheck, ChefHat, Truck, CheckCircle } from 'lucide-react';

type OrderStatus = 'Order Placed' | 'In the Kitchen' | 'Out for Delivery' | 'Delivered';

interface OrderTrackerProps {
  currentStatus: OrderStatus;
}

const steps = [
  { name: 'Order Placed', icon: PackageCheck },
  { name: 'In the Kitchen', icon: ChefHat },
  { name: 'Out for Delivery', icon: Truck },
  { name: 'Delivered', icon: CheckCircle },
] as const; // Use `as const` to infer names as literal types

const OrderTracker: React.FC<OrderTrackerProps> = ({ currentStatus }) => {
  console.log('OrderTracker loaded with status:', currentStatus);

  const currentStepIndex = steps.findIndex(step => step.name === currentStatus);

  return (
    <Card className="w-full bg-transparent shadow-none border-0">
      <CardHeader className="px-0 pt-0 pb-4">
        <CardTitle className="text-base">Order Progress</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex items-start justify-between w-full">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isActive = index === currentStepIndex;

            return (
              <React.Fragment key={step.name}>
                <div className="flex flex-col items-center text-center gap-2 w-20">
                  <div
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300",
                      isCompleted ? "bg-primary/20 text-primary" :
                      isActive ? "bg-primary text-primary-foreground animate-pulse" :
                      "bg-muted text-muted-foreground"
                    )}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  <p
                    className={cn(
                      "text-xs sm:text-sm font-medium transition-colors duration-300 h-10",
                      isCompleted ? "text-foreground" :
                      isActive ? "text-primary font-semibold" :
                      "text-muted-foreground"
                    )}
                  >
                    {step.name}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-1 mt-5.5 mx-2 sm:mx-4 rounded",
                      isCompleted ? "bg-primary" : "bg-muted"
                    )}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderTracker;