export interface Experience {
    company: string;
    startDate: string;
    endDate?: string;
    duration: string;
    content: string[];
    position: string;
    website: string;
}

const ars: Experience = {
    company: "Alpha Red Solutions",
    startDate: "Nov 2024",
    // endDate: ,
    duration: "",
    content: [
        "Developed and maintained backend services using Node.js.",
        "Worked closely with frontend developers to design RESTful APIs.",
        "Designed and implemented queries for a role-based access control (RBAC) system.",
        "Developed unit tests for role-based access control with complex business rules.",
        "Integrated third-party client APIs despite limited documentation.",
        "Self-learned Hono.js and ElysiaJS."
    ],
    position: "Software Developer",
    website: "https://www.alphareds.com/",
};

const rf: Experience = {
    company: "RF Laiyon",
    startDate: "May 2024",
    endDate: "Nov 2024",
    duration: "6 months",
    position: "Frontend Web Developer",
    website: "https://rflaiyon.com/",
    content: [
        "Frontend development using React, Next.js.",
        "Contributed to the development of a textbook management system for the public education sector.",
        "Worked closely with back-end developers to integrate RESTful APIs.",
        "Learned authorisation using JWT.",
        "Self-learned React, Next.js",
    ],
};

const dsm: Experience = {
    company: "Digital System Malaysia",
    startDate: "Oct 2022",
    endDate: "Jan 2023",
    duration: "3 months",
    position: "Frontend Web Developer",
    website: "https://www.dsm.com.my/",
    content: [
        "Frontend development using Vue.js.",
        "Contributed to the development of an ERP suite for trucking companies.",
        "Worked in a team of 7 developers in an agile development method using Microsoft Azure (DevOps).",
        "Self-learned Vue.js, Nuxt.js.",
    ],
};

const experiences = [
    ars,
    rf,
    dsm,
];

export { experiences };
