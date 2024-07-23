import { InfoIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

type MacAppAlertProps = {
  userAgent: string | null;
};

export const MacAppAlert = ({ userAgent }: MacAppAlertProps) => {
  const isAlertVisible = userAgent && userAgent.toLowerCase().match(/(mac|os x)/);

  if (!isAlertVisible) {
    return null;
  }

  return (
    <Alert className="-mt-10 mb-6">
      <InfoIcon size="16" />
      <AlertTitle>Mac users update</AlertTitle>
      <AlertDescription>
        The issue preventing app launch on Mac is now fixed in the{' '}
        <a className="link" href="https://github.com/murgatt/recode-converter/releases/tag/v2.0.7" target="_blank">
          latest update
        </a>
        .
      </AlertDescription>
    </Alert>
  );
};
