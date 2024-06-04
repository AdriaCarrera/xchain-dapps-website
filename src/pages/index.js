import SEO from "@/common/SEO";
import HomeComponent from "@/components/Home";

export default function Home() {
  return (
    <>
      <SEO title="Home" route="/" desc="lorem ipsum " />
      <HomeComponent />
    </>
  );
}
