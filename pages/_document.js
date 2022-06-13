import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html leng='en'>
        <Head >
          <script async src={`${process.env.NEXT_PUBLIC_ANALYTIC}/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} ></script>

          <script dengerouslysetinnerhtml={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config','${process.env.GOOGLE_ANALYTICS_ID}');
        `}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html >
    )
  }
}

export default MyDocument