import { Code, Layers, Briefcase } from "lucide-react";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold"> Passionate Computer Science and Engineering Student

                    </h3>
                
                    <p className="text-muted-foreground">
                    The past two summers, I interned at a local small business helping optimize their operations through software, including building them a full-stack website from scratch. This summer, I'm joining Fidelity Investments as a Software Engineering Intern.</p>
                    <p className="text-muted-foreground">I'm extremely passionate about problem solving which is what created my love for computer science. I'm constantly learning new technologies to stay ahead of the constantly evolving software engineering world.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="/projects/Simon_Lunay_CV.pdf" download="Simon_Lunay_CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Application Development</h4>
                                <p className="text-muted-foreground">
                                    Building full-stack applications from the ground up, focusing on clean architecture, performance, and scalability.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Layers className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Software Design</h4>
                                <p className="text-muted-foreground">
                                    Designing maintainable systems with an eye for clean interfaces, solid abstractions, and thoughtful user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Experience</h4>
                                <div className="space-y-3 mt-1">
                                    <div>
                                        <p className="text-sm font-medium">Fidelity Investments</p>
                                        <p className="text-xs text-primary">Software Engineering Intern · Summer 2026</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">JCL Equipment</p>
                                        <p className="text-xs text-primary">Computer Science Intern · Summers 2024 &amp; 2025</p>
                                        <p className="text-xs text-muted-foreground">Database management, automation &amp; website development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

        </div>
    </section>
    );
};