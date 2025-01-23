import clsx from "clsx";
import { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  variant?: "default" | "ghost" | "lg" | "underline";
  className?: string;
  readonly?: boolean;
  onClick?: () => void;
  onChange?: (e: ChangeEvent<any>) => void;
  name?: string;
  fullwidth?: boolean;
  error?: boolean;
  erroText?: string;
}

export const Input = ({
  label,
  value,
  placeholder,
  onChange,
  variant = "default",
  className,
  readonly = false,
  onClick,
  name,
  fullwidth,
  erroText,
  error = false,
}: InputProps) => {
  return (
    <div>
      <span className="text-xs bg-muted px-3 relative top-3 left-4"> {label} </span>
      <input
        className={clsx(
          "text-sm rounded-lg p-3 border max-w-xl w-full placeholder:text-[#8C8C8C] placeholder:text-xs bg-transparent outline-none transition-all",
          {
            "outline-none py-3 px-5 w-full placeholder:text-[#8C8C8C] bg-transparent border-0":
              variant == "ghost",
            "w-full" : fullwidth,
            "p-3 font-semibold text-secondary-foreground focus:border-primary border-2 text-lg" : variant == "lg",
            "border-b rounded-none" : variant == "underline",
            "border-red-500": error == true
          },
          className
        )}
        value={value}
        placeholder={placeholder}
        readOnly={readonly}
        onClick={onClick}
        onChange={onChange}
        name={name}
      />
      <p className="text-xs text-red-500 h-5 relative">{error && erroText}</p>
    </div>
  );
};