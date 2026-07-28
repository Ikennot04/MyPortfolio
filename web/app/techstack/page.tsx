'use client';

export default function Techstack() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const renderSection = (id: string, title: string, bgFrom: string, bgTo: string) => (
        <section
            id={id}
            className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-4 py-16 pb-28 text-white sm:px-6 sm:py-20 md:min-h-screen md:pb-24 md:pl-0"
            style={{ backgroundImage: `linear-gradient(to bottom, ${bgFrom}, ${bgTo})` }}
        >
            <h2 className="mb-8 max-w-4xl text-balance text-center text-2xl font-semibold tracking-tight drop-shadow-lg sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                {title}
            </h2>
        </section>
    );

    const navButtonClass =
        'min-w-0 flex-1 px-1 py-1 text-center text-[10px] font-semibold tracking-wide hover:text-white/90 sm:px-2 sm:text-xs md:text-sm';

    return (
        <div className="relative w-full overflow-hidden font-sans">
            <main className="flex flex-col scroll-smooth">
                {renderSection('frontend', 'Front-End Development', '#0b1220', '#111827')}
                {renderSection('backend', 'Back-End Development', '#0a0f1c', '#111827')}
                {renderSection('mobile', 'Mobile Development', '#0b1b3a', '#1e3a8a')}
                {renderSection('versionControl', 'Version Control (Git & GitHub)', '#070a12', '#0f172a')}
            </main>

            <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-1 border-t border-white/10 bg-zinc-950/90 px-2 py-2 backdrop-blur sm:gap-2 sm:px-3 sm:py-3 md:left-64 lg:left-72">
                <button type="button" onClick={() => scrollTo('frontend')} className={navButtonClass}>
                    Front-End
                </button>
                <button type="button" onClick={() => scrollTo('backend')} className={navButtonClass}>
                    Back-End
                </button>
                <button type="button" onClick={() => scrollTo('mobile')} className={navButtonClass}>
                    Mobile
                </button>
                <button type="button" onClick={() => scrollTo('versionControl')} className={navButtonClass}>
                    Git & GitHub
                </button>
            </div>
        </div>
    );
}
