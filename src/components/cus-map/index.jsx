import React from 'react'


export default class Map extends React.PureComponent {
    state = {
        mapRef: null
    }
    componentDidMount () {
        this.timer = setTimeout (() => {
            let map = new window.AMap.Map('container', {
                resizeEnable: true,
                zoom: 15,
                center: [113.857232,22.581004],
                scrollWheel: true,
                dragEnable: true,
                zoomEnable: true,
                lang: 'zh_en',
                mapStyle: 'amap://styles/099cade1e289f35941ec1201ea402f5f'
            })
            let marker = new window.AMap.Marker({
                position: [113.857232,22.581004],
            })
            map.add(marker)
            map.setFeatures(['bg', 'road', 'point', 'building'])
            this.setState({
                mapRef: map
            })
        }, 500)
    }
    componentWillUnmount () {
        clearTimeout(this.timer)
    }
    render () {
        return (<>
            <div id="container" style={{width: '100%', height: '300px'}}></div>
        </>)
    }
}