export const PROJECTS = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description: "Full-stack shopping experience with real-time inventory, secure payments (Stripe), and an admin dashboard.",
        fullDescription: "Built a comprehensive e-commerce solution that handles thousands of concurrent users. Features include real-time stock updates using WebSockets, a custom CMS for product management, and optimized checkout flow reducing cart abandonment by 15%.",
        tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
        image: "/dashboard.png",
        slug: "ecommerce-platform",
        color: "bg-blue-500"
    },
    {
        id: "2",
        title: "AI Task Manager",
        description: "Smart to-do list that prioritizes tasks using natural language processing and machine learning.",
        fullDescription: "An intelligent productivity tool that analyzes task complexity and urgency. It suggests optimal schedules and integrates with Google Calendar to block time automatically.",
        tech: ["React", "Python", "FastAPI", "OpenAI API", "Redis"],
        image: "/dashboard.png",
        slug: "ai-task-manager",
        color: "bg-purple-500"
    },
    {
        id: "3",
        title: "Finance Dashboard",
        description: "Real-time crypto and stock application with interactive charts and portfolio tracking.",
        fullDescription: "A high-performance financial analytics tool using D3.js for complex data visualization. Connects to multiple exchange APIs to aggregate portfolio performance in real-time.",
        tech: ["Vue", "D3.js", "Firebase", "Serverless Functions"],
        image: "/dashboard.png",
        slug: "finance-dashboard",
        color: "bg-green-500"
    },
    {
        id: "4",
        title: "Social Media App",
        description: "Connect with friends and share updates in real-time. Features stories and live streaming.",
        fullDescription: "Mobile-first social platform focused on photo sharing. Implemented image optimization pipeline and infinite scroll with virtualized lists for smooth performance.",
        tech: ["React Native", "GraphQL", "AWS AppSync", "DynamoDB"],
        image: "/dashboard.png",
        slug: "social-media-app",
        color: "bg-pink-500"
    },
    {
        id: "5",
        title: "Portfolio v1",
        description: "My previous portfolio site built with Gatsby. Focused on typography and minimalism.",
        fullDescription: "Static site generated with Gatsby. Achieved perfect Lighthouse scores for performance and accessibility. Serves as a nostalgic archive of my early design work.",
        tech: ["Gatsby", "Styled Components", "Netlify"],
        image: "/dashboard.png",
        slug: "portfolio-v1",
        color: "bg-orange-500"
    },
    {
        id: "6",
        title: "Weather App",
        description: "Beautiful weather forecasts based on your location with animated backgrounds.",
        fullDescription: "A PWA that provides hyper-local weather alerts. Uses geolocation API and background sync to keep data fresh even offline.",
        tech: ["JavaScript", "OpenWeatherMap", "PWA", "Service Workers"],
        image: "/dashboard.png",
        slug: "weather-app",
        color: "bg-cyan-500"
    },
];
