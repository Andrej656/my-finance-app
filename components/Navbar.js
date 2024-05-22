import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white">MyFinanceApp</a>
        </Link>
        <div>
          <Link href="/trade">
            <a className="text-gray-300 hover:text-white ml-4">Trade</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
