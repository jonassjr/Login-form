const Button = ({ text, className, children }) => {
  return (
    <button
      className={`h-[60px]
      rounded-md shadow-xl transition-all ease-in-out duration-500 ${className}`}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
