"use client";
import Link from "next/link";

export default function Projects() {
    const pasaHeroUrl =
        "https://pasa-hero-landing-page.vercel.app/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExQ09pTWZLRTV4TWpxVGRaZ3NydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4B14nUjhICkmLZVAyttTMYCgGNyKCq1f2hVDRtOKDDaC3fT4QtqBAPBZ1auA_aem_0QqxyCmG9fY4ppaRrs3JeA";
    const pasaHeroDriverUrl = "https://pasahero-driver.vercel.app/";
    const workRateUrl = "https://workrate.kentflores0000.workers.dev/";

    return (
        <div className="relative w-full overflow-hidden">
            <main className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-4 py-12 sm:px-6 sm:py-16 md:min-h-screen">
                <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:rounded-3xl sm:p-8 md:p-10">
                    <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                        Projects
                    </h1>
                    <p className="mt-3 text-sm text-zinc-300 sm:mt-4 sm:text-base">Featured projects</p>
                    <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
                        <Link
                            href={pasaHeroUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/20 sm:w-auto sm:text-lg"
                        >
                            PASAHERO APP
                        </Link>
                        <Link
                            href={pasaHeroDriverUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/20 sm:w-auto sm:text-lg"
                        >
                            PASAHERO DRIVER
                        </Link>
                        <Link
                            href={workRateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/20 sm:w-auto sm:text-lg"
                        >
                            WORKRATE
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
