import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

interface InputProps {
  placeholder: string;
  name: string;
  label: string;
  error?: FieldErrors<FieldValues>;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, name, error = null, placeholder, ...rest },
  ref
) => {

  return (
    <>
      <label
        className="text-greyCustom-800 font-bold text-sm uppercase whitespace-nowrap"
      >
        {label}
      </label>
      <input
        id={name}
        ref={ref}
        name={name}
        placeholder={placeholder}
        className="w-full py-2 px-3 rounded-md border-greyCustom-300 border-2 mt-1 mb-2 sm:mt-2 sm:mb-5"
        {...rest}
      />
      {
        error &&
        <span className="text-sm text-red-600 block -mt-5">
          {error.message}
        </span>
      }
    </>
  )
}

export const Input = forwardRef(InputBase)