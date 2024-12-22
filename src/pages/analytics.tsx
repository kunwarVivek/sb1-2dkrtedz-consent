import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Button } from '@/components/ui/button';

const consentTrends = [
  { date: '2024-01', accepted: 750, declined: 250 },
  { date: '2024-02', accepted: 850, declined: 200 },
  { date: '2024-03', accepted: 900, declined: 180 },
  { date: '2024-04', accepted: 1000, declined: 150 },
];

const conversionData = [
  { name: 'Accepted', value: 85 },
  { name: 'Declined', value: 15 },
];

const COLORS = ['#3b82f6', '#ef4444'];

export function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
          <p className="mt-2 text-sm text-gray-600">
            Analyze consent collection performance and trends
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Last 30 Days</Button>
          <Button variant="outline">Export Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Consent Trends
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={consentTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="accepted"
                  stroke="#3b82f6"
                  name="Accepted"
                />
                <Line
                  type="monotone"
                  dataKey="declined"
                  stroke="#ef4444"
                  name="Declined"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Conversion Rate
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={conversionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name} (${value}%)`}
                >
                  {conversionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Form Performance
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Form Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Submissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Conversion Rate
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  Marketing Preferences
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  1,234
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  1,021
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  82.7%
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  Cookie Consent
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  8,567
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  7,890
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  92.1%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}