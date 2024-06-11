function Section2() {
    return (
        <section className={` bg-black md:py-24 px-4 py-8`}>
            <div className=" md:pl-[80px]">
                <h2 className="text-[20px] md:text-[40px] font-bold text-white">
                    Cross-chain dApps on XRP Ledger
                </h2>

                <p className="text-[12px] md:text-[20px]  tracking-[0.3px] mt-8 text-white lg:max-w-[60%]">
                    <span className="text-[#9A52FF]">XRPL</span> cross-chain
                    dApps blend XRPL features with EVM smart contracts.
                    Connected via Axelar network, they open up new use cases
                    that single chain alone can&apos;t provide.
                    <br />
                    <a
                        href="https://opensource.ripple.com/docs/axelar/intro-to-axelar/"
                        target="_blank"
                        className="text-[#9A52FF]"
                    >
                        Learn more.
                    </a>
                </p>
            </div>
        </section>
    );
}
export default Section2;
