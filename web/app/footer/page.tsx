import Link from 'next/link';

export default function FooterPage() {
    return (
        <section className="px-6 py-14 md:px-12 md:py-20">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-2xl font-semibold text-white">Footer</h1>
                <p className="mt-4 text-zinc-400">Placeholder route.</p>
                <Link href="/" className="mt-6 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300">
                    Back to home
                </Link>
            </div>
        </section>
    );
}
