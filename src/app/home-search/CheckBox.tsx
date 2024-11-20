'use client'

export type CheckboxOption = {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
  description?: string;
  checked?: boolean;
};


type checkboxOptionsProps={
  checkboxOptions: CheckboxOption[];
  value: string[];
  onChangeSelect:(value:string[]) => void;
}

const CheckboxList = ({checkboxOptions,value,onChangeSelect}:checkboxOptionsProps) => {
    // const [checkedValues, setCheckedValues] = useState<CheckboxOption[]>([]);
console.log("communicationMethodValue",value)
  const handleCheckboxChange = (option:CheckboxOption, event: React.ChangeEvent<HTMLInputElement>) => {

    if (event.target.checked) {
      onChangeSelect([...value, option.value]);
    } else {
      onChangeSelect(value.filter((v) => v !== option.value));
    }
  };

 
  return (
    <fieldset>
      <legend className="sr-only">Checkbox variants</legend>
      {checkboxOptions.map((option) => (
        <div key={option.id} className="flex items-center mb-4 mt-3">
          <input
            id={option.id}
            type="checkbox"
            value={option.value}
            checked={value.includes(option.value)}
            onChange={(e)=>handleCheckboxChange(option,e)}
            disabled={option.disabled}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={option.id}
            className={`ms-2 text-sm font-medium ${
              option.disabled ? 'text-gray-400 dark:text-gray-500' : 'text-gray-900 dark:text-gray-300'
            }`}
          >
            {option.label}
          </label>
          {option.description && (
            <p id={`${option.id}-text`} className="ms-2 text-xs font-normal text-gray-500 dark:text-gray-400">
              {option.description}
            </p>
          )}
        </div>
      ))}
    </fieldset>
  );
};

export default CheckboxList;
