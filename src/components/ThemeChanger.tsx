'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import './../app/icons.css'
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div className=''>
      {theme !== 'light' ? <button className="text-[35px]" onClick={() => setTheme('light')}>
        <span className="material-symbols-outlined text-[#37B34A]">
          light_mode
        </span>
      </button> : <button className="text-[35px]" onClick={() => setTheme('dark')}>
        <span className=" material-symbols-outlined text-white">
          dark_mode
        </span>
      </button>}


    </div>
  )
}

export default ThemeChanger;




