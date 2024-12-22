import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useConsentTemplate } from '../hooks/useConsentTemplate';
import { SectionEditor } from './SectionEditor';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function TemplateEditor({ templateId }: { templateId: string }) {
  const { template, updateTemplate } = useConsentTemplate(templateId);
  
  const onDragEnd = (result: any) => {
    // Handle section reordering
  };

  return (
    <div className="space-y-4">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {template?.content.sections.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <SectionEditor section={section} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      
      <Button variant="outline" onClick={() => {/* Add new section */}}>
        <Plus className="mr-2 h-4 w-4" />
        Add Section
      </Button>
    </div>
  );
}