'use client'
import React from 'react'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 3,
    name: 'Zip Tote Basket',
    href: '#',
    color: 'White and black',
    price: '$140.00',
    quantity: 1,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-03.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
]

const Cart = () => {
  const [items, setItems] = useState(products)

  function handleQtyChange(id, newQty) {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: Number(newQty) } : p)))
  }

  function handleRemove(id) {
    setItems((prev) => prev.filter((p) => p.id !== id))
  }

  function parsePrice(priceStr) {
    return Number(priceStr.replace(/[^0-9.-]+/g, '')) || 0
  }

  const subtotal = items.reduce((sum, it) => sum + parsePrice(it.price) * (it.quantity || 0), 0)

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="bg-white p-8 shadow rounded">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">Cart</h1>

          <div className="space-y-6">
            {items.length === 0 && <p className="text-gray-500">Your cart is empty.</p>}

            <ul className="divide-y divide-gray-200">
              {items.map((product) => (
                <li key={product.id} className="py-6">
                  <div className="flex items-start">
                    <img src={product.imageSrc} alt={product.imageAlt} className="w-20 h-20 rounded border object-cover" />

                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-base font-medium text-gray-900">
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                        </div>

                        <div className="text-right">
                          <p className="text-base font-medium text-gray-900">{product.price}</p>
                          <button onClick={() => handleRemove(product.id)} className="mt-2 text-sm text-indigo-600 hover:text-indigo-500">
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-start space-x-4">
                        <label className="text-sm text-gray-500">Qty</label>
                        <select
                          value={product.quantity}
                          onChange={(e) => handleQtyChange(product.id, e.target.value)}
                          className="mt-1 block w-20 border border-gray-300 rounded px-2 py-1 text-sm"
                        >
                         <option value="1">1</option>
                         <option value="2">2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-medium text-gray-900">Subtotal</p>
                <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              </div>
              <p className="text-xl font-semibold text-gray-900">${subtotal.toFixed(2)}</p>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="block w-full rounded-md bg-indigo-600 px-6 py-3 text-center text-base font-medium text-white shadow hover:bg-indigo-700"
              >
                Checkout
              </a>
            </div>

            <div className="mt-4 text-center text-sm text-gray-500">
              <p>
                or{' '}
                <Link to={`/`} className="text-indigo-600 hover:text-indigo-500 font-medium">
                  Continue Shopping <span aria-hidden="true">&rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cart
