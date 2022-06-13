import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '../lib/google-analytics'
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.replacementClass = ""; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(fas, fab);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageView(url)

    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      {/* <Script  src={`${process.env.NEXT_PUBLIC_ANALYTIC}/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} strategy="lazyOnload"></Script>
      <Script id="google-analytics" strategy="lazyOnload">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config','${process.env.GOOGLE_ANALYTICS_ID}');
      `}
      </Script> */}

      <Layout >

        <Component  {...pageProps} />
      </Layout>
    </>

  )
}

export default MyApp
