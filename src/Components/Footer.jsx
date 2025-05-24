import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

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

  return (
    <div className="Footer">
      <div className="bg-primary/10 inter">
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-6 sm:px-10">
          <motion.div
            className="flex flex-col md:flex-row items-start gap-10 md:gap-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={sectionVariants}>
              <h1 className="font-semibold text-2xl mb-5">Explore</h1>
              <nav className="flex flex-col gap-3">
                <motion.div variants={itemVariants}>
                  <Link to="/dashboard">Dashboard</Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link to="/login">Login</Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link to="/signup">Signup</Link>
                </motion.div>
              </nav>
            </motion.div>

            <motion.div variants={sectionVariants}>
              <h1 className="font-semibold text-2xl mb-5">Resources</h1>
              <nav className="flex flex-col gap-3">
                <motion.div variants={itemVariants}>
                  <Link
                    to="https://github.com/minutly.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    to="https://x.com/minutly.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    to="https://instagram.com/minutly.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </Link>
                </motion.div>
              </nav>
            </motion.div>

            <motion.div variants={sectionVariants}>
              <h1 className="font-semibold text-2xl mb-5">Clients</h1>
              <nav className="flex flex-col gap-3">
                <motion.div variants={itemVariants}>
                  <p>Solo Podcasters</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <p>Startup Teams</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <p>Coaches & Consultants</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <p>Content Creators</p>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>

          <div className="border-t border-primary/40 my-8"></div>

          <div className="pb-8">
            <nav className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="text-sm text-muted">
                {getYear()} © Minutly. All rights reserved.
              </p>
              <a
                href="mailto:minutly@info.com"
                className="text-sm text-muted"
                target="_blank"
                rel="noopener noreferrer"
              >
                minutly@info.com
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;