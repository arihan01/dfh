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
    {/* <motion.div className='w-2/3 mb-1 mt-5' {...animate.fadeIn}>
      <svgs.s10Top className='w-full h-auto' />
    </motion.div> */}
    {/* <motion.div className='w-2/3 mb-4' {...animate.fadeIn}>
      <svgs.s2UL className='w-full h-auto' />
    </motion.div> */}
    <motion.div className='font-bvb text-3xl lg:text-4xl' {...animate.fadeIn}>The Habitat</motion.div>
    <motion.div className='font-bvr text-4xl lg:text-5xl mb-12 -mt-3' {...animate.fadeIn}>Ecosystem</motion.div>
    <motion.div className='flex items-center justify-center w-1/5 space-x-7 mb-12' {...animate.upToDown}>
      <img src={require('../img/s11-img1.png')}/>
      <img src={require('../img/s11-img2.png')}/>
      <img src={require('../img/s11-img3.png')}/>
    </motion.div>
    <motion.div className='font-cf text-xs lg:text-base mb-64 lg:mb-72' {...animate.rightToLeft}>
      Lorem ipsum dolor sit amet, consectetur<br/>
      adipiscing elit, sed do eiusmod tempor<br/>
      incididunt ut labore et dolore magna aliqua.<br/>
      Ut enim ad minim veniam, quis nostrud<br/>
      exercitation ullamco laboris nisi ut aliquip<br/>
      ex ea commodo consequat. Duis aute irure<br/>
      dolor in reprehenderit in voluptate velit
    </motion.div>
    <div className='w-full h-auto bottom-0 absolute'>
      <img src={require('../img/s11-img.png')}/>
    </div>
    {/* <motion.img src={require('../img/s10-img-1.png')} {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0 }} className='mb-3' />
    <motion.img src={require('../img/s10-img-2.png')} {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0.6 }} className='mb-3' />
    <motion.img src={require('../img/s10-img-3.png')} {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 1.2 }} /> */}
  </div>
);
}