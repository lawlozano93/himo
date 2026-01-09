import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Human of Himo - Lawrrence Lozano",
    description: "The professional journey and experience of Lawrrence Lozano.",
};

// Work Experience Data
const experience = [
    {
        role: "Customer Success Manager",
        company: "ThisFish",
        period: "December 2025 - Present",
        location: "Remote",
        bullets: [
            "Partner with enterprise customers on business process analysis, translating complex operational challenges into tailored SaaS solutions",
            "Lead end-to-end customer onboarding and implementation, managing project timelines, stakeholder alignment, and ensuring successful software adoption across global teams",
            "Act as the primary point of contact for key accounts, building strong relationships while understanding customer business objectives and delivering measurable outcomes",
            "Proactively identify expansion opportunities through upsell and cross-sell initiatives, working closely with the sales team to drive account growth",
            "Conduct training sessions and workshops to maximize feature adoption and software usage",
            "Collaborate across internal teams and global time zones using agile methodologies and modern collaboration tools",
        ],
    },
    {
        role: "Software Engineering Manager",
        company: "Focus Global Inc.",
        period: "October 2024 - December 2025",
        location: "Philippines",
        bullets: [
            "Work directly with the Executive Vice President and Head of Software Engineering, collaborating with C-level executives and department heads to align technology initiatives with business objectives",
            "Manage the Software Engineering Department, leading the Web Development, Data Engineering, and Internal Tools teams to implement automation and AI-driven optimizations",
            "Oversee process automation initiatives by identifying operational inefficiencies and implementing AI-powered solutions to enhance productivity and decision-making",
            "Delivered an AI-powered chat assistant that reduced response times for customer service representatives by 40%",
            "Built a service analysis AI tool that generates service summaries and recommends customer interaction tones based on past engagements",
            "Conduct process audits to identify inefficiencies and evaluate opportunities for automation through emerging AI technologies",
        ],
    },
    {
        role: "Technical Project Manager",
        company: "Focus Global Inc.",
        period: "October 2023 - September 2024",
        location: "Philippines",
        bullets: [
            "Conducted business process audits and collaborated with department heads to identify automation opportunities that improved efficiency",
            "Managed the development and implementation of internal tools, dashboards, and automation systems to enhance workflows",
            "Led the transition to Metabase, improving business intelligence capabilities and empowering teams with data insights",
            "Liaised between executive leadership, engineering teams, and business units, ensuring automation initiatives aligned with strategic goals",
        ],
    },
    {
        role: "Technical Project Manager",
        company: "Symph Inc.",
        period: "January 2022 - September 2023",
        location: "Philippines",
        bullets: [
            "Managed software projects for government transparency platforms, SaaS solutions, and startups, ensuring timely and budget-conscious delivery",
            "Collaborated directly with startup founders, C-level executives, government undersecretaries, and business owners to gather requirements and define objectives",
            "Coordinated cross-functional teams for seamless execution across design, development, and QA phases",
        ],
    },
    {
        role: "Project Manager",
        company: "Peregrine Consulting Group",
        period: "May 2021 - January 2022",
        location: "Philippines",
        bullets: [
            "Managed the development of SaaS platforms and WordPress landing pages",
            "Worked closely with business owners and executives to define requirements and meet objectives",
            "Created project plans, managed resources, and ensured timely updates",
        ],
    },
    {
        role: "UI Designer | Project Manager",
        company: "Freelance",
        period: "June 2019 - March 2020",
        location: "Philippines",
        bullets: [
            "Developed and customized user interfaces for landing pages and internal tools using WordPress builders",
            "Managed end-to-end project delivery for WordPress websites and LMS platforms",
            "Collaborated with clients to gather requirements, define project scope, and deliver tailored solutions",
        ],
    },
    {
        role: "Application Developer / Frontend Developer / Shift Lead",
        company: "Accenture",
        period: "August 2016 - June 2019 / March 2020 - June 2021",
        location: "Philippines",
        bullets: [
            "Worked on application development, data-driven solutions, and website customization using Sitecore",
            "Ensured alignment with business requirements and delivered high-quality solutions in collaboration with cross-functional teams",
            "Led network operations and remote support, managing escalations and troubleshooting connectivity issues",
            "Maintained detailed documentation to improve efficiency and service-level adherence",
        ],
    },
];

