import { useState } from 'react';
import { OrganizationDetails } from './steps/organization-details';
import { SubscriptionPlan } from './steps/subscription-plan';
import { PaymentDetails } from './steps/payment-details';
import { Card } from '@/components/ui/card';

const steps = [
  { id: 'org', title: 'Organization', component: OrganizationDetails },
  { id: 'plan', title: 'Subscription', component: SubscriptionPlan },
  { id: 'payment', title: 'Payment', component: PaymentDetails },
];

export function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const Step = steps[currentStep].component;

  return (
    <div className="mx-auto max-w-4xl py-12">
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex-1 ${
                index !== steps.length - 1
                  ? 'after:content-[""] after:border-t after:border-gray-300 after:mt-4 after:mx-4'
                  : ''
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`rounded-full h-8 w-8 flex items-center justify-center ${
                    index <= currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">
                  {step.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Step />
    </div>
  );
}