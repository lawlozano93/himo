import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ProfileIdCard } from "@/components/ProfileIdCard";
import { Timeline } from "@/components/ui/timeline";

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
                <div className="max-w-5xl mx-auto">
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

                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* ID Card */}
                        <div className="flex-shrink-0">
                            <ProfileIdCard
                                name="Lawrrence Lozano"
                                title="Customer Success Manager"
                                email="lawlozano93@gmail.com"
                                location="Cebu City, Philippines"
                                phone="+63 998 596 6173"
                            />
                        </div>

                        {/* Text content */}
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#191314] mb-4">
                                Human of Himo
                            </h1>
                            <p className="text-[#666666] text-base leading-relaxed mb-4">
                                Strategic and results driven Customer Success Manager with a strong foundation in software engineering leadership and operational excellence. Specialized in bridging the gap between complex technical systems and measurable business outcomes for enterprise clients in the B2B SaaS space.
                            </p>
                            <p className="text-[#666666] text-base leading-relaxed mb-6">
                                Focused on strategic partnership and cross functional collaboration, I leverage my background in engineering and project management to align technology with organizational goals. I am dedicated to fostering customer growth and scaling business impact while continuously evolving alongside the organizations I serve.
                            </p>

                            {/* Skills inline */}
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-[#f4f4f4] rounded-full text-sm font-medium text-[#191314] hover:bg-[#ecf95a] transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Experience Timeline */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4 px-4 md:px-10">
                        Work Experience
                    </h2>
                    <Timeline
                        data={experience.map((job) => ({
                            title: job.period.split(" - ")[0].split(" ").pop() || job.period,
                            content: (
                                <div className="bg-[#f4f4f4] rounded-2xl p-6 mb-8">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-[#191314] mb-2">
                                            {job.role}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 items-center mb-2">
                                            <span className="bg-[#ecf95a] px-3 py-1 rounded-full text-sm font-medium text-[#191314]">
                                                {job.company}
                                            </span>
                                            <span className="text-sm text-[#666666]">
                                                {job.location}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[#666666]">{job.period}</p>
                                    </div>

                                    <ul className="space-y-3">
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
                            ),
                        }))}
                    />
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
