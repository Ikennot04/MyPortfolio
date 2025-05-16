import Image from 'next/image';
import Navbar from '../app/components/Navbar';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Details() {
    return (
        <div className="flex flex-row min-h-screen w-full overflow-hidden font-sans bg-gray-100">
            <Navbar />
            <main className="flex-1 relative">
                {/* Diagonal background */}
                <div className="absolute inset-0 z-0">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                        <polygon points="0,0 65,0 35,100 0,100" fill="#9C8578" />
                        <polygon points="65,0 100,0 100,100 35,100" fill="#D9D9D9" />
                    </svg>
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-screen px-8">
                    {/* Top line */}
                    <div className="w-full border-t border-black mb-8" />

                    <div className="flex flex-row w-full max-w-6xl items-start gap-12 bg-white p-10 rounded-2xl shadow-2xl">
                        {/* Profile image */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/me.png"
                                alt="Kent John Brian C. Flores"
                                width={200}
                                height={200}
                                className="rounded-2xl object-cover border-4 border-gray-300"
                            />
                        </div>

                        {/* Info box */}
                        <div className="flex flex-col text-gray-800 space-y-4">
                            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                                Kent John Brian C. Flores
                            </h1>
                            <p className="text-2xl font-medium text-gray-700">📍 Cebu, Philippines</p>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                I’m a passionate <span className="font-semibold">Backend Developer</span> with solid experience
                                in designing APIs, managing databases, and building reliable server-side applications. <br />
                                I also enjoy working on <span className="font-semibold">Frontend</span> projects, crafting beautiful and user-friendly interfaces, and I’m capable of delivering end-to-end solutions as a
                                <span className="font-semibold"> Mobile Developer</span> or <span className="font-semibold">UI/UX Designer</span>.
                            </p>

                            {/* Contact and Socials */}
                            <div className="mt-4 space-y-3">
                                <p className="text-xl">📧 <a href="mailto:kentjohnbrianflores@gmail.com" className="text-blue-600 hover:underline">kentjohnbrianflores@gmail.com</a></p>
                                
                                {/* Social Icons */}
                                <div className="flex items-center gap-6 mt-3 text-3xl text-gray-700">
                                    <a href="https://github.com/Ikennot04" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-black">
                                        <FaGithub />
                                    </a>
                                    <a href="https://www.linkedin.com/in/kent-john-brian-flores-934a66361" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700">
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://www.facebook.com/kentjohnbrian.flores.3" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600">
                                        <FaFacebook />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom line */}
                    <div className="w-full border-t border-black mt-8" />
                </div>
            </main>
        </div>
    );
}
