import type { NextPage } from 'next'
import UpayLinkCard from '../components/UpayLinkCard'

// @ts-ignore
export async function getServerSideProps(context) {
  return {
    props: {
      upi_data: context.query,
    },
  }
}
// @ts-ignore
const UPIPage: NextPage = ({ upi_data }) => {
  return (
    <div className="h-screen w-full content-center overflow-y-clip bg-gradient-to-br from-teal-600 to-blue-600">
      <div className="py-14 px-2 sm:py-36">
        <UpayLinkCard upi_data={upi_data} />
      </div>
    </div>
  )
}

export default UPIPage
