import { useState } from 'react'
import logo from '../../assets/images/logo.png'
import PasswordIcon from '../../icons/PasswordIcon'
import UserIcon from '../../icons/UserIcon'

export default function LoginPage1() {
  const [color, setColor] = useState('#FF4A4A')

  const rememberCheckboxClass = `accent-[${color}]`

  console.log(rememberCheckboxClass)

  return (
    <div className='h-mainScreen flex flex-col gap-4 justify-center items-center'>
      <input
        type='color'
        className='outline-none border-none'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div className='w-88 h-120 bg-white shadow-login1 rounded-lg flex flex-col items-center'>
        <div className='mt-8'>
          <img src={logo} alt='logo' width={64} height={64} />
        </div>
        <span
          className='mt-4 my-8 text-32 font-semibold font-titillium-web select-none leading-6 tracking-widest'
          style={{
            color: color,
          }}
        >
          DEER UI
        </span>
        <span className='text-xs font-open-sans font-semibold tracking-wider leading-2.5'>
          Sign in to continue to Deer UI
        </span>
        <form className='w-64 my-8'>
          <div className='mb-4 border border-inputBorder1 rounded relative box-border'>
            <div className='inline-block absolute top-1/2 transform -translate-y-1/2 left-2'>
              <UserIcon size='16' color={color} />
            </div>
            <input
              className='w-full py-1.25 pl-8 text-sm placeholder:text-xs focus:outline-primaryBorderColor'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-4 border border-inputBorder1 rounded relative  box-border'>
            <div className='inline-block absolute top-1/2 transform -translate-y-1/2 left-2'>
              <PasswordIcon size='16' color={color} />
            </div>
            <input
              type='password'
              className='w-full py-1.25 pl-8 text-sm placeholder:text-xs focus:outline-primaryBorderColor'
              placeholder='Enter your password'
            />
          </div>
          <div className='flex justify-between items-center text-xxs'>
            <div className='flex items-center gap-1'>
              <input
                type='checkbox'
                style={{
                  accentColor: color,
                }}
                checked
              />
              <span>Remember me</span>
            </div>
            <a className='text-iconPassive' href='#'>
              Forgot password?
            </a>
          </div>
          <button
            className='h-8 mt-8 w-full text-white rounded'
            type='submit'
            style={{
              backgroundColor: color,
            }}
          >
            Sign in
          </button>
        </form>
        <div className='text-xs flex items-center justify-center gap-1'>
          <span>Don't have an account?</span>
          <a
            className='underline font-semibold'
            href='#'
            style={{ color: color }}
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  )
}
