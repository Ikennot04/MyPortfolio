'use client';

export default function Techstack() {
    interface Tech {
        label: string;
       
    }

    const techData = {
        frontend: [
            { label: 'Next.js' },
            { label: 'React.js' },
            { label: 'HTML5'},
        ],
        backend: [
            { label: 'Laravel' },
            { label: 'SQL' },
            { label: 'Oracle' },
        ],
        mobile: [
            { label: 'Flutter' },
            { label: 'Dart' },
        ],
        versionControl: [
            { label: 'Git'   },
            { label: 'GitHub' },
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
            
        </section>
    );

    return (
        <div className="w-full overflow-hidden relative font-sans">
            <main className="flex flex-col scroll-smooth">
                {renderSection('frontend', 'Front-End Development', techData.frontend, '#0b1220', '#111827')}
                {renderSection('backend', 'Back-End Development', techData.backend, '#0a0f1c', '#111827')}
                {renderSection('mobile', 'Mobile Development', techData.mobile, '#0b1b3a', '#1e3a8a')}
                {renderSection('versionControl', 'Version Control (Git & GitHub)', techData.versionControl, '#070a12', '#0f172a')}
            </main>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 md:left-72 bg-zinc-950/85 backdrop-blur text-white px-3 py-3 flex justify-around items-center z-50 border-t border-white/10">
                <button onClick={() => scrollTo('frontend')} className="text-xs md:text-sm hover:text-white/90 font-semibold tracking-wide">
                    Front-End
                </button>
                <button onClick={() => scrollTo('backend')} className="text-xs md:text-sm hover:text-white/90 font-semibold tracking-wide">
                    Back-End
                </button>
                <button onClick={() => scrollTo('mobile')} className="text-xs md:text-sm hover:text-white/90 font-semibold tracking-wide">
                    Mobile
                </button>
                <button onClick={() => scrollTo('versionControl')} className="text-xs md:text-sm hover:text-white/90 font-semibold tracking-wide">
                    Git & GitHub
                </button>
            </div>
        </div>
    );
}
