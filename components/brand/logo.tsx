import { useRouter } from "next/router"
import React from "react"

interface Props {
  title?: string
  size?: number
  width?: number
  height?: number
  small?: boolean
  fill?: string
  className?: string
}

const Logo: React.FC<Props> = ({
  title,
  size,
  width,
  height,
  small,
  fill,
  className,
  ...props
}) => {
  const router = useRouter()
  const handleClick = () => {
    router.push("/")
  }
  return (
    <svg
      className="logo__large"
      color={"#fff"}
      height={30}
      viewBox="0 0 274 75"
      width={98}
      onClick={handleClick}
      {...props}
    >
      <path
        d="M0.0681818 4.18182H18.2727L37.5 51.0909H38.3182L57.5455 4.18182H75.75V74H61.4318V28.5568H60.8523L42.7841 73.6591H33.0341L14.9659 28.3864H14.3864V74H0.0681818V4.18182ZM98.731 74.9886C95.3901 74.9886 92.4128 74.4091 89.7992 73.25C87.1856 72.0682 85.1174 70.3295 83.5947 68.0341C82.0947 65.7159 81.3447 62.8295 81.3447 59.375C81.3447 56.4659 81.8788 54.0227 82.9469 52.0455C84.0151 50.0682 85.4697 48.4773 87.3106 47.2727C89.1515 46.0682 91.2424 45.1591 93.5833 44.5455C95.9469 43.9318 98.4242 43.5 101.015 43.25C104.061 42.9318 106.515 42.6364 108.379 42.3636C110.242 42.0682 111.595 41.6364 112.436 41.0682C113.276 40.5 113.697 39.6591 113.697 38.5455V38.3409C113.697 36.1818 113.015 34.5114 111.651 33.3295C110.311 32.1477 108.401 31.5568 105.924 31.5568C103.311 31.5568 101.231 32.1364 99.6856 33.2955C98.1401 34.4318 97.1174 35.8636 96.6174 37.5909L83.1856 36.5C83.8674 33.3182 85.2083 30.5682 87.2083 28.25C89.2083 25.9091 91.7878 24.1136 94.9469 22.8636C98.1288 21.5909 101.811 20.9545 105.992 20.9545C108.901 20.9545 111.686 21.2955 114.345 21.9773C117.026 22.6591 119.401 23.7159 121.47 25.1477C123.561 26.5795 125.208 28.4205 126.413 30.6705C127.617 32.8977 128.22 35.5682 128.22 38.6818V74H114.447V66.7386H114.038C113.197 68.375 112.072 69.8182 110.663 71.0682C109.254 72.2955 107.561 73.2614 105.583 73.9659C103.606 74.6477 101.322 74.9886 98.731 74.9886ZM102.89 64.9659C105.026 64.9659 106.913 64.5455 108.549 63.7045C110.186 62.8409 111.47 61.6818 112.401 60.2273C113.333 58.7727 113.799 57.125 113.799 55.2841V49.7273C113.345 50.0227 112.72 50.2955 111.924 50.5455C111.151 50.7727 110.276 50.9886 109.299 51.1932C108.322 51.375 107.345 51.5455 106.367 51.7045C105.39 51.8409 104.504 51.9659 103.708 52.0795C102.004 52.3295 100.515 52.7273 99.2424 53.2727C97.9697 53.8182 96.981 54.5568 96.2765 55.4886C95.5719 56.3977 95.2197 57.5341 95.2197 58.8977C95.2197 60.875 95.9356 62.3864 97.3674 63.4318C98.8219 64.4545 100.663 64.9659 102.89 64.9659ZM163.499 21.6364V32.5455H131.965V21.6364H163.499ZM139.124 9.09091H153.647V57.9091C153.647 59.25 153.851 60.2955 154.26 61.0455C154.669 61.7727 155.238 62.2841 155.965 62.5795C156.715 62.875 157.579 63.0227 158.556 63.0227C159.238 63.0227 159.919 62.9659 160.601 62.8523C161.283 62.7159 161.806 62.6136 162.169 62.5455L164.454 73.3523C163.726 73.5795 162.704 73.8409 161.385 74.1364C160.067 74.4545 158.465 74.6477 156.579 74.7159C153.079 74.8523 150.01 74.3864 147.374 73.3182C144.76 72.25 142.726 70.5909 141.272 68.3409C139.817 66.0909 139.101 63.25 139.124 59.8182V9.09091ZM169.119 74V21.6364H183.199V30.7727H183.744C184.699 27.5227 186.301 25.0682 188.551 23.4091C190.801 21.7273 193.392 20.8864 196.324 20.8864C197.051 20.8864 197.835 20.9318 198.676 21.0227C199.517 21.1136 200.256 21.2386 200.892 21.3977V34.2841C200.21 34.0795 199.267 33.8977 198.062 33.7386C196.858 33.5795 195.756 33.5 194.756 33.5C192.619 33.5 190.71 33.9659 189.028 34.8977C187.369 35.8068 186.051 37.0795 185.074 38.7159C184.119 40.3523 183.642 42.2386 183.642 44.375V74H169.119ZM204.56 74V21.6364H219.083V74H204.56ZM211.856 14.8864C209.697 14.8864 207.845 14.1705 206.299 12.7386C204.776 11.2841 204.015 9.54545 204.015 7.52272C204.015 5.52272 204.776 3.80682 206.299 2.375C207.845 0.920452 209.697 0.193178 211.856 0.193178C214.015 0.193178 215.856 0.920452 217.379 2.375C218.924 3.80682 219.697 5.52272 219.697 7.52272C219.697 9.54545 218.924 11.2841 217.379 12.7386C215.856 14.1705 214.015 14.8864 211.856 14.8864ZM239.013 21.6364L248.627 39.9432L258.479 21.6364H273.377L258.206 47.8182L273.786 74H258.956L248.627 55.8977L238.468 74H223.468L239.013 47.8182L224.013 21.6364H239.013Z"
        fill="black"
      />
    </svg>
  )
}

export default Logo