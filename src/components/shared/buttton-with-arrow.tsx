import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const IconButton: React.FC<ButtonProps> = ({
  text,
  bgColor = "bg-orange-500",
  textColor = "text-white",
  className,
  href,
  onClick,
}) => {
  const Content = (
    <>
      <span>{text}</span>

      <span className="w-9 h-9 flex items-center justify-center right-0 transform translate-x-1/2 absolute border-2 border-white bg-main rounded-full">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0206 0.707124C10.2967 2.43105 7.155 2.43175 5.43036 0.707116L4.72326 0L3.30904 1.41422L4.01615 2.12133C5.27056 3.37574 6.99731 4.00223 8.72478 4.00295L0 12.7279L1.414 14.1422L10.139 5.41716C10.1397 7.14462 10.7662 8.87138 12.0206 10.1258L12.7277 10.8329L14.1419 9.41868L13.4348 8.71157C11.7102 6.98694 11.7109 3.84526 13.4348 2.12134L14.1419 1.41423L12.7277 0L12.0206 0.707124Z"
            fill="#F3F3F4"
          />
        </svg>
      </span>
    </>
  );

  if (href) {
    return (
      <Link to={href}>
        <Button
          className={`flex items-center gap-2 px-6 py-3 relative rounded-full ${bgColor} ${textColor} ${className} hover:opacity-90 transition`}
        >
          {Content}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 relative rounded-full ${bgColor} ${textColor} ${className} hover:opacity-90 transition`}
    >
      {Content}
    </Button>
  );
};

export default IconButton;
