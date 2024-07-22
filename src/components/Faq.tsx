import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';

export const Faq = () => {
  return (
    <section className="max-w-5xl w-full sm:px-4 md:px-9 pt-4 pb-16">
      <h3 className="w-full title-h3">FAQ</h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="platform">
          <AccordionTrigger>On which platform can I install Recode Converter?</AccordionTrigger>
          <AccordionContent>The supported OS are Windows, macOS and Linux.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="ffmpeg">
          <AccordionTrigger>Do i need to install FFmpeg?</AccordionTrigger>
          <AccordionContent>No, no longer since version 2.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="codecs">
          <AccordionTrigger>What are the supported audio codecs?</AccordionTrigger>
          <AccordionContent>
            Currently the supported audio codecs are: AAC, AC3, EAC3 and Opus. Want new codecs to be supported? Feel
            free to request it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="subtitle">
          <AccordionTrigger>What are the supported subtitle format?</AccordionTrigger>
          <AccordionContent>
            Only ASS and SRT, the most common subtitle formats. You can request new subtitle format to be supported too.
            But keep in mind that only text based subtitle can be converted.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="bug">
          <AccordionTrigger>What should I do if I find a bug or if I have a suggestion?</AccordionTrigger>
          <AccordionContent>
            Don&apos;t be shy and open an issue on{' '}
            <a className="link" href="https://github.com/murgatt/recode-converter/issues/new/choose" target="_blank">
              GitHub
            </a>{' '}
            to let me know what is not working or to suggest a new feature. If you are a developer you can also
            contribute by proposing changes with a pull request.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="developer">
          <AccordionTrigger>I&apos;m a developer and I want to help, can I contribute?</AccordionTrigger>
          <AccordionContent>
            Of course! Help is always welcome. Recode Converter is completely open source. More details can be found on
            the{' '}
            <a className="link" href="https://github.com/murgatt/recode-converter#contributing" target="_blank">
              GitHub repository
            </a>
            .
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="privacy">
          <AccordionTrigger>Do you collect any personal information?</AccordionTrigger>
          <AccordionContent>
            No! Recode Converter app does not collect any personal information at all.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="warning">
          <AccordionTrigger>Why do I see a warning message when I try to install / run the app?</AccordionTrigger>
          <AccordionContent>
            Unfortunately, Recode Converter is not signed for now as certificates costs money. This is why your OS warns
            you of the potential risks of installing an unsigned app (OS warnings can be easily bypassed:{' '}
            <a
              className="link"
              href="https://disable-gatekeeper.github.io/#disabling-gatekeeper-for-one-application-only"
              target="_blank"
            >
              Mac
            </a>
            {', '}
            <a className="link" href="/bypass-windows-message.jpg" target="_blank">
              Windows
            </a>
            ). But don&apos;t worry, installing Recode Converter is completely safe if you download it from here or the{' '}
            <a className="link" href="https://github.com/murgatt/recode-converter" target="_blank">
              GitHub repository
            </a>
            .
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
