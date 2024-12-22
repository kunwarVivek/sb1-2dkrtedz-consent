import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, MoreVertical, Edit2, Trash2 } from 'lucide-react';

const forms = [
  {
    id: 1,
    name: 'Marketing Preferences',
    description: 'Collect user preferences for marketing communications',
    status: 'Active',
    lastModified: '2024-02-20',
    submissions: 1234,
  },
  {
    id: 2,
    name: 'Cookie Consent',
    description: 'Website cookie consent collection form',
    status: 'Active',
    lastModified: '2024-02-19',
    submissions: 8567,
  },
  {
    id: 3,
    name: 'Data Processing Agreement',
    description: 'User agreement for data processing activities',
    status: 'Draft',
    lastModified: '2024-02-18',
    submissions: 0,
  },
];

export function ConsentForms() {
  const [selectedForm, setSelectedForm] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Consent Forms</h1>
          <p className="mt-2 text-sm text-gray-600">
            Manage and customize your consent collection forms
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Form
        </Button>
      </div>

      <div className="rounded-lg border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Form Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Last Modified
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Submissions
                </th>
                <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {forms.map((form) => (
                <tr key={form.id}>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="font-medium text-gray-900">{form.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">
                      {form.description}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        form.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {form.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                    {form.lastModified}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                    {form.submissions.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                    <div className="flex items-center justify-end space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}