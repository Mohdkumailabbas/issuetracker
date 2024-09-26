"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBug } from "react-icons/fa";
import classnames from "classnames"
const Navbar = () => {
 const currentpath = usePathname()
  const links = [
    { label: 'Dashboard', href: "/" },
    { label: 'Issues', href: "/issues" }
  ]
  return (
    <nav className='flex gap-6 border-b mb-5 items-center px-10 py-2  text-gray-500 '>
      <Link href="/"><FaBug className=' hover:text-white transition-colors' /></Link>
      <ul className='flex gap-6'>
        {links.map((link) => {
          return (
            <li key={link.href}><Link 
             className={classnames({
              'text-green-100':link.href === currentpath,
              'text-gray-500': link.href!== currentpath,
              'hover:text-white  transition-colors': true,
             })} 
             href={link.href}>{link.label}</Link></li>

          )
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
