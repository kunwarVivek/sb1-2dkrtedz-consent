import { BarChart3, Users, FileText, ArrowUp } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', consents: 400 },
  { name: 'Feb', consents: 300 },
  { name: 'Mar', consents: 600 },
  { name: 'Apr', consents: 800 },
  { name: 'May', consents: 700 },
  { name: 'Jun', consents: 900 },
];

const stats = [
  {
    name: 'Total Consents',
    value: '8,450',
    change: '+12.5%',
    icon: FileText,
  },
  {
    name: 'Active Users',
    value: '2,420',
    change: '+18.2%',
    icon: Users,
  },
  {
    name: 'Conversion Rate',
    value: '86.3%',
    change: '+4.1%',
    icon: BarChart3,
  },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Monitor your consent management metrics and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="rounded-lg border bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
              <div className="rounded-full bg-blue-50 p-3">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <ArrowUp className="mr-1 h-4 w-4" />
              {stat.change}
              <span className="ml-2 text-gray-600">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Consent Collection Trends
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Monthly consent collection statistics
          </p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="consents" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}