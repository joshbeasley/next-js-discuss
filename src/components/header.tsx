import { auth } from '@/auth'
import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import Link from 'next/link'

export default async function Header() {
  const session = await auth()

  let authContent: React.ReactNode

  if (session?.user) {
    authContent = <div>User Image</div>
  } else {
    authContent = <div>Sigin/signout</div>
  }

  return (
    <Navbar className='shadow mb-6'>
      <NavbarBrand>
        <Link href='/' className='font-bold'>
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>{authContent}</NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
