'use client'
import { motion } from 'framer-motion'
import FadeIn from '../lib/variants'
import AnimatedCounter from '../lib/animatedCounter'

const Services = () => {
  return (
    <section id='services' className='z-30 -translate-y-1 bg-secondary'>
      <div className='container w-full py-[100px] lg:py-[200px]'>
        <div className='flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0'>
          <motion.div
            variants={FadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='justify-betweenlg:mr-8 flex w-full flex-col lg:w-1/2'
          >
            <h1 className='pb-4 text-[40px] font-bold leading-[3rem] text-center'>
              What I Do
            </h1>

            <div className='flex justify-between space-x-4 py-8'>
              
              <div className='flex flex-col items-center justify-center w-full'>
                
                <p className='text-lg font-semibold uppercase'> Projects</p>
                <p className='text-[36px] font-bold text-blue'>
                  {' '}
                  + <AnimatedCounter from={0} to={20} />
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex h-full flex-col gap-8'
          >
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>01</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                  Front-end development
                </h2>
                <p>
                  Specializing in converting design prototypes into dynamic,
                  responsive web applications using modern frameworks and
                  libraries like React/Next.js, Angular, and Tailwind CSS. I
                  ensure seamless user experiences and optimal performance
                  across all devices.
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>02</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                Back-end development
                </h2>
                <p>
                  Expert in developing scalable and secure server-side solutions
                  with the latest technologies. I handle everything from API
                  development to database management, providing robust backend
                  systems that support complex web applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
