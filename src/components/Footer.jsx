

const Footer = () => {
    return (
        <footer className="bg-zinc-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Portofolio</h1>
                        <p className="text-sm opacity-70 leading-relaxed">Website portfolio yang menampilkan proyek, skill, dan pengalaman saya sebagai seorang Web Developer & UI/UX Designer</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Menu</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#hero" className="hover:text-teal-400">Beranda</a>
                            </li>
                            <li>
                                <a href="#tentang" className="hover:text-teal-400">Tentang</a>
                            </li>
                            <li>
                                <a href="#proyek" className="hover:text-teal-400">Proyek</a>
                            </li>
                            <li>
                                <a href="#sertifikat" className="hover:text-teal-400">Sertifikat</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Kontak</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <i className="ri-whatsapp-line text-xl"></i>
                                <a
                                    href="https://wa.me/6285643735039"
                                    target="_blank"
                                    className="hover:text-teal-400"
                                >
                                    WhatsApp
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="ri-mail-line text-xl"></i>
                                <a
                                    href="mailto:muhammadkusprasetyo@gmail.com"
                                    className="hover:text-teal-400"
                                >
                                    muhammadkusprasetyo@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="ri-github-line text-xl"></i>
                                <a
                                    href="https://github.com/muhammad-kus-prasetyo?tab=repositories"
                                    target="_blank"
                                    className="hover:text-teal-400"
                                >
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white my-8"></div>

                <div className="text-center text-sm opacity-70">
                    © {new Date().getFullYear()} Portofolio. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;  