import Header from "./header";
import Footer from "./footer";
import { workSans } from "@/config/fonts";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={`${workSans.className} `}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
