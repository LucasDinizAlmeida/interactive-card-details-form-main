import { Form } from "./components/Form"
import { CardFront } from "./components/CardFront"
import { CardBack } from "./components/CardBack"
import { useState } from "react"
import * as Dialog from '@radix-ui/react-dialog';
import { Modal } from "./components/Modal";


function App() {

  const [open, setOpen] = useState(false)
  const [userName, setUserName] = useState('JAMES CLARK')
  const [month, setMonth] = useState('00')
  const [year, setYear] = useState('00')
  const [secretCode, setSecretCode] = useState('123')
  const [cardNumber, setCardNumber] = useState('')

  function handleOpenModal() {
    setOpen(true)
  }
  function handleSetUserName(value: string) {
    setUserName(value)
  }
  function handleSetMonth(value: string) {
    setMonth(value)
  }
  function handleSetYear(value: string) {
    setYear(value)
  }
  function handleSetSecretCode(value: string) {
    setSecretCode(value)
  }
  function handleSetCardNumber(value: string) {
    setCardNumber(value)
  }


  return (

    <div className="h-screen w-full flex flex-col sm:flex-row">
      <div className="bg-violet-desktop bg-no-repeat sm:bg-violet-desktop h-1/3 sm:h-full w-full sm:w-1/3 relative p-2 sm:flex sm:flex-col justify-center sm:items-start">

        <CardFront
          userName={userName}
          month={month}
          year={year}
          cardNumber={cardNumber}
        />
        <CardBack
          secretCode={secretCode}
        />

      </div>

      <div className="bg-white h-2/3 sm:h-full w-full sm:2/3 flex items-center justify-center p-2">
        <Form
          handleSetUserName={handleSetUserName}
          handleSetMonth={handleSetMonth}
          handleSetYear={handleSetYear}
          handleSetSecretCode={handleSetSecretCode}
          handleSetCardNumber={handleSetCardNumber}
          handleOpenModal={handleOpenModal}
        />
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Modal />
      </Dialog.Root>
    </div>
  )
}

export default App
