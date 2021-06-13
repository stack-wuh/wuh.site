import { useState } from 'react'
import Affix from '@/components/affix'
import Dialog from '@/components/dialog'
import Carousel from '@/components/carousel'

const AMAP_POSITION = 'https://ditu.amap.com/search?query=枝江市&city=440300&geoobj=113.879277|22.559614|113.889577|22.566063&zoom=10.36&rf=0&showBackBtn=1&noreplace=1'

const galleryDataJSON = [
  {
    url: 'https://src.wuh.site/gallery/douban/p2658084408.webp',
    alt: 'douban zhijiang',
    title: '美丽湖北，美丽枝江',
  },
  {
    url: 'https://src.wuh.site/gallery/douban/p2658084417.webp',
    alt: 'douban zhijiang',
    title: '美丽湖北，美丽枝江',
  },
  {
    url: 'https://src.wuh.site/gallery/douban/p2658084425.webp',
    alt: 'douban zhijiang',
    title: '美丽湖北，美丽枝江',
  },
  {
    url: 'https://src.wuh.site/gallery/douban/p2658084428.webp',
    alt: 'douban zhijiang',
    title: '美丽湖北，美丽枝江',
  },
  {
    url: 'https://src.wuh.site/gallery/douban/p2658084436.webp',
    alt: 'douban zhijiang',
    title: '美丽湖北，美丽枝江',
  }
]

const CarouselItem = ({ url, key }) => {
  const itemKey = key ?? url
  return <div key={itemKey}>
    <div style={{
      width: '100%',
      height: '70vh',
      background: `url(${url}) center center no-repeat`,
      backgroundSize: 'cover'
    }} />
  </div>
}

const Gallery = () => {
  const [visibleDialog, setvisibleDialog] = useState(false)

  const toggleVisible = () => {
    setvisibleDialog(!visibleDialog)
  }

  return (<Affix bottom={100}>
    <Dialog 
      title="山河入梦来" 
      visible={visibleDialog} 
      onCancel={toggleVisible}
      wrapperStyle={{ minHeight: '80vh', margin: '4em auto' }}>
        <Carousel 
          dots={false} 
          onClose={toggleVisible} 
          description="远处蔚蓝天空下涌动着金色的麦浪"
          search={AMAP_POSITION}>
          {
            galleryDataJSON.map(gallery => <CarouselItem url={gallery.url} key={gallery.alt} title={gallery.title} />)
          }
        </Carousel>
    </Dialog>
    <div className='gallery'>
      <button onClick={toggleVisible} className='fade-bgc btn-active'>山河入梦</button>
      <button className='fade-bgc-revert btn-default'></button>
      <style jsx>{`
        .gallery {
          position: relative;
          width: 34px;
          height: 100px;
          text-align: center;
        }

        button {
          width: 2.4em;
          height: inherit;
          outline: none;
          border: none;
          background-color: inherit;
          text-align: center;
          color: var(--color-base-2);
          z-index: 99;
        }

        .btn-active,
        .btn-default {
          position: absolute;
          left: 0;
        }
        .btn-default {
          top: -10px;
          left: 10px;
          z-index: 9;
        }

        .gallery:hover,
        button:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  </Affix>)
}

export default Gallery