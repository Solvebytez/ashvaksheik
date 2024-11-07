import { STEPS } from "../Form/Step-Form/StepForm"


const Steps = ({currentStep}:{currentStep:number}) => {
  return (
    <ul className="relative flex flex-row gap-x-2 w-full px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-40">
    <li className="shrink basis-0 flex-1 group">
      <div className="min-w-12 min-h-12 w-full inline-flex items-center text-xs align-middle">
        <span className={`size-12 flex justify-center items-center shrink-0 bg-white font-bold text-gray-800 rounded-full text-xl`}>
          1
        </span>
        <div className={`ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden  ${currentStep === STEPS.MAIN_FORM || currentStep === STEPS.LAST_MESSAGE?'bg-opacity-100 text-black':'bg-opacity-15 text-white'}`}></div>
      </div>
     
    </li>

    <li className="shrink basis-0 flex-1 group">
      <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
        <span className={`size-12 flex justify-center items-center shrink-0  bg-white font-bold  rounded-full text-xl ${currentStep === STEPS.MAIN_FORM || currentStep === STEPS.LAST_MESSAGE?'bg-opacity-100 text-black':'bg-opacity-15 text-white'}`}>
          2
        </span>
        <div className={`ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden  ${currentStep === STEPS.LAST_MESSAGE?'bg-opacity-100 text-black':'bg-opacity-15 text-white'}`}></div>
      </div>
     
    </li>

    <li className="shrink basis-0 flex-0 group">
      <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
      <span className={`size-12 flex justify-center items-center shrink-0  bg-white font-bold  rounded-full text-xl ${currentStep === STEPS.LAST_MESSAGE?'bg-opacity-100 text-black':'bg-opacity-15 text-white'}`}>
          3
        </span>
        <div className="ms-2 w-full h-px flex-1 bg-gray-200 bg-opacity-15 group-last:hidden"></div>
      </div>
 
    </li>
  </ul>
  )
}

export default Steps