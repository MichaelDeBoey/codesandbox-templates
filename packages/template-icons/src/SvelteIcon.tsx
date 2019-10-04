import React, { ComponentProps, FunctionComponent } from "react";

import { SVGIcon } from "./SVGIcon";

export const SvelteIcon: FunctionComponent<ComponentProps<typeof SVGIcon>> = ({
  ...props
}) => (
  <SVGIcon {...props}>
    <path
      d="M27.5342 4.35822C24.589 0.144416 18.7724 -1.10443 14.5671 1.5745L7.1816 6.28105C5.16609 7.54695 3.77642 9.60267 3.35293 11.9448C2.99976 13.8998 3.30868 15.9168 4.23081 17.6765C3.59882 18.6352 3.16817 19.7123 2.96497 20.8425C2.53883 23.2342 3.09525 25.6967 4.50833 27.6729C7.45346 31.8867 13.2701 33.1356 17.4754 30.4566L24.8609 25.7699C26.8739 24.5014 28.2628 22.4469 28.6896 20.1062C29.0414 18.1518 28.7315 16.1358 27.8089 14.3773C28.4405 13.4181 28.872 12.3413 29.0775 11.2113C29.5024 8.8196 28.9461 6.35758 27.5342 4.38088"
      fill="#FF3E00"
    />
    <path
      d="M13.845 28.0807C11.4634 28.6987 8.94924 27.766 7.5469 25.7444C6.69765 24.5563 6.36377 23.0758 6.62088 21.6382C6.66266 21.4068 6.72134 21.1787 6.79646 20.9558L6.93522 20.531L7.31469 20.8142C8.18692 21.451 9.16069 21.9354 10.1947 22.2471L10.4779 22.3292L10.4524 22.6124C10.4251 23.0007 10.5343 23.3863 10.7611 23.7027C11.1842 24.3108 11.9413 24.591 12.6584 24.405C12.8185 24.3619 12.9712 24.2951 13.1115 24.2067L20.4857 19.5002C20.8519 19.2697 21.1038 18.8954 21.1795 18.4694C21.2557 18.0356 21.1536 17.5893 20.8963 17.2319C20.4731 16.6237 19.716 16.3435 18.9989 16.5296C18.8386 16.5721 18.6858 16.6389 18.5458 16.7278L15.714 18.526C15.2508 18.8197 14.7457 19.0412 14.2159 19.183C11.8385 19.7972 9.3301 18.8662 7.9292 16.8496C7.08253 15.6604 6.75076 14.1802 7.00885 12.7434C7.26171 11.3318 8.09747 10.092 9.31115 9.32815L16.708 4.6216C17.1684 4.32851 17.6706 4.107 18.1975 3.96461C20.5782 3.3462 23.0919 4.27906 24.4927 6.30089C25.343 7.48856 25.6779 8.96911 25.4216 10.4071C25.3774 10.6399 25.3188 10.8697 25.246 11.0952L25.1044 11.52L24.7278 11.2368C23.8538 10.5952 22.877 10.1068 21.8393 9.79258L21.5561 9.71045L21.5816 9.42727C21.6143 9.03707 21.508 8.64787 21.2814 8.3285C20.8558 7.73103 20.1048 7.45928 19.3954 7.64603C19.2351 7.68852 19.0823 7.75538 18.9423 7.84426L11.554 12.5423C11.1892 12.7729 10.9375 13.1457 10.8602 13.5703C10.7854 14.0049 10.8873 14.4515 11.1434 14.8106C11.5644 15.413 12.3139 15.6925 13.0265 15.5129C13.1864 15.4693 13.3391 15.4025 13.4796 15.3147L16.3115 13.5193C16.7743 13.2224 17.2807 12.9998 17.8124 12.8595C20.1925 12.2396 22.7065 13.1715 24.1076 15.1929C24.9573 16.3809 25.2921 17.8612 25.0365 19.2991C24.7836 20.7107 23.9478 21.9505 22.7342 22.7143L15.3458 27.4209C14.8818 27.7155 14.3758 27.938 13.845 28.0807Z"
      fill="white"
    />
  </SVGIcon>
);

