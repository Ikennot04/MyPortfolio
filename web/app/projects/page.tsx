"use client";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Projects() {
    const sectionsRef = {
        kalaging: useRef(null),
        betgame: useRef(null),
        albertos: useRef(null),
        onlyfriends: useRef(null),
    };

    const scrollTo = (sectionId) => {
        sectionsRef[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
    };

    const projects = [
        {
            id: "kalaging",
            name: "KALAGINGGAMEFARM",
            description:
                "A gamefowl management system with three roles: Admin, Handler, and Customer. It helps organize gamefowl data, manage users, and streamline farm operations.",
            roles: ["Admin", "Handler", "Customer"],
            img: "/images/kalaginggamefarm.png",
            colors: { from: "#1f2937", to: "#374151" },
        },
        {
            id: "betgame",
            name: "BETGAME",
            description:
                "A gambling platform offering multiple games where users can play and earn. It emphasizes interactive gaming and user engagement.",
            roles: ["Player", "Game Manager"],
            img: "/images/betgame.png",
            colors: { from: "#111827", to: "#1f2937" },
        },
        {
            id: "albertos",
            name: "ALBERTO'S PIZZA SHOP",
            description:
                "A POS system built for cashiers and the owner. It allows efficient tracking of sales and inventory in a streamlined, user-friendly interface.",
            roles: ["Owner", "Cashier"],
            img: "/images/albertos.png",
            colors: { from: "#1e3a8a", to: "#3b82f6" },
        },
        {
            id: "onlyfriends",
            name: "ONLYFRIENDS",
            description:
                "A messaging app where users can chat with friends and join a global chat to connect with new people. It supports private messaging and real-time conversations.",
            roles: ["User"],
            img: "/images/onlyfriends.png",
            colors: { from: "#312e81", to: "#4f46e5" },
        },
    ];

    return (
        <div className="flex flex-row w-full overflow-hidden relative">
            <Navbar />
            <main className="flex-1 flex flex-col scroll-smooth overflow-y-auto pb-20">
                {projects.map((project) => (
                    <section
                        key={project.id}
                        id={project.id}
                        ref={sectionsRef[project.id]}
                        className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[${project.colors.from}] to-[${project.colors.to}] text-white px-6 py-12`}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold tracking-wider mb-10 text-center">
                            {project.name}
                        </h1>
                        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
                            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-xl overflow-hidden shadow-xl bg-white">
                                <Image
                                    src={project.img}
                                    alt={project.name}
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="text-center md:text-left max-w-xl">
                                <p className="text-lg font-semibold italic mb-3">
                                    Roles: {project.roles.join(", ")}
                                </p>
                                <p className="text-base md:text-lg">{project.description}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </main>

            {/* BOTTOM NAVIGATION (Fixed) */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-3 flex justify-around items-center z-50 shadow-inner">
                <button
                    onClick={() => scrollTo("kalaging")}
                    className="text-sm md:text-lg hover:underline font-semibold"
                >
                    Kalaging
                </button>
                <button
                    onClick={() => scrollTo("betgame")}
                    className="text-sm md:text-lg hover:underline font-semibold"
                >
                    Betgame
                </button>
                <button
                    onClick={() => scrollTo("albertos")}
                    className="text-sm md:text-lg hover:underline font-semibold"
                >
                    Albertos
                </button>
                <button
                    onClick={() => scrollTo("onlyfriends")}
                    className="text-sm md:text-lg hover:underline font-semibold"
                >
                    OnlyFriends
                </button>
            </div>
        </div>
    );
}
