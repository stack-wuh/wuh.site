export const isDev = () => {
  return process.env.NODE_ENV === 'development'
}

export const isProd = () => {
  return process.env.NODE_ENV === 'production'
}