import { ButtonHTMLAttributes } from "react";
import { Loading } from "./Loading";

interface ButtonProps extends ButtonHTMLAttributes<any> {
  title: string;
  isSubmitting: boolean
}

export function Button({ title, isSubmitting, ...rest }: ButtonProps) {

  return (
    <button
      {...rest}
      className="w-full disabled:opacity-60 flex items-center justify-center rounded-md py-3 bg-greyCustom-800 text-white text-base"
    >
      {isSubmitting && <Loading />}
      {title}
    </button>
  )
}