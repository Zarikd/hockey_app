import { FC } from 'react'
import { IconProps } from '../type'
import cn from 'classnames'
import s from './CrossIcon.module.scss'


export const CrossIcon: FC<IconProps> = ({
  size = 18,
  className,
  active = true,
  onClick,
}) => {
  return (
    <span
      style={size ? { height: size } : {}}
      className={cn(s.icon, className)}
      onClick={onClick}
    >
      <svg
        width={`${size}`}
        height={`${size}`}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_458_1150)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.32896 0.362325C4.074 0.123861 3.73678 -0.00596046 3.38834 0.000210325C3.0399 0.00638111 2.70745 0.148063 2.46103 0.395406C2.21461 0.64275 2.07346 0.976443 2.06731 1.32618C2.06116 1.67593 2.1905 2.01441 2.42807 2.27033L9.09911 8.96632L2.42807 15.6623C2.29593 15.7859 2.18994 15.935 2.11643 16.1006C2.04292 16.2662 2.0034 16.4449 2.00021 16.6262C1.99702 16.8074 2.03024 16.9875 2.09789 17.1556C2.16553 17.3237 2.26622 17.4764 2.39393 17.6046C2.52165 17.7328 2.67378 17.8338 2.84125 17.9017C3.00872 17.9696 3.1881 18.003 3.36869 17.9998C3.54928 17.9966 3.72738 17.9569 3.89236 17.8831C4.05734 17.8093 4.20583 17.703 4.32896 17.5703L11 10.8743L17.671 17.5703C17.7942 17.703 17.9427 17.8093 18.1076 17.8831C18.2726 17.9569 18.4507 17.9966 18.6313 17.9998C18.8119 18.003 18.9913 17.9696 19.1587 17.9017C19.3262 17.8338 19.4783 17.7328 19.6061 17.6046C19.7338 17.4764 19.8345 17.3237 19.9021 17.1556C19.9698 16.9875 20.003 16.8074 19.9998 16.6262C19.9966 16.4449 19.9571 16.2662 19.8836 16.1006C19.8101 15.935 19.7041 15.7859 19.5719 15.6623L12.9009 8.96632L19.5719 2.27033C19.8095 2.01441 19.9388 1.67593 19.9327 1.32618C19.9265 0.976443 19.7854 0.64275 19.539 0.395406C19.2925 0.148063 18.9601 0.00638111 18.6117 0.000210325C18.2632 -0.00596046 17.926 0.123861 17.671 0.362325L11 7.05833L4.32896 0.362325Z" fill="#011E30" />
        </g>
        <defs>
          <filter id="filter0_d_458_1150" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="1" dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.44 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_458_1150" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_458_1150" result="shape" />
          </filter>
        </defs>
      </svg>
    </span>
  )
}
