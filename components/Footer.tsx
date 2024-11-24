import Link from 'next/link'
import React from 'react'
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagrame from "@mui/icons-material/Instagram";


const Footer = () => {
  return (
    <footer className='flex justify-center flex-col items-center border-[1px] pb-4 border-gray-200 '>
        <div className='sm:flex gap-4 text-gray-500 text-bold text-sm py-5 flex-wrap grid grid-cols-5 '>
        <p>Help</p>
        <p>Status</p>
        <p>About</p>
        <p>Career</p>
        <p>Press</p>
        <p>Blog</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Teams</p>
        </div>
        <div>
            <Link className='text-[#316FF6]' href={"https://en-gb.facebook.com/moizahmed.shiakh"}><Facebook/></Link>
            <Link className='mx-6 text-[#0077B5]' href={"https://www.linkedin.com/in/moiz-ahmed-6516b728a/"}><LinkedIn/></Link>
            <Link className='text-[#d62976]' href={"https://www.instagram.com/moizahmed_shaikh/?hl=en"}><Instagrame/></Link>

        </div>
    </footer>
  )
}

export default Footer
