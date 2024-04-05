import React from 'react'

const OrderDetails = () => {
  return (
    <div className="container mx-auto mt-10">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
                <h1 className="text-xl font-semibold">Order #123456 Details</h1>
            </div>
            <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                    <h2 className="text-lg font-semibold">Shipping Information</h2>
                    <p>John Doe</p>
                    <p>123 Main St, City, Country</p>
                    <p>john.doe@example.com</p>
                </div>
                <div className="w-1/2 ml-2">
                    <h2 className="text-lg font-semibold">Billing Information</h2>
                    <p>John Doe</p>
                    <p>123 Main St, City, Country</p>
                    <p>john.doe@example.com</p>
                </div>
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Order Items</h2>
                <table className="min-w-full leading-normal mt-2">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Item
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Quantity
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Product Name 1
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                2
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                £30.00
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end items-center">
                <div className="text-xl font-semibold">
                    Total: £Total
                </div>
            </div>
        </div>
    </div>

  )
}

export default OrderDetails