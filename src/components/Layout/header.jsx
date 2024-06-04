import { workSans } from "@/config/fonts";
import Link from "next/link";

function Header() {
  return (
    <header
      className={`${workSans.className} h-[72px] bg-white w-full flex items-center max-md:justify-center px-[40px]`}
    >
      <nav className="font-semibold text-black flex items-center  gap-[80px]">
        <Link href={"/"}>XRPL Cross chain dApp</Link>
        <a
          href={"https://opensource.ripple.com"}
          target="_blank"
          className="hidden md:block"
        >
          Developers
        </a>
        <a
          target="_blank"
          href={
            "https://opensource.ripple.com/docs/evm-sidechain/xrpl-evm-sidechain-faq/"
          }
          className="hidden md:block"
        >
          FAQ
        </a>
      </nav>
    </header>
  );
}
export default Header;
