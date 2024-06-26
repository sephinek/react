import Search from './Search';
import Logo from './Logo';

export default function NavBar({ children }) {
  return (
    <nav className='nav-bar'>
      <Logo />
      <Search />
      {children}
    </nav>
  );
}
