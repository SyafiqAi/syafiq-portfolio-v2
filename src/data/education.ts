interface Education {
    university: string;
    level: string;
    program: string;
    date: string;
}

const utar: Education = {
    university: "Universiti Tunku Abdul Rahman",
    level: "B.Sc (Hons)",
    program: "Applied Mathematics with Computing",
    date: "2020 - 2024",
};

const uniten: Education = {
    university: "Universiti Tenaga Nasional",
    level: "Diploma",
    program: "Mechanical Engineering",
    date: "2018 - 2020",
};

const education = [utar, uniten];

export { education };
