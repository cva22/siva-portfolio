import { cn } from '@/utils';
import type { ElementRef, HTMLAttributes, ReactNode } from 'react';

interface CaptionProps extends HTMLAttributes<ElementRef<'p'>> {
    children: ReactNode;
}

function Caption({ children, className, ...props }: CaptionProps) {
    return (
        <p
            className={cn(
                `relative mb-4 inline-block overflow-hidden rounded-full border-0.5 border-primary/30 bg-primary/10 px-4 py-1 font-medium uppercase 
                text-primary backdrop-blur-sm after:absolute after:inset-0 after:animate-shiny-badge-slide after:bg-primary/10 max-md:text-sm`,
                className,
            )}
            {...props}
        >
            {children}
        </p>
    )
}

export { Caption };