import { useState, useEffect } from 'react'
import Affix from '@/components/affix'
import Dialog from '@/components/dialog'
import Carousel from '@/components/carousel'
import fetcher from '@/lib/fetch'
import config from '@/pages/api/config'

const AMAP_POSITION = 'https://ditu.amap.com/search?query=枝江市&city=440300&geoobj=113.879277|22.559614|113.889577|22.566063&zoom=10.36&rf=0&showBackBtn=1&noreplace=1'

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
  const [gallery, setgallery] = useState(() => config.gallery.data.rows)

  const toggleVisible = () => {
    setvisibleDialog(!visibleDialog)
  }

  useEffect(() => {
    async function getGalleryList () {
      const { data: { rows } } = await fetcher('/api/gallery')
      setgallery(rows)
    }

    getGalleryList()
  }, [])

  return (<Affix className='gellary' bottom={100}>
    <Dialog 
      title="山河入梦来" 
      visible={visibleDialog} 
      onCancel={toggleVisible}
      wrapperStyle={{ minHeight: '80vh', margin: '4em auto' }}>
        <Carousel 
          dots={false} 
          onClose={toggleVisible} 
          description="远处蔚蓝天空下涌动着金色的麦浪"
          search={AMAP_POSITION}
          allowFooter>
          {
            gallery.map(gallery => <CarouselItem url={gallery.url} key={gallery.alt} title={gallery.title} />)
          }
        </Carousel>
    </Dialog>
    <div className='gallery'>
      <button onClick={toggleVisible} className='fade-bgc btn-active'>山河入梦</button>
      <button className='fade-bgc-revert btn-default'></button>
      <style jsx>{`
        .gallery {
          position: relative;
          z-index: 999;
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