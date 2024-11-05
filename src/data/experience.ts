interface Experience {
    company: string;
    startDate: string;
    endDate?: string;
    duration: string;
    content: string[];
}

const alphaRed: Experience = {
    company: "Alpha Red Solutions",
    startDate: "Nov 2024",
    // endDate: ,
    duration: "",
    content: [
        "Back-end Web Development",
        "Node.js",
        "Fintech"
    ]
}

const rf: Experience = {
    company: "RF Laiyon",
    startDate: "May 2024",
    endDate: "Nov 2024",
    duration: "6 months",
    content: [
        "Front-end Web Development",
        "React.js",
        "Education Sector"
    ]
}

const dsm: Experience = {
    company: "Digital System Malaysia",
    startDate: "Oct 2022",
    endDate: "Jan 2023",
    duration: "3 months",
    content: [
        "Front-end Web Development",
        "Vue.js",
        "Logistics"
    ]
}

const experiences = [alphaRed, rf, dsm]

export {experiences};