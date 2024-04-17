import Link from 'next/link'
import { IconMenu } from '../icons/menu'
import { siteConfig } from '@/lib/config/site'

export function Header() {
  return (
    <header>
      <nav className='container flex items-center justify-between py-6'>
        <Link href={'/'}>
          <span className='text-neutral-50 lg:text-lg'>Logo</span>
          <h1 className='sr-only'>{siteConfig.name}</h1>
        </Link>

        <button className='inline-flex items-center gap-3 text-neutral-50'>
          <span className='text-lg'>Menu</span>

          <IconMenu className='size-8' />
        </button>
      </nav>
    </header>
  )
}
