import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TimeIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-6.93l5.49 3.29 1.02-1.72L13 11.93V6.42h-2v6.65z"
        fill="#49454F"
      />
    </Svg>
  )
}

export default TimeIcon