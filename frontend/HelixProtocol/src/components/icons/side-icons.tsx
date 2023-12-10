import Image from 'next/image';

export const Icon = ({
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
    {!isActive ? (
      <Image src={imgUrl} alt='fund_logo' className='w-1/2 h-1/2' />
    ) : (
      <Image
        src={imgUrl}
        alt='fund_logo'
        className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`}
      />
    )}
  </div>
);
