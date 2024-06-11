import Head from "next/head";
import PropTypes from "prop-types";

function SEO({ route }) {
  const baseUrl = "https://xrplevm.org";
  const keywords = "xrpl,evm sidechain,xrpl evm sidechain,blockchain";
  const title = "XRPL EVM Sidechain";
  const description =
    "Be the first to build cross-chain dApps that harness the power of XRP liquidity in an EVM environment";
  const ogImage = {
    url: "/og-image.png",
    alt: "XRPL EVM Sidechain",
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${baseUrl}${route}`} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}${route}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.url} />
      <meta property="og:image:alt" content={ogImage.alt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={baseUrl} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://twitter.com/peersyst`}
      />
      <meta name="twitter:creator" content="@peersyst" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage.url} />
      <meta name="application-name" content={baseUrl} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Peersyst" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
export default SEO;
