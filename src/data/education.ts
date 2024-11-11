interface Education {
    university: string;
    level: string;
    program: string;
    date: string;
    website: string;
}

const utar: Education = {
    university: "Universiti Tunku Abdul Rahman",
    level: "B.Sc. (Hons)",
    program: "Applied Mathematics with Computing",
    date: "2020 - 2024",
    website: "https://www.utar.edu.my/",
};

const uniten: Education = {
    university: "Universiti Tenaga Nasional",
    level: "Diploma",
    program: "Mechanical Engineering",
    date: "2018 - 2020",
    website: "https://www.uniten.edu.my/",
};

const education = [utar, uniten];

export { education };
