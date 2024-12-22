import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Shield } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 49,
    features: [
      'Up to 5,000 consents/month',
      '3 team members',
      'Basic analytics',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: 99,
    features: [
      'Up to 25,000 consents/month',
      '10 team members',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 249,
    features: [
      'Unlimited consents',
      'Unlimited team members',
      'Advanced analytics',
      '24/7 support',
      'Custom branding',
      'API access',
      'SSO',
    ],
  },
];

export function SubscriptionPlan() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Choose Your Plan</h2>
        <p className="mt-1 text-sm text-gray-600">Select the plan that best fits your needs</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative p-6 ${
              plan.popular ? 'border-2 border-blue-500' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-block rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>

            <ul className="mb-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.popular ? 'primary' : 'outline'}
              className="w-full"
            >
              Select Plan
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}