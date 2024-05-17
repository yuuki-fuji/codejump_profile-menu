const Header = () => {
  return (
    <header id="header" className="flex justify-between items-center mx-auto py-[10px] wrapper">
      <h1 className="w-[120px]">
        <img src="/logo.svg" alt="logo" />
      </h1>
      <nav className="flex">
        <li className="text-secondary ml-[30px]">About</li>
        <li className="text-secondary ml-[30px]">Bicycle</li>
      </nav>
    </header>
  );
}

export default Header;
