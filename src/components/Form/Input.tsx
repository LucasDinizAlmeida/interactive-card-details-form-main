
interface InputProps {
  placeholder: string;
  name: string;
  label: string;
}

export function Input({ label, name, placeholder }: InputProps) {

  return (
    <>
      <label
        htmlFor={name}
        className="text-greyCustom-800 font-bold text-sm uppercase whitespace-nowrap"
      >
        {label}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        className="w-full py-2 px-3 rounded-md border-greyCustom-300 border-2 mt-1 mb-2 sm:mt-2 sm:mb-5"
      />
    </>
  )
}