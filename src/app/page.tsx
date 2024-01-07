import ThemeChanger from '@/utils/ThemeChanger'
import { redirect } from 'next/navigation';

// import Image from 'next/image'

export default function Home() {
  return (
    redirect('/login')
  )
}
