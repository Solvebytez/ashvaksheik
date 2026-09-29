"use client";

export type CheckboxOption = {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
  description?: string;
  checked?: boolean;
};

type checkboxOptionsProps = {
  checkboxOptions: CheckboxOption[];
  value: string[];
  legend?: string;
  onChangeSelect: (value: string[]) => void;
};

const CheckboxList = ({
  checkboxOptions,
  value,
  legend = "Preferred contact method",
  onChangeSelect,
}: checkboxOptionsProps) => {
  const handleCheckboxChange = (
    option: CheckboxOption,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      onChangeSelect([...value, option.value]);
    } else {
      onChangeSelect(value.filter((item) => item !== option.value));
    }
  };

  return (
    <fieldset className="mt-3 grid gap-2">
      <legend className="sr-only">{legend}</legend>
      {checkboxOptions.map((option) => {
        const checked = value.includes(option.value);
        return (
          <label
            key={option.id}
            htmlFor={option.id}
            className={`flex min-h-11 cursor-pointer items-center gap-3 border px-4 text-sm ${
              checked ? "border-white bg-white text-black" : "border-white/25 text-white"
            } ${option.disabled ? "cursor-not-allowed opacity-40" : ""}`}
          >
            <input
              id={option.id}
              type="checkbox"
              value={option.value}
              checked={checked}
              onChange={(event) => handleCheckboxChange(option, event)}
              disabled={option.disabled}
              className="h-4 w-4 shrink-0"
            />
            {option.label}
          </label>
        );
      })}
    </fieldset>
  );
};

export default CheckboxList;
