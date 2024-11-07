import React from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

type InputProps<T extends FieldValues> = {
  id: Path<T>; // Use Path<T> instead of keyof T
  type?: 'text' | 'email' | 'password';
  placeholder: string;
  classes?: string;
  defaultValue?: string;
  register: UseFormRegister<T>;
  required?: boolean;
};

const Input = <T extends FieldValues>({
  id,
  type = 'text',
  placeholder,
  classes = '',
  defaultValue,
  register,
  required=true,
}: InputProps<T>) => {
  return (      
      <input
        {...register(id, { required })}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className={`w-full bg-transparent border-b-2 border-gray-600 text-white focus:border-white focus:outline-none leading-[4rem] focus:bg-transparent ${classes}`}
        defaultValue={defaultValue}
      />  
  );
};

export default Input;
