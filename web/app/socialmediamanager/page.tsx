'use client';

import Image from 'next/image';

export default function SocialMediaManager() {
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

    const sections = [
        { id: 'content-creation', title: 'Content Creation', techs: techData.frontend, from: '#0b1220', to: '#111827' },
        { id: 'scheduling', title: 'Scheduling & Automation', techs: techData.backend, from: '#0a0f1c', to: '#111827' },
        { id: 'analytics', title: 'Analytics & Reporting', techs: techData.mobile, from: '#0b1b3a', to: '#1e3a8a' },
        { id: 'productivity', title: 'Productivity & Management', techs: techData.versionControl, from: '#070a12', to: '#0f172a' },
    ] as const;

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const renderSection = (id: string, title: string, techs: Tech[], bgFrom: string, bgTo: string) => (
        <section
            id={id}
            className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-4 py-16 pb-28 text-white sm:px-6 sm:py-20 md:min-h-screen md:pb-24"
            style={{ backgroundImage: `linear-gradient(to bottom, ${bgFrom}, ${bgTo})` }}
        >
            <h2 className="mb-8 max-w-4xl text-balance px-2 text-center text-xl font-semibold tracking-tight drop-shadow-lg sm:mb-12 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                {title}
            </h2>
            <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
                {techs.map(({ label, img, mastery }) => (
                    <div key={label} className="flex w-[min(100%,11rem)] flex-col items-center transition-transform hover:scale-[1.02] sm:w-auto">
                        <div className="mb-3 flex h-36 w-36 items-center justify-center rounded-2xl border border-white/10 bg-white/95 shadow-2xl sm:mb-4 sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-64 lg:w-64">
                            <Image
                                src={img}
                                alt={`${label} logo`}
                                width={160}
                                height={160}
                                className="h-auto max-h-[70%] w-auto max-w-[70%] object-contain p-2"
                            />
                        </div>
                        <span className="mb-2 text-center text-sm font-semibold tracking-wide sm:text-base md:text-lg lg:text-xl">
                            {label.toUpperCase()}
                        </span>
                        <div className="mb-1 h-2 w-full max-w-[11rem] overflow-hidden rounded-full bg-white/90 sm:max-w-[12rem] md:max-w-[16rem]">
                            <div className="h-full bg-emerald-400" style={{ width: `${mastery}%` }} />
                        </div>
                        <span className="text-xs text-white/90 sm:text-sm">{mastery}% Mastery</span>
                    </div>
                ))}
            </div>
        </section>
    );

    const navItems = [
        { id: 'content-creation', label: 'Content' },
        { id: 'scheduling', label: 'Scheduling' },
        { id: 'analytics', label: 'Analytics' },
        { id: 'productivity', label: 'Productivity' },
    ];

    return (
        <div className="relative w-full overflow-hidden font-sans">
            <main className="flex flex-col scroll-smooth">
                {sections.map((section) =>
                    renderSection(section.id, section.title, section.techs, section.from, section.to)
                )}
            </main>

            <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-1 border-t border-white/10 bg-zinc-950/90 px-2 py-2 backdrop-blur sm:gap-2 sm:px-3 sm:py-3 md:left-64 lg:left-72">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollTo(item.id)}
                        className="min-w-0 flex-1 px-1 py-1 text-center text-[10px] font-semibold tracking-wide hover:text-white/90 sm:px-2 sm:text-xs md:text-sm"
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
