// Types
export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
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
        description: "Active app prototype exploring AI-driven UX patterns.",
        url: "https://bubu.himo.site",
        featured: true,
        published_at: new Date().toISOString(),
    },
    {
        id: "2",
        title: "App Experiments",
        slug: "experiments",
        description: "AI implementation across real-world use cases.",
        url: "/experiments",
        featured: true,
        published_at: new Date().toISOString(),
    },
    {
        id: "3",
        title: "Notion Portfolio",
        slug: "notion",
        description: "Startup workflow systems at scale.",
        url: "/notion",
        featured: true,
        published_at: new Date().toISOString(),
    },
    {
        id: "4",
        title: "Voice in the Noise",
        slug: "voice",
        description: "Essays on code, creativity, and building in public.",
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
