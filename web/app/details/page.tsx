import Image from 'next/image';
import Navbar from '../components/Navbar';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Details() {
    return (
        <div className="flex flex-row min-h-screen w-full bg-gradient-to-r from-[#F3EDE7] to-[#E9E4E1] font-sans">
            <Navbar />
            <main className="flex-1 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 z-0">
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        className="w-full h-full"
                    >
                        <polygon points="0,0 65,0 35,100 0,100" fill="#CDBDB2" />
                        <polygon points="65,0 100,0 100,100 35,100" fill="#F5F3F1" />
                    </svg>
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-screen px-6 md:px-12">
                    {/* Top border */}
                    <div className="w-full border-t border-gray-300 mb-8" />

                    <div className="flex flex-col md:flex-row w-full max-w-6xl items-start gap-10 bg-white/90 backdrop-blur-sm p-10 md:p-12 rounded-3xl shadow-xl">
                        {/* Profile image */}
                        <div className="flex-shrink-0 self-center">
                            <Image
                                src="/images/me.png"
                                alt="Kent John Brian C. Flores"
                                width={200}
                                height={200}
                                className="rounded-3xl object-cover border-4 border-gray-200 shadow-md"
                            />
                        </div>

                        {/* Info section */}
                        <div className="flex flex-col text-gray-800 space-y-6 max-w-2xl">
                            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                                Kent John Brian C. Flores
                            </h1>
                            <p className="text-lg text-gray-600">📍 Cebu, Philippines</p>
                            <p className="text-base text-gray-700 leading-relaxed">
                                I am a <span className="font-semibold text-gray-900">Backend Developer</span> with hands-on experience building reliable APIs, working with databases, and maintaining scalable server-side systems.
                                <br /><br />
                                I also enjoy creating clean, responsive interfaces as a <span className="font-semibold text-gray-900">Frontend Developer</span> and delivering complete mobile solutions. My skills also extend into <span className="font-semibold text-gray-900">UI/UX Design</span>, focusing on simplicity and usability.
                            </p>

                            {/* Contact and socials */}
                            <div className="space-y-4">
                                <p className="text-base">
                                    📧 <a href="mailto:kentjohnbrianflores@gmail.com" className="text-blue-600 hover:underline">kentjohnbrianflores@gmail.com</a>
                                </p>
                                <div className="flex gap-6 text-xl text-gray-700">
                                    <a href="https://github.com/Ikennot04" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                                        <FaGithub />
                                    </a>
                                    <a href="https://www.linkedin.com/in/kent-john-brian-flores-934a66361" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://www.facebook.com/kentjohnbrian.flores.3" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                                        <FaFacebook />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom border */}
                    <div className="w-full border-t border-gray-300 mt-8" />
                </div>
            </main>
        </div>
    );
}
