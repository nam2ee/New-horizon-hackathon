'use client';
import { logo, sun } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { navlinks } from '../constants';
import { useRouter } from 'next/navigation';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  useDisconnect,
  useWeb3Modal,
  useWeb3ModalAccount,
} from '@web3modal/ethers5/react';
import ConnectButton from './walletConnector';
import { user } from '../assets';

import { Logo } from './icons/logo';
import { Icon } from './icons/side-icons';

const Sidebar = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState('/');
  const { open } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  const { disconnect } = useDisconnect();

  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
      <Link href='/'>
        {/* <div className='rounded-xl bg-gradient-to-br from-cyan-400 to-blue-400 p-0.5'> */}
        <Logo styles='w-[72px] h-[72px] bg-white shadow-xl' imgUrl={logo} />
        {/* </div> */}
      </Link>

      <div className='flex-1 flex flex-col justify-between items-center bg-white shadow-xl rounded-[10px] w-[76px] py-4 mt-12'>
        <div className='flex flex-col justify-center items-center gap-3'>
          {navlinks.map((link) => (
            <TooltipProvider key={link.name}>
              <Tooltip>
                <TooltipTrigger>
                  <Icon
                    {...link}
                    isActive={isActive}
                    handleClick={() => {
                      if (!link.disabled) {
                        setIsActive(link.name);
                        router.push(link.link);
                      }
                    }}
                  />
                  <TooltipContent>
                    <p>{link.name}</p>
                  </TooltipContent>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        {address ? (
          // <DropdownMenu>
          //   <DropdownMenuTrigger asChild>

          <div
            className={`w-[52px] h-[52px] rounded-full shadow-md bg-white flex justify-center items-center cursor-pointer ${
              chainId !== 1440002
                ? 'bg-gradient-to-br from-red-300 to-rose-300'
                : 'bg-gradient-to-br from-teal-300 to-sky-300'
            }`}
            onClick={() => {
              if (chainId !== 1440002) {
                open({ view: 'Networks' });
              } else {
                open({ view: 'Account' });
                // router.push('/profile');
              }
            }}
          >
            <Image
              src={user}
              alt='user'
              className='w-[90%] h-[90%] rounded-full p-1 object-contain bg-white'
            />
          </div>
        ) : (
          //   </DropdownMenuTrigger>
          //   <DropdownMenuContent className='w-56'>
          //     <DropdownMenuLabel>My Account</DropdownMenuLabel>
          //     <DropdownMenuSeparator />
          //     <DropdownMenuGroup>
          //       <DropdownMenuItem>
          //         <User className='mr-2 h-4 w-4' />
          //         <span>Profile</span>
          //         <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          //       </DropdownMenuItem>
          //       <DropdownMenuItem>
          //         <CreditCard className='mr-2 h-4 w-4' />
          //         <span>Billing</span>
          //         <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          //       </DropdownMenuItem>
          //       <DropdownMenuItem>
          //         <Settings className='mr-2 h-4 w-4' />
          //         <span>Settings</span>
          //         <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          //       </DropdownMenuItem>
          //       <DropdownMenuItem>
          //         <Keyboard className='mr-2 h-4 w-4' />
          //         <span>Keyboard shortcuts</span>
          //         <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          //       </DropdownMenuItem>
          //     </DropdownMenuGroup>
          //     <DropdownMenuSeparator />

          //     <DropdownMenuItem>
          //       <LifeBuoy className='mr-2 h-4 w-4' />
          //       <span>Support</span>
          //     </DropdownMenuItem>

          //     <DropdownMenuSeparator />
          //     <DropdownMenuItem onClick={() => disconnect()}>
          //       <LogOut className='mr-2 h-4 w-4' />
          //       <span>Log out</span>
          //       <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          //     </DropdownMenuItem>
          //   </DropdownMenuContent>
          // </DropdownMenu>
          <ConnectButton />
        )}

        {/* <Icon styles='shadow-secondary' imgUrl={sun} /> */}
      </div>
    </div>
  );
};

export default Sidebar;
