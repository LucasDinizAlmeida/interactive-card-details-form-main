import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "./Input";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface SubmitFormData {
  name: string;
  cardNumber: string;
  mouth: string;
  year: string;
  code: string;
}

const schema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  cardNumber: yup.string().max(16, 'Max  16').required('Número obrigatório'),
  mouth: yup.string().max(2, 'Max 2').required('Mês'),
  year: yup.string().max(2, 'Max 2').required('Ano'),
  code: yup.string().max(3, 'Max  3').required('Code'),

})

const formValidations = {
  name: {
    required: 'Nome obrigatório',
    maxLength: {
      value: 20,
      message: 'Máximo 20 caracteres'
    }
  },
  cardNumber: {
    required: 'Número obrigatório',
    maxLength: {
      value: 16,
      message: 'Máximo 16 caracteres'
    }
  },
  mouth: {
    required: 'Mês',
    maxLength: {
      value: 2,
      message: 'Máximo 2 caracteres'
    }
  },
  year: {
    required: 'Ano',
    maxLength: {
      value: 2,
      message: 'Máximo 2 caracteres'
    }
  },
  code: {
    required: 'code',
    maxLength: {
      value: 3,
      message: 'Máximo 3 caracteres'
    }
  },
}

export function Form() {

  const {
    register,
    handleSubmit,
    reset,
    formState,
    setError,
    trigger,
  } = useForm({ resolver: yupResolver(schema) });
  const { errors } = formState;

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data)
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
        title="Confirm"
        type="submit"
      />

    </form>
  )
}