import React from 'react';
import { motion } from 'framer-motion';
import * as animate from '../animations';
import * as svgs from '../svgs.js';

export default function Slide10() {
  return (
    <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
    {/* <motion.img src={require('./img/s9-top.png')} className='w-4/5 mb-5' {...animate.fadeIn} /> */}
    {/* <motion.img src={require('./img/s9-img-1.png')} className='w-3/4 mt-5' {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0 }} />
    <motion.img src={require('./img/s9-img-2.png')} className='w-3/4' {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0.6 }} />
    <motion.img src={require('./img/s9-img-3.png')} className='w-3/4' {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 1.2 }} /> */}
    <motion.div className='w-2/3 mb-1 mt-5' {...animate.fadeIn}>
      <svgs.s10Top className='w-full h-auto' />
    </motion.div>
    {/* <motion.div className='w-2/3 mb-4' {...animate.fadeIn}>
      <svgs.s2UL className='w-full h-auto' />
    </motion.div> */}
    <motion.img src={require('../img/s10-img-1.png')} {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0 }} className='mb-3' />
    <motion.img src={require('../img/s10-img-2.png')} {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0.6 }} className='mb-3' />
    <motion.img src={require('../img/s10-img-3.png')} {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 1.2 }} />
  </div>
);
}