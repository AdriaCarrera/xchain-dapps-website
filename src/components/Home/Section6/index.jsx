import Image from "next/image";

import Peersyst from "@/images/peersyst.png";
import Axelar from "@/images/axelar.png";
import Evmos from "@/images/evmos.png";
import Blockscout from "@/images/blockscout.png";

const Contributors = [
  {
    img: Peersyst,
    desc: "Primary innovator and developer of XRPL EVM sidechain",
  },
  {
    img: Axelar,
    desc: "Connecting XRP Ledger to EVM world via bridge secured by Axelar validators",
  },
  {
    img: Evmos,
    desc: "Ethermint cosmos-sdk module to provides EVM compatibility",
  },
  {
    img: Blockscout,
    desc: "Building EVM block explorer",
  },
];

function Section6() {
  return (
    <section className="px-4 py-8 md:px-[80px] md:py-[100px] ">
      <div className="flex flex-col gap-[60px] text-white">
        <h2 className=" text-[20px] md:text-[40px] font-bold">Key Project Contributors</h2>
        <div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-3 gap-y-16">
          {Contributors.map((each, idx) => (
            <div className="flex flex-col items-center gap-5" key={idx}>
              <div className="md:w-[200px] md:h-[200px] w-[120px] h-[120px] border border-white rounded-full flex justify-center items-center">
                <Image src={each.img} width={0} height={0} alt={`xrpl-cross-chain-web - contributor ${idx}`} className="max-md:w-[73px]" />
              </div>
              <p className="text-center text-[12px] md:text-[16px] w-3/5">{each.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Section6;
