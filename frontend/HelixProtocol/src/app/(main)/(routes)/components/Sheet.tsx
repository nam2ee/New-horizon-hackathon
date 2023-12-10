import ArrowRight from '@/components/icons/arrow-right';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react';
import Image from 'next/image';
import FundButton from './FundDialog';

const SheetItem = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { open } = useWeb3Modal();

  return (
    <SheetContent className='min-w-[1200px] overflow-y-auto overflow-x-clip'>
      <SheetHeader>
        <SheetTitle className='mt-10 -mr-8'>
          <div className='bg-[#DFE8EF] h-10 rounded-l-lg flex items-center justify-end px-10 text-slate-400 font-medium space-x-10 translate-x-4'>
            <span>Whitelist Stage</span>

            <ArrowRight />
            <span className='text-blue-500 font-semibold'>Public Stage</span>

            <ArrowRight />
            <span>End</span>

            <ArrowRight />
            <span>Claims</span>
          </div>
        </SheetTitle>
      </SheetHeader>
      <section className='bg-white'>
        <div className='grid max-w-screen-xl space-x-6 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div className='mr-auto place-self-center lg:col-span-5'>
            <h1 className='max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
              Penpie Auction
            </h1>
            <p className='max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl '>
              Penpie is a next-generation DeFi product created by Magpie to
              provide Pendle Finance users with yield and veTokenomics boosting
              services. Integrated with Pendle Finance, Penpie focuses on
              locking PENDLE tokens to obtain governance rights and enhanced
              yield benefits within Pendle Finance. Penpie revolutionizes the
              way users can maximize returns on their investments and monetize
              their governance power.
            </p>
          </div>
          <div className='hidden lg:mt-0 lg:col-span-7 lg:flex'>
            <Image src='/mockup.png' width={800} height={500} alt='mockup' />
          </div>
        </div>
        <section className='flex flex-col gap-2 px-4 text-slate-400'>
          <span>
            Disclaimer: The Initial DEX Offering (IDO) of $PNP on Camelot
            Exchange is a high-risk investment activity. The project is still in
            an early stage, and there&apos;s a chance of capital loss. Investors
            are strongly advised to do their due diligence and invest only what
            they are willing to lose. $PNP is not intended to constitute
            securities in any jurisdiction. This announcement does not
            constitute a prospectus or offer document of any sort and is not
            intended to constitute an offer of securities or a solicitation for
            investment in securities in any jurisdiction. Please note that
            trading cryptocurrencies involves significant risk and can result in
            the loss of your invested capital. You should ensure that you fully
            understand the risk involved and take into consideration your level
            of experience, investment objectives, and seek independent financial
            advice if necessary.
          </span>

          <span>
            Please ensure you understand the public sale mechanics and terms
            before proceeding, deposited amounts CANNOT be withdrawn.Initially,
            the auction will start with a fully diluted valuation (FDV) of $1M,
            fixing a $0.1 floor price for $PNP, and will increase after the
            first $200k have been raised. Once those 200k are reached,
            we&apos;ll enter a price-discovery phase, where the token price will
            continuously increase at every purchase. No matter when you
            participate, everyone will get $PNP tokens at the same final price.
            Your allocation will be made up of 30% $PNP and 70% $rPNP (receipt
            token for $PNP linear vesting over 1y). Please check the Penpie dapp
            page for vested $PNP claims and information.
          </span>
        </section>

        <section className='bg-white dark:bg-gray-900'>
          <div className='py-8 px-4 mx-auto max-w-screen-xl text-center '>
            <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16'>
              <h2 className='mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white'>
                Public sale has ended <br />
                Contributions are now claimable
              </h2>
              <p>
                Token Address : 0x57343e19A5182e1d1a3ab700D4B692B7312587E1 (LIX)
              </p>
            </div>
            <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              <div className='text-center text-gray-500 '>
                <h3 className='mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                  <span className='text-sky-500'>
                    3,300,836 / 4,383,258 XRP
                  </span>
                </h3>
                <p>Total Raised / Hardcap</p>
              </div>
              <div className='text-center text-gray-500 '>
                <h3 className='mb-1 text-2xl  font-semibold tracking-tight text-gray-900 dark:text-white'>
                  <span className='text-sky-500'>$505.6k</span>
                </h3>
                <p>Circ. Marketcap</p>
              </div>
              <div className='text-center text-gray-500 '>
                <h3 className='mb-1 text-2xl  font-semibold tracking-tight text-gray-900 dark:text-white'>
                  <span className='text-sky-500'>$0.389</span>
                </h3>
                <p>$PNP Price</p>
              </div>
              <div className='text-center text-gray-500 '>
                <h3 className='mb-1 text-2xl  font-semibold tracking-tight text-gray-900 dark:text-white'>
                  <span className='text-sky-500'>$3.89M</span>
                </h3>
                <p>FDV</p>
              </div>
            </div>
          </div>
        </section>

        <section className='flex items-center mb-5 justify-center'>
          {address && chainId === 1440002 ? (
            <FundButton address={address} chainId={chainId} />
          ) : (
            <Button
              variant='destructive'
              className='text-md p-5'
              onClick={() => open()}
            >
              Check To Wallet / Network
            </Button>
          )}
        </section>

        <section>
          <div className='py-8 px-4 mx-auto max-w-screen-xl '>
            <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
              <div className='flex flex-col p-6 bg-[#DFE8EF]  max-w-lg text-gray-900 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
                <h3 className='mb-4 text-lg font-semibold'>
                  How price is determined
                </h3>
                <p className='font-light text-gray-500 sm:text-sm '>
                  You can contribute with ETH in exchange for $PNP and $rPNP
                  tokens, which are to be claimed 24h after the end of the sale.
                  The tokens you will receive will have the exact same ETH value
                  than your contribution. <br />
                  600,000 $PNP and 1,400,000 $rPNP (out of a 10,000,000 total
                  supply) will be allocated to the sale. <br />
                  The final price will therefore be:
                </p>
                <div className='flex justify-center items-baseline mt-4'>
                  <span className='text-blue-500 font-semibold '>
                    Total $ raised / 2,000,000
                  </span>
                </div>
              </div>

              <div className='flex flex-col p-6 bg-[#DFE8EF]  max-w-lg text-gray-900 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
                <h3 className='mb-4 text-lg font-semibold'>
                  Three-stages sale
                </h3>
                <p className='font-light text-gray-500 sm:text-sm '>
                  This sale will take place in two different stages. <br />
                  STAGE 1: During the first 12h, only whitelisted addresses can
                  participate with a guaranteed capped allocation.
                  <br />
                  STAGE 2: During the following 12h, only whitelisted addresses
                  can participate, with a 5x higher allocation cap.
                  <br />
                  STAGE 3: Starting June 13th @ 12pm UTC, other participants can
                  purchase the remaining tokens on a first-come, first-served
                  basis. This stage will last for 48 hours.
                </p>
              </div>

              <div className='flex flex-col p-6 bg-[#DFE8EF]  max-w-lg text-gray-900 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
                <h3 className='mb-4 text-lg font-semibold'>Claiming process</h3>
                <p className='font-light text-gray-500 sm:text-sm '>
                  The public sale will last until June 15th @ 12pm UTC.
                  <br />
                  Shortly after (exact date TBA), the purchased tokens will be
                  entirely and directly claimable from this same page, at the
                  exact same time as trading starts.
                  <br />
                  In order to align the long-term objectives of the protocol,
                  70% of the sale will be distributed in $rPNP (receipt token
                  for $PNP linearly vested over 1y), with the remaining 30% in
                  $PNP.
                  <br />
                  Please check the Penpie dapp page for vested $PNP claims and
                  information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <SheetFooter>
        <SheetClose asChild></SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};

export default SheetItem;
