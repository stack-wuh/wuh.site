import React, { Fragment, useEffect, useState } from 'react'

const Circle = ({ width, height, radius, x, y, bgColor, strokeColor, strokeWidth, process, className }) => {
    const [moveStep, setmoveStep] = useState(0)
    const [lastMoveStep, setLastMoveStep] = useState(0)
    const strokeDashArray = Math.floor(2*Math.PI*radius)
    const calcCircleLength = () => {
        let circleLength = Math.floor(2 * Math.PI * radius)
        let _step = process/100 * circleLength
        let _last = (process - 1)/100 * circleLength || 0
        setmoveStep(_step)
        setLastMoveStep(_last)
    }

    useEffect(() => {
        calcCircleLength()
    })

    return (<Fragment>
        <svg className={className} height={height} width={width}>
            <circle
                r={radius}
                cx={x}
                cy={y}
                stroke={bgColor}
                stroke-width={strokeWidth}
                fill='none'>
            </circle>
            <circle
                r={radius}
                cx={x}
                cy={y}
                stroke={strokeColor}
                stroke-dasharray={`${moveStep}, ${strokeDashArray}`}
                stroke-linecap='round'
                stroke-width={strokeWidth}
                fill='none'
                transform='rotate(-90)'
                transform-origin='center'>
                    <animate
                        attributeName='stroke-dasharray'
                        to={`${moveStep}, ${strokeDashArray}`}
                        from={`${lastMoveStep}, ${strokeDashArray}`}
                        dur='1.5s' />
            </circle>
        </svg>
    </Fragment>)
}

Circle.defaultProps = {
    height: 200,
    width: 200,
    radius: 50,
    x: 100,
    y: 100,
    bgColor: '#ccc',
    strokeColor: '#999',
    strokeWidth: '10',
    process: 0,
    className: ''
}

export default Circle