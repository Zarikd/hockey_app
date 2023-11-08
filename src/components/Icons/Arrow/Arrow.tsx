import { FC } from 'react'
import { IconProps } from '../type'
import cn from 'classnames'
import s from './Arrow.module.scss'

type ArrowIconProps = IconProps & {
  variant?: 'right' | 'left'
}


export const Arrow: FC<ArrowIconProps> = ({
  sizeW = 14,
  sizeH = 24,
  className,
  active = true,
  onClick,
  variant = 'right'
}) => {
  return (
    <span
      style={sizeW ? { height: sizeH } : {}}
      className={cn(s.icon, className)}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={sizeW} height={sizeH} viewBox="0 0 14 24" fill="none">
        {variant === 'right' ?
          <path id="Vector" opacity="0.72" fill-rule="evenodd" clip-rule="evenodd" d="M0.682591 22.4837C0.245505 22.0483 0 21.458 0 20.8426C0 20.2272 0.245505 19.637 0.682591 19.2015L8.36735 11.5535L0.682591 3.90544C0.27031 3.46521 0.0458616 2.88294 0.0565303 2.28132C0.067199 1.67969 0.312152 1.10566 0.739785 0.680182C1.16742 0.254699 1.74434 0.0109769 2.34901 0.000361801C2.95368 -0.0102532 3.53888 0.213068 3.98134 0.623276L13.3174 9.91241C13.7545 10.3478 14 10.9381 14 11.5535C14 12.1689 13.7545 12.7591 13.3174 13.1946L3.98134 22.4837C3.54371 22.9186 2.95048 23.1628 2.33196 23.1628C1.71345 23.1628 1.12022 22.9186 0.682591 22.4837Z" fill="#011E30" />
          :
          <path id="Vector" opacity="0.72" fill-rule="evenodd" clip-rule="evenodd" d="M13.3174 0.67916C13.7545 1.11459 14 1.70483 14 2.32024C14 2.93565 13.7545 3.52589 13.3174 3.96132L5.63265 11.6094L13.3174 19.2574C13.7297 19.6976 13.9541 20.2799 13.9435 20.8815C13.9328 21.4832 13.6878 22.0572 13.2602 22.4827C12.8326 22.9082 12.2557 23.1519 11.651 23.1625C11.0463 23.1731 10.4611 22.9498 10.0187 22.5396L0.682591 13.2504C0.245505 12.815 0 12.2248 0 11.6094C0 10.994 0.245505 10.4037 0.682591 9.96829L10.0187 0.67916C10.4563 0.244273 11.0495 0 11.668 0C12.2866 0 12.8798 0.244273 13.3174 0.67916Z" fill="#011E30" />
        }
      </svg>
    </span>
  )
}
