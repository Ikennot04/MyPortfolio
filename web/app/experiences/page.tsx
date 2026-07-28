'use client';

export default function ExperiencesPage() {
    const experienceData = [
        { year: '2026', title: 'BS Computer Science', subtitle: 'Academic Milestone' },
        { year: '2025', title: 'TOTO CAMPANER', subtitle: 'Web Developer' },
        { year: '2022', title: 'Hello World', subtitle: 'Wrote my first line of code' },
    ];

    return (
        <section className="px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-12 lg:py-20">
            <div className="mx-auto w-full max-w-4xl rounded-2xl border border-zinc-300 bg-zinc-100 p-4 sm:p-6 md:p-8">
                <h1 className="mb-4 text-xl font-semibold text-zinc-900 sm:text-2xl">Experience</h1>
                <div className="relative pl-5 sm:pl-6">
                    <div className="absolute bottom-1 left-[7px] top-1 w-px bg-zinc-300" />
                    <div className="space-y-5 sm:space-y-6">
                        {experienceData.map((item, index) => (
                            <div key={`${item.year}-${item.title}`} className="relative">
                                <span
                                    className={`absolute -left-5 top-1.5 h-3 w-3 border sm:-left-6 ${
                                        index === 0 ? 'border-zinc-700 bg-zinc-900' : 'border-zinc-400 bg-zinc-100'
                                    }`}
                                />
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                                    <div className="min-w-0">
                                        <div
                                            className={`text-base font-semibold sm:text-lg md:text-xl ${
                                                index === 0 ? 'text-zinc-950' : 'text-zinc-800'
                                            }`}
                                        >
                                            {item.title}
                                        </div>
                                        <div className="text-sm text-zinc-700">{item.subtitle}</div>
                                    </div>
                                    <div
                                        className={`shrink-0 text-xs font-semibold sm:pt-1 sm:text-right ${
                                            index === 0 ? 'text-zinc-800' : 'text-zinc-600'
                                        }`}
                                    >
                                        {item.year}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
