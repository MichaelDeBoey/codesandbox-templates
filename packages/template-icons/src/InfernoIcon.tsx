import React, { ComponentProps, FunctionComponent } from "react";

import { SVGIcon } from "./SVGIcon";

export const InfernoIcon: FunctionComponent<ComponentProps<typeof SVGIcon>> = ({
  ...props
}) => (
  <SVGIcon {...props}>
    <path
      d="M10.5137 7.06576L10.0969 7.33199C6.66097 9.49476 4.85072 12.5722 4.80922 16.5128C4.75597 21.552 8.4456 25.9356 13.5492 27.0633C20.1374 28.519 26.6574 23.9227 27.1874 17.4491C27.6065 12.3287 24.0091 7.72862 18.9332 6.1386C18.1679 5.31731 17.4729 2.55701 18.6825 1.29974C23.6709 2.36657 27.4107 4.81794 29.822 8.7661C35.0943 17.3988 30.3546 28.6516 20.34 31.3394C11.0372 33.8361 1.62459 27.9341 0.233337 18.7321C-1.31054 10.152 4.98434 2.51899 13.8657 1.23622C11.7939 3.03965 10.6852 5.51629 10.5137 7.06576Z"
      fill="#494949"
    />
    <path
      d="M22.448 14.371C23.1652 13.0848 23.1327 11.7394 22.7255 10.3782C22.6254 10.0434 22.417 9.46913 22.2764 9.09367C24.6742 10.7991 26.722 14.8996 25.6811 18.9747C24.7169 22.7503 20.9569 25.7914 17.0781 26.1431C12.0832 26.5958 8.19947 23.7152 6.7376 20.2132C5.17884 16.4797 6.4271 11.8878 9.1061 9.6017C7.79522 12.1417 8.20097 14.1581 8.7366 14.9105C9.33197 15.7469 10.2798 16.1806 11.205 15.9329C12.1776 15.6726 12.9236 14.8351 12.9067 13.7675C12.8955 13.0546 12.7634 12.2506 12.4712 11.6083C10.7379 7.79754 12.1827 4.36079 14.9786 1.99399C15.7901 1.30695 16.7337 0.6477 17.9347 0C16.615 1.80343 16.3907 4.00073 17.3936 6.04548C17.9815 7.15971 18.7349 8.32338 19.3995 9.39839C20.5941 11.3305 21.3267 13.3171 21.0095 15.6218C21.006 15.6473 21.9597 15.2661 22.448 14.371Z"
      fill="#FB3239"
    />
  </SVGIcon>
);

export const InfernoIconDark: FunctionComponent<
  ComponentProps<typeof SVGIcon>
> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      d="M11.6679 9.35454L11.3639 9.55629C8.85801 11.1953 7.53775 13.5274 7.50749 16.5136C7.46865 20.3324 10.1596 23.6543 13.8818 24.5089C18.6866 25.6121 23.4418 22.1289 23.8284 17.2231C24.1341 13.3428 21.5104 9.85686 17.8084 8.65193C17.2502 8.02954 16.7434 5.93775 17.6256 4.98498C21.2637 5.79343 23.9913 7.65111 25.7499 10.6431C29.595 17.185 26.1383 25.7125 18.8344 27.7493C12.0497 29.6414 5.18486 25.1688 4.17019 18.1954C3.04421 11.6933 7.63521 5.90894 14.1126 4.93684C12.6015 6.3035 11.793 8.18033 11.6679 9.35454Z"
      fill="black"
    />
    <path
      d="M20.3718 14.8906C20.8949 13.9158 20.8712 12.8963 20.5742 11.8648C20.5012 11.6111 20.3492 11.1758 20.2467 10.8913C21.9955 12.1837 23.489 15.2911 22.7298 18.3793C22.0266 21.2405 19.2843 23.5451 16.4555 23.8116C12.8126 24.1546 9.98008 21.9717 8.9139 19.3178C7.77707 16.4885 8.68745 13.0087 10.6413 11.2763C9.68525 13.2012 9.98118 14.7292 10.3718 15.2993C10.806 15.9332 11.4973 16.2619 12.1721 16.0742C12.8814 15.8769 13.4255 15.2423 13.4132 14.4332C13.405 13.8929 13.3086 13.2837 13.0956 12.7969C11.8314 9.9091 12.8851 7.30469 14.9242 5.5111C15.5161 4.99045 16.2043 4.49087 17.0802 4.00003C16.1177 5.36669 15.9541 7.03183 16.6856 8.58137C17.1143 9.42574 17.6638 10.3076 18.1485 11.1222C19.0198 12.5864 19.5541 14.0919 19.3227 15.8384C19.3202 15.8577 20.0157 15.5688 20.3718 14.8906Z"
      fill="black"
    />
  </SVGIcon>
);

export const InfernoIconLight: FunctionComponent<
  ComponentProps<typeof SVGIcon>
> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      d="M11.6679 9.35454L11.3639 9.55629C8.85801 11.1953 7.53775 13.5274 7.50749 16.5136C7.46865 20.3324 10.1596 23.6543 13.8818 24.5089C18.6866 25.6121 23.4418 22.1289 23.8284 17.2231C24.1341 13.3428 21.5104 9.85686 17.8084 8.65193C17.2502 8.02954 16.7434 5.93775 17.6256 4.98498C21.2637 5.79343 23.9913 7.65111 25.7499 10.6431C29.595 17.185 26.1383 25.7125 18.8344 27.7493C12.0497 29.6414 5.18486 25.1688 4.17019 18.1954C3.04421 11.6933 7.63521 5.90894 14.1126 4.93684C12.6015 6.3035 11.793 8.18033 11.6679 9.35454Z"
      fill="white"
    />
    <path
      d="M20.3718 14.8906C20.8949 13.9158 20.8712 12.8963 20.5742 11.8648C20.5012 11.6111 20.3492 11.1758 20.2467 10.8913C21.9955 12.1837 23.489 15.2911 22.7298 18.3793C22.0266 21.2405 19.2843 23.5451 16.4555 23.8116C12.8126 24.1546 9.98008 21.9717 8.9139 19.3178C7.77707 16.4885 8.68745 13.0087 10.6413 11.2763C9.68525 13.2012 9.98118 14.7292 10.3718 15.2993C10.806 15.9332 11.4973 16.2619 12.1721 16.0742C12.8814 15.8769 13.4255 15.2423 13.4132 14.4332C13.405 13.8929 13.3086 13.2837 13.0956 12.7969C11.8314 9.9091 12.8851 7.30469 14.9242 5.5111C15.5161 4.99045 16.2043 4.49087 17.0802 4.00003C16.1177 5.36669 15.9541 7.03183 16.6856 8.58137C17.1143 9.42574 17.6638 10.3076 18.1485 11.1222C19.0198 12.5864 19.5541 14.0919 19.3227 15.8384C19.3202 15.8577 20.0157 15.5688 20.3718 14.8906Z"
      fill="white"
    />
  </SVGIcon>
);
