import React from "react";
import { SVGIcon, ISVGIconProps } from "./SVGIcon";
import { useUniqueId } from "./useUniqueId";

export const StyleguidistIcon: React.FC<ISVGIconProps> = ({ ...props }) => {
  const id = useUniqueId();

  return (
    <SVGIcon {...props}>
      <g clipPath={`url(#Styleguidist_Clip0_${id})`}>
        <path
          d="M9.50884 24.8498C10.106 25.6831 10.9482 26.1363 12.0221 26.1363C13.4138 26.1363 14.5341 25.5608 15.2997 24.5457C15.9666 23.6617 16.3241 22.4836 16.3241 21.3039V19.6323L12.9813 19.6557L12.8471 22.0026C12.8471 22.805 12.5624 23.0718 11.8453 23.0718C11.2898 23.0718 10.8965 22.4904 10.7719 21.4749L10.2032 17.2972C9.98135 15.8568 9.44095 14.7381 8.62957 13.9265C7.93441 13.2311 7.06252 12.7832 6.08136 12.5593L3.32594 11.8326C2.93734 11.8326 2.65642 12.1378 2.65642 12.4848C2.65642 13.0601 2.7246 13.3419 3.05939 13.7522C3.15516 13.8696 3.30968 13.9735 3.52584 14.0818C3.74895 14.1936 4.03872 14.3092 4.38112 14.4276C4.65662 14.5229 4.95069 14.6146 5.2447 14.6997C5.36578 14.7347 5.48718 14.7686 5.6089 14.8013C6.65754 15.0838 7.46255 16.0908 7.58017 17.1438L8.53516 22.0372C8.68408 23.1811 9.00238 24.1432 9.50884 24.8498ZM16.2967 19.7127H13.0978L13.1026 20.0121L13.1329 21.904C13.1329 22.6958 12.5587 23.1817 11.7837 23.1817C11.2267 23.1817 10.7045 22.5944 10.0817 21.3741L8.27286 17.8678C7.46532 16.4667 6.38162 15.701 4.68874 15.3685L2.12361 14.7095C1.71404 14.7095 1.4007 15.2164 1.4007 15.5779C1.4007 15.9909 1.58079 16.4284 1.85736 16.7701C2.10723 17.0789 2.63785 17.3481 3.13205 17.452L4.2088 17.6814C5.06437 17.9704 5.85742 18.5595 6.22621 19.2553L7.5886 22.5209C8.10207 23.6459 8.62745 24.4691 9.25578 25.0634C9.9919 25.7596 10.859 26.1215 11.8936 26.1215C12.8415 26.1215 13.8252 25.7842 14.5862 25.1801C15.432 24.5087 15.9512 23.5587 16.0202 22.4312L16.2967 19.7127Z"
          fill="#053949"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.75404 20.0858L8.16449 17.0661C8.01598 15.7846 7.04909 14.5791 5.78706 14.2388C5.75271 14.2297 5.71839 14.2205 5.68411 14.2111C5.60101 14.1884 5.50837 14.1624 5.40848 14.1336C5.12349 14.0511 4.83861 13.9622 4.57365 13.8706C4.25365 13.76 3.98575 13.6532 3.78986 13.555C3.71207 13.516 3.64748 13.4792 3.59774 13.4457C3.55513 13.4171 3.52726 13.3934 3.51606 13.3797C3.28405 13.0953 3.24574 12.9371 3.24574 12.4848C3.24574 12.4693 3.2534 12.4504 3.26648 12.4361C3.26937 12.433 5.93586 13.1303 5.93586 13.1303C6.82591 13.3329 7.59986 13.7299 8.21281 14.3431C8.93266 15.0632 9.41738 16.0666 9.61999 17.3818L10.1875 21.5505C10.3433 22.8207 10.9118 23.6611 11.8453 23.6611C12.877 23.6611 13.4336 23.1419 13.4365 22.0196L13.5381 20.2411L15.7348 20.2258V21.3039C15.7348 22.3608 15.4152 23.414 14.8292 24.1909C14.1734 25.0603 13.2261 25.547 12.0221 25.547C11.9024 25.5471 11.7827 25.5399 11.6639 25.5253C10.1343 25.432 9.09031 24.3895 8.1306 22.2895L6.76008 19.0045C6.30755 18.1388 5.37972 17.4504 4.37983 17.1172L3.25411 16.8754C2.88019 16.7968 2.46778 16.5876 2.31544 16.3993C2.11826 16.1558 1.99002 15.8442 1.99002 15.5778C1.99002 15.5449 2.02226 15.4521 2.07017 15.3747C2.08467 15.3512 2.09934 15.3309 2.11283 15.3151L4.5588 15.9435C6.09651 16.2439 7.0363 16.9055 7.7555 18.1502L8.75404 20.0858Z"
          fill="#00D8FE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.75404 20.0858L8.16449 17.0661C8.01598 15.7846 7.04909 14.5791 5.78706 14.2388C5.75271 14.2297 5.71839 14.2205 5.68411 14.2111C5.60101 14.1884 5.50837 14.1624 5.40848 14.1336C5.12349 14.0511 4.83861 13.9622 4.57365 13.8706C4.25365 13.76 3.98575 13.6532 3.78986 13.555C3.71207 13.516 3.64748 13.4792 3.59774 13.4457C3.55513 13.4171 3.52726 13.3934 3.51606 13.3797C3.28405 13.0953 3.24574 12.9371 3.24574 12.4848C3.24574 12.4693 3.2534 12.4504 3.26648 12.4361C3.26937 12.433 5.93586 13.1303 5.93586 13.1303C6.82591 13.3329 7.59986 13.7299 8.21281 14.3431C8.93266 15.0632 9.41738 16.0666 9.61999 17.3818L10.1875 21.5505C10.3433 22.8207 10.9118 23.6611 11.8453 23.6611C12.877 23.6611 13.4336 23.1419 13.4365 22.0196L13.5381 20.2411L15.7348 20.2258V21.3039C15.7348 22.3608 15.4152 23.414 14.8292 24.1909C14.1734 25.0603 13.2261 25.547 12.0221 25.547C11.9024 25.5471 11.7827 25.5399 11.6639 25.5253C10.1343 25.432 9.09031 24.3895 8.1306 22.2895L6.76008 19.0045C6.30755 18.1388 5.37972 17.4504 4.37983 17.1172L3.25411 16.8754C2.88019 16.7968 2.46778 16.5876 2.31544 16.3993C2.11826 16.1558 1.99002 15.8442 1.99002 15.5778C1.99002 15.5449 2.02226 15.4521 2.07017 15.3747C2.08467 15.3512 2.09934 15.3309 2.11283 15.3151L4.5588 15.9435C6.09651 16.2439 7.0363 16.9055 7.7555 18.1502L8.75404 20.0858Z"
          fill="#00D8FE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.10487 15.2659C2.1565 15.3546 2.21662 15.4382 2.28438 15.5153C2.44986 15.7036 2.89757 15.9128 3.30355 15.9915L4.52579 16.2332C5.61144 16.5665 6.61882 17.2548 7.11019 18.1205L8.59822 21.4055C8.80059 21.8133 9.00638 22.1813 9.21889 22.5102C9.17836 22.3057 9.14483 22.0999 9.11835 21.8932L8.75404 20.0268L7.7555 18.0913C7.03629 16.8465 6.09651 16.1849 4.5588 15.8845L2.11283 15.2563L2.10487 15.2659V15.2659Z"
          fill="black"
          fillOpacity="0.25"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.0258 20.2373V21.8932C14.0258 23.0304 13.5672 24.1915 11.954 24.1915C10.9723 24.1915 9.9724 23.5872 9.64639 21.3125L9.01216 16.9429C8.84762 15.6614 7.57193 13.8719 6.17306 13.5316C6.11955 13.5188 4.17645 12.9459 3.95934 12.8478C3.87307 12.8088 3.66822 12.6863 3.65579 12.6725C3.58071 12.5895 3.52396 12.5172 3.48117 12.4453C3.79917 12.5272 6.05573 13.1303 6.05573 13.1303C6.92656 13.3329 7.68378 13.7299 8.28347 14.3431C8.9877 15.0632 9.46199 16.0667 9.66018 17.3818L10.2154 21.5505C10.3679 22.8207 10.9241 23.6611 11.8374 23.6611C12.8468 23.6611 13.3914 23.142 13.3941 22.0197L13.4935 20.2412L14.0258 20.2373Z"
          fill="black"
          fillOpacity="0.25"
        />
        <path
          d="M16.3831 21.6575V19.5948H12.965V19.8895C12.965 22.5418 12.2381 23.6906 10.6077 23.6906C9.16904 23.6906 8.17945 22.6628 7.54953 20.9766C6.83092 19.0528 5.74103 18.1805 3.61624 18.1805H0.707189C0.339572 18.1805 0.0493323 18.4836 0.0493323 18.8498C0.0491332 19.0764 0.0937344 19.3008 0.180571 19.5101C0.267407 19.7194 0.394766 19.9094 0.555321 20.0694C0.715845 20.23 0.906514 20.3573 1.11638 20.4441C1.32625 20.5308 1.55119 20.5752 1.77828 20.5748L3.62325 20.5672C4.00672 20.5672 4.37735 20.8478 4.75805 21.4214C5.07534 21.8994 5.34259 22.4658 5.76731 23.495C6.14813 24.4178 6.67015 25.2 7.36832 25.7895C8.22247 26.5106 9.29763 26.9024 10.6077 26.9024C12.0182 26.9024 13.453 26.3883 14.5366 25.4882C15.7063 24.5164 16.3831 23.1755 16.3831 21.6575Z"
          fill="#053949"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7938 20.1842V21.6575C15.7938 22.9938 15.1994 24.1714 14.16 25.0348C13.1827 25.8467 11.8813 26.3131 10.6077 26.3131C9.43659 26.3131 8.49616 25.9704 7.74849 25.3392C7.12994 24.8169 6.65943 24.1119 6.31209 23.2702C5.87287 22.206 5.59447 21.6158 5.24901 21.0955C4.77037 20.3743 4.24676 19.9779 3.62202 19.9779L1.77704 19.9855C1.62747 19.9858 1.4793 19.9565 1.34109 19.8993C1.20287 19.8421 1.07733 19.7582 0.971682 19.6523C0.865963 19.5471 0.782109 19.4221 0.724952 19.2843C0.667795 19.1466 0.638467 18.9989 0.638658 18.8498C0.638658 18.8035 0.670952 18.7698 0.707195 18.7698H3.61625C5.47755 18.7698 6.35994 19.476 6.99746 21.1828C7.30214 21.9985 7.70241 22.7013 8.21812 23.2369C8.8649 23.9086 9.6613 24.2799 10.6077 24.2799C12.5658 24.2799 13.4905 22.9238 13.5512 20.1842H15.7938Z"
          fill="#00D8FE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.65686 18.7954C0.710606 18.8637 0.78651 18.925 0.881509 19.0112C1.08453 19.1954 1.35762 19.3002 1.6501 19.3002H4.0663C5.41319 19.3002 6.11348 20.3525 6.99316 22.2894C7.32471 23.0194 8.22896 24.7808 10.7845 24.7808C13.3401 24.7808 14.0847 22.2859 14.0847 21.1271V20.1842H13.5512C13.4905 22.9238 12.5658 24.2799 10.6077 24.2799C9.66129 24.2799 8.86489 23.9086 8.21805 23.2368C7.7024 22.7013 7.30219 21.9985 6.99746 21.1828C6.35993 19.4761 5.47755 18.7698 3.61624 18.7698H0.707188C0.687859 18.7698 0.669649 18.7794 0.65686 18.7954Z"
          fill="black"
          fillOpacity="0.25"
        />
        <path
          d="M22.5501 24.8498C21.953 25.6831 21.1107 26.1363 20.0368 26.1363C18.6452 26.1363 17.5248 25.5608 16.7592 24.5457C16.0924 23.6617 15.7348 22.4836 15.7348 21.3039V19.6323L19.0777 19.6557L19.2118 22.0026C19.2118 22.805 19.4965 23.0718 20.2136 23.0718C20.7691 23.0718 21.1624 22.4904 21.287 21.4749L21.8557 17.2972C22.0776 15.8568 22.618 14.7381 23.4294 13.9265C24.1245 13.2311 24.9964 12.7832 25.9776 12.5593L28.733 11.8326C29.1216 11.8326 29.4025 12.1378 29.4025 12.4848C29.4025 13.0601 29.3343 13.3419 28.9996 13.7522C28.9038 13.8696 28.7493 13.9735 28.5331 14.0818C28.31 14.1936 28.0202 14.3092 27.6778 14.4276C27.4023 14.5229 27.1083 14.6146 26.8142 14.6997C26.6932 14.7347 26.5718 14.7686 26.45 14.8013C25.4014 15.0838 24.5964 16.0908 24.4788 17.1438L23.5238 22.0372C23.3749 23.1811 23.0566 24.1432 22.5501 24.8498ZM15.7623 19.7127H18.9611L18.9563 20.0121L18.926 21.904C18.926 22.6958 19.5002 23.1817 20.2752 23.1817C20.8322 23.1817 21.3544 22.5944 21.9772 21.3741L23.7861 17.8678C24.5936 16.4667 25.6773 15.701 27.3702 15.3685L29.9353 14.7095C30.3449 14.7095 30.6582 15.2164 30.6582 15.5779C30.6582 15.9909 30.4782 16.4284 30.2016 16.7701C29.9517 17.0789 29.4211 17.3481 28.9269 17.452L27.8501 17.6814C26.9946 17.9704 26.2015 18.5595 25.8327 19.2553L24.4703 22.5209C23.9569 23.6459 23.4315 24.4691 22.8032 25.0634C22.067 25.7596 21.2 26.1215 20.1654 26.1215C19.2175 26.1215 18.2337 25.7842 17.4727 25.1801C16.6269 24.5087 16.1077 23.5587 16.0387 22.4312L15.7623 19.7127Z"
          fill="#053949"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.3049 20.0858L23.8945 17.0661C24.043 15.7846 25.0099 14.5791 26.2719 14.2388C26.3984 14.205 26.5246 14.1699 26.6505 14.1336C26.9355 14.0511 27.2203 13.9622 27.4853 13.8706C27.8053 13.76 28.0732 13.6532 28.2691 13.555C28.3469 13.516 28.4115 13.4792 28.4612 13.4457C28.5038 13.4171 28.5317 13.3934 28.5429 13.3797C28.7749 13.0953 28.8132 12.9371 28.8132 12.4848C28.8132 12.4693 28.8055 12.4504 28.7925 12.4361C28.7896 12.433 26.1231 13.1303 26.1231 13.1303C25.233 13.3329 24.4591 13.7299 23.8461 14.3431C23.1263 15.0632 22.6416 16.0666 22.439 17.3818L21.8714 21.5505C21.7156 22.8207 21.1472 23.6611 20.2136 23.6611C19.1819 23.6611 18.6253 23.1419 18.6225 22.0196L18.5209 20.2411L16.3241 20.2258V21.3039C16.3241 22.3608 16.6438 23.414 17.2297 24.1909C17.8855 25.0603 18.8329 25.547 20.0368 25.547C20.1602 25.547 20.2796 25.5397 20.3951 25.5253C21.9247 25.432 22.9686 24.3895 23.9283 22.2895L25.2989 19.0045C25.7514 18.1388 26.6792 17.4504 27.6791 17.1172L28.8048 16.8754C29.1788 16.7968 29.5912 16.5876 29.7435 16.3993C29.9407 16.1558 30.0689 15.8442 30.0689 15.5778C30.0689 15.5449 30.0367 15.4521 29.9888 15.3747C29.9761 15.3538 29.9618 15.3339 29.9461 15.3151L27.5001 15.9435C25.9624 16.2439 25.0226 16.9055 24.3034 18.1502L23.3049 20.0858Z"
          fill="#00D8FE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.3049 20.0858L23.8945 17.0661C24.043 15.7846 25.0099 14.5791 26.2719 14.2388C26.3984 14.205 26.5246 14.1699 26.6505 14.1336C26.9355 14.0511 27.2203 13.9622 27.4853 13.8706C27.8053 13.76 28.0732 13.6532 28.2691 13.555C28.3469 13.516 28.4115 13.4792 28.4612 13.4457C28.5038 13.4171 28.5317 13.3934 28.5429 13.3797C28.7749 13.0953 28.8132 12.9371 28.8132 12.4848C28.8132 12.4693 28.8055 12.4504 28.7925 12.4361C28.7896 12.433 26.1231 13.1303 26.1231 13.1303C25.233 13.3329 24.4591 13.7299 23.8461 14.3431C23.1263 15.0632 22.6416 16.0666 22.439 17.3818L21.8714 21.5505C21.7156 22.8207 21.1472 23.6611 20.2136 23.6611C19.1819 23.6611 18.6253 23.1419 18.6225 22.0196L18.5209 20.2411L16.3241 20.2258V21.3039C16.3241 22.3608 16.6438 23.414 17.2297 24.1909C17.8855 25.0603 18.8329 25.547 20.0368 25.547C20.1602 25.547 20.2796 25.5397 20.3951 25.5253C21.9247 25.432 22.9686 24.3895 23.9283 22.2895L25.2989 19.0045C25.7514 18.1388 26.6792 17.4504 27.6791 17.1172L28.8048 16.8754C29.1788 16.7968 29.5912 16.5876 29.7435 16.3993C29.9407 16.1558 30.0689 15.8442 30.0689 15.5778C30.0689 15.5449 30.0367 15.4521 29.9888 15.3747C29.9761 15.3538 29.9618 15.3339 29.9461 15.3151L27.5001 15.9435C25.9624 16.2439 25.0226 16.9055 24.3034 18.1502L23.3049 20.0858Z"
          fill="#00D8FE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.9541 15.2659C29.9024 15.3546 29.8423 15.4382 29.7746 15.5153C29.6091 15.7036 29.1614 15.9128 28.7554 15.9914L27.5331 16.2332C26.4475 16.5664 25.4401 17.2548 24.9488 18.1205L23.4607 21.4055C23.2583 21.8133 23.0526 22.1813 22.84 22.5102C22.8806 22.3057 22.9141 22.0999 22.9406 21.8932L23.3049 20.0268L24.3034 18.0913C25.0227 16.8465 25.9624 16.1849 27.5001 15.8845L29.9461 15.2562L29.9541 15.2658V15.2659Z"
          fill="black"
          fillOpacity="0.25"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.0332 20.2373V21.8932C18.0332 23.0304 18.4917 24.1915 20.105 24.1915C21.0867 24.1915 22.0865 23.5872 22.4126 21.3125L23.0468 16.9429C23.2113 15.6614 24.487 13.8719 25.8859 13.5316C25.9394 13.5188 27.8825 12.9459 28.0996 12.8478C28.1859 12.8088 28.3907 12.6863 28.4032 12.6725C28.4782 12.5895 28.535 12.5172 28.5778 12.4453C28.2598 12.5272 26.0032 13.1303 26.0032 13.1303C25.1324 13.3329 24.3752 13.7299 23.7755 14.3431C23.0712 15.0632 22.597 16.0667 22.3988 17.3818L21.8436 21.5505C21.6911 22.8207 21.1349 23.6611 20.2216 23.6611C19.2121 23.6611 18.6676 23.142 18.6648 22.0197L18.5654 20.2412L18.0332 20.2373Z"
          fill="black"
          fillOpacity="0.25"
        />
        <path
          d="M15.6759 21.6575V19.5948H19.0939V19.8895C19.0939 22.5418 19.8209 23.6906 21.4512 23.6906C22.8899 23.6906 23.8795 22.6628 24.5094 20.9766C25.228 19.0528 26.3179 18.1805 28.4427 18.1805H31.3518C31.7194 18.1805 32.0096 18.4836 32.0096 18.8498C32.0098 19.0764 31.9652 19.3008 31.8784 19.5101C31.7915 19.7194 31.6642 19.9094 31.5036 20.0694C31.3431 20.23 31.1524 20.3573 30.9426 20.4441C30.7327 20.5308 30.5078 20.5752 30.2807 20.5748L28.4357 20.5672C28.0522 20.5672 27.6816 20.8478 27.3009 21.4214C26.9836 21.8994 26.7164 22.4658 26.2916 23.495C25.9108 24.4178 25.3888 25.2 24.6906 25.7895C23.8365 26.5106 22.7613 26.9024 21.4512 26.9024C20.0407 26.9024 18.6059 26.3883 17.5224 25.4882C16.3526 24.5164 15.6759 23.1755 15.6759 21.6575Z"
          fill="#053949"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.2652 20.1842V21.6575C16.2652 22.9938 16.8595 24.1714 17.899 25.0348C18.8763 25.8467 20.1777 26.3131 21.4512 26.3131C22.6224 26.3131 23.5628 25.9704 24.3105 25.3392C24.929 24.8169 25.3995 24.1119 25.7469 23.2702C26.1861 22.206 26.4645 21.6158 26.8099 21.0955C27.2886 20.3743 27.8122 19.9779 28.4369 19.9779L30.2819 19.9855C30.5884 19.9855 30.8746 19.8647 31.0873 19.6523C31.193 19.5471 31.2768 19.4221 31.334 19.2843C31.3912 19.1466 31.4205 18.9989 31.4203 18.8498C31.4203 18.8035 31.388 18.7698 31.3518 18.7698H28.4427C26.5814 18.7698 25.699 19.476 25.0615 21.1828C24.7568 21.9985 24.3565 22.7013 23.8408 23.2369C23.1941 23.9086 22.3976 24.2799 21.4512 24.2799C19.4932 24.2799 18.5685 22.9238 18.5078 20.1842H16.2652Z"
          fill="#00D8FE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.4021 18.7954C31.3483 18.8637 31.2724 18.925 31.1774 19.0112C30.9744 19.1954 30.7013 19.3002 30.4089 19.3002H27.9926C26.6458 19.3002 25.9455 20.3525 25.0658 22.2894C24.7342 23.0194 23.83 24.7808 21.2744 24.7808C18.7188 24.7808 17.9742 22.2859 17.9742 21.1271V20.1842H18.5078C18.5685 22.9238 19.4932 24.2799 21.4512 24.2799C22.3977 24.2799 23.1941 23.9086 23.8409 23.2368C24.3565 22.7013 24.7568 21.9985 25.0615 21.1828C25.699 19.4761 26.5814 18.7698 28.4427 18.7698H31.3518C31.3711 18.7698 31.3893 18.7794 31.4021 18.7954Z"
          fill="black"
          fillOpacity="0.25"
        />
        <path
          d="M18.3463 21.1822C18.6515 21.1541 18.8905 20.8975 18.8904 20.5849V15.0166C18.8904 14.6854 18.6219 14.417 18.2907 14.417H13.5324C13.2012 14.417 12.9327 14.6854 12.9327 15.0166V20.5851C12.9327 20.8972 13.1712 21.1536 13.4758 21.1821C13.4866 21.185 13.4984 21.1881 13.511 21.1914C13.786 21.2637 14.0624 21.3301 14.3401 21.3908C14.5263 21.4313 14.7072 21.4677 14.8798 21.4988C15.2871 21.5721 15.6304 21.6131 15.8969 21.6131C16.1661 21.6131 16.5166 21.5712 16.9344 21.4965C17.1049 21.4659 17.2834 21.4304 17.4673 21.391C17.7617 21.3276 18.0548 21.258 18.3463 21.1822V21.1822Z"
          stroke="#043849"
          strokeWidth="0.707182"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2597 16.5304H14.5562L13.849 21.4807H13.2597V16.5304Z"
          fill="black"
          fillOpacity="0.25"
        />
        <path
          d="M13.2276 18.9656C14.0426 18.9656 14.7034 18.3061 14.7034 17.4926C14.7034 16.679 14.0426 16.0195 13.2276 16.0195C12.4125 16.0195 11.7517 16.679 11.7517 17.4926C11.7517 18.3061 12.4125 18.9656 13.2276 18.9656Z"
          fill="white"
          stroke="#063A49"
          strokeWidth="0.707182"
        />
        <path
          d="M13.2276 17.9556C13.4826 17.9556 13.6894 17.7489 13.6894 17.4938C13.6894 17.2387 13.4826 17.032 13.2276 17.032C12.9725 17.032 12.7657 17.2387 12.7657 17.4938C12.7657 17.7489 12.9725 17.9556 13.2276 17.9556Z"
          fill="#053949"
        />
        <path
          d="M18.5314 18.9656C19.3465 18.9656 20.0072 18.3061 20.0072 17.4926C20.0072 16.679 19.3465 16.0195 18.5314 16.0195C17.7163 16.0195 17.0556 16.679 17.0556 17.4926C17.0556 18.3061 17.7163 18.9656 18.5314 18.9656Z"
          fill="white"
          stroke="#063A49"
          strokeWidth="0.707182"
        />
        <path
          d="M18.5314 17.9556C18.7865 17.9556 18.9933 17.7489 18.9933 17.4938C18.9933 17.2387 18.7865 17.032 18.5314 17.032C18.2763 17.032 18.0696 17.2387 18.0696 17.4938C18.0696 17.7489 18.2763 17.9556 18.5314 17.9556Z"
          fill="#053949"
        />
        <path
          d="M18.0598 16.598C19.5941 16.5833 20.7395 15.6184 20.7394 14.1687V10.3027C20.7394 7.63721 18.5784 5.47901 15.9073 5.47901C13.2432 5.47901 11.0836 7.63863 11.0836 10.3027V14.1687C11.0836 15.6182 12.2287 16.5831 13.7627 16.598L13.7915 16.6038C14.0359 16.6518 14.281 16.696 14.5268 16.7364C14.6872 16.7626 14.843 16.7863 14.9917 16.8065C15.3552 16.8562 15.6599 16.8839 15.8925 16.8839C16.1287 16.8839 16.4384 16.8562 16.808 16.8067C16.9659 16.7854 17.1236 16.762 17.281 16.7365C17.5413 16.6946 17.801 16.6484 18.0598 16.598Z"
          fill="#25D8FC"
          stroke="#043849"
          strokeWidth="0.707182"
        />
        <path
          d="M12.6688 14.0508V9.0062C12.6688 6.74498 14.348 4.87708 16.5273 4.57877C16.3247 4.55065 16.1203 4.53637 15.9157 4.53604H15.9073C13.4385 4.53604 11.4371 6.53737 11.4371 9.00614V14.0508C11.4371 15.355 12.4944 16.4123 13.7987 16.4123H15.0303C13.7261 16.4124 12.6688 15.3551 12.6688 14.0508Z"
          fill="black"
          fillOpacity="0.25"
        />
        <path
          d="M15.4306 14.4486C15.6856 14.4486 15.8924 14.2418 15.8924 13.9867C15.8924 13.7316 15.6856 13.5249 15.4306 13.5249C15.1755 13.5249 14.9687 13.7316 14.9687 13.9867C14.9687 14.2418 15.1755 14.4486 15.4306 14.4486Z"
          fill="black"
          fillOpacity="0.25"
        />
        <path
          d="M14.193 12.0323C14.4481 12.0323 14.6548 11.8256 14.6548 11.5705C14.6548 11.3154 14.4481 11.1087 14.193 11.1087C13.9379 11.1087 13.7311 11.3154 13.7311 11.5705C13.7311 11.8256 13.9379 12.0323 14.193 12.0323Z"
          fill="black"
          fillOpacity="0.25"
        />
        <path
          d="M15.9115 9.77779C16.1666 9.77779 16.3734 9.57102 16.3734 9.31594C16.3734 9.06087 16.1666 8.8541 15.9115 8.8541C15.6565 8.8541 15.4497 9.06087 15.4497 9.31594C15.4497 9.57102 15.6565 9.77779 15.9115 9.77779Z"
          fill="black"
          fillOpacity="0.25"
        />
        <path
          d="M17.611 12.1502C17.8661 12.1502 18.0729 11.9434 18.0729 11.6884C18.0729 11.4333 17.8661 11.2265 17.611 11.2265C17.356 11.2265 17.1492 11.4333 17.1492 11.6884C17.1492 11.9434 17.356 12.1502 17.611 12.1502Z"
          fill="black"
          fillOpacity="0.25"
        />
      </g>
      <defs>
        <clipPath id={`Styleguidist_Clip0_${id}`}>
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </SVGIcon>
  );
};

