import {Mail, Phone, MapPin, Linkedin, Send} from "lucide-react";
import {cn} from "@/lib/utils";
export const ContactSection = () => {

    const handleSubmit= (e) => {
        e.preventDefault()

        setTimeout(() => {
            
        }, 1500)
    }
    return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Get In <span className="text-primary"> Touch</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                If you're looking for a Computer Science student eager to learn with experience in full-stack development, AI, and various coding languages, I'm open to opporutnities---let's connect!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:simonlunay@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    simonlunay@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <a href="tel:+19379921277" className="text-muted-foreground hover:text-primary transition-colors">
                                    +1 (937) 992-1277
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Columbus, OH, United States
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> Connect With Me</h4>
                        <div className="flex space-x-4 justify-center"> 
                            <a href="https://www.linkedin.com/in/simonlunay/" target= "_blank">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>


                <div className="p-8">
                        <div className="h-48 overflow-hidden">
                            <img src="/projects/image.png" alt="osu logo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                </div>
            </div>
        </div>
    </section>
    );
};