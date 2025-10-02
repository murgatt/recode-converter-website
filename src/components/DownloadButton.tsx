import { DownloadIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/DropdownMenu';

type DownloadButtonProps = {
  downloadUrl: string | string[];
};

export const DownloadButton = ({ downloadUrl }: DownloadButtonProps) => {
  if (typeof downloadUrl === 'string') {
    return (
      <Button asChild>
        <a href={downloadUrl}>
          <DownloadIcon size="16" /> Download
        </a>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <DownloadIcon size="16" /> Download
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <a href={downloadUrl[0]}>Mac (Apple Silicon)</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={downloadUrl[1]}>Mac (Intel)</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
