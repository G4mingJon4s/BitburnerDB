import Image from 'next/image'
import { Inter } from 'next/font/google'
import { prisma } from '@/server/db'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
	const count = await prisma.session.count();

  return (
    <div className={inter.className}>Entries: {count}</div>
  )
}
