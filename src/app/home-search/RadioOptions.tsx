export type RedioOption = {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
};

export type RadioOptonProps = {
  allRadioOptions: RedioOption[];
  value?: string;
  onChangeRadio: (value: string) => void;
};

const RadioOptions = ({ allRadioOptions, value, ...props }: RadioOptonProps) => {
  return (
    <fieldset className="mt-3 grid gap-2">
      {allRadioOptions.map((option) => (
        <label
          key={option.id}
          htmlFor={option.id}
          className={`flex min-h-11 cursor-pointer items-center gap-3 border px-4 text-sm ${
            value === option.value
              ? "border-white bg-white text-black"
              : "border-white/25 text-white"
          } ${option.disabled ? "cursor-not-allowed opacity-40" : ""}`}
        >
          <input
            id={option.id}
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={() => props.onChangeRadio(option.value)}
            disabled={option.disabled}
            className="h-4 w-4 shrink-0"
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
};

export default RadioOptions;
