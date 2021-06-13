import { useRef, useState, useMemo } from 'react'
import Slider from 'react-slick'

const SimpleArrow = () => {
  return <div style={{ display: 'none' }} />
}

const Carousel = ({
  dots,
  speed,
  lazyLoad,
  infinite,
  autoplay,
  nextArrow,
  prevArrow,
  slidesToShow,
  slidesToScroll,
  onClose,
  description,
  search,
  children
}) => {
  const [currentIndex, setcurrentIndex] = useState(0)
  const slickRef = useRef(null)

  const handleChangeAfter = (index) => {
    setcurrentIndex(index)
  }

  const currentData = useMemo(() => {
    return children[currentIndex].props
  }, [currentIndex])

  const settings = {
    dots,
    speed,
    lazyLoad,
    infinite,
    autoplay,
    nextArrow,
    prevArrow,
    slidesToShow,
    slidesToScroll,
    afterChange: handleChangeAfter,
    className: 'c-slick-item'
  }

  const descripWrapper = description && (<div className="b-description">
    <p className='b-description__grap'>{description}&nbsp;--&nbsp;{currentData?.title}&nbsp;&nbsp;(by @吴尒红)</p>
  </div>)

  return <div className="b-carousel">
    <Slider {...settings} ref={slickRef}>
      {children}
    </Slider>
    {descripWrapper}
    <div className="b-btn-wrapper">
      <a className='btn btn-position iconfont icon-map' aria-disabled={!search} href={search} target="_blank" alt='position 地址信息' />
      <button onClick={() => slickRef.current.slickPrev() } className="btn btn-prev iconfont icon-arrow-lift" />
      <button onClick={() => slickRef.current.slickNext() } className="btn btn-next iconfont icon-arrow-right" />
      <button onClick={onClose} className="btn btn-close iconfont icon-searchclose" />
    </div>
    <style jsx>{`
      .b-carousel {
        position: relative;
        width: inherit;
        height: 100%;
        padding: var(--padding-base);
        border: 1px solid var(--color-base-7);
        box-sizing: border-box;
        border-radius: var(--border-radius-base);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .b-btn-wrapper .btn {
        padding: .4em;
        border: var(--border-base);
        border-radius: var(--border-radius-base);
        box-sizing: border-box;
        color: var(--color-1);
      }
      .b-btn-wrapper .btn:hover {
        cursor: pointer;
        color: var(--color-2);
        transform: scale3d(1.1, 1.1, 1.1);
        border-color: var(--color-2);
        transition: var(--transition-base);
      }
      .b-btn-wrapper .btn-position,
      .b-btn-wrapper .btn:not(:last-of-type) {
        margin-right: 1em;
        text-decoration: none;
      }
    `}</style>
    <style jsx global>{`
      .c-slick-item {
        width: inherit;
        height: 100%;
      }
      .b-btn-wrapper, .b-description {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: .6em 2em;
        color: var(--color-1);
        background-color: rgba(0, 0, 0, .4);
        transition: var(--transition-base);
      }
      .b-carousel .b-description {
        bottom: 3.1em;
        border-bottom: 1px solid var(--color-1);
        padding: .2em 2em;
      }
    `}</style>
  </div>
}

Carousel.defaultProps = {
  dots: true,
  speed: 500,
  lazyLoad: true,
  autoplay: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  description: null,
  search: null,
  nextArrow: <SimpleArrow />,
  prevArrow: <SimpleArrow />,
  onClose () {}
}

export default Carousel