const Button = ({ label, icon }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg text-white bg-coral-red leading-none rounded-full border-coral-red">
      {label}
      <img src={icon} alt="arrow-right" className="ml-2 rounded-full h-5 w-5" />
    </button>
  );
};
export default Button;
