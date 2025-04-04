import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { DownloadIcon, GithubIcon } from 'lucide-react';
import { headers } from 'next/headers';
import { Faq } from '@/components/Faq';
import { getDownloadUrl } from './get-download-url';
import { FeatureList } from '@/components/FeatureList';
import { LATEST_RELEASE_URL } from '@/app/constants';
import { MacAppAlert } from '@/components/MacAppAlert';
import { DownloadButton } from '@/components/DownloadButton';

export default async function HomePage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent');
  const downloadUrl = await getDownloadUrl(userAgent);

  return (
    <main className="flex flex-col items-center px-6 pt-16">
      <MacAppAlert userAgent={userAgent} />
      <section className="flex flex-col items-center gap-2 text-center">
        <Image src="/app-icon.png" alt="Recode Converter logo" width={200} height={200} />
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
      <Image src="/app-light.png" alt="Recode Converter app" className="block dark:hidden" width="1024" height="700" />
      <Image src="/app-dark.png" alt="Recode Converter app" className="hidden dark:block" width="1024" height="700" />
      <FeatureList />
      <Faq />
      <footer className="py-4">
        <Button asChild size="icon" variant="ghost">
          <a aria-label="GitHub" href="https://github.com/murgatt/recode-converter" target="_blank">
            <GithubIcon size="16" />
          </a>
        </Button>
      </footer>
    </main>
  );
}
