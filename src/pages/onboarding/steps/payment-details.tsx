import { useForm } from 'react-hook-form';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CreditCard, Lock } from 'lucide-react';

export function PaymentDetails() {
  const { register, handleSubmit } = useForm();

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Payment Details</h2>
        <p className="mt-1 text-sm text-gray-600">Enter your payment information</p>
      </div>

      <form className="space-y-6">
        <div className="grid gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <div className="relative mt-1">
              <Input
                {...register('cardNumber')}
                placeholder="4242 4242 4242 4242"
                className="pl-10"
              />
              <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Expiration Date
              </label>
              <div className="mt-1 grid grid-cols-2 gap-3">
                <Input {...register('expMonth')} placeholder="MM" />
                <Input {...register('expYear')} placeholder="YY" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                CVC
              </label>
              <div className="relative mt-1">
                <Input
                  {...register('cvc')}
                  placeholder="123"
                  className="pl-10"
                />
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit">
            Complete Setup
          </Button>
        </div>
      </form>
    </Card>
  );
}