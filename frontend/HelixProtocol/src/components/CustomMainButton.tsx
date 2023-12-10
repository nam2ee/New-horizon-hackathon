const CustomMainButton = ({ btnType, title, handleClick, styles }: any) => {
  return (
    <button
      type={btnType}
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center p-0.5 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 ${styles}`}
    >
      <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
        {title}
      </span>
    </button>
  );
};

export default CustomMainButton;
