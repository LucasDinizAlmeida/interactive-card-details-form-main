import { Button } from "../Button";
import { Input } from "./Input";

export function Form() {

  return (
    <form className="max-w-sm max-h-96 max-sm:mt-auto">
      <Input
        label="cardholder name"
        name="name"
        placeholder="e.g. Jane Appleseed"
      />
      <Input
        label="card number"
        name="cardNumber"
        placeholder="e.g. 156151611111"
      />

      <div className="flex flex-row items-center justify-between min-w-full gap-1">
        <div className="w-2/12">
          <Input
            label="exp. date"
            name="month"
            placeholder="MM"
          />
        </div>
        <div className="w-2/12 max-sm:mx-4">
          <Input
            label="(MM/YY)"
            name="day"
            placeholder="YY"
          />
        </div>
        <div>
          <Input
            label="cvc"
            name="code"
            placeholder="e.g. 123"
          />
        </div>
      </div>

      <Button
        title="Confirm"
        type="submit"
      />

    </form>
  )
}