import { defineComponent } from "vue";

export const IconLoadingWave = defineComponent({
  props: {
    style: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1280 720"
        text-rendering="geometricPrecision"
        shape-rendering="geometricPrecision"
        height="100%"
        width="100%"
        style={props.style}
      >
        <style>
          {`  @keyframes a0_t { 0% { transform: translate(-960px,10px); } 100% { transform: translate(-320px,10px); } }
@keyframes a1_t { 0% { transform: translate(-480px,10px); } 100% { transform: translate(-1440px,10px); } }
@keyframes a2_t { 0% { transform: translate(456px,0px); } 100% { transform: translate(1096px,0px); } }
@keyframes a3_t { 0% { transform: translate(936px,0px); } 100% { transform: translate(-24px,0px); } }`}
        </style>
        <defs>
          <symbol
            id="Symbol-2"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            overflow="hidden"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
          >
            <path
              opacity="0.6"
              d="M0,100C0,100,189.072,0,320,0C450.928,0,509.072,100,640,100C770.928,100,829.072,0,960,0C1090.93,0,1149.07,100,1280,100C1410.93,100,1469.07,0,1600,0C1730.93,0,1789.07,100,1920,100C2050.93,100,2109.07,0,2240,0C2370.93,0,2560,100,2560,100L2560,1080L0,1080L0,100Z"
              fill="url(#Gradient-0)"
              transform="translate(320,550) translate(-1280,-540)"
              style="animation: 4s linear infinite both a0_t;"
            />
            <path
              opacity="0.5"
              d="M960,100C768.524,100,671.476,0,480,0C288.523,0,191.477,100,0,100L0,1080L2880,1080L2880,100C2688.52,100,2591.48,0,2400,0C2208.51,0,2111.47,100,1920,100C1728.52,100,1631.48,0,1440,0C1248.52,0,1151.48,100,960,100Z"
              fill="url(#Gradient-0)"
              transform="translate(960,550) translate(-1440,-540)"
              style="animation: 4s linear infinite both a1_t;"
            />
          </symbol>
          <linearGradient
            id="Gradient-0"
            x1="1440"
            y1="0"
            x2="1440"
            y2="1080"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#3e6bf6" />
            <stop offset="1" stop-color="#3232dc" />
          </linearGradient>
          <linearGradient
            id="Gradient-1"
            x1="1075.5"
            y1="0"
            x2="1075.5"
            y2="1202"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fafafa" />
            <stop offset="1" stop-color="#437fff" />
          </linearGradient>
        </defs>
        <g
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 100 100"
          stroke-miterlimit="1.5"
          transform="translate(640.001,359.998) scale(3.01302,2.0426) translate(-629.298,-348.596)"
        >
          <rect
            id="background"
            width="100%"
            height="100%"
            fill="url(#Gradient-1)"
            rx="0"
            stroke="none"
            transform="translate(992.074,556.731) scale(0.987147,0.959141) translate(-1007.5,-577)"
          />
        </g>
        <g transform="translate(404,1090) translate(-1820,-540)">
          <path
            opacity="0.6"
            d="M0,100C0,100,189.072,0,320,0C450.928,0,509.072,100,640,100C770.928,100,829.072,0,960,0C1090.93,0,1149.07,100,1280,100C1410.93,100,1469.07,0,1600,0C1730.93,0,1789.07,100,1920,100C2050.93,100,2109.07,0,2240,0C2370.93,0,2560,100,2560,100L2560,1080L0,1080L0,100Z"
            fill="url(#Gradient-0)"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            transform="translate(1736,540) translate(-1280,-540)"
            style="animation: 4s linear infinite both a2_t;"
          />
          <path
            opacity="0.5"
            d="M960,100C768.524,100,671.476,0,480,0C288.523,0,191.477,100,0,100L0,1080L2880,1080L2880,100C2688.52,100,2591.48,0,2400,0C2208.51,0,2111.47,100,1920,100C1728.52,100,1631.48,0,1440,0C1248.52,0,1151.48,100,960,100Z"
            fill="url(#Gradient-0)"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            transform="translate(2376,540) translate(-1440,-540)"
            style="animation: 4s linear infinite both a3_t;"
          />
        </g>
      </svg>
    );
  },
});
export const IconChineseLogo = defineComponent({
  props: {
    style: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <svg
        width="488"
        height="128"
        viewBox="0 0 488 128"
        fill="none"
        style={props.style}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M64 39C57.3696 39 51.0107 41.6339 46.3223 46.3223C42.5834 50.0613 40.1511 54.8626 39.3192 60.0168C38.9673 62.1977 37.2091 64 35 64L0 64C2.56298e-06 47.0261 6.74284 30.7475 18.7452 18.7452C30.7475 6.74283 47.0261 0 64 0C80.9739 0 97.2525 6.74284 109.255 18.7452C121.257 30.7475 128 47.0261 128 64H93C90.7909 64 89.0327 62.1978 88.6808 60.0168C87.8489 54.8626 85.4166 50.0613 81.6777 46.3223C76.9893 41.6339 70.6304 39 64 39Z"
          fill="#0049B3"
        />
        <path
          d="M121.566 92C124.575 85.8244 126.62 79.0924 127.505 72H90.9853C89.394 72 87.8679 72.6321 86.7426 73.7574L83.4289 77.0711C81.5536 78.9464 79.01 80 76.3579 80H51.6421C48.99 80 46.4464 78.9464 44.5711 77.0711L41.2574 73.7574C40.1321 72.6321 38.606 72 37.0147 72H0.495117C1.37952 79.0924 3.42444 85.8244 6.43384 92H121.566Z"
          fill="#0049B3"
        />
        <path
          d="M11.0774 100C14.0971 104.431 17.6587 108.462 21.6667 112H106.333C110.341 108.462 113.903 104.431 116.922 100H81.6569C80.596 100 79.5786 100.421 78.8284 101.172L77.7574 102.243C76.6321 103.368 75.106 104 73.5147 104H54.4853C52.894 104 51.3679 103.368 50.2426 102.243L49.1716 101.172C48.4214 100.421 47.404 100 46.3431 100H11.0774Z"
          fill="#0049B3"
        />
        <path
          d="M63.9999 128C52.7499 128 42.1779 125.097 32.9919 120H95.008C85.822 125.097 75.2499 128 63.9999 128Z"
          fill="#0049B3"
        />
        <path
          d="M189.8 63.88C194.76 55.08 200.52 40.6 202.84 25.4C205.4 25.32 207.96 25.64 210.68 26.52C210.12 30.36 209.4 34.2 208.44 37.88H231.56V45.08H226.84C226.2 58.2 222.44 70.12 217 80.12C221.4 86.76 226.6 92.6 231.96 97.16C230.44 100.52 228.68 102.44 226.92 104.04C221.96 99.8 216.84 94.28 212.28 87.72C207.8 94.28 202.6 99.72 197.32 103.8L192.12 97.16C197.8 92.68 203.16 87 207.56 80.04C204.44 74.36 201.88 68.2 200.28 61.72C199.24 63.96 198.12 65.96 197.08 67.72L189.8 63.88ZM153 60.92C157 58.44 162.44 54.2 167.4 48.76H155.08V41.56H164.6C162.12 38.44 158.6 35.08 155.96 32.52C157.08 30.68 158.6 28.92 160.92 27.4C163.72 30.04 167.56 33.72 170.36 37.08L164.92 41.56H171.08V25.4H179.08V41.56H195.08V48.76H179.08V49C183.32 51.16 187.64 53.56 192.2 56.44L188.6 62.92C185.56 60.92 182.28 58.92 179.08 57.16V65.4H171.08V55.32C166.04 60.52 160.68 64.6 156.68 67C155 65 153.8 62.92 153 60.92ZM154.04 96.28C159.4 94.84 164.44 93.08 168.84 90.84C164.28 88.92 160.12 87.32 157.08 86.28C157.96 85 159.72 82.04 161.72 78.2H154.84V71H165.4L168.04 65.4L175.88 67.64C175.4 68.76 174.84 69.88 174.28 71H186.2C188.04 71 186.76 69.64 189.08 70.28L195.32 71.96C193.64 79 190.04 84.68 185.32 89.32C188.2 90.6 191.08 91.96 193.72 93.24L190.04 100.44C186.28 98.52 182.28 96.68 178.2 94.84C171.96 98.92 164.52 101.72 156.76 103.8C155.24 101.4 154.36 98.84 154.04 96.28ZM168.36 82.12C171 83.16 173.88 84.36 176.92 85.64C179.56 83.48 181.88 81.08 183.8 78.2H170.52C169.72 79.56 169 80.92 168.36 82.12ZM180.6 36.52C183.64 33.72 186.44 30.76 188.92 27.56C191 28.52 192.92 29.88 194.68 31.88C191.96 35.24 188.84 38.44 185.72 41.48L180.6 36.52ZM205.8 47.4C206.2 55.88 208.6 64.12 212.2 71.56C215.64 63.88 218.12 55.08 218.92 45.08H206.52L205.8 47.4Z"
          fill="#161C2C"
        />
        <path
          d="M279.56 26.84V33.64H275.4V54.28C276.84 54.12 278.2 54.04 279.64 53.88L280.04 60.52L275.4 61V64.76H267.4V61.8C256.36 62.92 246.36 63.64 238.76 63.88C238.04 61.72 237.88 59.4 238.44 56.92C240.2 56.84 242.04 56.76 244.12 56.6V33.64H239.56V26.84H279.56ZM238.84 94.84C247.08 92.44 257.8 89.32 267.64 84.12L271.08 90.2C260.84 95.64 249.4 99.56 241 101.96C239.56 99.96 238.76 97 238.84 94.84ZM240.28 82.28C246.76 80.6 254.92 78.44 262.92 74.6L266.2 81C257.8 85 249.16 87.32 242.6 89.48C240.92 87.16 240.28 84.76 240.28 82.28ZM244.12 67.96C265.96 67 285.64 65.4 304.52 63.4C305.48 65.96 305.64 68.36 305.32 70.6C297.32 71.4 289.32 72.2 281.08 72.84V73.24C283.48 77.24 286.52 80.44 289.96 83.16C294.92 80.52 300.76 76.76 306.2 72.76C308.68 74.6 310.36 76.52 311.64 78.68C307.24 82.04 301.88 85.24 297.32 87.8C303.16 90.76 309.56 92.84 315.88 94.52C315.4 98.36 314.2 100.44 312.92 102.12C301.72 99.16 289.88 94.52 281.08 85.64V103.8H273.08V73.56C263.88 74.28 254.44 75 244.36 75.72C243.72 73.32 243.56 70.68 244.12 67.96ZM252.12 56.12C256.84 55.8 262.04 55.4 267.4 54.92V52.2H252.12V56.12ZM252.12 46.12H267.4V42.92H252.12V46.12ZM252.12 36.84H267.4V33.64H252.12V36.84ZM280.84 44.36L284.6 38.44C288.84 41 293 43.72 297.08 46.52C299.88 43.64 302.28 40.12 304.12 35.8H281.48V28.6H306.2C307.48 28.6 306.92 27.56 307.96 27.72C310.68 28.28 312.36 29.08 314.6 30.68C311.8 39.88 308.04 46.28 303.72 51.08C306.92 53.32 310.12 55.48 313.24 57.72C312.28 60.44 310.68 62.36 308.76 63.72C305.16 61.24 301.72 58.68 298.2 56.12C293.88 59.32 289.08 61.48 284.04 63.32L281 56.28C284.44 55.08 288.04 53.48 291.32 51.24C287.88 48.84 284.44 46.52 280.84 44.36Z"
          fill="#161C2C"
        />
        <path
          d="M359.72 29.32V36.52H347.96C347.88 38.92 347.8 41.32 347.48 43.48H361.72V50.68H345.72C345.72 50.76 345.64 50.84 345.64 50.92C350.92 53.8 356.36 56.68 361.4 59.96L356.6 66.44C351.88 63.32 347.08 60.36 341.8 57.56C337.32 63.48 331.08 67.16 325.4 69.08C323.08 66.6 322.12 64.2 321.56 62.04C327 60.12 333.16 56.52 336.76 50.68H322.04V43.48H339.4C339.72 41.48 339.88 39.08 339.96 36.52H332.92C331.08 39.24 329.16 41.48 327.64 43L322.04 37.24C324.76 34.6 328.2 30.28 330.76 23.96C333.48 24.28 336.04 25.08 338.28 26.2C337.88 27.24 337.4 28.28 336.92 29.32H359.72ZM331.32 103.4V67H390.04V103.4H382.04V99.4H339.32V103.4H331.32ZM339.4 92.2H382.12V87H339.4V92.2ZM339.4 80.12H382.12V71.48H380.68C379.48 71.48 378.6 71.8 377.72 72.68L376.6 73.8C375.72 74.68 374.84 75 373.64 75H339.4V80.12ZM365 61.8V29H395.24V61.8H365ZM373 54.6H387.24V33.48H385.88C384.68 33.48 383.8 33.8 382.92 34.68L382.6 35C381.72 35.88 380.84 36.2 379.64 36.2H373V54.6Z"
          fill="#161C2C"
        />
        <path
          d="M476.12 35V42.2H457.88V50.84H479.96V58.04H426.6V50.84H449.88V42.2H437.64C435.8 45.4 434.04 48.2 432.52 50.36L425.96 45.72C429.24 41.16 433.56 33.72 436.44 25.4C438.84 25.72 441.32 26.44 443.96 27.96C443.16 30.36 442.2 32.76 441.16 35H449.88V24.28H457.88V35H476.12ZM404.68 97.56C409.32 92.36 411.96 89.08 413.48 85.64V60.2H405.24V53H421.48V84.68C424.12 89.8 428.84 93.88 436.76 93.88H481.08C481 97.64 480.44 99.88 479.8 101.88H436.76C428.44 101.88 422.44 98.2 418.52 93.56C416.52 96.6 413.64 100.2 409.64 104.04C407.72 102.28 406.04 100.2 404.68 97.56ZM406.92 30.6C408.44 28.84 410.52 27.16 413.48 25.96C417.08 31 421.32 37.4 424.28 41.88L417.56 46.2C414.68 41.8 410.44 35.56 406.92 30.6ZM430.52 87.64V63.64H475.72V87.64H430.52ZM438.52 80.44H467.72V68.12H466.36C465.16 68.12 464.28 68.44 463.4 69.32L463.08 69.64C462.2 70.52 461.32 70.84 460.12 70.84H438.52V80.44Z"
          fill="#161C2C"
        />
      </svg>
    );
  },
});

