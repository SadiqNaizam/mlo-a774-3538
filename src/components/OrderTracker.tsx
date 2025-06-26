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
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Order Progress</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between w-full">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isActive = index === currentStepIndex;

            return (
              <React.Fragment key={step.name}>
                <div className="flex flex-col items-center text-center gap-2">
                  <div
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300",
                      isCompleted ? "bg-green-100 text-green-600" :
                      isActive ? "bg-blue-100 text-blue-600 animate-pulse" :
                      "bg-gray-100 text-gray-400"
                    )}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  <p
                    className={cn(
                      "text-xs sm:text-sm font-medium transition-colors duration-300",
                      isCompleted ? "text-green-700" :
                      isActive ? "text-blue-700" :
                      "text-gray-500"
                    )}
                  >
                    {step.name}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-1 mx-2 sm:mx-4 rounded",
                      isCompleted ? "bg-green-500" : "bg-gray-200"
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