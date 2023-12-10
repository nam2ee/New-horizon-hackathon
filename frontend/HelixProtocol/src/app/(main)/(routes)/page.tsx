'use client';
import Check from '@/components/icons/check';
import Uncheck from '@/components/icons/uncheck';
import { dummydata } from '@/data/dummydata';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import SheetItem from './components/Sheet';
import { useState } from 'react';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [choose, setChoose] = useState<number | undefined>();
  const formatNumberWithCommas = (number: number): string => {
    return number.toLocaleString();
  };

  return (
    <section className='flex flex-col justify-center h-full'>
      <div className='h-10 w-full -mb-3 flex items-center p-8 rounded-lg justify-between font-bold text-slate-500'>
        <div className='flex items-center ml-20'>
          <span>Name</span>
        </div>
        <div className='flex items-center gap-40'>
          <div className='-mr-14'>Hardcap</div>
          <div>WL Stage</div>
          <span className='mr-3'>Status</span>

          <div className='w-[150px] justify-start'>Total Raised</div>

          <div className='w-[150px] justify-start'>Your Allocation</div>
        </div>
      </div>

      <div className='flex flex-col gap-2 '>
        {dummydata.map((item, index) => (
          <Sheet key={index}>
            <SheetTrigger asChild onClick={() => setChoose(index)}>
              <div
                className={`${
                  index === choose
                    ? 'bg-white  border-2 border-blue-600'
                    : 'bg-[#d7e1e9]'
                }  h-20 w-full flex items-center p-8 rounded-lg  justify-between`}
              >
                <div className='flex items-center gap-5'>
                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt='Project Image'
                    className='rounded-full'
                  />

                  <span
                    className={`${
                      index === choose && 'text-blue-600'
                    } font-semibold`}
                  >
                    {item.title}
                  </span>
                </div>
                <div className='flex items-center gap-40'>
                  <div>{item.hardcap ? <Check /> : <Uncheck />}</div>
                  <div>{item.wlstage ? <Check /> : <Uncheck />}</div>
                  <Badge
                    variant={
                      item.status === 'Ended'
                        ? 'destructive'
                        : item.status === 'Ready'
                        ? 'secondary'
                        : 'progress'
                    }
                    className='w-[80px] justify-center rounded-md p-1 text-sm'
                  >
                    {item.status}
                  </Badge>

                  <div className='w-[150px] justify-start'>
                    {formatNumberWithCommas(Number(item.raise))} XRP
                  </div>

                  <div className='w-[150px] justify-start'>{item.allocation} XRP</div>
                </div>
              </div>
            </SheetTrigger>
            <SheetItem />
          </Sheet>
        ))}
      </div>
    </section>
  );
};

export default page;
