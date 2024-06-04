import Image from "next/image";

import Orange from "@/images/orange-cut.png";

function Section4() {
  return (
    <section className={` py-[100px] px-4 md:px-[80px] text-white `}>
      <div className="flex flex-col gap-[60px]">
        <h2 className="text-white text-[40px] font-bold">How it works</h2>
        <div className="flex items-start min-[1030px]:items-center">
          <div className="flex flex-col items-center gap-5 w-1/4 ">
            <div className="md:w-[110px] w-[60px] md:h-[110px] h-[60px] border border-[#32E685] rounded-full flex justify-center items-center text-[12px] md:text-[24px] font-bold">
              XRP
            </div>
            <div className="md:w-[180px] lg:w-[230px] w-[102px] h-[370px] flex justify-center items-center text-[12px] md:text-[24px] font-bold border border-white/65">
              XRPL
            </div>
            <ul className="list-disc flex flex-col gap-2 pl-4 text-[12px] md:text-[20px]">
              <li>XRPL wallets such as Xaman, Crossmark</li>
              <li>XRPL libraries</li>
              <li>XRPL Consensus</li>
            </ul>
          </div>
          <div className="flex flex-col md:w-full  md:h-[370px] gap-5 w-2/4 max-[1030px]:mt-32 ">
            <div className="flex justify-between items-center w-full md:h-[130px] px-4 md:px-[32px]">
              <div className="md:w-[130px] w-[60px] md:h-[130px] h-[60px] border border-white flex justify-center items-center text-[10px]  md:text-[12px] lg:text-[20px] font-bold rounded-full">
                wERC-20
              </div>
              <div className="md:w-[130px] w-[60px] md:h-[130px] h-[60px] border border-white flex justify-center items-center text-[10px]  md:text-[20px] font-bold rounded-full">
                ERC-20
              </div>
            </div>
            <div className="h-[90px] relative  ">
              <Image
                src={Orange}
                placeholder="blur"
                alt="xrpl-cross-chain-web - images"
                width={0}
                height={0}
                className="object-center absolute h-[90px]  w-full -z-[1]"
              />
              <div className="flex items-center justify-evenly gap-4 h-[90px] px-4 md:px-[30px] ">
                <h3 className="text-[7px] md:max-[1030px]:text-[14px] min-[1030px]:text-[20px]  text-center ">
                  XRPL-Axelar <br className=" min-md:hidden " /> connection
                </h3>
                <h3 className="text-[7px] md:max-[1030px]:text-[14px] min-[1030px]:text-[20px]  text-center ">
                  Axelar Network
                </h3>
                <h3 className="text-[7px] md:max-[1030px]:text-[14px] min-[1030px]:text-[20px]  text-center ">
                  EVM Sidechain-Axelar <br className=" min-md:hidden " />{" "}
                  connection
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center w-full md:h-[130px] px-4 md:px-[32px]">
              <div className="md:w-[130px] w-[60px] md:h-[130px] h-[60px] border border-white flex justify-center items-center text-[10px]  md:text-[20px] font-bold rounded-full">
                IOU
              </div>
              <div className="md:w-[130px] w-[60px] md:h-[130px] h-[60px] border border-white flex justify-center items-center text-[10px]  md:text-[20px] font-bold rounded-full">
                eIOU
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5  w-1/4 ">
            <div className="md:w-[110px] w-[60px] md:h-[110px] h-[60px] border border-[#7919FF] rounded-full flex justify-center items-center text-[12px] md:text-[24px] font-bold">
              eXRP
            </div>
            <div className="md:w-[180px] lg:w-[230px] w-[102px] h-[370px] flex justify-center items-center text-[12px] md:text-[24px]  font-bold border border-white/65">
              <span className=" max-lg:text-center px-4">EVM Sidechain</span>
            </div>
            <ul className="list-disc flex flex-col gap-2 pl-4 text-[12px] md:text-[20px]">
              <li>EVM wallets such as Metamask</li>
              <li>EVM libraries and SDKs such as Openzeppelin</li>
              <li>PoA Consensus</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
