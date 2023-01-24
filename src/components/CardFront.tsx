
import { CardLogo } from "./SVGs/CardLogo";

interface CardFrontProps {
  userName: string;
  month: string;
  year: string;
  cardNumber: string;
}


export function CardFront({ userName, month, year, cardNumber }: CardFrontProps) {

  return (
    <div className="bg-card-front bg-center w-[280px] h-36 lg:w-[416px] lg:h-56 rounded-lg max-sm:absolute max-sm:-bottom-16 max-sm:z-10 xl:ml-36 p-3 lg:p-5 flex flex-col items-start justify-end">
      <div className="mb-auto">
        <CardLogo />
      </div>

      <div className="flex flex-row items-center justify-between w-full text-white text-base lg:text-3xl tracking-wide">
        <span>{cardNumber.slice(0, 4) ? cardNumber.slice(0, 4) : '0000'}</span>
        <span>{cardNumber.slice(4, 8) ? cardNumber.slice(4, 8) : '0000'}</span>
        <span>{cardNumber.slice(8, 12) ? cardNumber.slice(8, 12) : '0000'}</span>
        <span>{cardNumber.slice(12, 16) ? cardNumber.slice(12, 16) : '0000'}</span>
      </div>

      <div className="flex flex-row items-center justify-between w-full text-white text-sm uppercase mt-2 lg:mt-5">
        <span>{userName}</span>
        <span>{`${month}/${year}`}</span>
      </div>
    </div>
  )
}