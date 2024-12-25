import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ type = "text", placeholder, name, value, onChange, ...rest }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className="w-full text-gray-500 px-3 py-2.5 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      {...rest}
    />
  );
};

export default Input;
