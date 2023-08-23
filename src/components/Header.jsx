const Header = () => {
  return (
    <header
      className="text-center min-[1024px]:w-full min-[1024px]:max-w-[400px] 
    min-[1024px]:text-start flex flex-col gap-2 px-4"
    >
      <h1 className="text-3xl font-bold text-title-color">
        <span className="text-first-color">Welcome</span> back
      </h1>
      <p className="text-text-color text-base">
        Welcome! Please login to continue.
      </p>
    </header>
  );
};

export default Header;
