/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from '@emotion/react';
import { Image } from 'components/common/Image';
import Icon from 'static/assets/Spinner.jpg';

interface IconProps {
  size?: number;
}

//피그마에서 svg파일이 그라데이션 없이 추출되어 불가피하게 jpg로 대체합니다..
export function LoadingIcon({ size = 18 }: IconProps) {
  return (
    <Image
      src={Icon}
      alt='loading'
      css={css`
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        animation: rotate 1.5s linear infinite;

        @keyframes rotate {
          from {
            transform: rotate(0);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}
    />
    // <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
    //   <path
    //     fillRule='evenodd'
    //     clipRule='evenodd'
    //     d='M7.02344 0.975656C7.02344 0.436816 7.46025 0 7.99909 0C12.4176 0 15.9995 3.58189 15.9995 8.00038H14.0482C14.0482 4.65957 11.3399 1.95131 7.99909 1.95131C7.46025 1.95131 7.02344 1.5145 7.02344 0.975656ZM8.00038 14.0496C11.341 14.0494 14.0491 11.3412 14.0491 8.00049H16.0004C16.0004 12.419 12.4185 16.0009 8 16.0009V16.0007C3.58169 16.0005 0 12.4187 0 8.00036C0 5.11034 1.53301 2.57924 3.82555 1.17446C4.285 0.892927 4.88567 1.03715 5.1672 1.4966C5.44874 1.95604 5.30451 2.55672 4.84506 2.83825C3.10722 3.90314 1.95131 5.81719 1.95131 8.00036C1.95131 11.3412 4.65957 14.0494 8.00038 14.0494V14.0496Z'
    //     fill='url(#paint0_angular_2101_26902)'
    //   />
    //   <defs>
    //     <radialGradient
    //       id='paint0_angular_2101_26902'
    //       cx='0'
    //       cy='0'
    //       r='1'
    //       gradientUnits='userSpaceOnUse'
    //       gradientTransform='translate(7.02489 7.6103) rotate(-98.3661) scale(6.70584 6.70597)'
    //     >
    //       <stop offset='0.00649633' stopOpacity='0' />
    //       <stop offset='1' />
    //     </radialGradient>
    //   </defs>
    // </svg>
  );
}
