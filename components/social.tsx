import { FaGithub, FaYoutube, FaStackOverflow } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import { FaHackerrank } from 'react-icons/fa6'

import Link from 'next/link'

const socialLinks = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/hanzla-sib'
  },
  {
    icon: <FaYoutube />,
    path: 'https://www.youtube.com/@hanzlasib3615'
  },
  {
    icon: <ImLinkedin />,
    path: 'https://www.linkedin.com/in/hanzla-sibghat-369883219/'
  },
  {
    icon: <FaHackerrank />,
    path: 'https://www.hackerrank.com/profile/hanzlasib'
  }
]
const Social = () => {
  return (
    <div className='flex gap-6'>
      {socialLinks.map((item, index) => (
        <Link
          target='_blank'
          href={item.path}
          key={index}
          className='duration-3000 flex size-10 items-center justify-center rounded-full border-2 border-blue text-blue hover:bg-blue/20 hover:transition-all'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
