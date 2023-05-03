import React from 'react';
import {
  MagnifyingGlassIcon,
  BeakerIcon,
  SwatchIcon,
  CubeTransparentIcon,
} from '@heroicons/react/24/solid';

const SpaObjective = ({ objective, icon }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case 'magnifyingGlassIcon':
        return <MagnifyingGlassIcon className='w-6 h-6 fill-clemson' />;
      case 'beakerIcon':
        return <BeakerIcon className='w-6 h-6 fill-clemson' />;
      case 'swatchIcon':
        return <SwatchIcon className='w-6 h-6 fill-clemson' />;
      case 'cubeTransparentIcon':
        return <CubeTransparentIcon className='w-6 h-6 fill-clemson' />;
    }
  };

  //   const theIcon = getIcon(icon);

  return (
    <div className='bg-base-brand text-white p-6 rounded-lg'>
      <div className='grid grid-flow-col gap-3'>
        <div className='w-12 h-12 rounded-full bg-white ring-slate-300/80 ring-4 shadow-md flex justify-center items-center'>
          {icon && getIcon(icon)}
        </div>
        <div className='w-fit'>{objective}</div>
      </div>
    </div>
  );
};

export default SpaObjective;
