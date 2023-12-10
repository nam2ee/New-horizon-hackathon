'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { toast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useWeb3ModalProvider } from '@web3modal/ethers5/react';

import { ethers } from 'ethers';
import { contractAddr } from '@/contract/contractAddr';
import { abi } from '@/contract/abi';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
  amount: z.number().min(1, {
    message: 'Username must be at least 1 XRP.',
  }),
});

const FundButton = ({ address, chainId }: any) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: 1,
    },
  });

  const { walletProvider } = useWeb3ModalProvider();

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // console.log(ethers.utils.formatUnits(USDTBalance, 18));
    const finalData = { ...data, address: address, chainId: chainId };
    const apiData = { address: address, ...data };

    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(apiData, null, 2)}</code>
        </pre>
      ),
    });

    if (window.GemWalletApi) {
      // isInstalled 함수 호출
      await window.GemWalletApi.isInstalled()
        .then(async (response: any) => {
          console.log(response.result.isInstalled);
          let reque = await window.GemWalletApi.getAddress();
        })
        .then(async () => {
          let transaction = {
            TransactionType: 'Payment',
            Destination: 'rpw7nEyJ3TA7tjmygwpNgjxfuZZ4VKqdEJ',
            Amount: String(1000000 * finalData.amount),
          };
          console.log(transaction);
          return await window.GemWalletApi.submitTransaction({ transaction });
        })
        .then((response: any) => {
          console.log(response.result.signature);
        });
    }

    toast({
      title: 'Ripple tokens are moving',
      description: 'Ripple Blockchain => EVM Sidechain',
    });

    await fetch(
      'http://ec2-18-220-178-33.us-east-2.compute.amazonaws.com:3000/api',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      }
    )
      .then(async (response) => {
        toast({
          title: 'Invest with tokens transferred to EVM',
          description: 'It is processed safely through Smart Contract.',
        });
        // await new Promise((resolve) => setTimeout(resolve, 2000));

        const ethersProvider = new ethers.providers.Web3Provider(
          walletProvider!
        );
        const signer = await ethersProvider.getSigner();

        const USDTContract = new ethers.Contract(contractAddr, abi, signer);
        const USDTBalance = await USDTContract.deposit(1, {
          value: ethers.utils.parseEther(String(finalData.amount)),
        });
        toast({
          title: 'Complete Funding!!',
          description: 'Check Your Allocation in Dashboard',
        });
        router.refresh();
        router.push('/');
        // if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }
      })
      .then((data) => {
        // Handle the response data
        console.log('Response data:', data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error:', error);
      });

    // console.log(ethers.utils.formatUnits(USDTBalance, 18))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='sign' className='text-md p-5'>
          Claim!
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] flex flex-col items-center justify-center'>
        <DialogHeader className='space-y-3 mt-3'>
          <DialogTitle>Check Claim</DialogTitle>
          <DialogDescription>
            Take advantage of the secure and solid Web3 project selected by
            Helix DAO. And receive Helix tokens for the project.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-2/3 space-y-6 flex flex-col items-center justify-center '
          >
            <FormField
              control={form.control}
              name='amount'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount (XRP)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='0'
                      type='number'
                      {...field}
                      onChange={(e) => {
                        form.setValue('amount', Number(e.target.value));
                      }}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              {isLoading ? (
                <Button disabled>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Please wait
                </Button>
              ) : (
                <Button type='submit' variant='sign'>
                  Submit
                </Button>
              )}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FundButton;

// const provider = new ethers.providers.Web3Provider(window.ethereum);

//     await provider.send('eth_requestAccounts', []);

//     const signer = provider.getSigner();

//     const contractWithSigner = new ethers.Contract(
//       '0x3523eCA3438cE8aCF4A6A10e3A0a74dD95CBC8c4',
//       abi,
//       signer
//     );

//     await contractWithSigner.end_game(result?.contract, profile?.address);
