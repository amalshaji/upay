import type { NextPage } from 'next'
import UpayCard from '../components/UpayCard'
import Head from 'next/head'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>UPay</title>
        <meta name="title" content="UPay" />
        <meta
          name="description"
          content="Generate shareable UPI payment links"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://upay.cf/" />
        <meta property="og:title" content="UPay" />
        <meta
          property="og:description"
          content="Generate shareable UPI payment links"
        />
        <meta property="og:image" content="https://upay.cf/card.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://upay.cf/" />
        <meta property="twitter:title" content="UPay" />
        <meta
          property="twitter:description"
          content="Generate shareable UPI payment links"
        />
        <meta property="twitter:image" content="https://upay.cf/card.png" />
      </Head>
      <div className="h-screen w-full content-center overflow-y-clip bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="py-14 px-2 sm:py-36">
          <UpayCard />
        </div>
      </div>
    </>
  )
}

export default Home
