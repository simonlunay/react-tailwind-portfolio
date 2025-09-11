import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        id:1,
        title: "JCL Equipment Website",
        description: "A full stack website built for a local business in order to look more modern and allow the business to add used parts for sale.",
        image: "/projects/project1.png",
        tags: ["HTML/CSS", "JavaScript", "Node.js", "SQL"],
        demoUrl: "https://jclequipment.com",
        githubUrl: "https://github.com/simonlunay/JCL-Web-Public",
    },
    {
        id:2,
        title: "AI Stat Predictor",
        description: "A web application AI stat predictor using Python and Scikit-learn for machine learning to forecast player performance, featuring a dynamic React frontend and an Express backend API.",
        image: "/projects/project2.png",
        tags: ["React", "AI/Scikit-learn", "Express", "Python"],
        demoUrl: "https://fantasy-predictor-pi.vercel.app/",
        githubUrl: "https://github.com/simonlunay/fantasy-predictor",
    },
    {
        id:3,
        title: "Accessible Mouse",
        description: "A group project where my team and I developed a working mouse for people with hand deformities. **No URLs",
        image: "/projects/project3.png",
        tags: ["AutoCAD", "CircuitPython", "Windows Accessibility API"],
        demoUrl: "",
        githubUrl: "",
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are three of my favorite projects that showcase my skills and how I apply them in order to problem solve. Each project was carefully crafted with attention to detail, user experience, and overall performance.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div> 

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                {/* Only render links if URLs exist */}
                                {(project.demoUrl || project.githubUrl) && (
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            {project.demoUrl && (
                                                <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300 p-2">
                                                    <ExternalLink size={20}/>
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300 p-2">
                                                    <Github size={20}/>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/simonlunay" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github! <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
