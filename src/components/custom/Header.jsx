import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
       <Link to={'/dashboard'}>
      <img src='/logo.svg' className='cursor-pointer' width={70} height={70} />
      </Link>
      {
        isSignedIn ?
        // space between dashboard and sign in logo 
          <div className='flex gap-2 items-center'>
            <Link to={'/dashboard'}>
               <Button variant="outline">Dashboard</Button>
            </Link>
            <UserButton />
          </div> :


          <Link to={'/auth/sign-in'}>
            <Button>Get Started</Button>
          </Link>
      }
    </div>
  )
}

export default Header
