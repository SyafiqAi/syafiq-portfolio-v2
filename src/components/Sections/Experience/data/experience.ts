export interface Experience {
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
    content: ["Node.js", "Fintech"],
    position: "Back-end Web Developer",
    website: "https://www.alphareds.com/",
};

const rf: Experience = {
    company: "RF Laiyon",
    startDate: "May 2024",
    endDate: "Nov 2024",
    duration: "6 months",
    position: "Front-end Web Developer",
    website: "https://rflaiyon.com/",
    content: [
        "Front-end development using React, Next.js.",
        "Contributed to the development of a textbook management system for the public education sector.",
        "Worked closely with back-end developers to integrate RESTful APIs.",
        "Learned authorisation using JWT.",
        "CI/CD development.",
        "Self-learned React, Next.js, Node.js, Laravel.",
    ],
};

const dsm: Experience = {
    company: "Digital System Malaysia",
    startDate: "Oct 2022",
    endDate: "Jan 2023",
    duration: "3 months",
    position: "Front-end Web Developer",
    website: "https://www.dsm.com.my/",
    content: [
        "Front-end development using Vue.js.",
        "Contributed to the development of an ERP suite for trucking companies.",
        "Worked in a team of 7 developers in an agile development method using Microsoft Azure (DevOps).",
        "Exposure to CI/CD development.",
        "Self-learned Vue.js, Nuxt.js.",
    ],
};

const experiences = [
    // alphaRed,
    rf,
    dsm,
];

export { experiences };
