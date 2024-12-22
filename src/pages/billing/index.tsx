import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Download } from 'lucide-react';

const invoices = [
  {
    id: 'INV-001',
    date: '2024-02-01',
    amount: 99,
    status: 'Paid',
  },
  {
    id: 'INV-002',
    date: '2024-03-01',
    amount: 99,
    status: 'Paid',
  },
];

export function Billing() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Billing</h1>
        <p className="mt-2 text-sm text-gray-600">
          Manage your subscription and billing details
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Current Plan
          </h2>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Professional Plan</p>
                <p className="text-sm text-gray-600">$99/month</p>
              </div>
              <Button variant="outline">Change Plan</Button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Next billing date: April 1, 2024
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Payment Method
          </h2>
          <div className="mt-4">
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 text-gray-400" />
              <span className="ml-2">•••• •••• •••• 4242</span>
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm">
                Update Payment Method
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Billing History
        </h2>
        <div className="mt-4">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm font-medium text-gray-500">
                <th className="pb-3">Invoice</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Status</th>
                <th className="pb-3"></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b">
                  <td className="py-4">{invoice.id}</td>
                  <td className="py-4">{invoice.date}</td>
                  <td className="py-4">${invoice.amount}</td>
                  <td className="py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}