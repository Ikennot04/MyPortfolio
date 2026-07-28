import Link from 'next/link';

export default function AutomationPage() {
    return (
        <section className="flex min-h-[calc(100vh-3.5rem)] items-center px-4 py-10 sm:px-6 sm:py-14 md:min-h-screen md:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-2xl text-center">
                <h1 className="text-xl font-semibold text-white sm:text-2xl">Automation</h1>
                <p className="mt-3 text-sm text-zinc-400 sm:mt-4 sm:text-base">
                    This page is not linked in the site navigation.
                </p>
                <Link
                    href="/"
                    className="mt-6 inline-block text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                    Back to home
                </Link>
            </div>
        </section>
    );
}
