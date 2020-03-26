import React from 'react'
import styles from 'styles/location.module.scss'
import ListItem from './components/listItem'
import CustomAMap from '../../components/AMap'
import { Marker } from 'react-amap'
import { useTitle } from 'hooks'
const config = require('../../utils/config')

const menuMaps = [
    {
        label: 'name',
        icon: '&#xe6f0;',
        desc: '闷油瓶 | shadow 1995.4.15'
    },
    {
        label: 'location',
        icon: '&#xe758;',
        desc: '湖北宜昌 | 广州深圳'
    },
    {
        label: 'collect',
        icon: '&#xe7b3;',
        desc: 'MUSIC | DOTA2 | ZHIHU | GITHUB'
    },
    {
        label: 'spaclie',
        icon: '&#xe6f5;',
        desc: 'JAVASCRIPT | VUE | REACT | NODEJS | MONGODB | UNIAPP | TARO'
    },
    {
        label: 'link',
        icon: '&#xe74a;',
        desc: '周杰伦 | 李健 | 李宗盛 | 轻音乐'
    }
]

function Location () {
    useTitle('千里江陵一日还', false)

    return (<>
        <div className={styles.location_wrap}>
            {
                menuMaps.map((v, i) => (<ListItem
                    key={i}
                    type={v.icon}
                    desc={v.desc}
                    ></ListItem>))
            }
        </div>
        <CustomAMap className={styles.custom_map}>
            <Marker position={config.amap.center} />
        </CustomAMap>
    </>)
}

export default Location 