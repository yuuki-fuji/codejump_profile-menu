const Header = () => {
  return (
    <header id="header" className="flex justify-between items-center mx-auto wrapper leading-none">
      <h1 className="w-[120px] py-[10px]">
        <img src="/logo.svg" alt="logo" />
      </h1>
      <nav className="flex  py-[10px]">
        <li className="text-secondary ml-[30px]">About</li>
        <li className="text-secondary ml-[30px]">Bicycle</li>
      </nav>
    </header>
  );
}

export default Header;
