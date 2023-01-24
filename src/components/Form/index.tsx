import { SubmitHandler, useController, useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "./Input";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import { checkContent } from "../../utils/checkContent";


interface FormProps {
  handleSetUserName: (value: string) => void;
  handleSetMonth: (value: string) => void;
  handleSetYear: (value: string) => void;
  handleSetSecretCode: (value: string) => void;
  handleSetCardNumber: (value: string) => void;
  handleOpenModal: () => void;
}




const schema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  cardNumber: yup.string().max(16, 'Max  16').required('Número obrigatório'),
  mouth: yup.string().max(2, 'Max 2').required('Mês'),
  year: yup.string().max(2, 'Max 2').required('Ano'),
  code: yup.string().max(3, 'Max  3').required('Code'),

})


export function Form({ handleSetMonth, handleSetUserName, handleSetYear, handleSetSecretCode, handleSetCardNumber, handleOpenModal }: FormProps) {

  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState,
  } = useForm({ resolver: yupResolver(schema) });
  const { errors } = formState;

  handleSetUserName(checkContent(watch('name'), 'name'))
  handleSetMonth(checkContent(watch('mouth'), 'month'))
  handleSetYear(checkContent(watch('year'), 'year'))
  handleSetSecretCode(checkContent(watch('code'), 'secretCode'))
  handleSetCardNumber(watch('cardNumber'))


  const onSubmit: SubmitHandler<any> = async (data) => {
    setIsSubmitting(true)
    setTimeout(() => {
      handleOpenModal()
      setIsSubmitting(false)
      console.log(data)
    }, 3000)
  }



  return (
    <form className="max-w-sm max-h-96 max-sm:mt-auto" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="cardholder name"
        placeholder="e.g. Jane Appleseed"
        {...register('name')}
        error={errors?.name}
      />
      <Input
        label="card number"
        placeholder="e.g. 156151611111"
        {...register('cardNumber')}
        error={errors?.cardNumber}
      />

      <div className="flex flex-row items-center justify-between min-w-full gap-1">
        <div className="w-2/12">
          <Input

            label="exp. date"
            placeholder="MM"
            {...register('mouth')}
            error={errors?.mouth}
          />
        </div>
        <div className="w-2/12 max-sm:mx-4">
          <Input

            label="(MM/YY)"
            placeholder="YY"
            {...register('year')}
            error={errors?.year}
          />
        </div>
        <div>
          <Input
            label="cvc"
            placeholder="e.g. 123"
            {...register('code')}
            error={errors?.code}
          />
        </div>
      </div>

      <Button
        disabled={isSubmitting}
        isSubmitting={isSubmitting}
        title="Confirm"
        type="submit"
      />

    </form>
  )
}