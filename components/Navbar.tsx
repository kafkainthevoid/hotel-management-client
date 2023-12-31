import Link from 'next/link'

import { getAuthSession } from '@/lib/auth'
import { buttonVariants } from '@/components/ui/button'
import UserAccountNav from '@/modules/user/components/UserAccountNav'

const Navbar = async () => {
  const session = await getAuthSession()

  return (
    <div className='fixed top-0 h-14 bg-white inset-x-0 w-full border-b border-zind-300 z-50'>
      <div className='container h-full z-10 py-2 max-w-7xl flex items-center justify-between'>
        <Link href='/'>
          <h1 className='font-extrabold text-xl border border-black p-2'>
            Winterfall
          </h1>
        </Link>

        {session?.user ? (
          <UserAccountNav userAuth={session.user} />
        ) : (
          <div className='flex gap-4 items-center'>
            <Link
              href='/sign-up'
              className={buttonVariants({ size: 'sm', variant: 'teal' })}
            >
              Join In
            </Link>
            <Link
              href='/sign-in'
              className={buttonVariants({
                size: 'sm',
                className: 'bg-white text-teal-600 hover:bg-zinc-300',
              })}
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
