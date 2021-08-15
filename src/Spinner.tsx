import React, { useEffect, useState } from "react"

type Props = {
  size?: string,
  width?: string,
  fill: boolean,
  colors: string[]
}

const r = 40

function getXOffset(deg: number): number {
  return r * Math.sin(deg / 180 * Math.PI)
}

function getYOffset(deg: number): number {
  return r * (1 - Math.cos(deg / 180 * Math.PI))
}

/**
 * @param {boolean} clockwise Clockwise flag.
 * @param {boolean} fill Fill flag.
 * @param {number} deg The degree value in 360°.
 */
function getD(clockwise: boolean, fill: boolean, deg: number): string {
  const ret =
    (fill ? `M 50 50 l 0 ${-r}` : `M 50 ${50 - r}`)
    + ` a ${r} ${r} 0 `
    + `${(deg >= 180) === clockwise ? 1 : 0} ${clockwise ? 1 : 0}`
    + ` ${getXOffset(deg)} ${getYOffset(deg)} M 50 50 Z`
  return ret
}

function Spinner({ size, width, fill, colors }: Props) {
  const [deg, setDeg] = useState(1)
  const [colorInd, setColorInd] = useState(0)
  const spinnerSize = (size ? size : '40px')
  const spinnerWidth = (width ? width : '4')
  const style: React.CSSProperties = {
    display: 'inline-flex',
    width: spinnerSize,
    height: spinnerSize,
  }

  useEffect(() => {
    const handler = setInterval(() => {
      setDeg((deg) => {
        let nextVal = (deg + 3)
        if (nextVal >= 360) {
          nextVal %= 360
          setColorInd((colorInd + 1) % colors.length)
        }
        return nextVal
      })
    }, 16)
    return () => { clearInterval(handler) }
  }, [colors, colorInd])

  return (
    <svg style={style} width='100%' height='100%' viewBox='0 0 100 100'>
      <path d={getD(true, fill, deg)}
        strokeWidth={fill ? '0' : spinnerWidth}
        stroke={colors[colorInd]}
        fill={(fill ? colors[colorInd] : 'none')} />
      {colors.length > 1 &&
        <path d={getD(false, fill, deg)}
          strokeWidth={fill ? '0' : spinnerWidth}
          stroke={(colorInd === 0 ? colors[colors.length - 1] : colors[colorInd - 1])}
          fill={(fill ? (colorInd === 0 ? colors[colors.length - 1] : colors[colorInd - 1]) : 'none')} />
      }
    </svg>
  )
}

export { Spinner as default, getD }