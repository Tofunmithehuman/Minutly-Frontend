import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

function Navigation() {
    // Initialize theme from localStorage or default to 'dark'
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);
        // Save theme to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="Navigation border-b border-primary fixed top-0 left-0 right-0 z-50">
            <div className="max-w-screen-2xl mx-auto">
                <div className="p-4 flex items-center justify-between">
                    <div>
                        <Link to="/" className="QurovaDEMO text-base sm:text-lg">
                            MINUTLY.AI
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="theme-toggle cursor-pointer" onClick={toggleTheme}>
                            {theme === 'dark' ? (
                                <Moon className="text-primary" />
                            ) : (
                                <Sun className="text-primary" />
                            )}
                        </div>

                        <Link
                            to="/dashboard"
                            className="bg-primary py-1 px-2 sm:py-2 sm:px-4 rounded font-medium text-sm sm:text-base"
                        >
                            Try Free
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;