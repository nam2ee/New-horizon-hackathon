import Image from 'next/image';

export const Logo = ({
  styles,
  name,
  imgUrl,
  isActive,
  disabled,
  handleClick,
}: any) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && 'bg-white'
    } flex justify-center items-center ${
      !disabled && 'cursor-pointer'
    } ${styles}`}
    onClick={handleClick}
  >
    <Image src={imgUrl} alt='fund_logo' className={`w-3/4 h-3/4`} />
  </div>
);
