interface IconProps {
  size?: number;
}

export const EmptyIcon = ({ size = 90 }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox='0 0 90 90' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M44.5 13C61.385 13 75.21 26.325 75.997 43H79C78.21 24.67 63.041 10 44.5 10C25.959 10 10.79 24.67 10 43H13.003C13.79 26.325 27.615 13 44.5 13ZM43 52V29H46V52H43ZM43 60.443V56H46V60.443H43ZM44.5 76C61.385 76 75.21 62.675 75.997 46H79C78.211 64.33 63.041 79 44.5 79C25.959 79 10.79 64.33 10 46H13.004C13.79 62.675 27.616 76 44.5 76Z'
        fill='#D5D5D5'
      />
    </svg>
  );
};
