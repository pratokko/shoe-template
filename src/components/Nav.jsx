import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
          <ul className="flex-1 flex justify-center items-center gap-15 max-lg:hidden">
            <li>

            </li>
          </ul>
        </a>
      </nav>
    </header>
  );
};
export default Nav;
