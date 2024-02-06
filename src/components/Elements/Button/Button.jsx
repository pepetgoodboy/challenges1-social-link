/* eslint-disable react/prop-types */
const Button = (props) => {
    const {
      children,
      variant = "bg-Grey",
      onClick = () => {},
      type = "button",
    } = props;
    return (
      <button
        className={`h-7 px-16 font-inter text-[9px] font-medium rounded-md ${variant} text-White`}

        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;