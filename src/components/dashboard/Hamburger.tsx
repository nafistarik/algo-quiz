import { Menu, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function Hamburger({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header className="flex items-center justify-between  relative">
      <button className="lg:hidden absolute -top-[3px] left-0 bg-customOrange p-3 text-black rounded-br-xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 " />}
        <span className="sr-only">Toggle menu</span>
      </button>

    </header>
  );
}