export const SvelteIconDark: FunctionComponent<
  ComponentProps<typeof SVGIcon>
> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7231 2.29924C18.5836 -0.162139 23.895 0.977868 26.5895 4.83835C27.885 6.6779 28.4032 8.9061 28.0405 11.0825C27.8591 12.1188 27.4445 13.1034 26.8745 13.9843C27.7036 15.5907 27.9886 17.4302 27.6777 19.218C27.2891 21.3684 26.0195 23.2339 24.18 24.3998L17.4177 28.7008C13.5572 31.1621 8.24579 30.0221 5.55123 26.1617C4.25577 24.348 3.73759 22.0939 4.12622 19.9175C4.30759 18.8812 4.72214 17.8966 5.29214 17.0157C4.43714 15.4093 4.17804 13.5698 4.48895 11.782C4.87759 9.63156 6.14715 7.76609 7.9867 6.60017L14.7231 2.29924ZM8.32352 24.4257C9.59307 26.2653 11.899 27.1203 14.0754 26.5503C14.5676 26.4207 15.034 26.2135 15.4486 25.9544L22.2109 21.6534C23.325 20.9539 24.0763 19.8139 24.3095 18.5184C24.5427 17.1971 24.2318 15.8498 23.4545 14.7616C22.185 12.922 19.879 12.067 17.7027 12.637C17.2104 12.7666 16.744 12.9738 16.3295 13.2329L13.7386 14.8652C13.609 14.943 13.4795 14.9948 13.324 15.0466C12.6504 15.202 11.9767 14.943 11.5881 14.3989C11.3549 14.062 11.2513 13.6475 11.329 13.2589C11.4067 12.8702 11.6399 12.5334 11.9767 12.3261L18.739 7.99927C18.8686 7.92155 18.9981 7.86973 19.1536 7.81791C19.8013 7.63655 20.5009 7.89564 20.8895 8.43973C21.0968 8.72473 21.2004 9.08746 21.1745 9.45019L21.1486 9.70928L21.4077 9.78701C22.3663 10.072 23.2472 10.5125 24.0504 11.1084L24.3872 11.3675L24.5168 10.9788L24.6723 10.357C24.9054 9.03564 24.5945 7.68836 23.8172 6.60018C22.5477 4.76062 20.2418 3.90561 18.0654 4.47562C17.5731 4.60516 17.1068 4.81244 16.6922 5.07153L9.90398 9.39837C8.78989 10.0979 8.03852 11.2379 7.80533 12.5334C7.54624 13.8548 7.85715 15.202 8.63443 16.2902C9.90398 18.1298 12.2099 18.9848 14.3863 18.4148C14.8786 18.2852 15.3449 18.078 15.7595 17.8189L18.3504 16.1866C18.4799 16.1089 18.6095 16.057 18.7649 16.0052C19.4127 15.8498 20.1122 16.1089 20.5009 16.653C20.734 16.9898 20.8377 17.4043 20.76 17.793C20.7081 18.1816 20.475 18.5184 20.1381 18.7257L13.4017 23.0266C13.2722 23.1044 13.1426 23.1562 12.9872 23.208C12.3395 23.3635 11.6399 23.1044 11.2513 22.5603C11.044 22.2753 10.9404 21.9384 10.9663 21.5757L10.9922 21.3166L10.7331 21.2389C9.77444 20.9539 8.89352 20.4875 8.09034 19.9175L7.75352 19.6584L7.62397 20.0471C7.6067 20.1162 7.58654 20.1853 7.56639 20.2543C7.52609 20.3925 7.48579 20.5307 7.46851 20.6689C7.23533 21.9903 7.54624 23.3375 8.32352 24.4257Z"
      fill="black"
      fillOpacity="0.6"
    />
  </SVGIcon>
);

