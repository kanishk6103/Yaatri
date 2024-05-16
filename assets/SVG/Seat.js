import { Svg, Path } from "react-native-svg";

const Seat = () => {
    return (
        <Svg
            width="36"
            height="40"
            viewBox="0 0 36 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M19.9287 3.75V20H23.7861V4.58594C25.7068 5.66406 27.0006 7.6875 27.0006 10V20H30.858V10C30.858 4.47656 26.2532 0 20.5716 0H15.4284C9.74676 0 5.14198 4.47656 5.14198 10V20H8.99938V10C8.99938 7.6875 10.2932 5.66406 12.2139 4.58594V20H16.0713V3.75H19.9287ZM3.85618 22.5C2.88379 22.5 1.99176 23.0313 1.5578 23.8828L0.272002 26.3828C-0.129811 27.1562 -0.0815936 28.0781 0.38451 28.8125C0.850613 29.5469 1.67835 30 2.57037 30V37.5C2.57037 38.8828 3.71956 40 5.14198 40C6.5644 40 7.71358 38.8828 7.71358 37.5V30H28.2864V37.5C28.2864 38.8828 29.4356 40 30.858 40C32.2804 40 33.4296 38.8828 33.4296 37.5V30C34.3217 30 35.1494 29.5547 35.6155 28.8125C36.0816 28.0703 36.1298 27.1562 35.728 26.3828L34.4422 23.8828C34.0082 23.0313 33.1162 22.5 32.1438 22.5H3.85618Z"
                fill="#EDEDED"
            />
        </Svg>
    );
};

export default Seat;
