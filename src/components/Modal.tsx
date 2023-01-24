import * as Dialog from '@radix-ui/react-dialog';
import { IconComplete } from './SVGs/IconComplete';

export function Modal() {

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed z-20'>
        <Dialog.Content className='fixed bg-white py-6 px-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-full max-w-[280px] shadow-lg shadow-black/40 flex flex-col items-center justify-center'>
          <IconComplete />
          <Dialog.Title className='text-3xl font-normal mt-5'>
            THANK YOU!
          </Dialog.Title>
          <p className='text-sm text-greyCustom-400 mt-3'>We've added your card details</p>

          <Dialog.Close
            className='bg-greyCustom-800 text-white font-semibold mt-7 px-5 h-12 rounded hover:bg-zinc-600 transition-colors'
            type='button'
          >
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}