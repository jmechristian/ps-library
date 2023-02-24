import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { Context } from '../../data/context';

const DarkSwitch = ({ toggleSwitch, isOn }) => {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  const { dark } = useContext(Context);

  return (
    <div className='flex items-center justify-between gap-2'>
      <div>
        <SunIcon
          className={`w-5 h-5 ${dark ? 'stroke-white/40' : 'stroke-clemson'}`}
        />
      </div>
      <div
        className='w-8 h-4 flex items-center justify-start bg-neutral-600 rounded-xl cursor-pointer switch'
        data-ison={dark}
        onClick={toggleSwitch}
      >
        <motion.div
          className='w-5 h-5 rounded-full bg-white/80'
          layout
          transition={spring}
        />
      </div>
      <div>
        <MoonIcon
          className={`w-5 h-5 ${dark ? 'stroke-clemson' : 'stroke-white/40'}`}
        />
      </div>
    </div>
  );
};

export default DarkSwitch;
