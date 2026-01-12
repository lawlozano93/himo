// Types
export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    extendedDescription: string;
    badge: string;
    url: string;
    featured: boolean;
    published_at: string;
}

export interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured_image: string;
    published_at: string;
}

// Static data (will be replaced with Supabase later)
const projects: Project[] = [
    {
        id: "1",
        title: "Bubu",
        slug: "bubu",
        description: "Exploring how AI can enhance customer experiences without creating friction.",
        extendedDescription: "Exploring how AI can enhance customer experiences without creating friction. Built with NextJS. Active prototype showing real UX patterns in action.",
        badge: "Live App",
        url: "https://bubu.himo.site",
        featured: true,
        published_at: new Date().toISOString(),
    },
    {
        id: "2",
        title: "App Experiments",
        slug: "experiments",
        description: "A collection of AI integrations built for real startup problems.",
        extendedDescription: "A collection of AI integrations built for real startup problems—from customer feedback analysis to workflow automation. Each includes the thinking and decision-making behind the implementation.",
        badge: "Case Studies",
        url: "/experiments",
        featured: true,
        published_at: new Date().toISOString(),
    },
    {
        id: "3",
        title: "Notion Portfolio",
        slug: "notion",
        description: "Database-driven systems designed for startup operations teams.",
        extendedDescription: "Database-driven systems designed for startup operations teams. Covers customer lifecycle management, task automation, and reporting dashboards. Available as open templates.",
        badge: "Templates",
        url: "/notion",
        featured: true,
        published_at: new Date().toISOString(),
    },
    {
        id: "4",
        title: "Voice in the Noise",
        slug: "voice",
        description: "Essays exploring the intersection of customer success, AI, and product thinking.",
        extendedDescription: "Essays exploring the intersection of customer success, AI, and product thinking. Published bi-weekly; insights from building at scale and leading teams.",
        badge: "Essays",
        url: "https://voiceinthenoise.com",
        featured: true,
        published_at: new Date().toISOString(),
    },
];

const posts: Post[] = [];

// Data fetching functions (static for now, will connect to Supabase later)
export async function getFeaturedProjects(): Promise<Project[]> {
    return projects.filter((p) => p.featured);
}

export async function getAllProjects(): Promise<Project[]> {
    return projects;
}

export async function getPosts(): Promise<Post[]> {
    return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    return posts.find((p) => p.slug === slug) || null;
}
