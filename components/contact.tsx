'use client'
import { Toaster } from '@/components/ui/sonner'
import { Loader, Send } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import FadeIn from '@/lib/variants'
import { sendMail } from '@/lib/mail'
import { Button } from './ui/button'

const Contact = () => {
  const [data, setData] = useState({
    from: '',
    name: '',
    subject: '',
    body: ''
  })

  const [bool, setBool] = useState(false)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const Sendmsg = async () => {
    if (
      data.name === '' ||
      data.subject === '' ||
      data.body === '' ||
      data.from === ''
    ) {
      toast.error('Please fill the form')
    } else {
      setBool(true)
      if (data.from.includes('@')) {
        const d = await sendMail({
          from: data.from,
          name: data.name,
          subject: data.subject,
          body: data.body
        })

        if (d === 'success') {
          setData({
            from: '',
            name: '',
            subject: '',
            body: ''
          })
          setBool(false)
          toast.success('Email Sent')
        } else {
          setBool(false)
          toast.error('Error occur')
        }
      } else {
        setBool(false)
        toast.error('Email format is not correct')
      }
    }
  }

  return (
    <section id='Contact' className='bg-[url(/contact/contact-bg.png)] py-28'>
      <div className='px6 container flex flex-col justify-between py-12 text-lg md:flex-row'>
        <motion.div
          variants={FadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='mb-12 mr-6 flex items-center py-6'
        >
          <h1 className='text-[40px] font-bold uppercase leading-[3rem]'>
            let&apos;s work <br /> <span className='under-line'>together</span>
          </h1>
        </motion.div>
        <motion.form
          variants={FadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='flex max-w-3xl flex-1 flex-col items-start gap-y-8 rounded-md bg-secondary/80 p-10'
        >
          <input
            type='email'
            name='from' // Add the name attribute
            placeholder='Your Email'
            required
            value={data.from}
            onChange={handleChange}
            className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          />
          <input
            type='text'
            name='name' // Add the name attribute
            placeholder='Your Name'
            required
            value={data.name}
            onChange={handleChange}
            className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          />
          <input
            type='text'
            name='subject' // Add the name attribute
            placeholder='Subject'
            required
            value={data.subject}
            onChange={handleChange}
            className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          />
          <textarea
            name='body' // Add the name attribute
            placeholder='Message'
            value={data.body}
            onChange={handleChange}
            className='mb-12 w-full resize-none border-b border-white/25 bg-transparent py-12 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          ></textarea>
          {bool ? (
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
              <Loader className='h-16 w-16 animate-spin text-white' />
            </div>
          ) : (
            <div
              onClick={() => Sendmsg()}
              className='flex cursor-pointer items-center justify-center gap-3 rounded-lg border bg-white p-3 font-bold text-black hover:bg-[#336dff] hover:text-white'
            >
              <Send className='h-5 w-5' />
              SEND
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
