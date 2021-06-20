import Link from 'next/link'
import Slider from 'react-slick'

const sourceJSON = [
  {
    title: 'javascript中的继承',
    cover: 'https://src.wuh.site/2021-05/2021-05-10-102644.png',
    href: '/post/2021-05/javascript中的继承'
  },
  {
    title: '搬山计划',
    cover: 'https://src.wuh.site/2021-05/2021-05-07/cover.jpeg',
    href: '/post/2021-05/搬山计划'
  },
  {
    title: '2021年度总结',
    cover: 'https://src.wuh.site/2021-04-07/sss.jpg',
    href: '/post/2021-04/2021年度总结'
  }
]

const SimpleArrow = () => {
  return <div className="arrow" style={{ display: 'none'}} />
}

const ImageItem = ({
  title,
  cover,
  href
}) => {
  return <div className="e-image-item">
    <Link href={href} rel='next'>
      <img src={cover} alt={title} />
    </Link>
    <div className="title">
      <span>{title}</span>
      <span className="iconfont icon-affix icon-affix-right" />
      <span className='iconfont icon-affix icon-affix-left' />
    </div>
    <style jsx>{`
      .e-image-item {
        position: relative;
        height: 145px;
        border-radius: var(--border-radius-base);
        background: url(https://src.wuh.site/cover.png?w=384&q=75) center center no-repeat;
        overflow: hidden;
      }
      .e-image-item:hover img {
        transform: scale(1.1);
        transition: var(--transition-base);
      }
      .e-image-item img{
        width: 100%;
        height: 145px;
        object-fit: cover;
        transform: scale(1);
        transition: var(--transition-base);
      }
      .title {
        position: absolute;
        top: 1em;
        right: 1em;
        padding: var(--padding-base);
        border-radius: var(--border-radius-base);
        background: linear-gradient(45deg, var(--background-text-color), var(--color-yellow-1));
        color: var(--color-4);
        font-size: var(--font-size-base);
        transform: rotate(15deg) translateY(10px);
        transition: var(--transition-base);
      }
      .e-image-item:hover .title {
        background-color: var(--color-base-10);
        color: var(--color-base-1);
        transform: rotate(0) translateY(0);
        transition: var(--transition-base);
      }
      .icon-affix-right {
        position: absolute;
        left: -10px;
        top: -10px;
      }
      .icon-affix-left {
        position: absolute;
        right: -10px;
        top: -10px;
        opacity: 0;
      }
      .e-image-item:hover .icon-affix-left {
        position: absolute;
        right: 0;
        opacity: 1;
        transition: var(--transition-base);
      }
    `}</style>
  </div>
}

const ImageLoop = () => {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: 'ease',
    infinite: true,
    nextArrow: <SimpleArrow />,
    prevArrow: <SimpleArrow />
  }

  return <div className="b-text-loop">
    <Slider {...settings}>
      {
        sourceJSON.map(source => <ImageItem key={source.title} {...source} />)
      }
    </Slider>
    <style global jsx>{`
      .b-text-loop {
        margin-bottom: var(--margin-base);
        border-radius: var(--border-radius-base);
        background-color: var(--color-base);
      }
      .b-text-loop:hover {
        cursor: pointer;
      }
      .b-text-loop .slick-dots {
        bottom: 0;
      }
    `}</style>
  </div>
}

export default ImageLoop