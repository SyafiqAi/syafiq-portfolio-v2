interface Experience {
    company: string;
    startDate: string;
    endDate?: string;
    duration: string;
    content: string[];
    position: string;
    website: string;
}

const alphaRed: Experience = {
    company: "Alpha Red Solutions",
    startDate: "Nov 2024",
    // endDate: ,
    duration: "",
    content: ["Back-end Web Development", "Node.js", "Fintech"],
    position: "Back-end Web Developer",
    website: "https://www.alphareds.com/",
};

const rf: Experience = {
    company: "RF Laiyon",
    startDate: "May 2024",
    endDate: "Nov 2024",
    duration: "6 months",
    content: ["Front-end Web Development", "React.js", "Education Sector"],
    position: "Front-end Web Developer",
    website: "https://rflaiyon.com/",
};

const dsm: Experience = {
    company: "Digital System Malaysia",
    startDate: "Oct 2022",
    endDate: "Jan 2023",
    duration: "3 months",
    content: ["Front-end Web Development", "Vue.js", "Logistics"],
    position: "Front-end Web Developer",
    website: "https://www.dsm.com.my/",
};

const experiences = [alphaRed, rf, dsm];

export { experiences };
