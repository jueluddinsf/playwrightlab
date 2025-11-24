import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-playwright to-orange rounded-md" />
                    <span className="font-bold text-white font-display">PlaywrightLab LLC</span>
                </div>

                <div className="flex items-center gap-8 text-sm text-zinc-500">
                    <Link href="#audit" className="hover:text-white transition-colors">Audit</Link>
                    <Link href="#training" className="hover:text-white transition-colors">Training</Link>
                    <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
                </div>

                <div className="text-xs text-zinc-600">
                    © {new Date().getFullYear()} PlaywrightLab LLC. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
