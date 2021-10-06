import withConfig from "@/hooks/useConfig"

interface ServerInterface {
  config: any
}

export default function Server(props: ServerInterface) {
  const {
    config
  } = props

  const appConfig = withConfig()

  return (<div>
    <h1>Server Config List</h1>
    <details>
      <summary>Node Server Config</summary>
      <pre>{JSON.stringify(config, null, 2)}</pre>
    </details>
    <details>
      <summary>Nextjs App config List</summary>
      <pre>{JSON.stringify(appConfig, null, 2)}</pre>
    </details>
  </div>)
}

export async function getStaticProps() {
  let config: {
    [k: string]: any
  } = {}
  Object.entries(process.env).forEach(([k, v]) => {
    config[k] = v
  })
  return {
    props: {
      config
    }
  }
}
