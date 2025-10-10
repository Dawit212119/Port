import { cn } from "./utils";

interface CardProps {
  className?: string;
  children: any;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn("rounded-2xl glass border border-white/10", className)}>
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
}: {
  className?: string;
  children: any;
}) {
  return (
    <div className={cn("p-5 border-b border-white/10", className)}>
      {children}
    </div>
  );
}

export function CardContent({
  className,
  children,
}: {
  className?: string;
  children: any;
}) {
  return <div className={cn("p-5", className)}>{children}</div>;
}
