import {
  AudioLinesIcon,
  BellIcon,
  FileCogIcon,
  FilePenLineIcon,
  FileStackIcon,
  SettingsIcon,
  SubtitlesIcon,
  SunMoonIcon,
  TerminalIcon,
} from 'lucide-react';
import { Feature } from './Feature';

export const FeatureList = () => {
  return (
    <section className="w-full max-w-5xl pt-4 pb-16 sm:px-4 md:px-9">
      <h3 className="mb-4 w-full title-h3">Features</h3>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Feature icon={<AudioLinesIcon size="20" />}>Convert audio codecs</Feature>
        <Feature icon={<SubtitlesIcon size="20" />} isNew>
          Convert subtitle
        </Feature>
        <Feature icon={<FileStackIcon size="20" />}>Convert multiple files at the same time</Feature>
        <Feature icon={<FileCogIcon size="20" />}>Conversion settings</Feature>
        <Feature icon={<FilePenLineIcon size="20" />}>View, edit and remove streams</Feature>
        <Feature icon={<SunMoonIcon size="20" />}>Light & dark themes</Feature>
        <Feature icon={<BellIcon size="20" />} isNew>
          Conversion notification
        </Feature>
        <Feature icon={<SettingsIcon size="20" />} isNew>
          Application settings
        </Feature>
        <Feature icon={<TerminalIcon size="20" />} isNew>
          Display spawned FFmpeg command
        </Feature>
      </ul>
    </section>
  );
};
