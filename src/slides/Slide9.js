import React from 'react';
import { motion } from 'framer-motion';
import * as animate from '../animations';
import * as svgs from '../svgs.js';

export default function Slide9() {
  return (
    <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
      {/* <motion.img src={require('./img/s9-top.png')} className='w-4/5 mb-10 mt-2' {...animate.fadeIn} /> */}
      {/* <motion.div className='w-4/5 mt-5'>
      <svgs.s9Top className='w-full h-auto' />
    </motion.div> */}
      <motion.div className='font-bvb text-3xl lg:text-4xl mt-5' {...animate.fadeIn}>Collective Sustainability</motion.div>
      <motion.div className='font-cf text-sm lg:text-base mb-12' {...animate.fadeIn}>Harmonious Coexistence</motion.div>
      {/* <motion.div className='w-3/4 mt-10 mb-5' >
      <svgs.s9Text1 className='w-full h-auto' />
    </motion.div>
    <motion.div className='w-3/4 mt-5 mb-5' >
      <svgs.s9Text2 className='w-full h-auto' />
    </motion.div>
    <motion.div className='w-3/4 mt-5' >
      <svgs.s9Text3 className='w-full h-auto' />
    </motion.div> */}
<motion.div className='left-align mb-10' {...animate.rightToLeft}>
  <div className='font-bvs text-xl lg:text-3xl'>CANOPY WALK AND<br />INTERPRETATION CENTRE</div>
  <div className='font-cf text-xs lg:text-base'>
    <span style={{color: '#E59617'}}>Camera traps</span> in strategic locations,<br />
    designing a platform that allows access<br/>
    to <span style={{color: '#E59617'}}>200+ years old canopy</span> 40 ft above the<br />
    ground, coupled with an interpretation<br />
    center, arena and a laboratory.
  </div>
</motion.div>
<motion.div className='right-align mb-10 ml-2' {...animate.leftToRight}>
  <div className='font-bvs text-right text-xl lg:text-3xl'>NATIVE FOREST<br/>PRODUCE</div>
  <div className='font-cf text-right text-xs lg:text-base'>Western Ghats hosts over <span style={{color: '#E59617'}}>9000 species</span><br/>
    of plants. Our team at Dancing Frog<br/>
    is in the process of cataloguing the<br/>
    medicinal plants
  </div>
</motion.div>
<motion.div className='left-align mr-3' {...animate.rightToLeft}>
  <div className='font-bvs text-xl lg:text-3xl'>EXPERIENCES</div>
  <div className='font-cf text-xs lg:text-base'>Forest experiences or the viewing<br/>
    of forest scenes contributes to<br/>
    <span style={{color: '#E59617'}}>reducing stress, promoting positive</span><br/>
    <span style={{color: '#E59617'}}>feelings</span> resulting in general wellness.<br/>
    Hiking, camping, wildlife watching,<br/>
    tree climbing, foraging or just<br/>
    meditating are some examples.</div>
</motion.div>

    </div>
  );
}