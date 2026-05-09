'use client';

import Image from 'next/image';

export default function Techstack() {
    interface Tech {
        label: string;
        img: string;
        mastery: number;
    }

    const techData = {
        frontend: [
            { label: 'Canva', img: '/images/freelancing/Canva.jpeg', mastery: 85 },
            { label: 'Capcut', img: '/images/freelancing/capcut.jpg', mastery: 90 },
            { label: 'Figma', img: '/images/freelancing/Figma.png', mastery: 90 },
            
        ],
        backend: [
            { label: 'Meta Business Suite', img: '/images/freelancing/meta.webp', mastery: 88 },
            { label: 'Buffer', img: '/images/freelancing/buffer.png', mastery: 85 },
            { label: 'Social Rise', img: '/images/freelancing/socialrise.png', mastery: 85 },
        ],
        mobile: [
            { label: 'Google Analytics', img: '/images/freelancing/google.png', mastery: 90 },
            { label: 'Dart', img: '/images/dart.png', mastery: 87 },
        ],
        versionControl: [
            { label: 'Trello', img: '/images/freelancing/trello.png', mastery: 92 },
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
            className="min-h-[calc(100vh-3.5rem)] md:min-h-screen flex flex-col justify-center items-center text-white px-4 py-20"
            style={{ backgroundImage: `linear-gradient(to bottom, ${bgFrom}, ${bgTo})` }}
        >
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-12 text-center drop-shadow-lg">
                {title}
            </h2>
            <div className="flex flex-wrap justify-center gap-10 max-w-6xl">
                {techs.map(({ label, img, mastery }) => (
                    <div key={label} className="flex flex-col items-center hover:scale-[1.03] transition-transform">
                        <div className="bg-white/95 rounded-2xl flex items-center justify-center w-56 h-56 md:w-64 md:h-64 shadow-2xl mb-4 border border-white/10">
                            <Image src={img} alt={`${label} Logo`} width={160} height={160} className="object-contain" />
                        </div>
                        <span className="text-xl md:text-2xl font-semibold tracking-wide mb-2">{label.toUpperCase()}</span>
                        <div className="w-56 md:w-64 bg-white/90 rounded-full h-3 overflow-hidden mb-1">
                            <div className="bg-emerald-400 h-full" style={{ width: `${mastery}%` }} />
                        </div>
                        <span className="text-sm text-white/90">{mastery}% Mastery</span>
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className="w-full overflow-hidden relative font-sans">
            <main className="flex flex-col scroll-smooth">
                {renderSection('Content Creation', 'Content Creation', techData.frontend, '#0b1220', '#111827')}
                {renderSection('Scheduling & Automation', 'Scheduling & Automation', techData.backend, '#0a0f1c', '#111827')}
                {renderSection('Analytics & Reporting', 'Analytics & Reporting', techData.mobile, '#0b1b3a', '#1e3a8a')}
                {renderSection('Productivity & Management', 'Productivity & Management', techData.versionControl, '#070a12', '#0f172a')}
            </main>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 md:left-72 bg-zinc-950/85 backdrop-blur text-white px-3 py-3 flex justify-around items-center z-50 border-t border-white/10">
                <button onClick={() => scrollTo('Content Creation')} className="text-[10px] md:text-sm hover:text-white/90 font-semibold tracking-wide">
                    Content Creation
                </button>
                <button onClick={() => scrollTo('Scheduling & Automation')} className="text-[10px] md:text-sm hover:text-white/90 font-semibold tracking-wide">
                    Scheduling & Automation
                </button>
                <button onClick={() => scrollTo('Analytics & Reporting')} className="text-[10px] md:text-sm hover:text-white/90 font-semibold tracking-wide">
                    Analytics & Reporting
                </button>
                <button onClick={() => scrollTo('Productivity & Management')} className="text-[10px] md:text-sm hover:text-white/90 font-semibold tracking-wide">
                    Productivity & Management
                </button>
            </div>
        </div>
    );
}
