'use client';

import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Techstack() {
    interface Tech {
        label: string;
        img: string;
        mastery: number;
    }

    const techData = {
        frontend: [
            { label: 'Next.js', img: '/images/nextjs.png', mastery: 85 },
            { label: 'React.js', img: '/images/react.jpg', mastery: 90 },
            { label: 'HTML5', img: '/images/HTML.png', mastery: 95 },
        ],
        backend: [
            { label: 'Laravel', img: '/images/laravel.png', mastery: 88 },
            { label: 'SQL', img: '/images/sql.png', mastery: 85 },
            { label: 'Oracle', img: '/images/oracle.png', mastery: 80 },
        ],
        mobile: [
            { label: 'Flutter', img: '/images/flutter.png', mastery: 90 },
            { label: 'Dart', img: '/images/dart.png', mastery: 87 },
        ],
        versionControl: [
            { label: 'Git', img: '/images/git.png', mastery: 92 },
            { label: 'GitHub', img: '/images/github.jpg', mastery: 95 },
        ],
    };

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const renderSection = (
        id: string,
        title: string,
        techs: Tech[],
        bgFrom: string,
        bgTo: string
    ) => (
        <section
            id={id}
            className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[${bgFrom}] to-[${bgTo}] text-white px-4 py-20`}
        >
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-wider mb-12 text-center drop-shadow-lg">
                {title}
            </h2>
            <div className="flex flex-wrap justify-center gap-16 max-w-6xl">
                {techs.map(({ label, img, mastery }) => (
                    <div key={label} className="flex flex-col items-center hover:scale-105 transition-transform">
                        <div className="bg-white rounded-xl flex items-center justify-center w-64 h-64 shadow-xl mb-4">
                            <Image src={img} alt={`${label} Logo`} width={160} height={160} />
                        </div>
                        <span className="text-2xl font-semibold tracking-wide mb-2">{label.toUpperCase()}</span>
                        <div className="w-64 bg-white rounded-full h-4 overflow-hidden mb-1">
                            <div className="bg-green-500 h-full" style={{ width: `${mastery}%` }}></div>
                        </div>
                        <span className="text-base">{mastery}% Mastery</span>
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className="flex flex-row w-full overflow-hidden relative font-sans">
            <Navbar />
            <main className="flex-1 flex flex-col scroll-smooth overflow-y-auto">
                {renderSection('frontend', 'Front-End Development', techData.frontend, '#1f2937', '#374151')}
                {renderSection('backend', 'Back-End Development', techData.backend, '#111827', '#1f2937')}
                {renderSection('mobile', 'Mobile Development', techData.mobile, '#1e3a8a', '#3b82f6')}
                {renderSection('versionControl', 'Version Control (Git & GitHub)', techData.versionControl, '#0f172a', '#1e293b')}
            </main>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-around items-center z-50 shadow-inner">
                <button onClick={() => scrollTo('frontend')} className="text-sm md:text-lg hover:underline font-medium">
                    Front-End
                </button>
                <button onClick={() => scrollTo('backend')} className="text-sm md:text-lg hover:underline font-medium">
                    Back-End
                </button>
                <button onClick={() => scrollTo('mobile')} className="text-sm md:text-lg hover:underline font-medium">
                    Mobile
                </button>
                <button onClick={() => scrollTo('versionControl')} className="text-sm md:text-lg hover:underline font-medium">
                    Git & GitHub
                </button>
            </div>
        </div>
    );
}
