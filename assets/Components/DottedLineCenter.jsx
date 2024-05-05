import { Svg, Line } from "react-native-svg"

const DottedLineCenter = () => {
    return (
        <Svg width="200" height="1" viewBox="50 0 200 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Line x1="1" y1="1" x2="200" y2="1" stroke="#3A3F49" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 8" />
        </Svg>
    )
}

export default DottedLineCenter