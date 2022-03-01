import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Footer from './Footer'
import Link from 'next/link'
import QRCode from 'react-qr-code'

// @ts-ignore
function UpayLinkCard({ upi_data }) {
  const { upi_id, amount, message } = upi_data
  // @ts-ignore

  let base_link = `upi://pay?pa=${upi_id}&pn=upay.cf&cu=INR`
  if (amount) {
    base_link += `&am=${amount}`
  }
  if (message) {
    base_link += `&tn=${message}`
  }

  return (
    <>
      <div className="mx-auto max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-md sm:p-6 lg:p-8">
        <form className="space-y-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h5 className="text-md text-center font-medium text-gray-900">
            {amount ? (
              <p>
                {upi_id} is requesting
                <span className="ml-1 rounded-md bg-pink-200 px-2 py-1">
                  ₹{amount}
                </span>
              </p>
            ) : (
              <p>
                Sent money to{' '}
                <span className="ml-1 rounded-md bg-pink-200 px-2 py-1">
                  {upi_id}
                </span>
              </p>
            )}
          </h5>
          <h5 className="text-md text-center font-medium text-gray-900">
            {message && (
              <p className=" border-l-4 bg-gray-100 text-sm italic">
                {message}
              </p>
            )}
          </h5>
          <div className="ml-20">
            <QRCode value={base_link} size={150} />
          </div>
          <a
            type="button"
            href={base_link}
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            Pay
          </a>
          <Link href="/">
            <a
              type="button"
              className="w-full rounded-lg bg-teal-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            >
              Create payment Link
            </a>
          </Link>
        </form>
        <ToastContainer />
      </div>
      <Footer />
    </>
  )
}

export default UpayLinkCard
