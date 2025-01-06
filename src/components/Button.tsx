import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  const baseStyles = "px-4 py-2 rounded font-medium";
  const variantStyles =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "bg-gray-300 text-gray-800 hover:bg-gray-400";

  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
