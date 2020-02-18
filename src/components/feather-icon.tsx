import React from 'react'
import featherSprite from 'feather-icons/dist/feather-sprite.svg'

const FeatherIcon = ({ name, color = 'currentColor', size = 24, ...restProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...restProps}
  >
    <use xlinkHref={`${featherSprite}#${name}`} />
  </svg>
)

export default FeatherIcon;