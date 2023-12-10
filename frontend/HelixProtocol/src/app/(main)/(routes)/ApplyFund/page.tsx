'use client';
import React, { useState } from 'react';

import { money } from '@/assets';
import { CustomButton, FormField, Loader } from '@/components';
import { checkIfImage } from '@/utils';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CreateCampaign = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: '',
  });

  const handleFormFieldChange = (fieldName: any, e: any) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists: any) => {
      if (exists) {
        setIsLoading(true);

        setIsLoading(false);
        router.push('/');
      } else {
        alert('Provide valid image URL');
        setForm({ ...form, image: '' });
      }
    });
  };

  return (
    <div className='bg-white flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && <Loader />}
      <div className='flex justify-center items-center p-[16px] bg-[#0189FF] rounded-[10px]'>
        <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>
          Register My Project
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className='w-full mt-[65px] flex flex-col gap-[30px]'
      >
        <div className='flex flex-wrap gap-[40px]'>
          <FormField
            labelName='Your Name *'
            placeholder='John Doe'
            inputType='text'
            value={form.name}
            handleChange={(e: any) => handleFormFieldChange('name', e)}
          />
          <FormField
            labelName='Project Title *'
            placeholder='Write a title'
            inputType='text'
            value={form.title}
            handleChange={(e: any) => handleFormFieldChange('title', e)}
          />
        </div>

        <FormField
          labelName='Description *'
          placeholder='Write your Project Description'
          isTextArea
          value={form.description}
          handleChange={(e: any) => handleFormFieldChange('description', e)}
        />

        <div className='w-full flex justify-start items-center p-4 bg-[#0189FF] h-[120px] rounded-[10px]'>
          <Image
            src={money}
            alt='money'
            className='w-[40px] h-[40px] object-contain'
          />
          <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>
            You will get 100% of the raised amount
          </h4>
        </div>

        <div className='flex flex-wrap gap-[40px]'>
          <FormField
            labelName='Goal *'
            placeholder='XRP 500000'
            inputType='text'
            value={form.target}
            handleChange={(e: any) => handleFormFieldChange('target', e)}
          />
          <FormField
            labelName='End Date *'
            placeholder='End Date'
            inputType='date'
            value={form.deadline}
            handleChange={(e: any) => handleFormFieldChange('deadline', e)}
          />
        </div>

        <FormField
          labelName='Project image *'
          placeholder='Place image URL of your project'
          inputType='url'
          value={form.image}
          handleChange={(e: any) => handleFormFieldChange('image', e)}
        />

        <div className='flex justify-center items-center mt-[40px]'>
          <CustomButton
            btnType='submit'
            title='Submit My Project'
            styles='bg-[#0189FF]'
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
