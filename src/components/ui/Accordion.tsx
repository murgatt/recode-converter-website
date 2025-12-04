'use client';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithRef } from 'react';

const Accordion = AccordionPrimitive.Root;

type AccordionItemProps = ComponentPropsWithRef<typeof AccordionPrimitive.Item>;

const AccordionItem = ({ className, ref, ...props }: AccordionItemProps) => (
  <AccordionPrimitive.Item className={cn('border-b', className)} ref={ref} {...props} />
);
AccordionItem.displayName = 'AccordionItem';

type AccordionTriggerProps = ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>;

const AccordionTrigger = ({ className, children, ref, ...props }: AccordionTriggerProps) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        'flex flex-1 cursor-pointer items-center justify-between py-4 text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

type AccordionContentProps = ComponentPropsWithRef<typeof AccordionPrimitive.Content>;

const AccordionContent = ({ className, children, ref, ...props }: AccordionContentProps) => (
  <AccordionPrimitive.Content
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    ref={ref}
    {...props}
  >
    <div className={cn('pt-0 pb-4', className)}>{children}</div>
  </AccordionPrimitive.Content>
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
