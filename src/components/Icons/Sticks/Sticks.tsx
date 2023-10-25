import { FC } from 'react'
import { IconProps } from '../type'
import cn from 'classnames'
import s from './Sticks.module.scss'


export const Sticks: FC<IconProps> = ({
  sizeW = 32,
  sizeH = 32,
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
      <svg xmlns="http://www.w3.org/2000/svg" width={sizeW} height={sizeH} viewBox="0 0 33 32" fill="none">
        <path d="M23.2543 29.4185L3.39795 0.577167C3.3284 0.483138 3.35448 0.346368 3.4588 0.277983L3.82394 0.0386359C3.91957 -0.0297489 4.05867 -0.0041046 4.12822 0.0899246L23.9846 28.9398C24.0541 29.0338 24.0281 29.1706 23.9237 29.239L23.5586 29.4783C23.4543 29.5467 23.3239 29.5211 23.2543 29.4185Z" fill="#011E30" />
        <path d="M31.8437 31.2735L29.9746 31.2564L25.5234 31.2137C25.0539 31.2051 24.6105 31.0598 24.2454 30.7863C24.0542 30.6495 23.889 30.4785 23.7499 30.2734L20.4115 25.418C20.4028 25.4095 20.4115 25.3924 20.4202 25.3924L21.2461 24.8966C21.2548 24.8881 21.2635 24.8966 21.2722 24.9052L22.9674 27.2217C23.6629 28.1705 24.6627 28.8202 25.7842 29.0852C26.2623 29.1963 26.7753 29.239 27.2795 29.2049L31.6264 28.8886L31.7307 28.88C32.2871 28.8373 32.7739 29.2305 32.8522 29.769L32.8956 30.111C32.9826 30.7264 32.487 31.2735 31.8437 31.2735Z" fill="#FE2C00" />
        <path d="M9.88347 29.4527L29.7051 0.585731C29.7746 0.491701 29.7485 0.354932 29.6442 0.286547L29.2791 0.0471998C29.1834 -0.0211851 29.0443 0.00445924 28.9748 0.107037L9.1532 28.974C9.08365 29.068 9.10973 29.2048 9.21405 29.2732L9.57919 29.5125C9.67482 29.5809 9.81392 29.5553 9.88347 29.4527Z" fill="#011E30" />
        <path d="M1.29409 31.3077L3.16323 31.2906L7.6144 31.2393C8.08386 31.2307 8.52724 31.0854 8.88368 30.8119C9.07494 30.6751 9.24012 30.4956 9.37922 30.299L12.7176 25.4437C12.7263 25.4351 12.7176 25.418 12.7089 25.418L11.883 24.9222C11.8743 24.9137 11.8656 24.9222 11.8569 24.9308L10.1616 27.2559C9.47485 28.2047 8.46638 28.8544 7.3449 29.1194C6.86674 29.2305 6.35381 29.2732 5.84958 29.239L1.50274 28.9228L1.39841 28.9142C0.842019 28.8715 0.355172 29.2647 0.285623 29.8032L0.242154 30.1451C0.163911 30.7691 0.659451 31.3162 1.29409 31.3077Z" fill="#FE2C00" />
        <path d="M18.1251 30.4015V31.4956C18.1251 31.7777 17.3687 32 16.4472 32C15.7082 32 15.0736 31.8547 14.8563 31.6581C14.8215 31.6324 14.8041 31.5982 14.7867 31.5726C14.778 31.5469 14.7693 31.5213 14.7693 31.5042V30.41H18.1251V30.4015Z" fill="#FE2C00" />
        <path d="M16.4385 30.9058C17.3652 30.9058 18.1164 30.68 18.1164 30.4014C18.1164 30.1229 17.3652 29.8971 16.4385 29.8971C15.5119 29.8971 14.7607 30.1229 14.7607 30.4014C14.7607 30.68 15.5119 30.9058 16.4385 30.9058Z" fill="#011E30" />
      </svg>
    </span>
  )
}