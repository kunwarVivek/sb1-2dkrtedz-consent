import { useState } from 'react';
import { useDeploymentConfig } from '../hooks/useDeploymentConfig';
import { Button } from '@/components/ui/button';
import { Code, Copy, Check } from 'lucide-react';

export function SnippetGenerator({ templateId }: { templateId: string }) {
  const [copied, setCopied] = useState(false);
  const { config } = useDeploymentConfig(templateId);

  const snippet = `
<script>
  window.ConsentHub = {
    templateId: "${templateId}",
    config: ${JSON.stringify(config)}
  };
</script>
<script src="https://cdn.consenthub.io/loader.js"></script>
  `.trim();

  const copySnippet = async () => {
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Installation Snippet</h3>
        <Button variant="outline" onClick={copySnippet}>
          {copied ? (
            <Check className="mr-2 h-4 w-4" />
          ) : (
            <Copy className="mr-2 h-4 w-4" />
          )}
          {copied ? 'Copied!' : 'Copy Code'}
        </Button>
      </div>

      <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4">
        <code className="text-sm text-white">{snippet}</code>
      </pre>
    </div>
  );
}