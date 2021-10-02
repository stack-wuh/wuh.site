import Image, { ImageProps } from 'next/image'

export default function image (props: ImageProps) {
  return (<Image {...props} alt='img' />)
}