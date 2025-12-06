/**
 * PROJECT DATA
 * 
 * To add a new project:
 * 1. Copy the template object below.
 * 2. Paste it into the PROJECTS array.
 * 3. Update the fields with your project details.
 * 
 * TEMPLATE:
 * {
 *     id: "unique-id",
 *     title: "Project Name",
 *     description: "Short summary for the card view.",
 *     fullDescription: "Detailed description for the project page.",
 *     tech: ["Tech 1", "Tech 2"],
 *     image: "/path/to/image.png",
 *     slug: "project-url-slug",
 *     color: "bg-blue-500", // Tailwind color class for accents
 *     features: [
 *         "Key feature 1",
 *         "Key feature 2"
 *     ],
 *     timeline: "Project duration (e.g., 'Jan 2024 - Mar 2024')",
 *     links: {
 *         demo: "https://demo-link.com",
 *         repo: "https://github.com/repo-link"
 *     }
 * }
 */

export interface Project {
    id: string;             // Unique identifier (1, 2, 3...)
    title: string;          // Project display title
    description: string;    // Short description shown on the dashboard
    fullDescription: string;// Long description shown on the detail page
    tech: string[];         // List of technologies used
    image: string;          // Path to cover image (e.g., /dashboard.png)
    slug: string;           // URL identifier (e.g., my-project)
    color: string;          // Background accent color
    features: string[];     // List of key features
    timeline: string;       // Development timeline
    links: {                // External links
        demo: string;       // Live demo URL
        repo: string;       // GitHub repository URL
    };
}

export const PROJECTS: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description: "Full-stack shopping experience with real-time inventory, secure payments (Stripe), and an admin dashboard.",
        fullDescription: "Built a comprehensive e-commerce solution that handles thousands of concurrent users. Features include real-time stock updates using WebSockets, a custom CMS for product management, and optimized checkout flow reducing cart abandonment by 15%.",
        tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
        // CHANGE THIS: Replace with your actual image file in the public folder
        image: "/dashboard.png",
        slug: "ecommerce-platform",
        color: "bg-blue-500",
        features: [
            "Real-time inventory updates via WebSockets",
            "Secure payment processing with Stripe",
            "Admin dashboard for product management",
            "Responsive and mobile-optimized"
        ],
        timeline: "Completed in 3 months with iterative sprints.",
        links: {
            demo: "#",
            repo: "#"
        }
    },
    {
        id: "2",
        title: "AI Task Manager",
        description: "Smart to-do list that prioritizes tasks using natural language processing and machine learning.",
        fullDescription: "An intelligent productivity tool that analyzes task complexity and urgency. It suggests optimal schedules and integrates with Google Calendar to block time automatically.",
        tech: ["React", "Python", "FastAPI", "OpenAI API", "Redis"],
        // CHANGE THIS: Unique image for AI Task Manager
        image: "/dashboard.png",
        slug: "ai-task-manager",
        color: "bg-purple-500",
        features: [
            "NLP-based task prioritization",
            "Smart scheduling algorithms",
            "Google Calendar integration",
            "Voice command support"
        ],
        timeline: "Developed over 2 months.",
        links: {
            demo: "#",
            repo: "#"
        }
    },
    {
        id: "3",
        title: "Finance Dashboard",
        description: "Real-time crypto and stock application with interactive charts and portfolio tracking.",
        fullDescription: "A high-performance financial analytics tool using D3.js for complex data visualization. Connects to multiple exchange APIs to aggregate portfolio performance in real-time.",
        tech: ["Vue", "D3.js", "Firebase", "Serverless Functions"],
        // CHANGE THIS: Unique image for Finance Dashboard
        image: "/dashboard.png",
        slug: "finance-dashboard",
        color: "bg-green-500",
        features: [
            "Interactive D3.js charts",
            "Real-time market data feed",
            "Portfolio performance analytics",
            "Multi-exchange API support"
        ],
        timeline: "4 months of development.",
        links: {
            demo: "#",
            repo: "#"
        }
    },
    {
        id: "4",
        title: "Social Media App",
        description: "Connect with friends and share updates in real-time. Features stories and live streaming.",
        fullDescription: "Mobile-first social platform focused on photo sharing. Implemented image optimization pipeline and infinite scroll with virtualized lists for smooth performance.",
        tech: ["React Native", "GraphQL", "AWS AppSync", "DynamoDB"],
        // CHANGE THIS: Unique image for Social Media App
        image: "/dashboard.png",
        slug: "social-media-app",
        color: "bg-pink-500",
        features: [
            "Live streaming capabilities",
            "Story sharing with filters",
            "Real-time chat and notifications",
            "Optimized infinite scroll"
        ],
        timeline: "6 months including beta testing.",
        links: {
            demo: "#",
            repo: "#"
        }
    },
    {
        id: "5",
        title: "Portfolio v1",
        description: "My previous portfolio site built with Gatsby. Focused on typography and minimalism.",
        fullDescription: "Static site generated with Gatsby. Achieved perfect Lighthouse scores for performance and accessibility. Serves as a nostalgic archive of my early design work.",
        tech: ["Gatsby", "Styled Components", "Netlify"],
        // CHANGE THIS: Unique image for Portfolio v1
        image: "/dashboard.png",
        slug: "portfolio-v1",
        color: "bg-orange-500",
        features: [
            "Perfect 100/100 Lighthouse score",
            "Accessible semantic HTML",
            "Minimalist typography-focused design",
            "Static site generation"
        ],
        timeline: "Built in 2 weeks.",
        links: {
            demo: "#",
            repo: "#"
        }
    },
    {
        id: "6",
        title: "Weather App",
        description: "Beautiful weather forecasts based on your location with animated backgrounds.",
        fullDescription: "A PWA that provides hyper-local weather alerts. Uses geolocation API and background sync to keep data fresh even offline.",
        tech: ["JavaScript", "OpenWeatherMap", "PWA", "Service Workers"],
        // CHANGE THIS: Unique image for Weather App
        image: "/dashboard.png",
        slug: "weather-app",
        color: "bg-cyan-500",
        features: [
            "Offline functionality (PWA)",
            "Geolocation-based forecasts",
            "Animated weather backgrounds",
            "Hyper-local alerts"
        ],
        timeline: "1 month project.",
        links: {
            demo: "#",
            repo: "#"
        }
    },
];
