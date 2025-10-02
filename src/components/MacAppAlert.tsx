import { InfoIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

type MacAppAlertProps = {
  userAgent: string | null;
};

export const MacAppAlert = ({ userAgent }: MacAppAlertProps) => {
  const isAlertVisible = userAgent && (/(mac|os x)/.exec(userAgent.toLowerCase()));

  if (!isAlertVisible) {
    return null;
  }

  return (
    <Alert className="-mt-10 mb-6">
      <InfoIcon size="16" />
      <AlertTitle>Mac users</AlertTitle>
      <AlertDescription>
        <p>
          You will likely need to{' '}
          <a
            className="link"
            href="https://github.com/murgatt/recode-converter/wiki/How-to-open-Recode-Converter-app-on-macOS"
            target="_blank"
          >
            authorize the application
          </a>{' '}
          in System Preferences, especially if you are using the latest version of macOS.
        </p>
      </AlertDescription>
    </Alert>
  );
};
