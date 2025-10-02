import { GithubIcon } from 'lucide-react';
import { headers } from 'next/headers';
import Image from 'next/image';
import { LATEST_RELEASE_URL } from '@/app/constants';
import { DownloadButton } from '@/components/DownloadButton';
import { Faq } from '@/components/Faq';
import { FeatureList } from '@/components/FeatureList';
import { MacAppAlert } from '@/components/MacAppAlert';
import { Button } from '@/components/ui/Button';
import { getDownloadUrl } from './get-download-url';

export default async function HomePage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent');
  const downloadUrl = await getDownloadUrl(userAgent);

  return (
    <main className="flex flex-col items-center px-6 pt-16">
      <MacAppAlert userAgent={userAgent} />
      <section className="flex flex-col items-center gap-2 text-center">
        <Image alt="Recode Converter logo" height={200} src="/app-icon.png" width={200} />
        <h1 className="title-h1">Recode Converter</h1>
        <h2 className="title-h2">A simple, modern audio codec converter for video files</h2>
        <div className="my-4 flex flex-wrap items-center justify-center gap-2">
          <DownloadButton downloadUrl={downloadUrl} />
          <Button asChild variant="link">
            <a href={LATEST_RELEASE_URL} target="_blank">
              More download options
            </a>
          </Button>
        </div>
      </section>
      <Image alt="Recode Converter app" className="block dark:hidden" height="700" src="/app-light.png" width="1024" />
      <Image alt="Recode Converter app" className="hidden dark:block" height="700" src="/app-dark.png" width="1024" />
      <FeatureList />
      <Faq />
      <footer className="py-4">
        <Button asChild size="icon" variant="ghost">
          <a aria-label="GitHub" href="https://github.com/murgatt/recode-converter" target="_blank">
            {/* eslint-disable-next-line @typescript-eslint/no-deprecated */}
            <GithubIcon size="16" />
          </a>
        </Button>
      </footer>
    </main>
  );
}
