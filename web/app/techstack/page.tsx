"use client";

import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Techstack() {
    interface ScrollToFunction {
        (id: string): void;
    }

    const scrollTo: ScrollToFunction = (id) => {
        const element: HTMLElement | null = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
    };

    interface Tech {
        label: string;
        img: string;
        mastery: number;
    }

    interface RenderSectionProps {
        id: string;
        title: string;
        techs: Tech[];
        bgFrom: string;
        bgTo: string;
    }

    const renderSection = (
        id: RenderSectionProps['id'],
        title: RenderSectionProps['title'],
        techs: RenderSectionProps['techs'],
        bgFrom: RenderSectionProps['bgFrom'],
        bgTo: RenderSectionProps['bgTo']
    ) => (
        <section id={id} className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[${bgFrom}] to-[${bgTo}] text-white px-4`}>
            <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-12 text-center">{title}</h2>
            <div className="flex flex-wrap justify-center gap-16 max-w-6xl">
                {techs.map(({ label, img, mastery }: Tech) => (
                    <div key={label} className="flex flex-col items-center hover:scale-105 transition-transform">
                        <div className="bg-white rounded-xl flex items-center justify-center w-64 h-64 shadow-xl mb-4">
                            <Image src={img} alt={`${label} Logo`} width={160} height={160} />
                        </div>
                        <span className="text-2xl font-bold tracking-wider mb-2">{label.toUpperCase()}</span>
                        <div className="w-64 bg-white rounded-full h-4 overflow-hidden mb-1">
                            <div className="bg-green-500 h-full" style={{ width: `${mastery}%` }}></div>
                        </div>
                        <span className="text-lg">{mastery}% Mastery</span>
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className="flex flex-row w-full overflow-hidden relative">
            <Navbar />
            <main className="flex-1 flex flex-col scroll-smooth overflow-y-auto pb-20">
                {renderSection('frontend', 'FRONT-END DEVELOPMENT', techData.frontend, '#1f2937', '#374151')}
                {renderSection('backend', 'BACK-END DEVELOPMENT', techData.backend, '#111827', '#1f2937')}
                {renderSection('mobile', 'MOBILE DEVELOPMENT', techData.mobile, '#1e3a8a', '#3b82f6')}
            </main>

            {/* BOTTOM NAVIGATION (Fixed) */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-3 flex justify-around items-center z-50 shadow-inner">
                <button onClick={() => scrollTo('frontend')} className="text-sm md:text-lg hover:underline font-semibold">
                    Front-End
                </button>
                <button onClick={() => scrollTo('backend')} className="text-sm md:text-lg hover:underline font-semibold">
                    Back-End
                </button>
                <button onClick={() => scrollTo('mobile')} className="text-sm md:text-lg hover:underline font-semibold">
                    Mobile
                </button>
            </div>
        </div>
    );
}
