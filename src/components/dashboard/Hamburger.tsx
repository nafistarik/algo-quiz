import { Menu } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function Hamburger({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header className="flex items-center justify-between relative">
      <button className="lg:hidden absolute top-[30px] right-0 p-4 text-muted-foreground rounded-br-xl" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen && <Menu className="h-6 w-6 " />}
        <span className="sr-only">Toggle menu</span>
      </button>

    </header>
  );
}