"use client";

import {
    Code,
    Cpu,
    Server,
    Database,
    Globe,
    Laptop,
    Cloud,
    Lock,
    LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/lib/utils";

const TechBento = () => {
    return (
        <div className="relative py-16 text-white overflow-hidden">
            {/* Radial Gradient Background */}
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <div className="max-w-7xl mx-auto px-4">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Technology & Innovation
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Discover cutting-edge technologies and innovations shaping our digital future.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                <Card colSpan="md:col-span-1" rowSpan="row-span-2" gradient="from-blue-500/30 to-blue-700/30">
                        <img
                            src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402379/pexels-cottonbro-5474037.jpg"
                            alt="Advanced tech workspace"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </Card>

                    <Card colSpan="md:col-span-2" gradient="from-purple-600/30 to-violet-700/30">
                        <CardContent
                            icon={Cpu}
                            title="Artificial Intelligence"
                            description="AI is transforming industries through machine learning, NLP, and vision tech."
                        />
                    </Card>

                    <Card gradient="from-blue-400/30 to-blue-600/30">
                        <CardContent
                            icon={Cloud}
                            title="Cloud Computing"
                            description="Scale and innovate faster with powerful cloud services."
                        />
                    </Card>

                    <Card colSpan="md:col-span-1" gradient="from-indigo-500/30 to-indigo-700/30">
                        <CardContent
                            value="87%"
                            label="Companies using cloud"
                        />
                    </Card>

                    <Card colSpan="md:col-span-3" gradient="from-blue-200/20 to-blue-400/20">
                        <div className="flex flex-col gap-4 h-full justify-center items-center">
                            <p className="text-lg italic text-white/90">
                                "Technology brings people together. Innovation thrives in collaboration."
                            </p>
                            <div className="flex items-center gap-4">
                                <img src="https://res.cloudinary.com/damr9jzpb/image/upload/v1724743006/peep-11_wyasxk.svg" className="w-10 h-10 rounded-full" />
                                <div >
                                    <p className="font-bold text-white">Michael Chen</p>
                                    <p className="text-sm text-white/70">CTO at TechFuture Inc.</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card gradient="from-blue-500/30 to-blue-700/30">
                        <CardContent
                            icon={Lock}
                            title="Cybersecurity"
                            description="Protect digital assets with cutting-edge security tools."
                        />
                    </Card>

                    <Card gradient="from-violet-500/30 to-purple-700/30">
                        <CardContent
                            icon={Globe}
                            title="Web Development"
                            description="Build responsive sites with modern tech stacks."
                        />
                    </Card>

                    <Card gradient="from-indigo-300/30 to-indigo-500/30">
                        <CardContent
                            icon={Database}
                            title="Big Data"
                            description="Leverage analytics to drive business insights."
                        />
                    </Card>

                    <Card colSpan="md:col-span-3" gradient="from-blue-200/20 to-blue-400/20">
                        <div className="grid md:grid-cols-3 gap-6">
                            <CardContent
                                icon={Code}
                                title="Software"
                                description="Master modern programming languages and frameworks."
                            />
                            <CardContent
                                icon={Server}
                                title="DevOps"
                                description="Streamline deployment pipelines with CI/CD."
                            />
                            <CardContent
                                icon={Laptop}
                                title="Remote Work Tech"
                                description="Tools for productive remote collaboration."
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default TechBento;

// --------------------- COMPONENTS ------------------------

interface CardProps {
    children: React.ReactNode;
    className?: string;
    colSpan?: string;
    rowSpan?: string;
    gradient?: string;
}

const Card = ({ children, className, colSpan = "", rowSpan = "", gradient }: CardProps) => {
    return (
        <div
            className={cn(
                "relative group rounded-2xl p-6 overflow-hidden transition-all duration-300 transform hover:scale-[1.03] backdrop-blur-lg border border-white/30 hover:shadow-2xl bg-white/10",
                "min-h-[320px] text-white",
                colSpan,
                rowSpan,
                className
            )}
            style={{
                backgroundImage: gradient ? `linear-gradient(to right, ${gradient})` : undefined,
            }}
        >
            {/* Neon Glow */}
            <div className="absolute inset-0 -z-10 rounded-2xl opacity-30 blur-xl transition-all duration-500 group-hover:opacity-70 group-hover:blur-2xl" style={{
                background: "radial-gradient(circle at 50% 50%, #ffff33 0%, transparent 70%)"
            }} />

            {children}
        </div>
    );
};


interface CardContentProps {
    icon?: LucideIcon;
    title?: string;
    description?: string;
    value?: string | number;
    label?: string;
}

const CardContent = ({
    icon: Icon,
    title,
    description,
    value,
    label,
}: CardContentProps) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
                {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}

                {Icon && (
                    <div className="p-3 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                    </div>
                )}

            </div>
            {description && (
                <p className="text-base text-white/90 font-medium">{description}</p>
            )}

            {value && label && (
                <div >
                    <p className="text-3xl font-bold text-white">{value}</p>
                    <p className="text-sm text-white/70">{label}</p>
                </div>
            )}
        </div>
    );
};
