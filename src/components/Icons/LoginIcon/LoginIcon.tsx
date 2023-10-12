import { FC } from 'react'
import { IconProps } from '../type'
import cn from 'classnames'
import s from './LoginIcon.module.scss'


export const LoginIcon: FC<IconProps> = ({
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
      <svg width={`${size}`}
        height={`${size}`}
        viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M0 11.069H8V9.11355C7.99915 8.38775 7.70388 7.69192 7.17896 7.17871C6.65405 6.66549 5.94235 6.3768 5.2 6.37598H2.8C2.05765 6.3768 1.34595 6.66549 0.821037 7.17871C0.296118 7.69192 0.000846945 8.38775 0 9.11355V11.069Z" fill="#6D7C85" />
        <path id="Vector_2" d="M1.19983 2.85623C1.19983 3.39767 1.36405 3.92695 1.67171 4.37714C1.97938 4.82733 2.41668 5.17822 2.92832 5.38542C3.43995 5.59262 4.00294 5.64683 4.54608 5.5412C5.08923 5.43557 5.58814 5.17484 5.97973 4.79198C6.37131 4.40913 6.63799 3.92134 6.74603 3.3903C6.85407 2.85926 6.79862 2.30883 6.58669 1.8086C6.37477 1.30838 6.01588 0.880825 5.55543 0.580017C5.09497 0.279208 4.55362 0.118652 3.99983 0.118652C3.25722 0.118652 2.54503 0.407075 2.01993 0.920469C1.49483 1.43386 1.19983 2.13018 1.19983 2.85623Z" fill="#6D7C85" />
      </svg>

    </span>
  )
}
