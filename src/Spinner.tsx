import React, { useEffect, useState } from "react"

type Props = {
  size?: string,
  fill: boolean,
  color: string
}

const r = 40

function getXOffset(deg: number): number {
  return r * Math.sin(deg / 180 * Math.PI)
}

function getYOffset(deg: number): number {
  return r * (1 - Math.cos(deg / 180 * Math.PI))
}

/**
 * @param {number} deg The degree value in 360°.
 */
function getD(fill: boolean, deg: number): string {
  let ret = `${fill ? 'M 50 50 l 0 -40' : 'M 50 10'} a 40 40 0 ${deg >= 180 ? 1 : 0} 1 ${getXOffset(deg)} ${getYOffset(deg)} M 50 50 Z`
  return ret
}

export default function Spinner({ size, fill, color }: Props) {
  const [deg, setDeg] = useState(0)
  const circleSize = (size ? size.toString() : '40px')
  const style: React.CSSProperties = {
    display: 'inline-flex',
    width: circleSize,
    height: circleSize,
  }

  useEffect(() => {
    const handler = setInterval(() => {
      setDeg((deg) => { return (deg + 1) % 360 })
    }, 20)
    return () => { clearTimeout(handler) }
  }, [])

  return (
    <div style={style}>
      <svg width='100%' height='100%' viewBox='0 0 100 100'>
        <path d={getD(fill, deg)} strokeWidth={fill ? '0' : '4px'} stroke={color} fill={(fill ? color : 'none')} />
      </svg>

    </div>
  )
}