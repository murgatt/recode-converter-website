import React from 'react';
import { Badge } from '@/components/ui/Badge';

type FeatureProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
};

export const Feature = ({ children, icon }: FeatureProps) => {
  return (
    <li className="flex flex-col items-start gap-2">
      <span className="flex items-center gap-2 paragraph">
        <span className="shrink-0">{icon}</span>
        {children}
      </span>
    </li>
  );
};
