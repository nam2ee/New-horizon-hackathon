'use client';
import { navlinks } from '../constants';
import { logo, menu, search, user } from '../assets';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';
import { useRouter } from 'next/navigation';
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react';
import { useEffect, useState } from 'react';
import CustomMainButton from './CustomMainButton';

const Navbar = () => {

  const { open } = useWeb3Modal();
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const [isActive, setIsActive] = useState('dashboard');
  const router = useRouter();
  return (
    <div className='flex md:flex-row mt-4 flex-col-reverse justify-center items-center mb-[35px] gap-8' >
      <div className=' flex-1 flex py-2 pl-4 pr-2 h-[52px] bg-white rounded-[10px] shadow-md focus:border-2 focus:border-blue-400'>
        <input
          type='text'
          placeholder='Search for projects or funds'
          className='flex w-full  font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-black bg-transparent outline-none'
        />

        <div className='w-[72px] h-full rounded-[10px] bg-[#0189FF] flex justify-center items-center cursor-pointer'>
          <Image
            src={search}
            alt='search'
            className='w-[15px] h-[15px] object-contain'
          />
        </div>
      </div>

      <div className='flex gap-5 items-center align-middle'>
        <CustomMainButton
          btnType='button'
          title={address ? 'Create a Fund' : 'Login'}
          styles={address ? 'bg-green-400' : 'bg-[#1BBEEA]'}
          handleClick={() => {
            if (address) router.push('/ApplyFund');
            else open();
          }}
        />

        {chainId !== 1440002 && address ? (
          <CustomButton
            btnType='button'
            title='Wrong Network'
            styles='bg-red-500'
            handleClick={() => {
              open({ view: 'Networks' });
            }}
          />
        ) : (
          <Image
            src='/ripple.png'
            width={50}
            height={50}
            alt='ripple side chain'
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
