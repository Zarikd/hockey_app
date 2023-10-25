import { FC } from 'react'
import { IconProps } from '../type'
import cn from 'classnames'
import s from './Logo.module.scss'


export const Logo: FC<IconProps> = ({
  sizeW = 44,
  sizeH = 42,
  className,
  active = true,
  onClick,
}) => {
  return (
    <span
      style={sizeW ? { height: sizeH } : {}}
      className={cn(s.icon, className)}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={sizeW} height={sizeH} viewBox="0 0 51 47" fill="none">
        <g filter="url(#filter0_d_445_1837)">
          <path d="M1.5835 18.7933V44.1215H9.73164H17.9216L9.73164 31.4364L1.5835 18.7933Z" fill="#ED1C24" />
          <path d="M33.3404 3H30.499L25.6101 10.6867L33.3404 22.4897L45.4999 41.0552V3H33.3404Z" fill="#ED1C24" />
          <path d="M14.4535 3H9.73172H1.5V8.54447L9.73172 21.2716L24.5237 44.1215H33.3404H41.0707L33.3404 32.1925L14.4535 3Z" fill="#ED1C24" />
        </g>
        <defs>
          <filter id="filter0_d_445_1837" x="0.5" y="-1" width="50" height="47.1215" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="2" dy="-1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.44 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_445_1837" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_445_1837" result="shape" />
          </filter>
        </defs>
      </svg>
    </span>
  )
}
