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

// Project categories for structured display
export type ProjectCategory = "ai-driven" | "operations";

export interface ProjectWithCategory extends Project {
    category: ProjectCategory;
    categoryLabel: string;
}

// Static data (will be replaced with Supabase later)
const projects: Project[] = [
    {
        id: "1",
        title: "App Experiments",
        slug: "experiments",
        description: "A collection of AI integrations built for real startup problems.",
        extendedDescription: "Exploring how AI solves real startup problems. A collection of experiments including Bubu (AI-driven onboarding), customer analytics, and more.",
        badge: "Case Studies",
        url: "/experiments",
        featured: true,
        published_at: new Date().toISOString(),
    },
    {
        id: "2",
        title: "Notion Systems",
        slug: "notion",
        description: "Database-driven systems designed for startup operations teams.",
        extendedDescription: "How centralizing operations in Notion enables rapid iteration. Covers customer lifecycle, automations, dashboards, and team workflows.",
        badge: "Systems",
        url: "/notion",
        featured: true,
        published_at: new Date().toISOString(),
    },
];

// Grouped projects for display on homepage
export const projectsByCategory: { category: ProjectCategory; label: string; projects: Project[] }[] = [
    {
        category: "ai-driven",
        label: "AI-Driven Experiences",
        projects: projects.filter(p => p.slug === "experiments"),
    },
    {
        category: "operations",
        label: "Operations & Systems",
        projects: projects.filter(p => p.slug === "notion"),
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
