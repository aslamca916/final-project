import React from 'react'

const CheckoutPage = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4 mr-2 bg-white p-5 shadow-md">
          <h2 className="text-2xl font-bold mb-6">Checkout</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2"
                >Name</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Shipping Address</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                placeholder="123 Main St"
                required
              />
            </div>
            {/* <!-- Additional fields like city, state, zip, country, etc. --> */}
            {/* <!-- <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2"
                >Payment Details</label
              >
              <div className="p-4 bg-gray-100 rounded-lg">
                Payment form elements go here. (Integration with a payment
                gateway is not required)
              </div>
            </div> --> */}
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/4 ml-2 bg-white p-5 shadow-md">
          <h3 className="text-xl font-bold mb-4">Your Order</h3>
          {/* <!-- Summary of the cart items --> */}
          <div className="mb-2">
            <span className="text-gray-600">Product Name x 1</span>
            <span className="float-right">£Price</span>
          </div>
          {/* <!-- Repeat for each product --> */}
          <div className="border-t mt-4">
            <div className="flex justify-between mt-4">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-lg">£Total Price</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CheckoutPage