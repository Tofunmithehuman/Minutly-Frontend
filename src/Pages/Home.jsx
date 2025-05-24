import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Check, Coffee, Users, MessageSquare, PanelsTopLeft } from 'lucide-react';

function Home() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    const howItWorks = [
        {
            step: 1,
            title: 'Upload or Paste Link',
            description: 'Upload MP3/MP4 files or paste Zoom, Google Meet links',
        },
        {
            step: 2,
            title: 'AI Processing',
            description: 'Our AI transcribes and analyzes your content in minutes',
        },
        {
            step: 3,
            title: 'Get Your Summary',
            description: 'Receive a concise summary with key points and action items',
        },
    ];

    const whoUsesMinutly = [
        {
            id: 1,
            icon: Coffee,
            title: 'Solo Podcasters',
            description: 'Save time creating show notes and episode summaries',
        },
        {
            id: 2,
            icon: Users,
            title: 'Startup Teams',
            description: 'Save time creating show notes and episode summaries',
        },
        {
            id: 3,
            icon: MessageSquare,
            title: 'Coaches & Consultants',
            description: 'Save time creating show notes and episode summaries',
        },
        {
            id: 4,
            icon: PanelsTopLeft,
            title: 'Content Creators',
            description: 'Save time creating show notes and episode summaries',
        },
    ];

    return (
        <div className="Home">
            <Navigation />

            <div>
                <section className="Hero">
                    <motion.div
                        className="max-w-screen-lg mx-auto p-5 flex flex-col items-center justify-center h-screen"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <h1 className="text-5xl sm:text-6xl font-semibold text-center">
                            Turn Audio into <span className="text-primary">Actionable Summaries</span>
                        </h1>
                        <h4 className="text-sm sm:text-lg font-medium text-center mt-4 leading-relaxed text-muted">
                            No tech setup needed. Just upload your audio or drop a link & Minutly handles the rest.
                        </h4>
                        <Link
                            to="/dashboard"
                            className="bg-primary rounded font-semibold max-w-lg w-full text-center py-2 sm:py-3 px-2 mt-4 text-sm md:text-lg"
                        >
                            Get Started
                        </Link>

                        <div>
                            <div className="flex items-center justify-center gap-4 mt-4">
                                <div className="flex items-center">
                                    <Check className="text-primary" />
                                    <h4 className="text-xs font-medium ml-2 text-muted">
                                        No credit card required
                                    </h4>
                                </div>
                                <motion.div variants={itemVariants} className="flex items-center">
                                    <Check className="text-primary" />
                                    <h4 className="text-xs font-medium ml-2 text-muted">
                                        Cancel anytime
                                    </h4>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section>
                    <div className="px-5 py-20 sm:py-40 flex flex-col items-center justify-center bg-secondary">
                        <div>
                            <h1 className="text-2xl text-center font-semibold">How It Works</h1>
                            <h4 className="text-sm text-center mt-2 text-muted">
                                Three simple steps to save 30-60 minutes on every recording
                            </h4>
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
                            {howItWorks.map(({ step, title, description }) => (
                                <div
                                    key={step}
                                    className="bg-black/30 rounded-lg p-5 mt-4 w-70 sm:w-80 h-50 flex flex-col items-center justify-center"
                                >
                                    <h1 className="flex items-center justify-center w-12 h-12 text-primary bg-primary/10 rounded-full">
                                        {step}
                                    </h1>
                                    <h4 className="text-sm font-semibold mt-2">{title}</h4>
                                    <p className="text-sm mt-2 text-center text-muted">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <div className="px-5 py-20 sm:py-40 flex flex-col items-center justify-center">
                        <div>
                            <h1 className="text-2xl text-center font-semibold">Who Uses Minutly</h1>
                            <h4 className="text-sm text-center mt-2 text-muted">
                                Perfect for podcasters, teams, and content creators
                            </h4>
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
                            {whoUsesMinutly.map(({ id, icon: Icon, title, description }) => (
                                <div
                                    key={id}
                                    className="bg-black/30 border-2 border-primary/30 rounded-xl p-5 mt-4 w-70 sm:w-80 h-50 flex flex-col justify-center"
                                >
                                    {Icon && <Icon className="text-primary w-8 h-8" />}
                                    <h4 className="text-lg font-semibold mt-2">{title}</h4>
                                    <p className="text-sm mt-2 text-muted">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <motion.div
                        className="px-5 py-20 sm:py-40 flex flex-col items-center justify-center"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div>
                            <h1 className="text-2xl text-center font-semibold">Simple Pricing</h1>
                            <h4 className="text-sm text-center mt-2 text-muted">
                                One plan. One price. Everything you need.
                            </h4>
                        </div>

                        <div className="max-w-md w-full border-2 border-primary/30 rounded-xl mt-20">
                            <div className="bg-primary rounded-t-xl p-5">
                                <h1 className="text-2xl text-center font-semibold">Minutly Pro</h1>
                                <h2 className="text-sm text-center mt-5">
                                    <span className="text-2xl font-semibold">$9</span>/month
                                </h2>
                            </div>

                            <div className="p-5 flex flex-col gap-2">
                                <p className="flex items-center gap-2">
                                    <Check className="text-primary" />
                                    <span className="text-xs sm:text-sm">
                                        Unlimited audio/video upload
                                    </span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Check className="text-primary" />
                                    <span className="text-xs sm:text-sm">
                                        YouTube, Zoom, and Google Meet links
                                    </span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Check className="text-primary" />
                                    <span className="text-xs sm:text-sm">
                                        Up to 2 hours of audio per file
                                    </span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Check className="text-primary" />
                                    <span className="text-xs sm:text-sm">
                                        Concise summaries with key points
                                    </span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Check className="text-primary" />
                                    <span className="text-xs sm:text-sm">AI-generated summaries</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Check className="text-primary" />
                                    <span className="text-xs sm:text-sm">Export to text or markdown</span>
                                </p>

                                <Link
                                    to="/dashboard"
                                    className="bg-primary rounded w-full text-center py-3 px-2 mt-4 text-sm font-semibold"
                                >
                                    Get Pro
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>

            <Footer />
        </div>
    );
}

export default Home;