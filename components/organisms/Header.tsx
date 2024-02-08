import { HeaderLinks } from "@/molecules";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

const Header: React.FunctionComponent = () => {
  return (
    <header className="w-full margin-max-screen flex items-center h-24">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-28 items-center">
          <Link href="/" className="font-bold text-2xl text-gray-800">
            Bandage
          </Link>
          <HeaderLinks />
        </div>
        <div className="flex text-sky-400 gap-6 items-center">
          <a href="/" className="font-semibold">
            Login / Register
          </a>
          <SearchIcon style={{ fontSize: 25 }} />
          <div className="flex item-center gap-0.5 text-sm font-medium">
            <ShoppingCartIcon style={{ fontSize: 22 }} />1
          </div>
          <div className="flex item-center gap-0.5 text-sm font-medium">
            <FavoriteBorderIcon style={{ fontSize: 22 }} />1
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
