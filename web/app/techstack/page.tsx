"use client";

import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Techstack() {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-row w-full overflow-hidden relative">
            <Navbar />
            <main className="flex-1 flex flex-col scroll-smooth overflow-y-auto pb-20"> {/* Added padding to avoid bottom nav overlap */}

                {/* FRONTEND SECTION */}
                <section id="frontend" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1f2937] to-[#374151] text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-wider mb-12 text-center">FRONT-END DEVELOPMENT</h1>
                    <div className="flex flex-wrap justify-center gap-16 max-w-6xl">
                        {[
                            { label: 'Next.js', img: '/images/nextjs.png' },
                            { label: 'React.js', img: '/images/react.jpg' },
                            { label: 'HTML5', img: '/images/HTML.png' },
                        ].map(({ label, img }) => (
                            <div key={label} className="flex flex-col items-center hover:scale-105 transition-transform">
                                <div className="bg-white rounded-xl flex items-center justify-center w-64 h-64 shadow-xl mb-4">
                                    <Image src={img} alt={`${label} Logo`} width={160} height={160} />
                                </div>
                                <span className="text-2xl font-bold tracking-wider">{label.toUpperCase()}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* BACKEND SECTION */}
                <section id="backend" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#111827] to-[#1f2937] text-white px-4">
                    <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-12 text-center">BACK-END DEVELOPMENT</h2>
                    <div className="flex flex-wrap justify-center gap-16 max-w-6xl">
                        {[
                            { label: 'Laravel', img: '/images/laravel.png' },
                            { label: 'SQL', img: '/images/sql.png' },
                            { label: 'Oracle', img: '/images/oracle.png' },
                        ].map(({ label, img }) => (
                            <div key={label} className="flex flex-col items-center hover:scale-105 transition-transform">
                                <div className="bg-white rounded-xl flex items-center justify-center w-64 h-64 shadow-xl mb-4">
                                    <Image src={img} alt={`${label} Logo`} width={160} height={160} />
                                </div>
                                <span className="text-2xl font-bold tracking-wider">{label.toUpperCase()}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* MOBILE SECTION */}
                <section id="mobile" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6] text-white px-4">
                    <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-12 text-center">MOBILE DEVELOPMENT</h2>
                    <div className="flex flex-wrap justify-center gap-16 max-w-6xl">
                        {[
                            { label: 'Flutter', img: '/images/flutter.png' },
                            { label: 'Dart', img: '/images/dart.png' },
                        ].map(({ label, img }) => (
                            <div key={label} className="flex flex-col items-center hover:scale-105 transition-transform">
                                <div className="bg-white rounded-xl flex items-center justify-center w-64 h-64 shadow-xl mb-4">
                                    <Image src={img} alt={`${label} Logo`} width={160} height={160} />
                                </div>
                                <span className="text-2xl font-bold tracking-wider">{label.toUpperCase()}</span>
                            </div>
                        ))}
                    </div>
                </section>
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
