const ServeError = () => {
  return (<div>
    <h3>服务器错误</h3>

    <svg t="1628391449062" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2196" width="200" height="200">
      <path d="M951.7 262.2c0 108.4-87.9 196.4-196.4 196.4-108.4 0-196.4-87.9-196.4-196.4 0-108.4 87.9-196.4 196.4-196.4 108.5 0.1 196.4 88 196.4 196.4z m0 0" fill="#F0BB5D" p-id="2197"></path>
      <path d="M894.2 123.4c93.8 107.2 76.7 201 0 277.7-76.7 76.7-201 76.7-277.7 0 0 0 278-65.7 277.7-277.7" fill="#EEAC38" p-id="2198"></path>
      <path d="M725.6 73.8c264.9-16.1 228.1 228.1 228.1 228.1L725.6 73.8" fill="#FFFFFF" p-id="2199"></path>
      <path d="M864.4 490.4L527.2 153.2l59.5-59.5 337.2 337.2-59.5 59.5z m0 0" fill="#206BAB" p-id="2200"></path>
      <path d="M775.2 401.1L527.3 153.2l59.5-59.5 247.9 247.9-59.5 59.5z m0 0" fill="#74A2CA" p-id="2201">
        <animateTransform attributeName="transform" dur="10s"  type="rotate3d" from="-1 1 0 0deg" to="-1 1 0 360deg" repeatCount="indefinite"/>
      </path>
      <path d="M590.6 173.1l-19.8-19.8 20-20 19.8 19.8-20 20z m0 0M630.3 212.8L610.5 193l20-20 19.8 19.8-20 20z m0 0M670 252.4l-19.8-19.8 20-20 19.8 19.8-20 20z m0 0M709.6 292.1l-19.8-19.8 20-20 19.8 19.8-20 20z m0 0M749.3 331.8L729.5 312l20-20 19.8 19.8-20 20z m0 0M789 371.4l-19.8-19.8 20-20 19.8 19.8-20 20z m0 0M828.6 411.1l-19.8-19.8 20-20 19.8 19.8-20 20z m0 0" fill="#1C1C1A" p-id="2202"></path>
      <path d="M868.3 450.8L848.5 431l20-20 19.8 19.8-20 20z m0 0" fill="#1C1C1A" p-id="2203">
        <animateTransform attributeName="transform" dur="10s"  type="rotate3d" from="-1 1 0 0" to="-1 1 0 180deg" repeatCount="indefinite"/>
      </path>
      <path d="M917.9 400.7c33.6-38.4 52-87 52-138.5 0-56.2-21.9-109.1-61.7-148.9-78.7-78.7-204.8-81.9-287.4-9.7l-30.1-30.1-29.7 29.8-19.7-19.7-20 20 19.7 19.7-29.8 29.8 47 47c-19.9 64.4-8 134.1 32.6 188.2l22.7-17c-32-42.7-43.4-96.6-32.1-148.1l217 217c-51.5 11.3-105.4-0.1-148.1-32.1l-17 22.7c36.9 27.7 81.1 42 125.9 42 20.9 0 41.9-3.1 62.3-9.4l46.9 46.9 29.8-29.7 19.7 19.7 20-20-19.7-19.7 29.8-29.8-30.1-30.1z m-40.2-276.9l-19.3 19.3 20 20 19.3-19.3c28.3 33 43.7 74.5 43.7 118.4v3.4L756 80.2c43.3-0.8 86.9 13.8 121.7 43.6zM720.1 84.4l217.1 217.1c-6.4 29.1-19.8 56.2-39.5 79.1L640.9 123.8c23.4-20 50.7-33.2 79.2-39.4z m-168.8 68.7l39.5-39.5L908 430.8l-39.5 39.5-317.2-317.2z m0 0" fill="#1C1C1A" p-id="2204"></path>
      <path d="M75 966.5l-20-20 614.9-614.9 20 20L75 966.5z m0 0M63.9 561l-17.5-22.3 466.1-367L530 194 63.9 561z m0 0M482.8 975.2l-22.3-17.5 367-466.1 22.3 17.5-367 466.1z m0 0" fill="#1C1C1A" p-id="2205">
        <animateTransform attributeName="transform" dur="10s"  type="rotate" from="0 60 70" to="360 60 70" repeatCount="indefinite"/>
      </path>
    </svg>


<svg width="120" height="120"  viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg" version="1.1" >

    <polygon points="60,30 90,90 30,90">
        <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 60 70"
                          to="360 60 70"
                          dur="10s"
                          repeatCount="indefinite"/>
    </polygon>
</svg>
  </div>)
}

export async function getStaticProps() {
	return {
		props: {},
	};
}

export default ServeError