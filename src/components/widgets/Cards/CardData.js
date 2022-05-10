import ScheduleImg from "../../assets/schedule.png";
import CollaborateImg from "../../assets/collaborate.png";
import FinanceImg from "../../assets/finance.png";
import ServiceImg from "../../assets/service.jpg";
import TechImg from "../../assets/tech.png";
import Calendar from "../../assets/calendar.png";
import Rocket from "../../assets/rocket_icon.png";
import Bank from "../../assets/bank_icon.png";
import Team from "../../assets/team_icon.png";
import Tech from "../../assets/tech_icon.png";

export const CardData = [{
        id: "c1",
        title: "What's happening...",
        description: "View upcoming events, important meetings and launches",
        image: ScheduleImg,
        buttonTitle: "View calendar",
        hoverIcon: Calendar,
    },
    {
        id: "c2",
        title: "What we’re working on.",
        description: "View current projects from around the business",
        image: CollaborateImg,
        buttonTitle: "View projects",
        hoverIcon: Rocket,
    },
    {
        id: "c3",
        title: "Finance overview.",
        description: "View current projects from around the business",
        image: FinanceImg,
        buttonTitle: "More",
        hoverIcon: Bank,
    },
    {
        id: "c4",
        title: "Service overview.",
        description: "View current projects from around the business",
        image: ServiceImg,
        buttonTitle: "More",
        hoverIcon: Team,
    },
    {
        id: "c5",
        title: "Tech overview.",
        description: "View current projects from around the business",
        image: TechImg,
        buttonTitle: "More",
        hoverIcon: Tech,
    },
];