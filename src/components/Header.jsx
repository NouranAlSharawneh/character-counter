const Header = () => {
  return (
    <header className="px-6 py-4 xl:max-w-248 xl:mx-auto">
      <div className="flex justify-between items-center ">
        <div className="h-6 md:h-9">
          <img
            src="/assets/images/logo-light-theme.svg"
            alt="Logo of the website"
            className="h-full"
          />
        </div>
        <div className="bg-gray-200 h-6 rounded-sm py-1 px-1 md:py-2 md:px-2 md:h-8">
          <img
            src="/assets/images/icon-moon.svg"
            alt="Moon Icon"
            className="h-full "
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
