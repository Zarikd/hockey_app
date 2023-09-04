import {FC} from 'react'
import {IconProps} from '../type'
import cn from 'classnames'
import s from './Auth.module.scss'


export const Auth: FC<IconProps> = ({
  size = 22,
  className,
  active = true,
  onClick,
}) => {
  return (
    <span
      style={size ? {height: size} : {}}
      className={cn(s.icon, className)}
      onClick={onClick}
    >
      <svg
        width={`${size}`}
        height={`${size}`}
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g id="Personal area_regestration">
          <circle id="Ellipse 1" cx="9.5" cy="9.5" r="9.5" fill="#011E30" />
          <g id="Vector">
            <path d="M7.79487 8.1359C7.79487 7.19418 8.55828 6.43077 9.5 6.43077C10.4417 6.43077 11.2051 7.19418 11.2051 8.1359C11.2051 9.07761 10.4417 9.84102 9.5 9.84102C8.55828 9.84102 7.79487 9.07761 7.79487 8.1359Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M9.5 4.38461C6.67485 4.38461 4.38461 6.67485 4.38461 9.5C4.38461 12.3251 6.67485 14.6154 9.5 14.6154C12.3251 14.6154 14.6154 12.3251 14.6154 9.5C14.6154 6.67485 12.3251 4.38461 9.5 4.38461ZM5.06666 9.5C5.06666 7.05154 7.05154 5.06666 9.5 5.06666C11.9485 5.06666 13.9333 7.05154 13.9333 9.5C13.9333 10.7615 13.4064 11.8999 12.5607 12.7072C12.4577 11.4838 11.4321 10.5231 10.182 10.5231H8.81795C7.56791 10.5231 6.54225 11.4838 6.43927 12.7072C5.59355 11.8999 5.06666 10.7615 5.06666 9.5Z" fill="white" />
          </g>
        </g>
      </svg>
    </span>
  )
}
