import { cn } from '@/utils';
import type { ElementRef, HTMLAttributes, ReactNode } from 'react';

interface CaptionProps extends HTMLAttributes<ElementRef<'p'>> {
    children: ReactNode;
}

function Caption({ children, className, ...props }: CaptionProps) {
    return (
        <p
            className={cn(
                `relative mb-4 inline-block overflow-hidden rounded-full border-0.5  px-4 py-1 font-medium uppercase
                 backdrop-blur-sm after:absolute after:inset-0 after:animate-shiny-badge-slide max-md:text-sm`,
                className,
            )}
            {...props}
        >
            {children}
        </p>
    )
}

interface ParagraphProps extends HTMLAttributes<ElementRef<'p'>> {
    children: ReactNode;
}

function Paragraph({ children, className, ...props }: ParagraphProps) {
    return (
        <p
            className={cn('leading-relaxed text-neutrals-200', className)}
            {...props}
        >
            {children}
        </p>
    );
}

export { Caption, Paragraph };