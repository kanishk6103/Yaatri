import PNR from "../../assets/SVG/PNR";
import TrainLiveStatus from "../../assets/SVG/TrainLiveStatus";
import Seat from "../../assets/SVG/Seat";
import FindTrains from "../../assets/SVG/FindTrains";

data = [
    {
        sno: 1,
        name: "Check PNR Status",
        description: "Find train information through PNR",
        svg: <PNR />,
        navigate: "PNR",
    },
    {
        sno: 2,
        name: "Train Running Status",
        description: "Live train status",
        svg: <TrainLiveStatus />,
        navigate: "TrainStatus",
    },
    {
        sno: 3,
        name: "Seat Availability",
        description: "Find vacant seats in a jiffy",
        svg: <Seat />,
        navigate: "PNR",
    },
    {
        sno: 4,
        name: "Find Trains between Stations",
        description: "Find trains in an instant",
        svg: <FindTrains />,
        navigate: "FindTrains",
    },
];

export default data;
