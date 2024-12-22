import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Split, BarChart2 } from 'lucide-react';

interface ABTest {
  id: string;
  name: string;
  variants: {
    id: string;
    name: string;
    weight: number;
    templateId: string;
  }[];
  status: 'draft' | 'running' | 'completed';
  startDate?: string;
  endDate?: string;
}

export function ABTestingConfig({ templateId }: { templateId: string }) {
  const [tests, setTests] = useState<ABTest[]>([]);
  const { register, handleSubmit } = useForm();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">A/B Testing</h3>
          <p className="text-sm text-gray-500">Test different consent form variants</p>
        </div>
        <Button>
          <Split className="mr-2 h-4 w-4" />
          New Test
        </Button>
      </div>

      <div className="space-y-4">
        {tests.map((test) => (
          <Card key={test.id} className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{test.name}</h4>
                <p className="text-sm text-gray-500">
                  {test.variants.length} variants • Started {test.startDate}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <BarChart2 className="mr-2 h-4 w-4" />
                  View Results
                </Button>
                <Button variant="outline" size="sm">
                  Stop Test
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}