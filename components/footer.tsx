import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <div className="mt-32">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700"
        style={{ height: '1px' }}
      ></div>
      <footer className="bg-sky-400 dark:bg-white w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col mb-16">
            <div className="text-white dark:text-gray-800 mb-6">
              <h2 className="text-3xl font-bold mb-2">Stay Connected.</h2>
              <p className="text-2xl mb-6">Get the Latest Insights.</p>
              
              <div className="w-full max-w-xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-grow w-full">
                    <div className="flex items-center rounded-full overflow-hidden bg-white dark:bg-gray-100 border border-gray-300 dark:border-gray-300 shadow-md px-5 py-1.5">
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full pl-5 py-2 focus:outline-none text-gray-600 dark:text-gray-700 dark:bg-gray-100"
                      />
                      <button className="bg-sky-400 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-600 text-white px-6 py-3 rounded-full text-sm transition-all">
                        Subscribe
                      </button>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-4 sm:mt-0 w-full sm:w-auto justify-center sm:justify-start">
                    <Link href="https://twitter.com" aria-label="Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white dark:text-gray-700">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </Link>
                    <Link href="https://linkedin.com" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white dark:text-gray-700">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </Link>
                    <Link href="https://facebook.com" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white dark:text-gray-700">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </Link>
                    <Link href="https://instagram.com" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white dark:text-gray-700">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </Link>
                    <Link href="https://youtube.com" aria-label="YouTube">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white dark:text-gray-700">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-white dark:text-gray-800">
            <div className="md:col-span-4">
              <div className="flex items-center mb-6">
                <div className="mr-3">
                  <Image src="/landing/Logo.png" alt="Logo" width={50} height={50} />
                </div>
                  <span className="text-2xl font-bold">Auriga Sakti Teknologi</span>
              </div>
              <p className="text-sm">Copyright © 2025 Auriga Sakti Teknologi. All Rights Reserved</p>
            </div>

            <div className="hidden md:block md:col-span-2"></div>

            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <ul className="space-y-3">
                <li><Link href="/about-us" className="hover:underline">About Our Company</Link></li>
                <li><Link href="/not-found" className="hover:underline">Careers</Link></li>
                <li><Link href="/not-found" className="hover:underline">Technical Support</Link></li>
                <li><Link href="/not-found" className="hover:underline">Terms & Condition</Link></li>
              </ul>
            </div>

            {/* Second Information Column */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold mb-4">Usefull Link</h3>
              <ul className="space-y-3">
                <li><Link href="/not-found" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/not-found" className="hover:underline">Cookies</Link></li>
                <li><Link href="/not-found" className="hover:underline">Accessibility</Link></li>
                <li><Link href="/not-found" className="hover:underline">Contact Us</Link></li>
                <li><Link href="/not-found" className="hover:underline">Privacy Settings</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}