import { useConsentVersions } from '../hooks/useConsentVersions';
import { Button } from '@/components/ui/button';
import { Clock, Git } from 'lucide-react';

export function VersionControl({ templateId }: { templateId: string }) {
  const { versions, currentVersion, switchVersion, publishVersion } = useConsentVersions(templateId);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Version History</h3>
        <Button onClick={() => publishVersion(currentVersion)}>
          Publish Version
        </Button>
      </div>

      <div className="space-y-2">
        {versions.map((version) => (
          <div
            key={version.id}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-gray-500" />
              <div>
                <p className="font-medium">Version {version.number}</p>
                <p className="text-sm text-gray-500">
                  {new Date(version.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={() => switchVersion(version.id)}
              disabled={version.id === currentVersion}
            >
              Switch to Version
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}