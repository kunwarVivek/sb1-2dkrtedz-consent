import { useForm } from 'react-hook-form';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Building2, Users } from 'lucide-react';

export function OrganizationDetails() {
  const { register, handleSubmit } = useForm();

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Organization Details</h2>
        <p className="mt-1 text-sm text-gray-600">Tell us about your organization</p>
      </div>
      
      <form className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Organization Name
            </label>
            <Input
              {...register('orgName')}
              placeholder="Acme Inc."
              className="mt-1"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Industry
            </label>
            <Input
              {...register('industry')}
              placeholder="Technology"
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Size
            </label>
            <select
              {...register('size')}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-1000">201-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <Input
              {...register('website')}
              placeholder="https://example.com"
              className="mt-1"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit">
            Continue
          </Button>
        </div>
      </form>
    </Card>
  );
}