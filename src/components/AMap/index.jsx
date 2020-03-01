import React, { Fragment } from 'react'
import { Map } from 'react-amap'
const config = require('../../utils/config')

function CustomAMap ({children, className, style}) {
    return (<Fragment>
        <div className={className} style={style}>
            <Map
                zoom={12}
                center={config.amap.center}
                amapkey={config.amap.key}
                mapStyle={config.amap.mapStyle}>
                    {children}
            </Map>
        </div>
    </Fragment>)
}

export default CustomAMap