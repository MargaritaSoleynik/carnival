import Link from "next/link";
import Image from "next/image";
import NavHeader from "./navHeader";
import NavFooter from "./navFooter";

export default function NavBar() {
  return (
    <>
      <NavHeader />
      <div className='navbar bg-white  h-28 justify-center sticky top-0 z-40 border-b-2 border-gray-200'>
        <div className='mr-8'>
          <Image width={225} height={225} alt='' src='/nomadlogotop.jpg' />
        </div>
        <div className='mr-12'>
          <Link
            className='hover:text-sky-500 px-2 normal-case text-lg font-normal '
            href='/'
          >
            {" "}
            Home
          </Link>
          <Link
            className='hover:text-sky-500 px-2 normal-case text-lg font-normal'
            href='/'
          >
            {" "}
            Mas Camps
          </Link>
          <Link
            className='hover:text-sky-500 px-2 normal-case text-lg font-normal'
            href='/'
          >
            {" "}
            CG Gear
          </Link>
          <Link
            className='hover:text-sky-500 px-2 normal-case text-lg font-normal'
            href='/'
          >
            {" "}
            Marketplace
          </Link>
          <Link
            className='hover:text-sky-500 px-2 normal-case text-lg font-normal'
            href='/'
          >
            {" "}
            Models
          </Link>
          <Link
            className='hover:text-sky-500 px-2 normal-case text-lg font-normal'
            href='/'
          >
            {" "}
            Artists
          </Link>
          <Link
            className='hover:text-sky-500 px-2 normal-case text-lg font-normal'
            href='/'
          >
            {" "}
            Events
          </Link>
          <Link
            className='hover:text-sky-500 px-2 normal-case text-lg font-normal'
            href='/'
          >
            {" "}
            Contact Us
          </Link>
        </div>
        <div className=''>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <div className='indicator'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                <span className='badge badge-sm indicator-item'>10</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'
            >
              <div className='card-body'>
                <span className='font-bold text-lg'>10 Items</span>
                <span className='text-info'>Subtotal: $999</span>
                <div className='card-actions'>
                  <button className='btn btn-primary btn-block'>
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavFooter />
    </>
  );
}
