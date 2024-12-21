import React from "react";

const variantList = {
  primary: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
  success: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
  danger: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "submit" | "reset" | "button";
  variant?: "primary" | "success" | "danger";
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  type = "button",
  variant = "primary",
  children,
  ...props
}) => {
  const variantClasses = variantList[variant];
  const baseClassName =
    "w-full px-4 py-2 font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition";

  return (
    <button
      type={type}
      className={`${baseClassName} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
