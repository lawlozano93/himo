import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/sections/Footer";
import { ProfileIdCard } from "@/components/ProfileIdCard";
import { Timeline } from "@/components/ui/timeline";
import SubtlePattern from "@/components/SubtlePattern";
import ScrollColorTrigger from "@/components/ui/ScrollColorTrigger";

export const metadata: Metadata = {
    title: "Human of Himo - Lawrrence Lozano",
    description: "The professional journey and experience of Lawrrence Lozano.",
};

// Work Experience Data
const experience = [
    {
        role: "Customer Success Manager",
        company: "ThisFish Inc.",
        period: "Dec 2025 - Present",
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
        period: "Oct 2024 - Dec 2025",
        bullets: [
            "Partner with the Executive VP and C-suite to align technology initiatives with business objectives, focusing on digital transformation from manual processes to automated systems",
            "Lead strategic direction for 12-person engineering team across Web Development (5), Data Engineering (3), and Internal Tools (4)",
            "Led cross-system automation planning and technical evaluation with engineering leads for strategic technology decisions",
            "Champion AI automation strategy through ChatGPT-powered multi-brand customer service assistant, reducing response times by 40% and service analysis AI leveraging MCP-BigQuery integration for customer information analysis",
            "Delivered automation solutions, saving 60-90 hours monthly across stakeholders through centralized order processing systems, replacing error-prone manual spreadsheets",
            "Translated executive automation objectives into 3-4 month technical roadmaps, modularizing manual processes across Warehouse, Servicing, and Data Management teams",
            "Oversee 6-10 concurrent automation and development projects, with team allocations ranging from individual developers to 3-person project teams",
            "Conducted operational assessments to identify AI automation opportunities",
        ],
    },
    {
        role: "Technical Project Manager",
        company: "Focus Global Inc",
        period: "Oct 2023 - Oct 2024",
        bullets: [
            "Orchestrated business process audits, identifying opportunities to transform manual workflows into automated systems",
            "Led strategic implementation of Metabase, creating unified data analytics capabilities for cross-departmental decision making",
            "Developed automation systems and internal tools, transforming paper-based processes into streamlined digital workflows",
            "Bridged executive leadership and engineering teams, ensuring technology initiatives aligned with operational efficiency goals",
        ],
    },
    {
        role: "Technical Project Manager",
        company: "Symph",
        period: "Jan 2022 - Sep 2023",
        bullets: [
            "Managed government transparency platforms, including Freedom of Information system, enabling citizen inquiries and DIME (Digital Information for Monitoring and Evaluation) for the Department of Budget and Management",
            "Managed 3-5 concurrent software projects spanning government, SaaS solutions, and startups with teams of 1-10 developers",
            "Collaborated directly with startup founders, C-level executives, and government undersecretaries to define technical requirements and strategic objectives",
            "Managed project timelines, resource allocation, and stakeholder communication",
        ],
    },
    {
        role: "Project Manager",
        company: "Peregrine Consulting Group",
        period: "May 2021 - Jan 2022",
        bullets: [
            "Managed the delivery of SaaS platforms and WordPress landing pages, ensuring projects were aligned with client objectives and completed within scope and timelines",
            "Worked closely with business owners and C-level executives to define project requirements, set priorities, and deliver tailored solutions that addressed their business needs",
            "Created detailed project plans, managed resources, and coordinated with design and development teams to ensure seamless execution and delivery",
            "Maintained regular communication with stakeholders, providing updates on progress, managing expectations, and addressing any risks or roadblocks",
            "Facilitated process improvements and introduced tools to streamline project tracking and enhance overall team productivity",
        ],
    },
    {
        role: "Application Developer",
        company: "Accenture",
        period: "Mar 2020 - Jun 2021",
        bullets: [
            "Transitioned across multiple roles, contributing to projects in remote support, application development, and data-driven solutions",
            "Provided technical assistance as a Remote Support Engineer, addressing customer queries and ensuring efficient resolution of technical issues",
            "Developed and maintained applications with a focus on data-related functionality, aligning deliverables with project requirements and business needs",
            "Completed training in Java development and Japanese language, attaining N4 proficiency to enhance communication and technical skills in client-facing roles",
            "Collaborated with cross-functional teams, leveraging strong analytical and communication skills to deliver results within tight timelines",
        ],
    },
    {
        role: "UI Designer | Project Manager",
        company: "Freelance",
        period: "Jun 2019 - Mar 2020",
        bullets: [
            "Developed and customized user interfaces for landing pages and internal tools directly using WordPress builders, focusing on usability, functionality, and meeting client requirements",
            "Managed end-to-end project delivery for WordPress websites and LMS platforms, coordinating with developers and stakeholders to ensure seamless execution",
            "Collaborated with clients to gather requirements, define project scope, and deliver tailored solutions aligned with business goals",
            "Oversaw timelines, budgets, and deliverables, ensuring projects were completed on time and met quality standards",
            "Implemented process improvements to streamline workflows and enhance collaboration between team members and clients",
        ],
    },
    {
        role: "Frontend Web Developer",
        company: "Accenture",
        period: "Jun 2018 - Jun 2019",
        bullets: [
            "Developed and customized websites using Sitecore, implementing designs provided by project managers with HTML and CSS to ensure accurate and functional translations",
            "Collaborated with QA teams to ensure all deliverables met quality standards and client requirements",
        ],
    },
    {
        role: "Network Engineer / Shift Lead",
        company: "Accenture",
        period: "Aug 2016 - Jun 2018",
        bullets: [
            "Oversaw the team’s shift deliverables as a shift lead, ensuring smooth operations and adherence to service-level agreements",
            "Collaborated with remote engineers to troubleshoot network connectivity issues, coordinating with vendors and customer NOCs for effective resolution",
            "Managed escalations from customers, addressing critical issues on calls, and ensuring timely updates to management and stakeholders",
            "Maintained documentation of network incidents and troubleshooting processes to support continuous improvement and knowledge sharing",
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
    "Customer Success & Account Growth",
];



export default function ExperiencePage() {
    return (
        <>
            {/* Header */}
            <ScrollColorTrigger color="#ffffff" matchNavbar>
                <section className="pt-28 pb-12 px-6 relative">
                    <SubtlePattern variant="shapes" />
                    <div className="max-w-5xl mx-auto relative z-10">
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
                            Back to Home
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
                                    photoUrl="/profile-card-bg.png"
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
            </ScrollColorTrigger>

            {/* How This Background Shapes Himo */}
            <section className="py-12 px-6 bg-[#f4f4f4]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#191314] mb-6">
                        How This Background Shapes Himo
                    </h2>
                    <p className="text-[#666666] text-base leading-relaxed mb-6">
                        Started as an engineer building applications. Became a project manager understanding how teams ship. Then led engineering teams at scale. Now translating all of that into customer success and patterns other teams can use.
                    </p>
                    <p className="text-[#666666] text-base leading-relaxed mb-6">
                        Himo (means &apos;create&apos; in Waray) is my approach to building—rapid AI-powered systems that solve real operational friction. I design, connect systems, deploy full-stack solutions, and centralize operations to help teams ship faster and work smarter.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-start gap-3">
                            <span className="text-black text-xl">✓</span>
                            <p className="text-[#666666] text-sm">Understanding what&apos;s technically feasible (and what&apos;s not)</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-black text-xl">✓</span>
                            <p className="text-[#666666] text-sm">Managing the chaos of building and shipping at scale</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-black text-xl">✓</span>
                            <p className="text-[#666666] text-sm">Knowing what customer success and operations teams actually need</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-black text-xl">✓</span>
                            <p className="text-[#666666] text-sm">Prototyping ideas quickly without getting stuck in analysis</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Experience Timeline */}
            <section className="py-16 px-6 bg-white relative">
                <SubtlePattern variant="grid" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <h2 className="text-2xl font-bold text-[#191314] mb-4 px-4 md:px-10">
                        Work Experience
                    </h2>
                    <Timeline
                        data={experience.map((job, index) => ({
                            title: job.period.split(" - ")[0].split(" ").pop() || job.period,
                            content: (
                                <div key={index} className="bg-[#f4f4f4] rounded-2xl p-6 mb-8">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-[#191314] mb-2">
                                            {job.role}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 items-center mb-2">
                                            <span className="bg-[#ecf95a] px-3 py-1 rounded-full text-sm font-medium text-[#191314]">
                                                {job.company}
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
            {/* Contact CTA removed */}

            <div className="py-12 flex justify-center pb-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[#666666] hover:text-[#191314] transition-colors"
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
                    Back to Home
                </Link>
            </div>

            <ScrollColorTrigger color="#191314" matchNavbar>
                <Footer />
            </ScrollColorTrigger>
        </>
    );
}
