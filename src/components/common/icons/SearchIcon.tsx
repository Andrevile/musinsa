interface IconProps {
  size?: number;
}

export function SearchIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.75 13C10.3734 13 12.5 10.8734 12.5 8.25C12.5 5.62665 10.3734 3.5 7.75 3.5C5.12665 3.5 3 5.62665 3 8.25C3 10.8734 5.12665 13 7.75 13ZM7.75 12C5.67893 12 4 10.3211 4 8.25C4 6.17893 5.67893 4.5 7.75 4.5C9.82107 4.5 11.5 6.17893 11.5 8.25C11.5 10.3211 9.82107 12 7.75 12ZM14.3464 15.5536L11.3464 12.5536L12.0536 11.8464L15.0536 14.8464L14.3464 15.5536Z'
        fill='#CCCCCC'
      />
      <mask
        id='mask0_4729_377'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x='3'
        y='3'
        width='13'
        height='13'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.75 13C10.3734 13 12.5 10.8734 12.5 8.25C12.5 5.62665 10.3734 3.5 7.75 3.5C5.12665 3.5 3 5.62665 3 8.25C3 10.8734 5.12665 13 7.75 13ZM7.75 12C5.67893 12 4 10.3211 4 8.25C4 6.17893 5.67893 4.5 7.75 4.5C9.82107 4.5 11.5 6.17893 11.5 8.25C11.5 10.3211 9.82107 12 7.75 12ZM14.3464 15.5536L11.3464 12.5536L12.0536 11.8464L15.0536 14.8464L14.3464 15.5536Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0_4729_377)'></g>
    </svg>
  );
}
