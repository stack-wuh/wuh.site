import Head from 'next/head'

const Theme = () => {
  return (<>
    <Head>
      <script dangerouslySetInnerHTML={{
        __html: `(function(){const b=document.querySelector("html");const c=document.cookie.replace(/; /gi,"&");const a=new URLSearchParams(c);const d=a.get("data-theme-mode")||"light";const e=a.get("lang")||"zh-cn";b.setAttribute("data-theme-mode",d);b.setAttribute("lang",e)})();`
      }}></script>
    </Head>
  </>)
}

export default Theme