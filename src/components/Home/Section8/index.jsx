import Image from "next/image";

import ArrowUp from "@/images/arrow-up.png";
import BlueGradient from "@/images/sec8.png";

function Section8() {
  return (
    <section className=" max-md:h-auto max-md:min-h-max max-[1400px]:min-h-[100vh] min-[1400px]:h-[100vh] overflow-hidden">
      <div className="flex flex-col gap-[60px] text-white h-full ">
        <div className="flex flex-col">
          <h2 className="px-4 md:px-[80px] text-[20px] md:text-[40px] font-bold mt-8">
            How can you build a cross-chain dApp?
          </h2>
          <p className="text-[12px] md:text-[20px] px-4 md:px-[80px] mt-8">
            A cross-chain dApp has both XRPL and EVM smart contract components
            that communicate <br /> through special cross-chain transactions
            enabled by SDKs from Axelar network.
          </p>
        </div>
        <div className="custom-grid-sec8 relative overflow-hidden max-[1350px]:hidden ">
          <Image
            src={BlueGradient}
            width={0}
            height={0}
            alt="xrpl-cross-chain-web - gradients"
            placeholder="blur"
            className="absolute left-0 top-0 w-full h-full -z-[1]"
          />
          <div />
          <a
            target="_blank"
            href="https://opensource.ripple.com/docs/evm-sidechain/get-started-evm-sidechain/"
            className="absolute top-[180px] left-[180px] h-[90px] w-[360px]   px-[40px] text-[20px] border border-white/65 font-bold flex justify-between hover:text-[#7919FF] transition-all duration-300 items-center bg-[#111112]"
          >
            <span>Build EVM component (smart contracts)</span>
            <Image
              src={ArrowUp}
              width={0}
              height={0}
              alt="xrpl-cross-chain-web - icons"
            />
          </a>
          <a
            href="https://xrpl.org/docs/"
            target="_blank"
            className="absolute top-[90px] left-[180px] w-[360px] h-[90px]  px-[40px] text-[20px] hover:text-[#7919FF] transition-all duration-300 font-bold flex justify-between items-center bg-[#111112]"
          >
            <span>Build XRPL component</span>
            <Image
              src={ArrowUp}
              width={0}
              height={0}
              alt="xrpl-cross-chain-web - icons"
            />
          </a>
          <div className="absolute w-[360px] h-[270px] top-[180px] left-[540px] p-[50px]  flex flex-col gap-5 bg-[#111112]">
            <h3 className="text-[20px] font-bold">Using cross-chain SDKs</h3>
            <a
              target="_blank"
              href="https://docs.axelar.dev/dev/axelarjs-sdk/intro"
              className="flex items-center border-none w-full justify-between text-[20px] hover:text-[#7919FF] transition-all duration-300 font-light gap-5"
            >
              <span>Use Axelar SDK</span>
              <Image
                src={ArrowUp}
                width={0}
                height={0}
                alt="xrpl-cross-chain-web - icons"
              />
            </a>
            <a
              target="_blank"
              href="https://opensource.ripple.com/docs/axelar/call-a-smart-contract-function/"
              className="flex items-center border-none w-full justify-between text-[20px] hover:text-[#7919FF] transition-all duration-300 font-light gap-5"
            >
              <span>Make a smart contract call from XRPL to Axelar</span>
              <Image
                src={ArrowUp}
                width={0}
                height={0}
                alt="xrpl-cross-chain-web - icons"
              />
            </a>
          </div>
          <div className="absolute w-[360px] h-[270px] top-[180px] left-[900px] p-[50px]  flex flex-col gap-5 bg-[#111112]">
            <h3 className="text-[20px] font-bold">Check out the Docs</h3>
            <a
              href="https://xrpl.org/docs/"
              target="_blank"
              className="flex items-center border-none w-full justify-between text-[20px] hover:text-[#7919FF] transition-all duration-300 font-light gap-5"
            >
              <span>XRPL Docs</span>
              <Image
                src={ArrowUp}
                width={0}
                height={0}
                alt="xrpl-cross-chain-web - icons"
              />
            </a>
            <a
              href="https://opensource.ripple.com/docs/evm-sidechain/intro-to-evm-sidechain/"
              target="_blank"
              className="flex items-center border-none w-full justify-between text-[20px] hover:text-[#7919FF] transition-all duration-300 font-light gap-5"
            >
              <span>EVM Sidechain Docs</span>
              <Image
                src={ArrowUp}
                width={0}
                height={0}
                alt="xrpl-cross-chain-web - icons"
              />
            </a>
            <a
              target="_blank"
              href="https://docs.axelar.dev/"
              className="flex items-center border-none w-full justify-between text-[20px] hover:text-[#7919FF] transition-all duration-300 font-light gap-5"
            >
              <span>Axelar Docs</span>
              <Image
                src={ArrowUp}
                width={0}
                height={0}
                alt="xrpl-cross-chain-web - icons"
              />
            </a>
          </div>
          <div className="w-[90px] absolute  h-[90px] top-[180px] left-[90px]">
            <div className="rounded-full border border-white h-full w-full " />
          </div>
          <div className="w-[270px] absolute  h-[270px] border-none -z-[1] top-[90px] left-[1080px]">
            <div className="rounded-full border border-white h-full w-full " />
          </div>
          <div className="w-[90px] absolute  h-[90px] top-[270px] left-[90px]">
            <div className="rounded-full border border-white h-full w-full " />
          </div>
          <div className="w-[90px] absolute  h-[90px] top-[270px] left-[180px] ">
            <div className="rounded-full border border-white h-full w-full " />
          </div>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />

          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />

          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="custom-grid-mobile-sec8  relative overflow-hidden min-[1350px]:hidden">
          <Image
            src={BlueGradient}
            width={0}
            height={0}
            alt="xrpl-cross-chain-web - gradients"
            placeholder="blur"
            className="absolute left-0 top-0 w-full h-full -z-[1]"
          />
          <div className="absolute custom-width-sec8 pl-5 h-full flex flex-col gap-8 py-4 top-0 left-0  border-none">
            <a
              href="https://xrpl.org/docs/"
              target="_blank"
              className="col-span-4 px-[40px] p-2 text-[14px] h-1/3 font-bold flex justify-between items-center border border-white/65 bg-[#111112] "
            >
              <span>Build XRPL component</span>
              <Image
                src={ArrowUp}
                width={0}
                height={0}
                alt="xrpl-cross-chain-web - icons"
              />
            </a>
            <a
              href="https://opensource.ripple.com/docs/evm-sidechain/get-started-evm-sidechain/"
              target="_blank"
              className="col-span-4 px-[40px] p-3 text-[14px] font-bold h-1/3 flex justify-between items-center border border-white/65 bg-[#111112] "
            >
              <span>Build EVM component (smart contracts)</span>
              <Image
                src={ArrowUp}
                width={0}
                height={0}
                alt="xrpl-cross-chain-web - icons"
              />
            </a>
            <div className="  flex flex-col h-full gap-5 p-3 bg-[#111112]">
              <h3 className="text-[14px] font-bold">Using cross-chain SDKs</h3>
              <a
                href="https://docs.axelar.dev/dev/axelarjs-sdk/intro"
                target="_blank"
                className="flex items-center border-none w-full justify-between text-[14px] font-light gap-5 "
              >
                <span>Use Axelar SDK</span>
                <Image
                  src={ArrowUp}
                  width={0}
                  height={0}
                  alt="xrpl-cross-chain-web - icons"
                />
              </a>
              <a
                target="_blank"
                href="https://opensource.ripple.com/docs/axelar/call-a-smart-contract-function/"
                className="flex items-center border-none w-full justify-between text-[14px] font-light gap-5 "
              >
                <span>Make a smart contract call from XRPL to Axelar</span>
                <Image
                  src={ArrowUp}
                  width={0}
                  height={0}
                  alt="xrpl-cross-chain-web - icons"
                />
              </a>
            </div>
            <div className="col-span-4 row-span-3 h-full  p-3 flex flex-col gap-5 bg-[#111112]">
              <h3 className="text-[14px] font-bold">Check out the Docs</h3>
              <a
                target="_blank"
                href="https://xrpl.org/docs/"
                className="flex items-center border-none w-full justify-between text-[14px] font-light gap-5 "
              >
                <span>XRPL Docs</span>
                <Image
                  src={ArrowUp}
                  width={0}
                  height={0}
                  alt="xrpl-cross-chain-web - icons"
                />
              </a>
              <a
                target="_blank"
                href="https://opensource.ripple.com/docs/evm-sidechain/intro-to-evm-sidechain/"
                className="flex items-center border-none w-full justify-between text-[14px] font-light gap-5 "
              >
                <span>EVM Sidechain Docs</span>
                <Image
                  src={ArrowUp}
                  width={0}
                  height={0}
                  alt="xrpl-cross-chain-web - icons"
                />
              </a>
              <a
                target="_blank"
                href="https://docs.axelar.dev/"
                className="flex items-center border-none w-full justify-between text-[14px] font-light gap-5  "
              >
                <span>Axelar Docs</span>
                <Image
                  src={ArrowUp}
                  width={0}
                  height={0}
                  alt="xrpl-cross-chain-web - icons"
                />
              </a>
            </div>
          </div>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </section>
  );
}

export default Section8;
