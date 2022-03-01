import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import UpayCard from '../components/UpayCard'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full content-center overflow-y-clip bg-gradient-to-br from-teal-600 to-blue-600">
      <div className="py-14 px-2 sm:py-36">
        <UpayCard />
      </div>
    </div>
  )
}

export default Home
