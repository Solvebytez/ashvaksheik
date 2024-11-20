export type RedioOption = {
    id: string;
    value: string;
    label: string;
    disabled?: boolean;
  };

  export type RadioOptonProps = {
    allRadioOptions: RedioOption[];
    value?: string;
    onChangeRadio: (value: string) =>void
  }

const RadioOptions = ({allRadioOptions,value,...props}:RadioOptonProps) => {
    console.log(value)
  return (
    <fieldset>       
        {allRadioOptions.map((option, index) => (
          <div key={option.id} className={`flex items-center mt-3 ${index !== allRadioOptions.length - 1 ? 'mb-4' : ''}`}>
            <input
              id={option.id}
              type="radio"
              value={option.value}
              checked={value === option.value}
            onChange={() => props.onChangeRadio(option.value)}
              disabled={option.disabled}
            //   {...register('countries', { required: true })}
              className={`w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600 ${
                option.disabled ? 'border-gray-200' : ''
              }`}             
            />
            <label 
              htmlFor={option.id} 
              className={`block ms-2 text-sm font-medium ${
                option.disabled 
                  ? 'text-gray-300 dark:text-gray-700' 
                  : 'text-gray-900 dark:text-gray-300'
              }`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </fieldset>
  )
}

export default RadioOptions