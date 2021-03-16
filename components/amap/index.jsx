import { Map, Marker } from 'react-amap'

const center = {
  longitude: 113.857083,
  latitude: 22.581175
}

const amapConfig = {
  zoomEnable: false,
  zoom: 14,
}

const LocationMap = () => {
  return (<div className="a-react-map">
    <Map 
      {...amapConfig}
      amapkey="d9895d6db5dfef6baaf99d47ee746707"
      center={center}>
        <Marker position={center} />
    </Map>
    <style jsx global>{`
      .a-react-map {
        height: 400px;
      }
    `}</style>
  </div>)
}

export default LocationMap