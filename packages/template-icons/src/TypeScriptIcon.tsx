import React, { ComponentProps, FunctionComponent } from "react";

import { SVGIcon } from "./SVGIcon";

export const TypeScriptIcon: FunctionComponent<
  ComponentProps<typeof SVGIcon>
> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path d="M0 16V32H16H32V16V0H16H0V16Z" fill="#007ACC" />
    <path
      d="M7.0764 16.1061L7.06624 17.4166H9.14878H11.2313L11.2313 23.3341V29.2515H12.7043H14.1773V23.3341L14.1773 17.4166H16.2599H18.3424V16.1315C18.3424 15.4204 18.3272 14.8261 18.3069 14.8109C18.2916 14.7906 15.757 14.7804 12.684 14.7855L7.09163 14.8007L7.0764 16.1061Z"
      fill="white"
    />
    <path
      d="M25.8208 14.7636C26.6335 14.9667 27.2532 15.3274 27.8221 15.9166C28.1167 16.2315 28.5535 16.8055 28.5891 16.9426C28.5993 16.9833 27.2075 17.9179 26.3643 18.441C26.3339 18.4613 26.212 18.3293 26.0748 18.1261C25.6634 17.5267 25.2316 17.2677 24.5713 17.222C23.6012 17.1559 22.9764 17.6639 22.9815 18.5121C22.9815 18.761 23.017 18.9083 23.1186 19.1115C23.332 19.5534 23.7281 19.8175 24.9726 20.3559C27.2634 21.3413 28.2437 21.9915 28.8532 22.9159C29.5339 23.9471 29.6862 25.5928 29.224 26.8169C28.7161 28.1477 27.4564 29.0518 25.6837 29.3515C25.1351 29.448 23.8348 29.4328 23.2456 29.3261C21.9605 29.0975 20.7415 28.4626 19.9897 27.6296C19.6951 27.3045 19.1212 26.4563 19.1567 26.3953C19.172 26.375 19.304 26.2937 19.4513 26.2074C19.5935 26.1261 20.132 25.8163 20.6399 25.5217L21.5593 24.9883L21.7523 25.2728C22.0215 25.6842 22.6107 26.248 22.9662 26.4359C23.9872 26.9744 25.3891 26.8982 26.0799 26.2785C26.3745 26.0093 26.4964 25.7299 26.4964 25.3185C26.4964 24.9477 26.4507 24.7852 26.2577 24.5058C26.0088 24.1502 25.5008 23.8506 24.0583 23.2258C22.4075 22.5147 21.6964 22.0728 21.0462 21.3718C20.6704 20.9655 20.3148 20.3153 20.1675 19.7718C20.0456 19.3198 20.0151 18.1871 20.1116 17.7299C20.452 16.135 21.6558 15.0226 23.3929 14.6925C23.9567 14.5858 25.2672 14.6264 25.8208 14.7636Z"
      fill="white"
    />
  </SVGIcon>
);

export const TypeScriptIconDark: FunctionComponent<
  ComponentProps<typeof SVGIcon>
> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 16V31H16H31V16V1H16H1V16ZM7.63412 16.0995L7.6246 17.3281H9.57698H11.5294V22.8757V28.4233H12.9103H14.2913V22.8757V17.3281H16.2436H18.196V16.1233C18.196 15.4566 18.1817 14.8995 18.1627 14.8852C18.1484 14.8661 15.7722 14.8566 12.8913 14.8614L7.6484 14.8757L7.63412 16.0995ZM27.0832 15.9218C26.5499 15.3694 25.9689 15.0313 25.207 14.8408C24.688 14.7123 23.4594 14.6742 22.9308 14.7742C21.3023 15.0837 20.1737 16.1266 19.8547 17.6218C19.7642 18.0504 19.7928 19.1123 19.907 19.5361C20.0451 20.0456 20.3785 20.6551 20.7308 21.0361C21.3404 21.6932 22.007 22.1075 23.5547 22.7742C24.907 23.3599 25.3832 23.6408 25.6166 23.9742C25.7975 24.2361 25.8404 24.3885 25.8404 24.7361C25.8404 25.1218 25.7261 25.3837 25.4499 25.6361C24.8023 26.217 23.488 26.2885 22.5308 25.7837C22.1975 25.6075 21.6451 25.0789 21.3928 24.6932L21.2118 24.4266L20.3499 24.9266C19.8737 25.2027 19.3689 25.4932 19.2356 25.5694C19.0975 25.6504 18.9737 25.7266 18.9594 25.7456C18.9261 25.8027 19.4642 26.598 19.7404 26.9028C20.4451 27.6837 21.588 28.2789 22.7928 28.4932C23.3451 28.5932 24.5642 28.6075 25.0785 28.517C26.7404 28.2361 27.9213 27.3885 28.3975 26.1408C28.8308 24.9932 28.688 23.4504 28.0499 22.4837C27.4785 21.617 26.5594 21.0075 24.4118 20.0837C23.2451 19.5789 22.8737 19.3313 22.6737 18.917C22.5785 18.7266 22.5451 18.5885 22.5451 18.3551C22.5404 17.5599 23.1261 17.0837 24.0356 17.1456C24.6547 17.1885 25.0594 17.4313 25.4451 17.9932C25.5737 18.1837 25.688 18.3075 25.7166 18.2885C26.507 17.798 27.8118 16.9218 27.8023 16.8837C27.7689 16.7551 27.3594 16.217 27.0832 15.9218Z"
      fill="black"
    />
  </SVGIcon>
);

export const TypeScriptIconLight: FunctionComponent<
  ComponentProps<typeof SVGIcon>
> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 16V31H16H31V16V1H16H1V16ZM7.63412 16.0995L7.6246 17.3281H9.57698H11.5294V22.8757V28.4233H12.9103H14.2913V22.8757V17.3281H16.2436H18.196V16.1233C18.196 15.4566 18.1817 14.8995 18.1627 14.8852C18.1484 14.8661 15.7722 14.8566 12.8913 14.8614L7.6484 14.8757L7.63412 16.0995ZM27.0832 15.9218C26.5499 15.3694 25.9689 15.0313 25.207 14.8408C24.688 14.7123 23.4594 14.6742 22.9308 14.7742C21.3023 15.0837 20.1737 16.1266 19.8547 17.6218C19.7642 18.0504 19.7928 19.1123 19.907 19.5361C20.0451 20.0456 20.3785 20.6551 20.7308 21.0361C21.3404 21.6932 22.007 22.1075 23.5547 22.7742C24.907 23.3599 25.3832 23.6408 25.6166 23.9742C25.7975 24.2361 25.8404 24.3885 25.8404 24.7361C25.8404 25.1218 25.7261 25.3837 25.4499 25.6361C24.8023 26.217 23.488 26.2885 22.5308 25.7837C22.1975 25.6075 21.6451 25.0789 21.3928 24.6932L21.2118 24.4266L20.3499 24.9266C19.8737 25.2027 19.3689 25.4932 19.2356 25.5694C19.0975 25.6504 18.9737 25.7266 18.9594 25.7456C18.9261 25.8027 19.4642 26.598 19.7404 26.9028C20.4451 27.6837 21.588 28.2789 22.7928 28.4932C23.3451 28.5932 24.5642 28.6075 25.0785 28.517C26.7404 28.2361 27.9213 27.3885 28.3975 26.1408C28.8308 24.9932 28.688 23.4504 28.0499 22.4837C27.4785 21.617 26.5594 21.0075 24.4118 20.0837C23.2451 19.5789 22.8737 19.3313 22.6737 18.917C22.5785 18.7266 22.5451 18.5885 22.5451 18.3551C22.5404 17.5599 23.1261 17.0837 24.0356 17.1456C24.6547 17.1885 25.0594 17.4313 25.4451 17.9932C25.5737 18.1837 25.688 18.3075 25.7166 18.2885C26.507 17.798 27.8118 16.9218 27.8023 16.8837C27.7689 16.7551 27.3594 16.217 27.0832 15.9218Z"
      fill="white"
    />
  </SVGIcon>
);
