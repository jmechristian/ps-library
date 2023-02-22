import React from 'react';
import { useForm } from 'react-hook-form';

const LessonActivityIntake = ({ close, cancelButtonRef }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      className='w-full grid grid-cols-6 gap-4 pt-6 pb-2'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='col-span-6 sm:col-span-3'>
        <input
          {...register('firstName', { required: true })}
          type='text'
          name='firstName'
          id='firstName'
          autoComplete='firstName'
          placeholder='First Name (required)'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        />
        <div>
          {errors.firstName && (
            <p role='alert' className='text-sm text-red-700 mt-1'>
              This field is required
            </p>
          )}
        </div>
      </div>
      <div className='col-span-6 sm:col-span-3'>
        <input
          {...register('lastName', { required: true })}
          placeholder='Last Name (required)'
          type='text'
          name='lastName'
          id='lastName'
          autoComplete='family-name'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        />
        <div>
          {errors.lastName && (
            <p role='alert' className='text-sm text-red-700 mt-1'>
              This field is required
            </p>
          )}
        </div>
      </div>
      <div className='col-span-6'>
        <input
          {...register('email', { required: true })}
          placeholder='Email (required)'
          type='text'
          name='email'
          id='email'
          autoComplete='email'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        />
        <div>
          {errors.lastName && (
            <p role='alert' className='text-sm text-red-700 mt-1'>
              This field is required
            </p>
          )}
        </div>
        <div className='mt-5 sm:mt-6'>
          <button
            type='submit'
            className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-4 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 md:text-xl'
            onClick={close}
          >
            Get Resource
          </button>
        </div>
      </div>
    </form>
  );
};

export default LessonActivityIntake;
