import Image from "next/image";

import Logo from "@/images/Logo-mini.png";
import { workSans } from "@/config/fonts";

function Footer() {
    return (
        <footer
            className={`${workSans.className} px-4 py-8 md:p-[80px] text-white`}
        >
            <div className="flex flex-col">
                <div className=" pb-[32px] md:pb-[80px] flex flex-col">
                    <h2 className="text-[20px] md:text-[36px] font-bold mb-8">
                        Be the first to tap into XRP liquidity
                    </h2>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeYX-yyGkqq8zQ9nxyDI8nYUM9-8Y2G0yupeM8sziFI9rTR_w"
                        target="_blank"
                        className="px-5 py-3 w-max bg-[#9A52FF] flex justify-center items-center   md:text-[20px] font-bold rounded-[8px]"
                    >
                        Join the 1st Cohort
                    </a>
                </div>
                <div className="flex flex-col gap-[80px] pt-[80px]">
                    <div className="flex flex-col">
                        <h3 className="text-[24px] font-bold mb-6">
                            XRPL Cross chain dApp
                        </h3>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-8 ">
                                <a
                                    href={"https://opensource.ripple.com"}
                                    target="_blank"
                                    className=" hover:text-[#7919FF] transition-all hover:underline duration-300"
                                >
                                    Developers
                                </a>
                                <a
                                    target="_blank"
                                    href={
                                        "https://opensource.ripple.com/docs/evm-sidechain/xrpl-evm-sidechain-faq/"
                                    }
                                    className="hover:text-[#7919FF] transition-all hover:underline duration-300"
                                >
                                    FAQ
                                </a>
                            </div>
                            <span className="text-[12px] text-[#838386]">
                                v1.2.0 - Terms
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <Image
                            src={Logo}
                            width={120}
                            height={35}
                            alt="xrpl-cross-chain-web - logo"
                            placeholder="blur"
                        />
                        <p className="text-[12px] text-[#838386]">
                            ©2024 XRP Ledger. Open Source.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