export const StyleguidistIconDark: React.FC<ISVGIconProps> = ({ ...props }) => {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8424 16.393C20.5738 15.9778 21.0442 15.1809 21.0441 14.1522V10.0804C21.0441 7.27307 19.089 5 16.6724 5C14.2621 5 12.3082 7.27456 12.3082 10.0804V14.1522C12.3082 15.0354 12.655 15.7478 13.216 16.1945C12.8537 16.4492 12.617 16.87 12.617 17.346C12.617 18.1234 13.2483 18.7535 14.0271 18.7535C14.8059 18.7535 15.4373 18.1234 15.4373 17.346C15.4373 17.1681 15.4042 16.9979 15.3439 16.8411L15.4233 16.8565C15.5685 16.8842 15.7094 16.9091 15.844 16.9304C16.1728 16.9827 16.4485 17.0119 16.659 17.0119C16.8658 17.0119 17.1351 16.9845 17.4553 16.9355C17.4157 17.0654 17.3944 17.2032 17.3944 17.346C17.3944 18.1234 18.0258 18.7535 18.8046 18.7535C19.5834 18.7535 20.2147 18.1234 20.2147 17.346C20.2147 16.9784 20.0735 16.6437 19.8424 16.393ZM3.36636 15.3224C3.32628 15.3872 3.29767 15.4633 3.29118 15.5023C3.26131 15.5622 3.24265 15.6214 3.24265 15.6458C3.24265 15.9003 3.36518 16.198 3.55359 16.4307C3.69914 16.6106 4.09319 16.8105 4.45047 16.8857L5.52608 17.1166C6.48147 17.4351 7.368 18.0927 7.80039 18.9199L8.95534 21.6883C8.80775 21.4203 8.67443 21.1247 8.5547 20.8042C7.86807 18.9661 6.8267 18.1326 4.79649 18.1326H2.01692C1.66567 18.1326 1.38834 18.4223 1.38834 18.7721C1.38815 18.9886 1.43077 19.203 1.51374 19.403C1.59671 19.603 1.7184 19.7846 1.87181 19.9374C2.02519 20.0909 2.20737 20.2126 2.4079 20.2954C2.60843 20.3783 2.82335 20.4208 3.04033 20.4204L4.80319 20.4131C5.16959 20.4131 5.52372 20.6813 5.88747 21.2292C6.19064 21.686 6.446 22.2272 6.85181 23.2106C7.21568 24.0923 7.71446 24.8397 8.38155 25.4029C9.19769 26.092 10.225 26.4663 11.4768 26.4663C12.8245 26.4663 14.1954 25.9751 15.2307 25.1151C15.6547 24.7629 16.0108 24.36 16.2896 23.9163C16.5684 24.36 16.9246 24.7629 17.3485 25.1151C18.3838 25.9751 19.7547 26.4663 21.1024 26.4663C22.3542 26.4663 23.3815 26.092 24.1977 25.4029C24.8648 24.8397 25.3635 24.0923 25.7274 23.2106C26.1332 22.2272 26.3886 21.686 26.6918 21.2292C27.0555 20.6813 27.4096 20.4131 27.776 20.4131L29.5389 20.4204C29.7559 20.4208 29.9708 20.3783 30.1713 20.2954C30.3719 20.2126 30.554 20.0909 30.7074 19.9374C30.8608 19.7846 30.9825 19.603 31.0655 19.403C31.1485 19.203 31.1911 18.9886 31.1909 18.7721C31.1909 18.4223 30.9136 18.1326 30.5623 18.1326H27.7827C25.7525 18.1326 24.7111 18.9661 24.0245 20.8042C23.9048 21.1247 23.7715 21.4203 23.6239 21.6883L24.7788 18.9199C25.2112 18.0927 26.0978 17.4351 27.0531 17.1166L28.1288 16.8857C28.486 16.8105 28.8801 16.6106 29.0256 16.4307C29.214 16.198 29.3366 15.9003 29.3366 15.6458C29.3366 15.6144 29.3058 15.5257 29.26 15.4517C29.2461 15.4292 29.2321 15.4099 29.2192 15.3948L26.8821 15.9952C25.4129 16.2822 24.5149 16.9144 23.8277 18.1037L22.8736 19.9531L23.4369 17.0679C23.5788 15.8434 24.5027 14.6915 25.7085 14.3664C25.7414 14.3577 25.7742 14.3489 25.8069 14.3399C25.8863 14.3183 25.9748 14.2934 26.0703 14.2658C26.3426 14.187 26.6148 14.1021 26.8679 14.0146C27.1737 13.9089 27.4297 13.8068 27.6168 13.713C27.6912 13.6757 27.7529 13.6406 27.8004 13.6086C27.8411 13.5813 27.8678 13.5587 27.8785 13.5455C28.1001 13.2738 28.1367 13.1227 28.1367 12.6904C28.1367 12.6757 28.1294 12.6575 28.1169 12.6439C28.1142 12.641 25.5664 13.3072 25.5664 13.3072C24.7159 13.5008 23.9764 13.8802 23.3908 14.4661C22.703 15.1541 22.2398 16.1129 22.0462 17.3695L21.504 21.3526C21.3816 22.3499 20.9931 23.0699 20.3635 23.295C19.323 22.9697 18.8501 21.8567 18.8501 19.7656V19.484H16.995H15.5842H13.7291V19.7656C13.7291 21.7066 13.3217 22.8048 12.4311 23.2127C11.7023 23.0627 11.2553 22.3066 11.1224 21.2233L10.5801 17.2402C10.3865 15.9836 9.9234 15.0248 9.23558 14.3368C8.64992 13.7509 7.91042 13.3715 7.05998 13.1779C7.05998 13.1779 4.51218 12.5117 4.50942 12.5146C4.49692 12.5283 4.4896 12.5464 4.4896 12.5611C4.4896 12.5923 4.48979 12.6221 4.49023 12.6506C4.47217 12.6461 4.46247 12.6437 4.4623 12.6439C4.4498 12.6575 4.44248 12.6757 4.44248 12.6904C4.44248 13.1227 4.47908 13.2738 4.70076 13.5455C4.71146 13.5587 4.7381 13.5813 4.77881 13.6086C4.82633 13.6406 4.88805 13.6757 4.96237 13.713C5.14954 13.8068 5.40552 13.9089 5.71128 14.0146C5.96444 14.1021 6.23664 14.187 6.50895 14.2658C6.60439 14.2934 6.69291 14.3183 6.77231 14.3399C6.80506 14.3489 6.83785 14.3577 6.87068 14.3664C8.07653 14.6915 9.00039 15.8434 9.14228 17.0679L9.63629 19.5981L8.79863 17.9744C8.11144 16.7851 7.21348 16.1529 5.74422 15.8659L3.40712 15.2655C3.39423 15.2806 3.38021 15.2999 3.36636 15.3224ZM14.4684 17.3472C14.4684 17.5909 14.2708 17.7885 14.0271 17.7885C13.7834 17.7885 13.5858 17.5909 13.5858 17.3472C13.5858 17.1035 13.7834 16.9059 14.0271 16.9059C14.2708 16.9059 14.4684 17.1035 14.4684 17.3472ZM18.8046 17.7885C19.0483 17.7885 19.2459 17.5909 19.2459 17.3472C19.2459 17.1035 19.0483 16.9059 18.8046 16.9059C18.5608 16.9059 18.3633 17.1035 18.3633 17.3472C18.3633 17.5909 18.5608 17.7885 18.8046 17.7885Z"
        fill="black"
      />
    </SVGIcon>
  );
};

