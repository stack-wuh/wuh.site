import React, { useRef } from 'react'
import classnames from 'classnames'
import Slider, { Settings } from 'react-slick'
import Space from '@/components/space/space'
import { Button } from '@/components/button'

type galleryPropsType = {
  data: any[],
  onClose?: () => void
}
const Gallery: React.FC<galleryPropsType> = (props) => {
  const slideRef = useRef<Slider | null>(null)
  const { data } = props

  const innerClassnames = classnames('ww_gallery__item')

  const slideConfig: Settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 2000,
    arrows: false
  }

  const handleNextSlide = () => slideRef.current?.slickNext()

  const handlePrevSlide = () => slideRef.current?.slickPrev()

  const handleClose = () => {
    if (props.onClose) {
      props.onClose()
    }
  }

  return <div className="ww_gallery">
    <Slider ref={slideRef} {...slideConfig}>
      {
        data.map(item => (<div key={item} className={innerClassnames}>
          <div className="ww_gallery__bg">
            <style jsx>{`
              .ww_gallery__bg {
                background: url(https://src.wuh.site/2021-08/2021-08-29-090210.png?width=384&quality=75);
              }
            `}</style>
          </div>
        </div>))
      }
    </Slider>
    <div className="ww_gallery__footer">
      <Space>
        <Button onClick={handlePrevSlide} icon='icon-arrow-lift' />
        <Button onClick={handleNextSlide} icon='icon-arrow-right' />
        <Button onClick={handleClose} icon='icon-searchclose' />
      </Space>
    </div>
  </div>
}

export default Gallery