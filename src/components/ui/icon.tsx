import { History, Loader2, LogOut, type LucideIcon } from "lucide-react";

export type Icon = LucideIcon;

export const Icon = {
  loading: Loader2,
  signOut: LogOut,
  history: History,
};

export const MoodIcon = {
  joy: (props: Icon) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 72 72"
      {...props}
    >
      <g id="color">
        <circle cx="36" cy="36" r="23" fill="#fcea2b" />
        <path
          fill="#fff"
          d="M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z"
        />
        <path
          fill="#ea5a47"
          d="M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z"
        />
      </g>
      <g>
        <circle
          cx="36"
          cy="36"
          r="23"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M31.6941,32.4036a4.7262,4.7262,0,0,0-8.6382,0"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M48.9441,32.4036a4.7262,4.7262,0,0,0-8.6382,0"
        />
      </g>
    </svg>
  ),
  sadness: (props: Icon) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 72 72"
      {...props}
    >
      <g>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m52,52.38c.8775-1.631,1-5.38,1-7.38,0-4-4-11-4-11"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m44,36s3,6.728,3,10c0,3.065-1,8-1,10"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m20,52.4c-.8775-1.631-1-5.4-1-7.4,0-4,4-11,4-11"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m28,36s-3,6.728-3,10c0,3.065,1,8,1,10"
        />
      </g>
      <g id="color">
        <path
          fill="#fcea2b"
          d="m36.2,13.32c-12.57,0-22.8,10.23-22.8,22.8s10.23,22.8,22.8,22.8,22.8-10.23,22.8-22.8-10.23-22.8-22.8-22.8Z"
        />
        <path
          fillRule="evenodd"
          d="m35.93,51.58c-2.461,0-4.742-2.368-4.742-4.987s2.444-4.66,4.905-4.66,4.701,2.205,4.701,4.823-2.403,4.823-4.864,4.823v.001Z"
        />
        <path
          fill="#fff"
          d="m31.37,45.29c2.025,1.288,7.318,1.288,9.26,0l-4.63-4.005-4.63,4.005Z"
        />
        <path
          fill="#92d3f5"
          d="m29.7,32.02c-5.762,9.541-3.86,14.27-3.696,23.98,0,1.803-5.146-2.412-6-4-2.17-5.92-.3989-13.81,2.5-19.18,2.887-1.622,6.992-2.084,7.196-.8031v.0031Z"
        />
        <path
          fill="#92d3f5"
          d="m42.3,32.4c5.762,9.541,3.86,13.27,3.696,22.98,0,1.803,5.396-2.412,6.25-4,2.17-5.92.1489-12.81-2.75-18.18-2.887-1.622-6.992-2.084-7.196-.8031v.0031Z"
        />
      </g>
      <g id="line">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m40.5,32.82c.4132-.344,2.246-1.792,4.909-1.636,2.161.1259,3.61,1.233,4.091,1.636"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m22.5,32.82c.4132-.344,2.246-1.792,4.909-1.636,2.161.1259,3.61,1.233,4.091,1.636"
        />
        <circle
          cx="36"
          cy="36"
          r="23"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <circle
          cx="36"
          cy="46.6"
          r="4.759"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  ),
  fear: (props: Icon) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 72 72"
      {...props}
    >
      <g>
        <path d="M42.8472,45.6583c0-2.592-3.834-4.694-6.869-4.694s-6.869,2.101-6.869,4.694,3.659.9248,6.694.9248S42.8472,48.25,42.8472,45.6583Z" />
      </g>
      <g id="color">
        <path
          fill="#fcea2b"
          d="M35.9772,12.9583a23,23,0,1,0,23,23A23.026,23.026,0,0,0,35.9772,12.9583Z"
        />
        <path
          fill="#92d3f5"
          d="M35.9772,24.7689A23.0392,23.0392,0,0,1,58.2053,41.8636a23,23,0,1,0-44.4561,0A23.0389,23.0389,0,0,1,35.9772,24.7689Z"
        />
        <path d="M42.8472,45.6583c0-2.592-3.834-4.694-6.869-4.694s-6.869,2.101-6.869,4.694,3.659.9248,6.694.9248S42.8472,48.25,42.8472,45.6583Z" />
      </g>
      <g id="line">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M29.3564,22.669a8.44,8.44,0,0,0-9.0659,4.4981"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M51.664,27.1671a8.44,8.44,0,0,0-9.0659-4.4981"
        />
        <circle
          cx="35.9772"
          cy="35.9583"
          r="23"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M42.8472,45.6583c0-2.592-3.834-4.694-6.869-4.694s-6.869,2.101-6.869,4.694,3.659.9248,6.694.9248S42.8472,48.25,42.8472,45.6583Z"
        />
        <path d="M29.9772,32.9583a3,3,0,1,1-3-3,3.0011,3.0011,0,0,1,3,3" />
        <path d="M47.9772,32.9583a3,3,0,1,1-3-3,3.0011,3.0011,0,0,1,3,3" />
      </g>
    </svg>
  ),
  disgust: (props: Icon) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 72 72"
      {...props}
    >
      <g id="color">
        <path
          fill="#FCEA2B"
          d="M36,13c-12.6823,0-23,10.3177-23,23c0,12.6822,10.3177,23,23,23c12.6822,0,23-10.3178,23-23 C59,23.3177,48.6822,13,36,13z"
        />
        <path
          fill="#FFFFFF"
          d="M28,46c0,0-0.1191-2.9038,0-3c1.3686-0.7308,3.9645-1,8-1c4,0,6.6522,0.2795,8,1c0.0878,0.0572,0,3,0,3H28z"
        />
      </g>
      <g id="line">
        <circle
          cx="36"
          cy="36"
          r="23"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path d="M30,30.9252c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,27.9252,30,29.27,30,30.9252" />
        <path d="M48,30.9252c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.27,48,30.9252" />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M28,46c0,0-0.1191-2.9038,0-3c1.3686-0.7308,3.9645-1,8-1c4,0,6.6522,0.2795,8,1c0.0878,0.0572,0,3,0,3H28z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M23.1483,24.2501c0.4872,0.2275,2.6277,1.1608,5.1639,0.3327c2.0576-0.6718,3.1771-2.1117,3.5396-2.6239"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M48.8517,24.2501c-0.4872,0.2275-2.6277,1.1608-5.1639,0.3327c-2.0576-0.6718-3.1771-2.1117-3.5396-2.6239"
        />
      </g>
    </svg>
  ),
  anger: (props: Icon) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 72 72"
      {...props}
    >
      <g>
        <path
          fill="#FCEA2B"
          d="M36,13c-12.6823,0-23,10.3177-23,23c0,12.6822,10.3177,23,23,23c12.6822,0,23-10.3178,23-23 C59,23.3177,48.6822,13,36,13z"
        />
      </g>
      <g id="line">
        <circle
          cx="36"
          cy="36"
          r="23"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path d="M30,32.9252c0,1.6567-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6553,1.3447-3,3-3C28.6552,29.9252,30,31.27,30,32.9252" />
        <path d="M48,32.9252c0,1.6567-1.3447,3-3,3s-3-1.3433-3-3c0-1.6553,1.3447-3,3-3S48,31.27,48,32.9252" />
        <line
          x1="23"
          x2="30"
          y1="24"
          y2="28"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          x1="49"
          x2="42"
          y1="24"
          y2="28"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M29.5,43c1.2841-0.6376,3.9847-1.0308,6.8421-0.9981c2.6235,0.03,4.9897,0.4146,6.1579,0.9981"
        />
      </g>
    </svg>
  ),
};
