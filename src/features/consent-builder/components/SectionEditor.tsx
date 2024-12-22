import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Grip, Globe, Plus, Trash } from 'lucide-react';
import { ConsentSection } from '../types';

interface SectionEditorProps {
  section: ConsentSection;
  onUpdate: (section: ConsentSection) => void;
  onDelete: () => void;
}

export function SectionEditor({ section, onUpdate, onDelete }: SectionEditorProps) {
  const { t, languages, activeLanguage, setLanguage } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-4 rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Grip className="h-5 w-5 text-gray-400" />
          <div>
            <Input
              value={section.title}
              onChange={(e) => onUpdate({ ...section, title: e.target.value })}
              className="font-medium"
              placeholder="Section Title"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
              <Globe className="h-4 w-4" />
              <span className="ml-2">{activeLanguage.toUpperCase()}</span>
            </Button>
            
            {isExpanded && (
              <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                    onClick={() => setLanguage(lang)}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <Button variant="ghost" size="sm" onClick={onDelete}>
            <Trash className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <textarea
          value={section.description}
          onChange={(e) => onUpdate({ ...section, description: e.target.value })}
          className="w-full rounded-md border p-2"
          rows={3}
          placeholder="Section Description"
        />

        <div className="space-y-2">
          {section.options.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <Input
                value={option.label}
                onChange={(e) => {
                  const newOptions = [...section.options];
                  newOptions[index] = { ...option, label: e.target.value };
                  onUpdate({ ...section, options: newOptions });
                }}
                placeholder="Option Label"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  const newOptions = section.options.filter((_, i) => i !== index);
                  onUpdate({ ...section, options: newOptions });
                }}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const newOptions = [...section.options, { id: crypto.randomUUID(), label: '', defaultValue: false }];
              onUpdate({ ...section, options: newOptions });
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Option
          </Button>
        </div>
      </div>
    </div>
  );
}