const education = [
    {
        degree: "Google UX Design Certificate",
        school: "Google",
        year: "October 2024",
        credential: "Credential ID NMIZ2NUEYT32",
    },
    {
        degree: "Bachelor's Degree in Electronics and Communications Engineering",
        school: "University of San Carlos",
        year: "2010 - 2015",
        credential: "Licensed Electronics Engineer",
    },
];

const skills = [
    "Project & Product Management",
    "Stakeholder Engagement",
    "Team Leadership & Mentorship",
    "Strategic Oversight of Internal Tools & BI Implementation",
    "Cross-Functional Team Collaboration",
    "Customer Success & Account Growth",
];

const contact = {
    phone: "+63 998 596 6173",
    email: "lawlozano93@gmail.com",
    website: "lawrrence.com",
    location: "Cebu City, Philippines",
};

export default function ExperiencePage() {
    return (
        <>
            {/* Header */}
            <section className="pt-28 pb-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#666666] hover:text-[#191314] transition-colors mb-8"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                        Back to Himo
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#191314] mb-2">
                        Human of Himo
                    </h1>
                    <p className="text-2xl text-[#191314] font-semibold mb-6">
                        Lawrrence Lozano
                    </p>
                    <p className="text-[#666666] text-base leading-relaxed max-w-3xl mb-6">
                        Strategic and results driven Customer Success Manager with a strong foundation in software engineering leadership and operational excellence. Specialized in bridging the gap between complex technical systems and measurable business outcomes for enterprise clients in the B2B SaaS space. Skilled at overseeing digital transformation and process automation initiatives, ensuring that AI powered solutions are effectively implemented and adopted to drive long term value.
                    </p>
                    <p className="text-[#666666] text-base leading-relaxed max-w-3xl mb-6">
                        Focused on strategic partnership and cross functional collaboration, I leverage my background in engineering and project management to align technology with organizational goals. I am dedicated to fostering customer growth and scaling business impact while continuously evolving alongside the organizations I serve. I aim to drive meaningful innovation and help take the business to the next level by delivering solutions that are both actionable and sustainable.
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-4 text-sm">
                        <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-[#666666] hover:text-[#191314] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            {contact.email}
                        </a>
                        <span className="flex items-center gap-2 text-[#666666]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            {contact.location}
                        </span>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-12 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-[#191314] mb-6">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#191314] border border-[#e5e5e5]"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work Experience */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-10">
                        Work Experience
                    </h2>
                    <div className="space-y-12">
                        {experience.map((job, index) => (
                            <div
                                key={index}
                                className="relative pl-8 border-l-2 border-[#e5e5e5]"
                            >
                                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#ecf95a] border-4 border-white" />

                                {/* Header */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-[#191314] mb-1">
                                        {job.role}
                                    </h3>
                                    <p className="mb-1">
                                        <span className="bg-[#ecf95a] px-2 py-0.5 rounded text-sm font-medium text-[#191314]">
                                            {job.company}
                                        </span>
                                    </p>
                                    <p className="text-sm text-[#666666]">
                                        {job.period} · {job.location}
                                    </p>
                                </div>

                                {/* Uniform bullet points */}
                                <ul className="space-y-2">
                                    {job.bullets.map((bullet, i) => (
                                        <li
                                            key={i}
                                            className="text-[#666666] text-sm leading-relaxed flex items-start gap-3"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#ecf95a] mt-1.5 flex-shrink-0" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-16 px-6 bg-[#f4f4f4]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-10">Education</h2>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl">
                                <div className="flex justify-between items-start flex-wrap gap-4">
                                    <div>
                                        <h3 className="font-bold text-[#191314]">{edu.degree}</h3>
                                        <p className="text-[#666666] text-sm">{edu.school}</p>
                                        {edu.credential && (
                                            <p className="text-sm text-[#666666] mt-1">{edu.credential}</p>
                                        )}
                                    </div>
                                    <span className="text-sm text-[#666666] bg-[#f4f4f4] px-3 py-1 rounded-full">
                                        {edu.year}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 px-6 bg-[#ecf95a]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4">
                        Let&apos;s work together
                    </h2>
                    <p className="text-[#191314] text-sm mb-6">
                        Open to opportunities in Customer Success, Project Management, and Technical Leadership.
                    </p>
                    <a
                        href="mailto:lawlozano93@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#191314] text-white font-semibold hover:bg-[#333] transition-colors"
                    >
                        Get in touch
                    </a>
                </div>
            </section>

            <Footer />
        </>
    );
}