export const IconActionLogo = defineComponent({
  props: {
    style: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="1.5"
        style={props.style}
      >
        <style>
          {`
       @keyframes a0_t1 { 0% { transform: translate(-960px,10px); } 100% { transform: translate(-640px,10px); } }
  @keyframes a1_t1 { 0% { transform: translate(-480px,10px); } 100% { transform: translate(-960px,10px); } }
  @keyframes down-2_t1 { 0% { transform: translate(0px,-57px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 100% { transform: translate(0px,0px); } }
  @keyframes a2_t1 { 0% { transform: translate(0px,64.8889px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 100% { transform: translate(0px,0px); } }`}
        </style>
        <defs>
          <symbol
            id="Symbol-1"
            preserveAspectRatio="none"
            width="1280"
            height="850"
            viewBox="0 0 1280 850"
            overflow="hidden"
          >
            <path
              opacity="0.6"
              d="M0,100C0,100,189.072,0,320,0C450.928,0,509.072,100,640,100C770.928,100,829.072,0,960,0C1090.93,0,1149.07,100,1280,100C1410.93,100,1469.07,0,1600,0C1730.93,0,1789.07,100,1920,100C2050.93,100,2109.07,0,2240,0C2370.93,0,2560,100,2560,100L2560,1080L0,1080L0,100Z"
              fill="#3e6bf6"
              transform="translate(320,550) translate(-1280,-540)"
              style="animation: 2s linear both a0_t1;"
            />
            <path
              opacity="0.5"
              d="M960,100C768.524,100,671.476,0,480,0C288.523,0,191.477,100,0,100L0,1080L2880,1080L2880,100C2688.52,100,2591.48,0,2400,0C2208.51,0,2111.47,100,1920,100C1728.52,100,1631.48,0,1440,0C1248.52,0,1151.48,100,960,100Z"
              fill="#3e6bf6"
              transform="translate(960,550) translate(-1440,-540)"
              style="animation: 2s linear both a1_t1;"
            />
          </symbol>
          <mask id="Mask-1">
            <rect
              width="218"
              height="103.562"
              fill="#ffffff"
              stroke-miterlimit="5"
              rx="0"
              stroke="none"
              transform="translate(63.5049,0) scale(0.666667,0.858314) translate(-109,0)"
            />
          </mask>
          <mask id="Mask-2">
            <rect
              width="220"
              height="96.6666"
              fill="#ffffff"
              rx="0"
              stroke="none"
              transform="translate(64,64.4444) scale(0.666667,0.666667) translate(-110,-96.6666)"
            />
          </mask>
        </defs>
        <g id="logo" transform="translate(200,199.071) translate(-96,0)">
          <g
            id="down"
            mask="url(#Mask-1)"
            transform="translate(96.0001,54) scale(1.5,1.5) translate(-63.5049,-28)"
          >
            <g
              id="down-2"
              transform="translate(63.5049,-29) translate(-63.5049,-28)"
              style="animation: 2s linear both down-2_t1;"
            >
              <path
                d="M121.566,92C124.575,85.8244,126.62,79.0924,127.505,72L90.9853,72C89.394,72,87.8679,72.6321,86.7426,73.7574L83.4289,77.0711C81.5536,78.9464,79.01,80,76.3579,80L51.6421,80C48.99,80,46.4464,78.9464,44.5711,77.0711L41.2574,73.7574C40.1321,72.6321,38.606,72,37.0147,72L0.495117,72C1.37952,79.0924,3.42444,85.8244,6.43384,92L121.566,92Z"
                fill="#3e6bf6"
                transform="translate(63.505,10) translate(-64.0001,-82)"
              />
              <path
                d="M11.0774,100C14.0971,104.431,17.6587,108.462,21.6667,112L106.333,112C110.341,108.462,113.903,104.431,116.922,100L81.6569,100C80.596,100,79.5786,100.421,78.8284,101.172L77.7574,102.243C76.6321,103.368,75.106,104,73.5147,104L54.4853,104C52.894,104,51.3679,103.368,50.2426,102.243L49.1716,101.172C48.4214,100.421,47.404,100,46.3431,100L11.0774,100Z"
                fill="#3e6bf6"
                transform="translate(63.5046,34) translate(-63.9997,-106)"
              />
              <path
                d="M63.9999,128C52.7499,128,42.1779,125.097,32.9919,120L95.008,120C85.822,125.097,75.2499,128,63.9999,128Z"
                fill="#3e6bf6"
                transform="translate(63.5048,52) translate(-63.9999,-124)"
              />
            </g>
          </g>
          <g
            id="up"
            mask="url(#Mask-2)"
            transform="translate(96,0) scale(1.5,1.5) translate(-64,-64)"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M64,39C57.3696,39,51.0107,41.6339,46.3223,46.3223C42.5834,50.0613,40.1511,54.8626,39.3192,60.0168C38.9673,62.1977,37.2091,64,35,64L0,64C2.56298e-06,47.0261,6.74284,30.7475,18.7452,18.7452C30.7475,6.74283,47.0261,0,64,0C80.9739,0,97.2525,6.74284,109.255,18.7452C121.257,30.7475,128,47.0261,128,64L93,64C90.7909,64,89.0327,62.1978,88.6808,60.0168C87.8489,54.8626,85.4166,50.0613,81.6777,46.3223C76.9893,41.6339,70.6304,39,64,39Z"
              fill="#3e6bf6"
              transform="translate(64,96.8889) translate(-64,-32)"
              style="animation: 2s linear both a2_t1;"
            />
          </g>
        </g>
      </svg>
    );
  },
});
