import ThemeChanger from '@/components/ThemeChanger'
import { redirect } from 'next/navigation';

// import Image from 'next/image'

export default function Home() {
  return (
    redirect('/login')
  )
}
