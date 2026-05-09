'use client';

export default function ExperiencesPage() {
    const experienceData = [
        { year: '2022', title: 'Hello World', subtitle: 'Wrote my first line of code' },
        { year: '2025', title: 'TOTO CAMPANER', subtitle: 'OJT / Intern' },
        { year: '2026', title: 'BS Computer Science', subtitle: 'Academic Milestone' },
    ];

    return (
        <section className="px-6 py-14 md:px-12 md:py-20">
            <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-300 bg-zinc-100 p-6">
                <h1 className="mb-4 text-2xl font-semibold text-zinc-900">Experience</h1>
                <div className="relative pl-5">
                    <div className="absolute left-[7px] top-1 bottom-1 w-px bg-zinc-300" />
                    <div className="space-y-5">
                        {experienceData.map((item) => (
                            <div key={`${item.year}-${item.title}`} className="relative">
                                <span className="absolute -left-5 top-1.5 h-3 w-3 border border-zinc-600 bg-zinc-900" />
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="text-xl font-semibold text-zinc-900">{item.title}</div>
                                        <div className="text-sm text-zinc-700">{item.subtitle}</div>
                                    </div>
                                    <div className="pt-1 text-xs font-semibold text-zinc-600">{item.year}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
