"use client";
import Link from "next/link";

export default function Projects() {
    const pasaHeroUrl =
        "https://pasa-hero-landing-page.vercel.app/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExQ09pTWZLRTV4TWpxVGRaZ3NydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4B14nUjhICkmLZVAyttTMYCgGNyKCq1f2hVDRtOKDDaC3fT4QtqBAPBZ1auA_aem_0QqxyCmG9fY4ppaRrs3JeA";

    return (
        <div className="w-full overflow-hidden relative">
            <main className="min-h-[calc(100vh-3.5rem)] md:min-h-screen flex items-center justify-center px-6 py-16">
                <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Projects</h1>
                    <p className="mt-4 text-zinc-300">
                        Featured project
                    </p>
                    <Link
                        href={pasaHeroUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-lg font-semibold text-white transition hover:bg-white/20"
                    >
                        PASAHERO APP
                    </Link>
                </div>
            </main>
        </div>
    );
}