export const StyleguidistIconLight: React.FC<ISVGIconProps> = ({
  ...props
}) => {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8424 16.393C20.5738 15.9778 21.0442 15.1809 21.0441 14.1522V10.0804C21.0441 7.27307 19.089 5 16.6724 5C14.2621 5 12.3082 7.27456 12.3082 10.0804V14.1522C12.3082 15.0354 12.655 15.7478 13.216 16.1945C12.8537 16.4492 12.617 16.87 12.617 17.346C12.617 18.1234 13.2483 18.7535 14.0271 18.7535C14.8059 18.7535 15.4373 18.1234 15.4373 17.346C15.4373 17.1681 15.4042 16.9979 15.3439 16.8411L15.4233 16.8565C15.5685 16.8842 15.7094 16.9091 15.844 16.9304C16.1728 16.9827 16.4485 17.0119 16.659 17.0119C16.8658 17.0119 17.1351 16.9845 17.4553 16.9355C17.4157 17.0654 17.3944 17.2032 17.3944 17.346C17.3944 18.1234 18.0258 18.7535 18.8046 18.7535C19.5834 18.7535 20.2147 18.1234 20.2147 17.346C20.2147 16.9784 20.0735 16.6437 19.8424 16.393ZM3.36636 15.3224C3.32628 15.3872 3.29767 15.4633 3.29118 15.5023C3.26131 15.5622 3.24265 15.6214 3.24265 15.6458C3.24265 15.9003 3.36518 16.198 3.55359 16.4307C3.69914 16.6106 4.09319 16.8105 4.45047 16.8857L5.52608 17.1166C6.48147 17.4351 7.368 18.0927 7.80039 18.9199L8.95534 21.6883C8.80775 21.4203 8.67443 21.1247 8.5547 20.8042C7.86807 18.9661 6.8267 18.1326 4.79649 18.1326H2.01692C1.66567 18.1326 1.38834 18.4223 1.38834 18.7721C1.38815 18.9886 1.43077 19.203 1.51374 19.403C1.59671 19.603 1.7184 19.7846 1.87181 19.9374C2.02519 20.0909 2.20737 20.2126 2.4079 20.2954C2.60843 20.3783 2.82335 20.4208 3.04033 20.4204L4.80319 20.4131C5.16959 20.4131 5.52372 20.6813 5.88747 21.2292C6.19064 21.686 6.446 22.2272 6.85181 23.2106C7.21568 24.0923 7.71446 24.8397 8.38155 25.4029C9.19769 26.092 10.225 26.4663 11.4768 26.4663C12.8245 26.4663 14.1954 25.9751 15.2307 25.1151C15.6547 24.7629 16.0108 24.36 16.2896 23.9163C16.5684 24.36 16.9246 24.7629 17.3485 25.1151C18.3838 25.9751 19.7547 26.4663 21.1024 26.4663C22.3542 26.4663 23.3815 26.092 24.1977 25.4029C24.8648 24.8397 25.3635 24.0923 25.7274 23.2106C26.1332 22.2272 26.3886 21.686 26.6918 21.2292C27.0555 20.6813 27.4096 20.4131 27.776 20.4131L29.5389 20.4204C29.7559 20.4208 29.9708 20.3783 30.1713 20.2954C30.3719 20.2126 30.554 20.0909 30.7074 19.9374C30.8608 19.7846 30.9825 19.603 31.0655 19.403C31.1485 19.203 31.1911 18.9886 31.1909 18.7721C31.1909 18.4223 30.9136 18.1326 30.5623 18.1326H27.7827C25.7525 18.1326 24.7111 18.9661 24.0245 20.8042C23.9048 21.1247 23.7715 21.4203 23.6239 21.6883L24.7788 18.9199C25.2112 18.0927 26.0978 17.4351 27.0531 17.1166L28.1288 16.8857C28.486 16.8105 28.8801 16.6106 29.0256 16.4307C29.214 16.198 29.3366 15.9003 29.3366 15.6458C29.3366 15.6144 29.3058 15.5257 29.26 15.4517C29.2461 15.4292 29.2321 15.4099 29.2192 15.3948L26.8821 15.9952C25.4129 16.2822 24.5149 16.9144 23.8277 18.1037L22.8736 19.9531L23.4369 17.0679C23.5788 15.8434 24.5027 14.6915 25.7085 14.3664C25.7414 14.3577 25.7742 14.3489 25.8069 14.3399C25.8863 14.3183 25.9748 14.2934 26.0703 14.2658C26.3426 14.187 26.6148 14.1021 26.8679 14.0146C27.1737 13.9089 27.4297 13.8068 27.6168 13.713C27.6912 13.6757 27.7529 13.6406 27.8004 13.6086C27.8411 13.5813 27.8678 13.5587 27.8785 13.5455C28.1001 13.2738 28.1367 13.1227 28.1367 12.6904C28.1367 12.6757 28.1294 12.6575 28.1169 12.6439C28.1142 12.641 25.5664 13.3072 25.5664 13.3072C24.7159 13.5008 23.9764 13.8802 23.3908 14.4661C22.703 15.1541 22.2398 16.1129 22.0462 17.3695L21.504 21.3526C21.3816 22.3499 20.9931 23.0699 20.3635 23.295C19.323 22.9697 18.8501 21.8567 18.8501 19.7656V19.484H16.995H15.5842H13.7291V19.7656C13.7291 21.7066 13.3217 22.8048 12.4311 23.2127C11.7023 23.0627 11.2553 22.3066 11.1224 21.2233L10.5801 17.2402C10.3865 15.9836 9.9234 15.0248 9.23558 14.3368C8.64992 13.7509 7.91042 13.3715 7.05998 13.1779C7.05998 13.1779 4.51218 12.5117 4.50942 12.5146C4.49692 12.5283 4.4896 12.5464 4.4896 12.5611C4.4896 12.5923 4.48979 12.6221 4.49023 12.6506C4.47217 12.6461 4.46247 12.6437 4.4623 12.6439C4.4498 12.6575 4.44248 12.6757 4.44248 12.6904C4.44248 13.1227 4.47908 13.2738 4.70076 13.5455C4.71146 13.5587 4.7381 13.5813 4.77881 13.6086C4.82633 13.6406 4.88805 13.6757 4.96237 13.713C5.14954 13.8068 5.40552 13.9089 5.71128 14.0146C5.96444 14.1021 6.23664 14.187 6.50895 14.2658C6.60439 14.2934 6.69291 14.3183 6.77231 14.3399C6.80506 14.3489 6.83785 14.3577 6.87068 14.3664C8.07653 14.6915 9.00039 15.8434 9.14228 17.0679L9.63629 19.5981L8.79863 17.9744C8.11144 16.7851 7.21348 16.1529 5.74422 15.8659L3.40712 15.2655C3.39423 15.2806 3.38021 15.2999 3.36636 15.3224ZM14.4684 17.3472C14.4684 17.5909 14.2708 17.7885 14.0271 17.7885C13.7834 17.7885 13.5858 17.5909 13.5858 17.3472C13.5858 17.1035 13.7834 16.9059 14.0271 16.9059C14.2708 16.9059 14.4684 17.1035 14.4684 17.3472ZM18.8046 17.7885C19.0483 17.7885 19.2459 17.5909 19.2459 17.3472C19.2459 17.1035 19.0483 16.9059 18.8046 16.9059C18.5608 16.9059 18.3633 17.1035 18.3633 17.3472C18.3633 17.5909 18.5608 17.7885 18.8046 17.7885Z"
        fill="white"
      />
    </SVGIcon>
  );
};
