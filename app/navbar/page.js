import Link from 'next/link';

const links = [
  { href: '/client', label: 'client' },
  { href: '/drinks', label: 'drinks' },
  { href: '/tasks', label: 'tasks' },
  { href: '/query', label: 'react-query' },
];

const Navbar = () => {
  return (
    <nav className='bg-primary text-primary-content shadow-lg'>
      <div className='navbar px-8 max-w-6xl mx-auto'>
        <div className='navbar-start'>
          <Link href='/' className='btn btn-ghost text-xl font-bold'>
            Next.js
          </Link>
        </div>
        <div className='navbar-center'>
          <ul className='menu menu-horizontal px-1 gap-5 flex justify-center'>
            {links.map((link) => {
              return (
                <li key={link.href} className='px-5 py-2 border-solid bg-red-50 border-1 border-black-100 hover:bg-blue-500 ' >
                  <Link href={link.href} className='btn btn-ghost capitalize text-primary-content hover:bg-primary-focus'>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='navbar-end'>
          <div className='badge badge-secondary'>v1.0</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;