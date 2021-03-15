import Head from 'next/head'

export function AmpIncludeCustomElement (props) {
  return (<Head>
    <script 
      async
      custom-element={props.name}
      src={`https://cdn.ampproject.org/v0/${props.name}-${props.version}.js`}
      key={props.name} />
  </Head>)
}

export function AmpIncludeAmpScript () {
  return <AmpIncludeCustomElement name='amp-script' version="0.1" />
}

export function AmpIncludeAmpInstallServiceworker() {
  return (
    <AmpIncludeCustomElement name="amp-install-serviceworker" version="0.1" />
  )
}