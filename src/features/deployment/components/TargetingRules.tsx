import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Target, Plus, X } from 'lucide-react';

export function TargetingRules({ config, onUpdate }: any) {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: config.targeting
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Targeting Rules</h3>
        <p className="text-sm text-gray-500">
          Define when and where your consent form appears
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            URL Patterns
          </label>
          <div className="mt-2 space-y-2">
            {watch('urlPatterns', []).map((pattern: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <Input {...register(`urlPatterns.${index}`)} />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {/* Remove pattern */}}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => {/* Add pattern */}}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Pattern
            </Button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Geo-targeting
          </label>
          <div className="mt-2">
            <select
              {...register('regions')}
              className="w-full rounded-md border border-gray-300 p-2"
              multiple
            >
              <option value="EU">European Union</option>
              <option value="US">United States</option>
              <option value="APAC">Asia Pacific</option>
            </select>
          </div>
        </div>
      </div>

      <Button onClick={handleSubmit(onUpdate)}>Save Targeting Rules</Button>
    </div>
  );
}