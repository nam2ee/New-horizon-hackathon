const CustomButton = ({ btnType, title, handleClick, styles }: any) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue hover:opacity-70 font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
