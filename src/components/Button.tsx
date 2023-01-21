import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<any> {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {

  return (
    <button
      {...rest}
      className="w-full flex items-center justify-center rounded-md py-3 bg-greyCustom-800 text-white text-base"
    >
      {title}
    </button>
  )
}