import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Details() {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-3xl" />
                <div className="absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full bg-rose-400/15 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
            </div>

            <div className="px-6 py-14 md:px-12 md:py-20">
                <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-start">
                        <div className="flex justify-center md:justify-start">
                            <Image
                                src="/images/me.png"
                                alt="Kent John Brian C. Flores"
                                width={220}
                                height={220}
                                className="rounded-3xl object-cover border border-white/10"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                                    Kent John Brian C. Flores
                                </h1>
                                <p className="mt-2 text-zinc-300">📍 Cebu, Philippines</p>
                            </div>

                            <p className="text-zinc-200 leading-relaxed">
                                I’m a <span className="font-semibold text-white">Backend Developer</span> who builds reliable APIs and
                                scalable server-side systems. I also enjoy crafting clean, responsive UIs as a{' '}
                                <span className="font-semibold text-white">Frontend Developer</span>, and I can deliver end-to-end solutions
                                including <span className="font-semibold text-white">Mobile Development</span> and{' '}
                                <span className="font-semibold text-white">UI/UX Design</span>.
                            </p>

                            <div className="flex flex-col gap-3">
                                <div className="text-zinc-200">
                                    📧{' '}
                                    <a
                                        href="mailto:kentjohnbrianflores@gmail.com"
                                        className="text-white hover:text-zinc-200 underline underline-offset-4 decoration-white/30 hover:decoration-white/60 transition"
                                    >
                                        kentjohnbrianflores@gmail.com
                                    </a>
                                </div>

                                <div className="flex gap-4 text-2xl text-zinc-200">
                                    <a href="https://github.com/Ikennot04" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition">
                                        <FaGithub />
                                    </a>
                                    <a href="https://www.linkedin.com/in/kent-john-brian-flores-934a66361" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://www.facebook.com/kentjohnbrian.flores.3" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
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
