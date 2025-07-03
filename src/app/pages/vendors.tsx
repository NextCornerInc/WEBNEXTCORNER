// pages/vendors.tsx

import Head from 'next/head';

export default function VendorPage() {
  return (
    <>
      <Head>
        <title>Become a Vendor – Next Corner</title>
        <meta
          name="description"
          content="Sell street food on Next Corner. Get discovered, take orders, and grow your business with no monthly fees."
        />
        <meta name="keywords" content="become a vendor, street food app, vendor app, sell food online, food truck orders, Next Corner" />
        <link rel="canonical" href="https://nextcorner.app/vendors" />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-24 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center">Why Vendors Love Next Corner</h1>
        <p className="text-lg mb-10 text-center">
          Next Corner helps street vendors grow their food business with tools that are simple, affordable, and built for you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
          <div>
            <h2 className="font-semibold text-[#00aaed] mb-2">No Monthly Fees</h2>
            <p>Only pay per order. No subscription, no upfront setup costs.</p>
          </div>
          <div>
            <h2 className="font-semibold text-[#00aaed] mb-2">Get Discovered</h2>
            <p>We feature you in local search results so new customers can find you easily.</p>
          </div>
          <div>
            <h2 className="font-semibold text-[#00aaed] mb-2">Easy Management</h2>
            <p>Accept orders, update your menu, and manage your business from your phone.</p>
          </div>
        </div>
      </main>
    </>
  );
}