export const SvelteIconLight: FunctionComponent<
  ComponentProps<typeof SVGIcon>
> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7231 2.29924C18.5836 -0.162139 23.895 0.977868 26.5895 4.83835C27.885 6.6779 28.4032 8.9061 28.0405 11.0825C27.8591 12.1188 27.4445 13.1034 26.8745 13.9843C27.7036 15.5907 27.9886 17.4302 27.6777 19.218C27.2891 21.3684 26.0195 23.2339 24.18 24.3998L17.4177 28.7008C13.5572 31.1621 8.24579 30.0221 5.55123 26.1617C4.25577 24.348 3.73759 22.0939 4.12622 19.9175C4.30759 18.8812 4.72214 17.8966 5.29214 17.0157C4.43714 15.4093 4.17804 13.5698 4.48895 11.782C4.87759 9.63156 6.14715 7.76609 7.9867 6.60017L14.7231 2.29924ZM8.32352 24.4257C9.59307 26.2653 11.899 27.1203 14.0754 26.5503C14.5676 26.4207 15.034 26.2135 15.4486 25.9544L22.2109 21.6534C23.325 20.9539 24.0763 19.8139 24.3095 18.5184C24.5427 17.1971 24.2318 15.8498 23.4545 14.7616C22.185 12.922 19.879 12.067 17.7027 12.637C17.2104 12.7666 16.744 12.9738 16.3295 13.2329L13.7386 14.8652C13.609 14.943 13.4795 14.9948 13.324 15.0466C12.6504 15.202 11.9767 14.943 11.5881 14.3989C11.3549 14.062 11.2513 13.6475 11.329 13.2589C11.4067 12.8702 11.6399 12.5334 11.9767 12.3261L18.739 7.99927C18.8686 7.92155 18.9981 7.86973 19.1536 7.81791C19.8013 7.63655 20.5009 7.89564 20.8895 8.43973C21.0968 8.72473 21.2004 9.08746 21.1745 9.45019L21.1486 9.70928L21.4077 9.78701C22.3663 10.072 23.2472 10.5125 24.0504 11.1084L24.3872 11.3675L24.5168 10.9788L24.6723 10.357C24.9054 9.03564 24.5945 7.68836 23.8172 6.60018C22.5477 4.76062 20.2418 3.90561 18.0654 4.47562C17.5731 4.60516 17.1068 4.81244 16.6922 5.07153L9.90398 9.39837C8.78989 10.0979 8.03852 11.2379 7.80533 12.5334C7.54624 13.8548 7.85715 15.202 8.63443 16.2902C9.90398 18.1298 12.2099 18.9848 14.3863 18.4148C14.8786 18.2852 15.3449 18.078 15.7595 17.8189L18.3504 16.1866C18.4799 16.1089 18.6095 16.057 18.7649 16.0052C19.4127 15.8498 20.1122 16.1089 20.5009 16.653C20.734 16.9898 20.8377 17.4043 20.76 17.793C20.7081 18.1816 20.475 18.5184 20.1381 18.7257L13.4017 23.0266C13.2722 23.1044 13.1426 23.1562 12.9872 23.208C12.3395 23.3635 11.6399 23.1044 11.2513 22.5603C11.044 22.2753 10.9404 21.9384 10.9663 21.5757L10.9922 21.3166L10.7331 21.2389C9.77444 20.9539 8.89352 20.4875 8.09034 19.9175L7.75352 19.6584L7.62397 20.0471C7.6067 20.1162 7.58654 20.1853 7.56639 20.2543C7.52609 20.3925 7.48579 20.5307 7.46851 20.6689C7.23533 21.9903 7.54624 23.3375 8.32352 24.4257Z"
      fill="white"
    />
  </SVGIcon>
);
