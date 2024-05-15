import PNR from "../../assets/SVG/PNR";
import TrainLiveStatus from "../../assets/SVG/TrainLiveStatus";
import Seat from "../../assets/SVG/Seat";
import FindTrains from "../../assets/SVG/FindTrains";
import Contributors from "../../assets/SVG/Contributors";

data = [
    {
        sno: 1,
        name: "Check PNR Status",
        description: "Find train information through PNR",
        svg: <PNR />,
        navigate: "Check PNR",
    },
    {
        sno: 2,
        name: "Train Running Status",
        description: "Live train status",
        svg: <TrainLiveStatus />,
        navigate: "Train Status",
    },
    {
        sno: 3,
        name: "Seat Availability",
        description: "Find vacant seats in a jiffy",
        svg: <Seat />,
        navigate: "Seat Availability",
    },
    {
        sno: 4,
        name: "Find Trains between Stations",
        description: "Find trains in an instant",
        svg: <FindTrains />,
        navigate: "Find Trains",
    },
    {
        sno: 5,
        name: "Contributors",
        description: "People who developed this application",
        svg: <Contributors />,
        navigate: "Contributors",
    },
];

export default data;
