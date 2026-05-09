'use client';

import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Details() {
    interface Tech {
        label: string;
    }

    const [isLightMode, setIsLightMode] = useState(false);
    const [isTechModalOpen, setIsTechModalOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const reverseAnimationRef = useRef<number | null>(null);
    const forwardStopHandlerRef = useRef<(() => void) | null>(null);
    const reverseStopHandlerRef = useRef<(() => void) | null>(null);

    const techData: Record<'frontend' | 'backend' | 'mobile' | 'versionControl', Tech[]> = {
        frontend: [
            { label: 'Next.js' },
            { label: 'React.js' },
            { label: 'HTML5' },
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
            { label: 'Git' },
            { label: 'GitHub' },
        ],
    };

    const techSectionLabels: Record<keyof typeof techData, string> = {
        frontend: 'Front-End',
        backend: 'Back-End',
        mobile: 'Mobile',
        versionControl: 'Version Control',
    };

    const experienceData = [
        { year: '2026', title: 'BS Computer Science', subtitle: 'Academic Milestone' },
        { year: '2025', title: 'TOTO CAMPANER', subtitle: 'OJT / Intern' },
        { year: '2022', title: 'Hello World', subtitle: 'Wrote my first line of code' },
    ];

    const stopReverseAnimation = () => {
        if (reverseAnimationRef.current !== null) {
            cancelAnimationFrame(reverseAnimationRef.current);
            reverseAnimationRef.current = null;
        }
    };

    const clearForwardStopHandler = () => {
        const video = videoRef.current;
        if (video && forwardStopHandlerRef.current) {
            video.removeEventListener('timeupdate', forwardStopHandlerRef.current);
            forwardStopHandlerRef.current = null;
        }
    };

    const clearReverseStopHandler = () => {
        const video = videoRef.current;
        if (video && reverseStopHandlerRef.current) {
            video.removeEventListener('timeupdate', reverseStopHandlerRef.current);
            reverseStopHandlerRef.current = null;
        }
    };

    const canUseNativeReversePlayback = (video: HTMLVideoElement) => {
        const originalPlaybackRate = video.playbackRate;
        try {
            video.playbackRate = -1;
            const supportsReversePlayback = video.playbackRate < 0;
            video.playbackRate = originalPlaybackRate;
            return supportsReversePlayback;
        } catch {
            video.playbackRate = originalPlaybackRate;
            return false;
        }
    };

    const playForwardToSevenSeconds = () => {
        const video = videoRef.current;
        if (!video) return;

        stopReverseAnimation();
        clearForwardStopHandler();
        clearReverseStopHandler();
        video.playbackRate = 1;
        void video.play();

        const stopAtSeven = () => {
            if (video.currentTime >= 7) {
                video.currentTime = 7;
                video.pause();
                clearForwardStopHandler();
            }
        };

        forwardStopHandlerRef.current = stopAtSeven;
        video.addEventListener('timeupdate', stopAtSeven);
    };

    const playReverseToStart = () => {
        const video = videoRef.current;
        if (!video) return;

        video.pause();
        stopReverseAnimation();
        clearForwardStopHandler();
        clearReverseStopHandler();

        if (canUseNativeReversePlayback(video)) {
            video.playbackRate = -1;
            void video.play();

            const stopAtZero = () => {
                if (video.currentTime <= 0.02) {
                    video.currentTime = 0;
                    video.pause();
                    video.playbackRate = 1;
                    clearReverseStopHandler();
                }
            };

            reverseStopHandlerRef.current = stopAtZero;
            video.addEventListener('timeupdate', stopAtZero);
            return;
        }

        let lastStepTimestamp = performance.now();
        const reverseStep = () => {
            const currentVideo = videoRef.current;
            if (!currentVideo) return;

            if (currentVideo.currentTime <= 0) {
                currentVideo.currentTime = 0;
                currentVideo.pause();
                currentVideo.playbackRate = 1;
                stopReverseAnimation();
                return;
            }

            const now = performance.now();
            const elapsedSeconds = (now - lastStepTimestamp) / 1000;
            lastStepTimestamp = now;

            const nextTime = Math.max(0, currentVideo.currentTime - elapsedSeconds);
            const handleSeeked = () => {
                currentVideo.removeEventListener('seeked', handleSeeked);
                reverseAnimationRef.current = requestAnimationFrame(reverseStep);
            };

            currentVideo.addEventListener('seeked', handleSeeked);
            currentVideo.currentTime = nextTime;
        };

        reverseStep();
    };

    const toggleMode = () => {
        if (isLightMode) {
            setIsLightMode(false);
            playReverseToStart();
        } else {
            setIsLightMode(true);
            playForwardToSevenSeconds();
        }
    };

    const renderTechLine = (labels: string[]) => (
        <div
            className={`mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 border-b-[0.5px] pb-3 ${
                isLightMode ? 'border-zinc-300' : 'border-white/15'
            }`}
        >
            {labels.map((label) => (
                <span key={label} className={`text-sm ${isLightMode ? 'text-zinc-800' : 'text-zinc-100'}`}>
                    {label}
                </span>
            ))}
        </div>
    );

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.currentTime = 0;

        return () => {
            stopReverseAnimation();
            clearForwardStopHandler();
            clearReverseStopHandler();
        };
    }, []);

    return (
        <div
            className={`relative overflow-hidden transition-colors duration-300 ${
                isLightMode ? 'bg-zinc-100' : ''
            }`}
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div
                    className={`absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl ${
                        isLightMode ? 'bg-fuchsia-300/30' : 'bg-fuchsia-500/20'
                    }`}
                />
                <div
                    className={`absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full blur-3xl ${
                        isLightMode ? 'bg-cyan-300/35' : 'bg-cyan-500/20'
                    }`}
                />
                <div
                    className={`absolute inset-0 ${
                        isLightMode
                            ? 'bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.05),transparent_55%)]'
                            : 'bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]'
                    }`}
                />
            </div>

            <section className="px-6 pt-0 pb-14 md:px-12 md:pt-0 md:pb-20">
                <div className="mx-auto max-w-6xl">
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={toggleMode}
                            className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                                isLightMode
                                    ? 'border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100'
                                    : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                            }`}
                        >
                            {isLightMode ? 'Night Mode' : 'Light Mode'}
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-10 items-center">
                        <div>
                           
                            <div className="mt-0 flex items-start gap-4">
                                <video
                                    ref={videoRef}
                                    src="/images/Profile.mp4"
                                    muted
                                    playsInline
                                    preload="auto"
                                    className={`h-[96px] w-[99px] md:h-[165px] md:w-[132px] rounded-2xl object-cover border ${
                                        isLightMode ? 'border-zinc-300' : 'border-white/10'
                                    }`}
                                />
                                <div>
                                    <h1
                                        className={`whitespace-nowrap text-2xl md:text-6xl font-semibold tracking-tight ${
                                            isLightMode ? 'text-zinc-900' : 'text-white'
                                        }`}
                                    >
                                        Kent John Brian C. Flores
                                    </h1>
                                    
                                    <div className={`mt-2 text-sm ${isLightMode ? 'text-zinc-700' : 'text-zinc-300'}`}>
                                    <span
                                   
                                >
                                    📍 Cebu, Philippines
                                </span>
                                    </div>
                                    <div className="mt-4 flex items-center gap-3">
                                <a
                                    href="https://github.com/Ikennot04"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                                        isLightMode
                                            ? 'border-zinc-300 bg-zinc-100 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-200'
                                            : 'border-white/10 bg-white/5 text-zinc-200 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    <FaGithub className="text-lg" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kent-john-brian-flores-934a66361"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                                        isLightMode
                                            ? 'border-zinc-300 bg-zinc-100 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-200'
                                            : 'border-white/10 bg-white/5 text-zinc-200 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    <FaLinkedin className="text-lg" />
                                </a>
                                <a
                                    href="https://www.facebook.com/kentjohnbrian.flores.3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                                        isLightMode
                                            ? 'border-zinc-300 bg-zinc-100 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-200'
                                            : 'border-white/10 bg-white/5 text-zinc-200 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    <FaFacebook className="text-lg" />
                                </a>
                                <a
                                    href="mailto:kentjohnbrianflores@gmail.com"
                                    className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition ${
                                        isLightMode
                                            ? 'border-zinc-300 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-200/50'
                                            : 'border-white/10 text-zinc-200 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    Email Me <FiArrowUpRight />
                                </a>
                                    </div>
                                </div>
                            </div>
                            <p
                                className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${
                                    isLightMode ? 'text-zinc-700' : 'text-zinc-300'
                                }`}
                            >
                                I build reliable APIs, clean dashboards, and end-to-end apps. I focus on performance, maintainability,
                                and user experience—from backend architecture to polished UI.
                            </p>
                            <div className="mt-12 flex flex-row items-start gap-5">
                                <div
                                    className={`min-w-0 flex-1 rounded-2xl border-[0.5px] p-5 ${
                                        isLightMode ? 'border-zinc-300 bg-zinc-100' : 'border-white/10 bg-zinc-900/60'
                                    }`}
                                >
                                    <div className="mb-4 flex items-center justify-between gap-3">
                                        <h3 className={`text-lg font-semibold ${isLightMode ? 'text-zinc-900' : 'text-white'}`}>
                                            Tech Stack
                                        </h3>
                                        <button
                                            type="button"
                                            onClick={() => setIsTechModalOpen(true)}
                                            className={`text-xs font-semibold transition ${
                                                isLightMode ? 'text-zinc-900 hover:text-zinc-700' : 'text-zinc-100 hover:text-white'
                                            }`}
                                        >
                                            View All &gt;
                                        </button>
                                    </div>
                                    <div className="space-y-4">
                                        {(Object.keys(techData) as Array<keyof typeof techData>).map((sectionKey) => (
                                            <div key={sectionKey}>
                                                <div className={`text-lg font-semibold ${isLightMode ? 'text-zinc-900' : 'text-white'}`}>
                                                    {techSectionLabels[sectionKey]}
                                                </div>
                                                {renderTechLine(techData[sectionKey].map((tech) => tech.label))}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div
                                    className={`min-w-0 flex-1 rounded-2xl border-[0.5px] p-5 ${
                                        isLightMode ? 'border-zinc-300 bg-zinc-100' : 'border-white/10 bg-zinc-900/60'
                                    }`}
                                >
                                    <h3 className={`mb-4 text-lg font-semibold ${isLightMode ? 'text-zinc-900' : 'text-white'}`}>
                                        Experience
                                    </h3>
                                    <div className="relative pl-5">
                                        <div
                                            className={`absolute left-[7px] top-1 bottom-1 w-px ${
                                                isLightMode ? 'bg-zinc-300' : 'bg-white/20'
                                            }`}
                                        />
                                        <div className="space-y-5">
                                            {experienceData.map((item, index) => (
                                                <div key={`${item.year}-${item.title}`} className="relative">
                                                    <span
                                                        className={`absolute -left-5 top-1.5 h-3 w-3 border ${
                                                            index === 0
                                                                ? isLightMode
                                                                    ? 'border-zinc-700 bg-zinc-900'
                                                                    : 'border-zinc-100 bg-white'
                                                                : isLightMode
                                                                  ? 'border-zinc-400 bg-zinc-100'
                                                                  : 'border-zinc-400 bg-transparent'
                                                        }`}
                                                    />
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div>
                                                            <div
                                                                className={`text-xl font-semibold ${
                                                                    index === 0
                                                                        ? isLightMode
                                                                            ? 'text-zinc-950'
                                                                            : 'text-white'
                                                                        : isLightMode
                                                                          ? 'text-zinc-800'
                                                                          : 'text-zinc-200'
                                                                }`}
                                                            >
                                                                {item.title}
                                                            </div>
                                                            <div
                                                                className={`text-sm ${
                                                                    index === 0
                                                                        ? isLightMode
                                                                            ? 'text-zinc-800'
                                                                            : 'text-zinc-100'
                                                                        : isLightMode
                                                                          ? 'text-zinc-600'
                                                                          : 'text-zinc-300'
                                                                }`}
                                                            >
                                                                {item.subtitle}
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={`pt-1 text-xs font-semibold ${
                                                                index === 0
                                                                    ? isLightMode
                                                                        ? 'text-zinc-800'
                                                                        : 'text-zinc-100'
                                                                    : isLightMode
                                                                      ? 'text-zinc-600'
                                                                      : 'text-zinc-300'
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
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {isTechModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                    <div className={`w-full max-w-xl rounded-2xl border-[0.5px] p-5 shadow-2xl ${isLightMode ? 'border-zinc-300 bg-zinc-100' : 'border-white/10 bg-zinc-900'}`}>
                        <div className="mb-5 flex items-center justify-between">
                            <h3 className={`text-lg font-semibold ${isLightMode ? 'text-zinc-900' : 'text-white'}`}>
                                Tech Stack
                            </h3>
                            <button
                                type="button"
                                onClick={() => setIsTechModalOpen(false)}
                                className={`rounded-lg border px-3 py-1 text-lg font-semibold leading-none transition ${
                                    isLightMode
                                        ? 'border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100'
                                        : 'border-white/20 bg-white/5 text-white hover:bg-white/10'
                                }`}
                                aria-label="Close tech stack modal"
                            >
                                X
                            </button>
                        </div>
                        <div className="space-y-4">
                            {(Object.keys(techData) as Array<keyof typeof techData>).map((sectionKey) => (
                                <div key={sectionKey}>
                                    <div className={`text-lg font-semibold ${isLightMode ? 'text-zinc-900' : 'text-white'}`}>
                                        {techSectionLabels[sectionKey]}
                                    </div>
                                    {renderTechLine(techData[sectionKey].map((tech) => tech.label))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
