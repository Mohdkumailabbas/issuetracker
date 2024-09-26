import Link from 'next/link';
import { FaBug } from "react-icons/fa";
const Navbar = () => {
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
            <li key={link.href}><Link className=' hover:text-white transition-colors' href={link.href}>{link.label}</Link></li>

          )
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
