import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Palette, Image } from 'lucide-react';
import { ConsentContent } from '../types';

interface StyleEditorProps {
  content: ConsentContent;
  onUpdate: (content: ConsentContent) => void;
}

export function StyleEditor({ content, onUpdate }: StyleEditorProps) {
  const { register, handleSubmit } = useForm({
    defaultValues: content.customization
  });

  return (
    <div className="space-y-6 rounded-lg border bg-white p-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-gray-500">Customize the look and feel of your consent form</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Logo URL</label>
          <div className="mt-1 flex items-center gap-2">
            <Input {...register('logo')} placeholder="https://example.com/logo.png" />
            <Button variant="outline" size="sm">
              <Image className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Primary Color</label>
          <div className="mt-1 flex items-center gap-2">
            <Input {...register('primaryColor')} type="color" className="h-10 w-20" />
            <Input {...register('primaryColor')} placeholder="#000000" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Font Family</label>
          <select
            {...register('fontFamily')}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="system-ui">System Default</option>
            <option value="inter">Inter</option>
            <option value="roboto">Roboto</option>
            <option value="open-sans">Open Sans</option>
          </select>
        </div>
      </div>

      <Button onClick={handleSubmit((data) => onUpdate({ ...content, customization: data }))}>
        Save Appearance
      </Button>
    </div>
  );
}