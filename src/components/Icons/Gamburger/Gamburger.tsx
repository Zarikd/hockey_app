import { FC } from 'react'
import { IconProps } from '../type'
import cn from 'classnames'
import s from './Gamburger.module.scss'


export const Gamburger: FC<IconProps> = ({
  size = 22,
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
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g id="gamburger menu">
          <path id="gamburger menu/dark" fillRule="evenodd" clipRule="evenodd" d="M0 1.71387C0 1.25932 0.165561 0.823394 0.460261 0.501981C0.754961 0.180568 1.15466 0 1.57143 0H20.4286C20.8453 0 21.245 0.180568 21.5397 0.501981C21.8344 0.823394 22 1.25932 22 1.71387C22 2.16842 21.8344 2.60435 21.5397 2.92576C21.245 3.24717 20.8453 3.42774 20.4286 3.42774H1.57143C1.15466 3.42774 0.754961 3.24717 0.460261 2.92576C0.165561 2.60435 0 2.16842 0 1.71387ZM0 8.56935C0 8.1148 0.165561 7.67887 0.460261 7.35746C0.754961 7.03605 1.15466 6.85548 1.57143 6.85548H20.4286C20.8453 6.85548 21.245 7.03605 21.5397 7.35746C21.8344 7.67887 22 8.1148 22 8.56935C22 9.0239 21.8344 9.45983 21.5397 9.78124C21.245 10.1027 20.8453 10.2832 20.4286 10.2832H1.57143C1.15466 10.2832 0.754961 10.1027 0.460261 9.78124C0.165561 9.45983 0 9.0239 0 8.56935ZM0 15.4248C0 14.9703 0.165561 14.5344 0.460261 14.2129C0.754961 13.8915 1.15466 13.711 1.57143 13.711H20.4286C20.8453 13.711 21.245 13.8915 21.5397 14.2129C21.8344 14.5344 22 14.9703 22 15.4248C22 15.8794 21.8344 16.3153 21.5397 16.6367C21.245 16.9581 20.8453 17.1387 20.4286 17.1387H1.57143C1.15466 17.1387 0.754961 16.9581 0.460261 16.6367C0.165561 16.3153 0 15.8794 0 15.4248Z" fill="#011E30" />
        </g>
      </svg>
    </span>
  )
} 