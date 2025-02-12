
const Button = ({ onClick, title }) => {
  return (
    <div
      className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-3 text-sm sm:text-md rounded-full cursor-pointer"
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Button;
