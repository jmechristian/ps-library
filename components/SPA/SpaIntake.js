import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import TextInput from '../Shared/TextInput';
import {
  ActiveCampaignInputs,
  handleActiveCampaignSubmit,
} from 'active-campaign-react';

const SpaIntake = () => {
  const methods = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append('u', '84');
    formData.append('f', '84');
    formData.append('s', 's');
    formData.append('c', '0');
    formData.append('m', '0');
    formData.append('act', 'sub');
    formData.append('v', '2');
    formData.append('or', '7fe527abe38f28bd50dcee48fd563559');

    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);

    try {
      const sendEmail = await fetch(
        'https://packagingschool42200.activehosted.com/proc.php',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        }
      );
      console.log(sendEmail);
    } catch (err) {
      console.log('Request failed', err);
    }
  };

  return (
    <div className='flex flex-col py-3'>
      <div className='flex flex-col gap-4'>
        <div className='text-3xl max-w-xl font-greycliff font-semibold text-white'>
          Interested in Designing Your Own Packaging Solution?
        </div>
        <div className='text-lg md:text-xl font-greycliff text-white/80 max-w-xl'>
          Enter your information below to be the first to hear the latest news
          on this course.
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className='flex flex-col gap-4 mt-8 md:mt-4 md:grid md:grid-cols-2 md:gap-x-9'
          >
            <TextInput
              label={'First Name'}
              placeholder={'Enter First Name'}
              required
              type='text'
              name='firstName'
            />
            <TextInput
              label={'Last Name'}
              placeholder={'Enter Last Name'}
              required
              type='text'
              name='lastName'
            />
            <TextInput
              label={'Email'}
              placeholder={'you@you.com'}
              required
              type='text'
              name='email'
            />

            <button
              type='submit'
              className='bg-black/90 mt-4 text-white font-greycliff font-semibold ring-2 ring-inset ring-base-light/80 shadow-xl text-xl rounded-lg py-4'
            >
              I&apos;m Interested!
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default SpaIntake;
