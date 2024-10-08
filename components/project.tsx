'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { projectsData } from '@/lib/data'
import { useScroll, useTransform, motion } from 'framer-motion'
import { Button } from './ui/button'

type ProjectProps = (typeof projectsData)[number]

export const Project = ({
  title,
  image,
  category,
  description,
  github,
  live,
  link2,
  Inprogress,
  github1,
  github2
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    !Inprogress && (
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress
        }}
        className='flex flex-col items-center rounded-3xl bg-blue/10 p-4 xl:flex-row xl:justify-between'
      >
        <div className='pb-[60px]'>
          <h5 className='text-sm font-medium capitalize'>{category}</h5>
          <h3 className='mt-4 text-[40px] font-light'>{title}</h3>
          <p className='mb-4 mt-4 max-w-xl'>{description}</p>
          <div className='flex gap-4'>
            {github && github1 && github2 && (
              <div className='flex space-x-4'>
                <Link href={github ? github : ''}>
                  <Button variant={'secondary'}>Git Web</Button>
                </Link>
                <Link className="ml-4" href={github1 ? github1 : ''}>
                  <Button variant={'secondary'}>Git Android</Button>
                </Link>
                <Link className="ml-4" href={github2 ? github2 : ''}>
                  <Button variant={'secondary'}>Git Watch</Button>
                </Link>
              </div>
            )}
            {github && !github1 && (
              <Link href={github ? github : ''}>
                <Button variant={'secondary'}>Github</Button>
              </Link>
            )}
            {live && (
              <Link href={live ? live : ''}>
                <Button variant={'secondary'}>Live</Button>
              </Link>
            )}
            {link2 && (
              <Link href={link2 ? link2 : ''}>
                {' '}
                <Button variant={'secondary'}>Demo</Button>
              </Link>
            )}
          </div>
        </div>
        <div className='rotate-20 flex items-center justify-center rounded-[50px] outline-[3px] outline-offset-8 outline-blue transition-all hover:outline'>
          <Link href={github ? github : ''}>
            <Image
              src={image}
              width={390}
              height={390}
              alt='project image'
              className='inset-0 z-50 rounded-[50px] bg-cover transition-all hover:translate-x-[18px] hover:-rotate-45 hover:shadow-lg'
            />
          </Link>
        </div>
      </motion.div>
    )
  )
}
