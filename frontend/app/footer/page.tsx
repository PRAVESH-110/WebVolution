import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full border-t border-black/10 bg-white/5 backdrop-blur-md pt-16 pb-8 mt-auto dark:border-white/10 dark:bg-black/20">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tight  bg-gradient-to-br from-[#7051c3] to-[#ff70cc] bg-clip-text text-transparent decoration-0 mb-4 block">
                            checkmysite
                        </Link>
                        <p className="text-sm text-[var(--foreground)] opacity-60 leading-relaxed mb-6 dark:text-gray-400">
                            Deterministic conversion scoring for modern SaaS. Stop guessing and start converting.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-black/5 border border-black/10 hover:bg-black/10 transition-colors cursor-pointer dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10" />
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-semibold text-[var(--foreground)] mb-6 dark:text-white">Product</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/features" className="text-sm text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity dark:text-gray-400 hover:text-[#FF6B6B]">Features</Link></li>
                            <li><Link href="/pricing" className="text-sm text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity dark:text-gray-400 hover:text-[#FF6B6B]">Pricing</Link></li>
                            <li><Link href="/get-started" className="text-sm text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity dark:text-gray-400 hover:text-[#FF6B6B]">Get Score</Link></li>
                            <li><Link href="/docs" className="text-sm text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity dark:text-gray-400 hover:text-[#FF6B6B]">Documentation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[var(--foreground)] mb-6 dark:text-white">Company</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/about" className="text-sm text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity dark:text-gray-400 hover:text-[#FF6B6B]">About Us</Link></li>
                            <li><Link href="/contact" className="text-sm text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity dark:text-gray-400 hover:text-[#FF6B6B]">Contact</Link></li>
                            <li><Link href="/blog" className="text-sm text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity dark:text-gray-400 hover:text-[#FF6B6B]">Blog</Link></li>
                            <li><Link href="/careers" className="text-sm text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity dark:text-gray-400 hover:text-[#FF6B6B]">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[var(--foreground)] mb-6 dark:text-white">Legal</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/privacy" className="text-sm text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity dark:text-gray-400 hover:text-[#FF6B6B]">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-sm text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity dark:text-gray-400 hover:text-[#FF6B6B]">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="text-sm text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity dark:text-gray-400 hover:text-[#FF6B6B]">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 dark:border-white/5">
                    <p className="text-xs text-[var(--foreground)] opacity-40 dark:text-gray-500">
                        © {new Date().getFullYear()} Webolution Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-xs text-[var(--foreground)] opacity-40 flex items-center gap-2 dark:text-gray-500">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            All Systems Operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}