import { Form } from "./components/Form"
import { CardFront } from "./components/CardFront"
import { CardBack } from "./components/CardBack"


function App() {


  return (
    // <div className="h-screen w-full flex flex-col sm:flex-row">
    //   <div className="bg-linearGradient-700 h-1/3 sm:min-h-full w-full sm:w-1/3">

    //   </div>
    //   <div className="bg-red-600 h-2/3 sm:min-h-full w-full sm:w-2/3">

    //   </div>
    // </div>

    <div className="h-screen w-full flex flex-col sm:flex-row">
      <div className="bg-violet-desktop sm:bg-violet-desktop h-1/3 sm:h-full w-full sm:w-1/3 relative p-2 sm:flex sm:flex-col justify-center sm:items-start">

        <CardFront />
        <CardBack />

      </div>

      <div className="bg-white h-2/3 sm:h-full w-full sm:2/3 flex items-center justify-center p-2">
        <Form />
      </div>
    </div>
  )
}

export default App
