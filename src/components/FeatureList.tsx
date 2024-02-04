import { Feature } from './Feature';
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

export const FeatureList = () => {
  return (
    <section className="max-w-5xl w-full sm:px-4 md:px-9 pt-4 pb-16">
      <h3 className="mb-4 w-full title-h3">Features</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Feature icon={<AudioLinesIcon size="20" />}>Convert audio codecs</Feature>
        <Feature icon={<SubtitlesIcon size="20" />}>Convert subtitle</Feature>
        <Feature icon={<FileStackIcon size="20" />}>Convert multiple files at the same time</Feature>
        <Feature icon={<FileCogIcon size="20" />}>Conversion settings</Feature>
        <Feature icon={<FilePenLineIcon size="20" />}>View, edit and remove streams</Feature>
        <Feature icon={<SunMoonIcon size="20" />}>Light & dark themes</Feature>
        <Feature icon={<BellIcon size="20" />}>Conversion notification</Feature>
        <Feature icon={<SettingsIcon size="20" />}>Application settings</Feature>
        <Feature icon={<TerminalIcon size="20" />}>Display spawned FFmpeg command</Feature>
      </ul>
    </section>
  );
};
