import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface FloatingLabelInputProps extends React.ComponentProps<"input"> {
  label: string;
  error?: string;
}

export function FloatingLabelInput({ 
  label, 
  error,
  className,
  value,
  defaultValue,
  ...props 
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const currentValue = value || defaultValue || inputRef.current?.value || '';
    setHasValue(!!currentValue);
  }, [value, defaultValue]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (inputRef.current) {
      setHasValue(!!inputRef.current.value);
    }
  };

  const isFloating = isFocused || hasValue;

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        className={cn(
          "pt-6 pb-2 peer",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        {...props}
      />
      <Label
        className={cn(
          "absolute left-3 transition-all duration-200 pointer-events-none",
          isFloating
            ? "top-1.5 text-xs text-muted-foreground"
            : "top-2.5 text-sm text-muted-foreground",
          error && "text-destructive",
          isFocused && "text-primary"
        )}
      >
        {label}
      </Label>
      {error && (
        <p className="mt-1 text-xs text-destructive">{error}</p>
      )}
    </div>
  );
}

