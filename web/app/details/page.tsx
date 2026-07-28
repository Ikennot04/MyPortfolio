import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Details() {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-32 -left-32 h-[280px] w-[280px] rounded-full bg-amber-400/15 blur-3xl sm:h-[420px] sm:w-[420px]" />
                <div className="absolute -bottom-32 -right-32 h-[320px] w-[320px] rounded-full bg-rose-400/15 blur-3xl sm:h-[520px] sm:w-[520px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
            </div>

            <div className="px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-12 lg:py-20">
                <div className="mx-auto w-full max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur sm:rounded-3xl sm:p-8 md:p-10 lg:p-12">
                    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,220px)_1fr] md:gap-10">
                        <div className="flex justify-center md:justify-start">
                            <Image
                                src="/images/me.png"
                                alt="Kent John Brian C. Flores"
                                width={220}
                                height={220}
                                className="h-auto w-40 rounded-2xl border border-white/10 object-cover sm:w-48 md:w-[220px] md:rounded-3xl"
                            />
                        </div>

                        <div className="space-y-5 sm:space-y-6">
                            <div>
                                <h1 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                                    Kent John Brian C. Flores
                                </h1>
                                <p className="mt-2 text-sm text-zinc-300 sm:text-base">📍 Cebu, Philippines</p>
                            </div>

                            <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">
                                I’m a <span className="font-semibold text-white">Backend Developer</span> who builds reliable APIs and
                                scalable server-side systems. I also enjoy crafting clean, responsive UIs as a{' '}
                                <span className="font-semibold text-white">Frontend Developer</span>, and I can deliver end-to-end solutions
                                including <span className="font-semibold text-white">Mobile Development</span> and{' '}
                                <span className="font-semibold text-white">UI/UX Design</span>.
                            </p>

                            <div className="flex flex-col gap-3">
                                <div className="break-all text-sm text-zinc-200 sm:text-base">
                                    📧{' '}
                                    <a
                                        href="mailto:kentjohnbrianflores@gmail.com"
                                        className="text-white underline decoration-white/30 underline-offset-4 transition hover:text-zinc-200 hover:decoration-white/60"
                                    >
                                        kentjohnbrianflores@gmail.com
                                    </a>
                                </div>

                                <div className="flex gap-4 text-xl text-zinc-200 sm:text-2xl">
                                    <a
                                        href="https://github.com/Ikennot04"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                        className="transition hover:text-white"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/kent-john-brian-flores-934a66361"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        className="transition hover:text-white"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/kentjohnbrian.flores.3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="transition hover:text-white"
                                    >
                                        <FaFacebook />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
