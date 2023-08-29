import React from 'react';
import { motion } from 'framer-motion';
import * as animate from '../animations';
import * as svgs from '../svgs.js';

export default function Slide9() {
  return (
    <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
    {/* <motion.img src={require('./img/s9-top.png')} className='w-4/5 mb-10 mt-2' {...animate.fadeIn} /> */}
    <motion.div className='w-4/5 mt-5'>
      <svgs.s9Top className='w-full h-auto' />
    </motion.div>
    <motion.div className='w-3/4 mt-10 mb-5' >
      <svgs.s9Text1 className='w-full h-auto' />
    </motion.div>
    <motion.div className='w-3/4 mt-5 mb-5' >
      <svgs.s9Text2 className='w-full h-auto' />
    </motion.div>
    <motion.div className='w-3/4 mt-5' >
      <svgs.s9Text3 className='w-full h-auto' />
    </motion.div>
  </div>
);
}