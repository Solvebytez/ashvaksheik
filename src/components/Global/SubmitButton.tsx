
type LinkButtonPropsType = {
  btnText: string;
  title?: string;
  className?: string;
  disabled?: boolean;
};

const SubmitButton = ({
  btnText,
  disabled,
  title,
  className,
}: LinkButtonPropsType) => {
  return (
    <button
      type="submit"
      title={title}
      className={`hover:bg-white hover:text-black border-2 border-white font-bold tracking-[1.5px] text-[14px] uppercase px-11 py-4 ${className}`}
      disabled={disabled}
    >
      {btnText} {disabled && "...."}
    </button>
  );
};

export default SubmitButton;
