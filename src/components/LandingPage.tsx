"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Award, Layers, Wrench, PlayCircle, MessageCircle, Droplets, Settings, FlaskConical, ArrowRight, X, ChevronRight, Filter, ShieldCheck, Truck, Star, Quote, ChevronDown, MapPin, Phone, Mail, Send, ExternalLink, FileText, Megaphone } from 'lucide-react';

// --- Header Component ---
const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between relative">
                {/* Logo */}
                <div className="flex items-center lg:flex-1">
                    <div className="relative overflow-visible">
                        <Image
                            src="/images/Logo.webp"
                            alt="Comercial Proalv Logo"
                            width={320}
                            height={64}
                            className="h-10 md:h-16 w-auto object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium absolute left-1/2 -translate-x-1/2">
                    <a href="#" className="hover:text-[#5a1a1a] transition-colors">Inicio</a>
                    <a href="#" className="hover:text-[#5a1a1a] transition-colors">Categorías</a>
                    <a href="#" className="hover:text-[#5a1a1a] transition-colors">Ubicaciones</a>
                    <a href="#" className="hover:text-[#5a1a1a] transition-colors">Contacto</a>
                </nav>

                {/* CTA Button & Mobile Toggle */}
                <div className="flex items-center justify-between flex-1 lg:flex-1 lg:justify-end gap-2 sm:gap-4 ml-4 lg:ml-0">
                    <div className="flex-1 flex justify-center lg:block lg:flex-none">
                        <button className="bg-[#5a1a1a] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-lg hover:bg-[#4a1515] transition-all transform hover:scale-105 whitespace-nowrap">
                            Contactanos
                        </button>
                    </div>

                    <button
                        className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-8 h-8" /> : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 animate-slide-down">
                    <nav className="flex flex-col p-4 space-y-4">
                        <a href="#" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-gray-700 font-bold hover:bg-gray-50 rounded-xl">Inicio</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-gray-700 font-bold hover:bg-gray-50 rounded-xl">Categorías</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-gray-700 font-bold hover:bg-gray-50 rounded-xl">Ubicaciones</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-gray-700 font-bold hover:bg-gray-50 rounded-xl">Contacto</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

// --- Hero Component ---
const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900 md:bg-gray-50">
            {/* Background Image / Accent */}
            <div className="absolute inset-0 z-0">
                {/* Mobile Background Image */}
                <div className="md:hidden relative w-full h-full">
                    <Image
                        src="/images/hero.webp"
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                {/* Desktop Accent */}
                <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-[#5a1a1a]/5 -skew-x-12 transform translate-x-24"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full pt-20 md:pt-0">
                {/* Text Content */}
                <div className="space-y-6 md:space-y-8 animate-fade-in-up">
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-1.5 bg-[#f5e6b3] text-[#5a1a1a] rounded-full text-xs sm:text-sm font-black tracking-widest uppercase">
                            Distribuidor Autorizado
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white md:text-[#5a1a1a] leading-tight">
                            Maquinarias de limpieza en <span className="text-[#f5e6b3] md:text-[#5a1a1a]">Loja y Cuenca</span>
                        </h1>

                        {/* Desktop Description */}
                        <p className="hidden md:block text-lg md:xl text-gray-600 max-w-xl leading-relaxed font-medium">
                            ¿Buscas dónde comprar maquinaria de limpieza profesional con respaldo real? En Comercial Proalv somos líderes en el Austro con 18 años de trayectoria. Equipamos tu hogar o industria con aspiradoras, hidrolavadoras y sistemas de limpieza de alta gama, garantizando repuestos y servicio técnico especializado en un solo lugar.
                        </p>

                        {/* Mobile Description & CTA */}
                        <div className="md:hidden space-y-6">
                            <p className="text-lg text-white font-bold leading-relaxed shadow-text">
                                ¿Buscas dónde comprar maquinaria de limpieza profesional con respaldo real?
                            </p>
                            <button
                                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center gap-2 text-white font-bold text-sm bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                            >
                                Seguir leyendo <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="bg-[#f5e6b3] md:bg-[#5a1a1a] text-[#5a1a1a] md:text-white px-8 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-[#4a1515] md:hover:bg-[#4a1515] hover:text-white transition-all transform hover:-translate-y-1">
                            Ver Catálogo
                        </button>
                        <button className="bg-white/10 backdrop-blur-md md:bg-white text-white md:text-[#5a1a1a] border-2 border-white/20 md:border-[#5a1a1a] px-8 py-5 rounded-2xl font-black text-lg hover:bg-white/20 md:hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                            Sucursal Loja
                        </button>
                    </div>
                </div>

                {/* Hero Image (Desktop Only) */}
                <div className="hidden lg:block relative animate-fade-in group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#5a1a1a]/20 to-transparent rounded-3xl -rotate-3 transform group-hover:rotate-0 transition-transform duration-500"></div>
                    <div className="relative h-[400px] md:h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            src="/images/hero.webp"
                            alt="Productos de limpieza y consumo masivo"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay Info */}
                        <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-100">
                            <p className="font-black text-2xl text-[#5a1a1a] mb-1">Marcas Líderes</p>
                            <p className="text-gray-600 font-bold">Respaldo técnico garantizado en todo el Austro.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- About Us (Trayectoria) Component ---
const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#5a1a1a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Text and Cards Content */}
                    <div className="space-y-12 order-2 lg:order-1 w-full min-w-0">
                        {/* Section Header */}
                        <div className="space-y-6 text-center lg:text-left max-w-full">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#5a1a1a] rounded-full text-sm font-bold tracking-wide shadow-sm border border-gray-100 mx-auto lg:mx-0">
                                <span className="w-2 h-2 rounded-full bg-[#5a1a1a] animate-pulse"></span>
                                Nuestra Trayectoria
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight break-words">
                                18 Años Liderando el Sector de Limpieza en <span className="text-[#5a1a1a] relative inline-block">
                                    Loja
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#f5e6b3] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                    </svg>
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left max-w-full overflow-hidden">
                                Comercial Proalv nació con la misión de profesionalizar el mantenimiento industrial y doméstico en el Austro ecuatoriano. Establecidos en la <strong>Avenida Universitaria 1560 y Tres Salinas en Loja</strong>, somos el punto de referencia donde comprar maquinaria de limpieza, asegurando respaldo técnico integral y comportándonos como "facilitadores de soluciones".
                            </p>
                        </div>

                        {/* Differentiators - Slider on Mobile, Stack on Desktop */}
                        <div className="w-full overflow-hidden">
                            <div className="flex overflow-x-auto lg:overflow-visible lg:flex-col gap-5 pb-4 lg:pb-0 snap-x lg:snap-none hide-scrollbar">
                                {/* Card 1 */}
                                <div className="flex-shrink-0 w-[85%] sm:w-[350px] lg:w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group snap-center flex">
                                    <div className="flex-shrink-0 mr-6">
                                        <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-[#5a1a1a] group-hover:bg-[#5a1a1a] group-hover:text-white transition-colors duration-300">
                                            <Award className="w-7 h-7" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#5a1a1a] transition-colors">18 Años de Confianza</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            Empresa consolidada brindando soluciones reales a hogares y empresas. Nuestra trayectoria es tu mejor garantía.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="flex-shrink-0 w-[85%] sm:w-[350px] lg:w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group snap-center flex">
                                    <div className="flex-shrink-0 mr-6">
                                        <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-[#5a1a1a] group-hover:bg-[#5a1a1a] group-hover:text-white transition-colors duration-300">
                                            <Layers className="w-7 h-7" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#5a1a1a] transition-colors">Catálogo Multisectorial</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            Atendemos el mercado doméstico e industrial: aspiradoras, hidrolavadoras, abrillantadoras, elevadores y químicos.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="flex-shrink-0 w-[85%] sm:w-[350px] lg:w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group snap-center flex">
                                    <div className="flex-shrink-0 mr-6">
                                        <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-[#5a1a1a] group-hover:bg-[#5a1a1a] group-hover:text-white transition-colors duration-300">
                                            <Wrench className="w-7 h-7" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#5a1a1a] transition-colors">Más que ventas, Soluciones</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            Vamos más allá del equipo con stock de repuestos para motores/bombas y un servicio técnico propio especializado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Collage Side (First on Mobile) */}
                    <div className="relative h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[700px] order-1 lg:order-2 w-full">
                        {/* Main Image */}
                        <div className="absolute top-0 right-0 w-[85%] h-[75%] rounded-3xl overflow-hidden shadow-2xl z-10 transform lg:translate-x-4 lg:-translate-y-4 hover:scale-[1.02] transition-transform duration-500">
                            <Image
                                src="/images/about-trayectoria.webp"
                                alt="Mantenimiento Industrial Avanzado"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[#5a1a1a]/10 mix-blend-multiply"></div>
                        </div>

                        {/* Secondary Image Overlap */}
                        <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-gray-50 transform lg:-translate-x-4 lg:translate-y-4 hover:scale-[1.05] transition-transform duration-500">
                            <Image
                                src="/images/about-solucion.webp"
                                alt="Maquinaria de limpieza profesional"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute top-1/2 left-8 lg:-left-12 transform -translate-y-1/2 z-30 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="text-[#5a1a1a] font-black text-5xl tracking-tighter">18</div>
                            <div className="text-sm font-bold text-gray-600 leading-tight uppercase tracking-wider">Años de<br />Experiencia</div>
                        </div>

                        {/* Graphic Element */}
                        <svg className="absolute -bottom-10 -right-10 w-40 h-40 text-[#f5e6b3] -z-10 animate-spin-slow" style={{ animationDuration: '20s' }} viewBox="0 0 100 100">
                            <path fill="currentColor" d="M43.1,-58.3C55.4,-48.9,64.6,-36.2,69.5,-21.8C74.3,-7.3,74.8,8.8,69.8,23.3C64.9,37.8,54.4,50.7,41.2,58.3C27.9,66,13.9,68.4,0,68.5C-13.9,68.5,-27.8,66.1,-40.5,58.1C-53.1,50.2,-64.5,36.8,-70.5,21.1C-76.5,5.4,-77.1,-12.6,-70.7,-27.8C-64.4,-43,-51.1,-55.4,-36.7,-63.3C-22.3,-71.2,-6.8,-74.6,3.9,-70.5C14.6,-66.4,29.3,-54.8,43.1,-58.3Z" transform="translate(50 50)" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Video Showcase Component ---
const VideoShowcase: React.FC = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-gray-50 rounded-[2.5rem] p-6 lg:p-12 shadow-[0_20px_50px_rgb(90,26,26,0.05)] border border-gray-100/50">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Video Side (Thumbnail/Trigger - Larger on Mobile) */}
                        <div
                            className="relative w-full aspect-[4/5] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl group order-1 lg:order-none bg-black cursor-pointer"
                            onClick={() => setIsVideoOpen(true)}
                        >
                            <video
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src="/video/video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            ></video>

                            {/* Vinotinto Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#5a1a1a]/40 to-transparent mix-blend-multiply opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                            {/* Play Button Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300 shadow-lg">
                                    <PlayCircle className="w-10 h-10 text-white fill-current opacity-90" />
                                </div>
                            </div>

                            {/* Hover info */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap">Click para ver en Grande</span>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-8 order-2 lg:order-none z-10">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5e6b3]/30 text-[#5a1a1a] rounded-full text-sm font-bold tracking-wide shadow-sm border border-[#f5e6b3]/50">
                                <span className="w-2 h-2 rounded-full bg-[#5a1a1a] animate-ping"></span>
                                Demostración en Vivo
                            </span>

                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                                Tecnología en Movimiento: <span className="text-[#5a1a1a]">Soluciones Reales en Limpieza y Mecánica</span>
                            </h3>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Vea nuestra maquinaria en acción. Desde hidrolavadoras industriales hasta sistemas de lavado a vapor para muebles y colchones. En <strong>Comercial Proalv</strong>, no solo vendemos equipos; demostramos su potencia, durabilidad y experticia técnica.
                            </p>

                            <div className="pt-4">
                                <button
                                    onClick={() => setIsVideoOpen(true)}
                                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-[#5a1a1a] rounded-xl hover:bg-[#4a1515] hover:shadow-[0_10px_20px_rgb(90,26,26,0.3)] hover:-translate-y-1 overflow-hidden overflow-x-hidden"
                                >
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                                    <span className="relative flex items-center gap-3">
                                        Ver Demostración
                                        <PlayCircle className="w-6 h-6" />
                                    </span>
                                </button>
                                <p className="text-sm text-gray-400 mt-4 ml-2 italic">Pulsa para abrir el reproductor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal / Lightbox */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-8">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/95 backdrop-blur-md animate-fade-in"
                        onClick={() => setIsVideoOpen(false)}
                    ></div>

                    {/* Modal Content - Fullscreen on mobile */}
                    <div className="relative w-full h-full md:h-auto md:max-w-6xl md:aspect-video md:rounded-3xl overflow-hidden shadow-2xl animate-scale-up bg-black flex items-center justify-center">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-6 right-6 z-30 w-12 h-12 bg-black/40 hover:bg-[#5a1a1a] text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <video
                            src="/video/video.mp4"
                            controls
                            autoPlay
                            className="w-full h-full md:h-full object-contain"
                        ></video>
                    </div>
                </div>
            )}
        </section>
    );
};

// --- Servicios Component ---
const Servicios: React.FC = () => {
    const servicios = [
        {
            icon: <Wrench className="w-8 h-8" />,
            title: "Servicio Técnico Especializado",
            description: "Garantizamos la vida útil de tu inversión. Mantenimiento y reparación de aspiradoras, hidrolavadoras, abrillantadoras y motores con stock real de repuestos.",
            link: "https://wa.me/593999999999?text=Hola,%20deseo%20consultar%20sobre%20su%20Servicio%20Técnico%20Especializado",
            image: "/images/service-tecnico.webp"
        },
        {
            icon: <Droplets className="w-8 h-8" />,
            title: "Lavado Profesional de Interiores",
            description: "Servicio de limpieza profunda para alfombras, muebles, colchones e interiores de vehículos utilizando máquinas a vapor de alta potencia.",
            link: "https://wa.me/593999999999?text=Hola,%20deseo%20consultar%20sobre%20el%20Lavado%20Profesional%20de%20Interiores",
            image: "/images/service-lavado.webp"
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: "Instalación de Estaciones",
            description: "Montaje de sistemas de monedero para lavado de autos, elevadores, pistolas de impacto y compresores industriales.",
            link: "https://wa.me/593999999999?text=Hola,%20deseo%20consultar%20sobre%20la%20Instalación%20de%20Estaciones",
            image: "/images/service-instalacion.webp"
        },
        {
            icon: <FlaskConical className="w-8 h-8" />,
            title: "Asesoría en Químicos",
            description: "Venta y guía de uso para desengrasantes, químicos ambientales y suministros de limpieza de alta rotación para un mantenimiento eficaz.",
            link: "https://wa.me/593999999999?text=Hola,%20deseo%20consultar%20sobre%20sus%20Suministros%20y%20Asesoría%20en%20Químicos",
            image: "/images/service-quimicos.webp"
        }
    ];

    return (
        <section className="py-24 bg-gray-50/50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 mb-4 bg-white border border-gray-200 text-[#5a1a1a] rounded-full text-sm font-bold tracking-wide shadow-sm">
                        Nuestros Servicios Profesionales
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                        Soluciones Integrales para tu <span className="text-[#5a1a1a]">Mantenimiento</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        En Comercial Proalv no solo vendemos máquinas; somos facilitadores de soluciones. Eliminamos la fricción de post-venta al ofrecer soporte técnico experto y suministros complementarios.
                    </p>
                </div>

                {/* Services Grid: 2 cols mobile, 4 cols desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {servicios.map((servicio, index) => (
                        <div key={index} className="bg-white rounded-3xl shadow-md border border-gray-100 hover:shadow-[0_20px_50px_rgb(90,26,26,0.1)] transition-all duration-500 group flex flex-col h-full hover:-translate-y-2 overflow-hidden">
                            <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-gray-200">
                                <Image
                                    src={servicio.image}
                                    alt={servicio.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-5 left-5 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#5a1a1a] shadow-xl group-hover:bg-[#5a1a1a] group-hover:text-white transition-all duration-300 z-10">
                                    {React.cloneElement(servicio.icon as React.ReactElement<any>, { className: 'w-7 h-7' })}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#5a1a1a] transition-colors leading-tight">
                                    {servicio.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-[0.95rem]">
                                    {servicio.description}
                                </p>
                                <a
                                    href={servicio.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-[#5a1a1a] font-black text-sm uppercase tracking-wider mt-auto group-hover:text-[#4a1515] group-hover:translate-x-1 transition-all"
                                >
                                    Consultar servicio
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Local Segmentation Note */}
                <div className="mt-16 text-center">
                    <div className="inline-block bg-[#f5e6b3]/20 border border-[#f5e6b3]/50 rounded-xl px-6 py-4">
                        <p className="text-sm font-medium text-[#5a1a1a] flex items-center justify-center gap-2 flex-wrap">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5a1a1a] opacity-40"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5a1a1a]"></span>
                            </span>
                            Servicios disponibles en nuestro centro técnico de Loja (Av. Universitaria 1560) y con cobertura logística para Cuenca.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

// --- Catalogo Component ---
const Catalogo: React.FC = () => {
    const categories = ['Todos', 'Maquinaria de Limpieza', 'Equipos de Mecánica', 'Químicos y Suministros', 'Servicios'];
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const productos = [
        {
            id: 1,
            category: 'Maquinaria de Limpieza',
            name: "Hidrolavadora Industrial v2",
            description: "Motor de inducción de alto rendimiento para uso continuo. Ideal para lavado de flota vehicular y fachadas industriales. Incluye bomba de triple pistón cerámico.",
            image: "/images/cat-hidrolavadora.webp",
            badge: "18 Años de Garantía",
            details: "15 HP / 3000 PSI, Soporte técnico en sitio y repuestos permanentes."
        },
        {
            id: 2,
            category: 'Maquinaria de Limpieza',
            name: "Aspiradora Polvo/Agua Premium",
            description: "Potencia de succión superior con filtrado HEPA. Tanque de acero inoxidable anticorrosivo y accesorios profesionales incluidos.",
            image: "/images/cat-aspiradora.webp",
            badge: "Entrega Loja/Cuenca",
            details: "Motor bypass silencioso, capacidad 80L, manguera reforzada 2.5m."
        },
        {
            id: 3,
            category: 'Equipos de Mecánica',
            name: "Elevador Automotriz de 2 Postes",
            description: "Sistema de elevación hidráulico con bloqueos automáticos de seguridad. Ideal para talleres de alta rotación.",
            image: "/images/cat-elevador.webp",
            badge: "18 Años de Garantía",
            details: "Capacidad 4 Toneladas, instalación profesional incluida, garantía estructural."
        },
        {
            id: 4,
            category: 'Químicos y Suministros',
            name: "Desengrasante Industrial Pro",
            description: "Fórmula concentrada para eliminar grasa pesada en motores y maquinaria. Biodegradable y seguro para el operador.",
            image: "/images/cat-desengrasante.webp",
            badge: "Stock Permanente",
            details: "Disponible en galón y caneca. Consultar asesoría técnica para diluciones."
        },
        {
            id: 5,
            category: 'Maquinaria de Limpieza',
            name: "Abrillantadora de Pisos Heavy Duty",
            description: "Máquina versátil para pulido, abrillantado y fregado de pisos duros. Caja de engranajes planetaria de larga duración.",
            image: "/images/cat-abrillantadora.webp",
            badge: "18 Años de Garantía",
            details: "Motor de 1.5 HP, discos de 17\", cable de alta visibilidad."
        },
        {
            id: 6,
            category: 'Equipos de Mecánica',
            name: "Compresor de Aire Industrial",
            description: "Compresión de alta eficiencia con tanque certificado. Bajo nivel de ruido y mantenimiento simplificado.",
            image: "/images/cat-compresor.webp",
            badge: "Servicio Técnico",
            details: "Cabezal de hierro fundido, 100-500 Litros, motor eléctrico blindado."
        },
        {
            id: 7,
            category: 'Servicios',
            name: "Repuestos para Motores/Bombas",
            description: "Contamos con el mayor stock de repuestos originales para maquinaria de limpieza en el Austro. Carbones, sellos, capacitores y más.",
            image: "/images/cat-repuestos.webp",
            badge: "Entrega Inmediata",
            details: "Importadores directos. Servicio de reparación Express disponible."
        }
    ];

    const filteredProducts = activeCategory === 'Todos'
        ? productos
        : productos.filter(p => p.category === activeCategory);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5a1a1a]/5 text-[#5a1a1a] rounded-full text-sm font-bold tracking-wide mb-6">
                            <Layers className="w-4 h-4" />
                            Catálogo Especializado
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Equipamiento que impulsa tu <span className="text-[#5a1a1a]">Productividad</span>
                        </h2>
                    </div>
                </div>

                {/* Filters Carousel for Mobile */}
                <div className="mb-12 overflow-x-auto pb-4 no-scrollbar">
                    <div className="flex gap-3 md:flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-[#5a1a1a] text-white border-[#5a1a1a] shadow-lg shadow-[#5a1a1a]/20'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#5a1a1a] hover:text-[#5a1a1a]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-white rounded-2xl md:rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            onClick={() => setSelectedProduct(product)}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Hover Overlay Info */}
                                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white">
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1">{product.category}</p>
                                    <div className="flex items-center gap-1 text-sm font-bold">
                                        Ver detalles <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Warranty Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-[#5a1a1a] px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-black uppercase tracking-tighter shadow-xl flex items-center gap-1.5">
                                        <ShieldCheck className="w-3 h-3" />
                                        {product.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 md:p-6 bg-white">
                                <h3 className="text-sm md:text-lg font-bold text-gray-900 group-hover:text-[#5a1a1a] transition-colors leading-tight mb-2">
                                    {product.name}
                                </h3>
                                <div className="flex items-center gap-2 text-[10px] md:text-sm text-gray-500 font-bold">
                                    <Truck className="w-4 h-4 text-[#5a1a1a]" />
                                    <span>Loja & Cuenca</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal / Lightbox */}
                {selectedProduct && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
                            onClick={() => setSelectedProduct(null)}
                        ></div>

                        {/* Modal Content - Full Height on Mobile */}
                        <div className="relative w-full max-w-4xl max-h-[95vh] md:max-h-none overflow-y-auto md:overflow-visible bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row animate-scale-up">
                            {/* Close Button - Fixed position on mobile */}
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/10 hover:bg-[#5a1a1a] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Image Side - Responsive Height */}
                            <div className="relative w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-auto overflow-hidden shrink-0">
                                <Image
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-6 left-6 md:top-8 md:left-8">
                                    <span className="bg-[#5a1a1a] text-white px-4 py-1.5 md:px-5 md:py-2 rounded-xl text-[10px] md:text-xs font-bold shadow-2xl flex items-center gap-2">
                                        <Award className="w-3 h-3 md:w-4 md:h-4" />
                                        Garantía Profesional
                                    </span>
                                </div>
                            </div>

                            {/* Text Side - Compact on Mobile */}
                            <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-14 flex flex-col justify-center">
                                <div className="mb-8">
                                    <span className="text-[#5a1a1a] font-black text-sm uppercase tracking-widest mb-4 block">
                                        {selectedProduct.category}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                                        {selectedProduct.name}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-8 border-l-4 border-[#5a1a1a]/20 pl-6 italic">
                                        {selectedProduct.description}
                                    </p>
                                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-10">
                                        <p className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                                            <Wrench className="w-4 h-4 text-[#5a1a1a]" />
                                            Detallado Técnico:
                                        </p>
                                        <p className="text-sm text-gray-600">{selectedProduct.details}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href={`https://wa.me/593999999999?text=Hola,%20deseo%20consultar%20disponibilidad%20de:%20${encodeURIComponent(selectedProduct.name)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-[#5a1a1a] text-white py-5 rounded-2xl font-black text-center shadow-xl hover:bg-[#4a1515] transition-all flex items-center justify-center gap-3 group"
                                    >
                                        Consultar Disponibilidad
                                        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    </a>
                                    <p className="text-center text-xs text-gray-400 font-bold uppercase tracking-widest">
                                        Atención Directa Loja y Cuenca
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

// --- Testimonios Component ---
const Testimonios: React.FC = () => {
    const testimonials = [
        {
            name: "Marco Jaramillo",
            location: "Loja",
            product: "Aspiradora Industrial - Servicio Técnico",
            text: "Excelente atención en el local de Loja. Compré una aspiradora industrial hace 2 años y el servicio técnico sigue siendo impecable.",
            rating: 5
        },
        {
            name: "Ing. Roberto Cueva",
            location: "Cuenca",
            product: "Línea de Hidrolavadoras Industriales",
            text: "Las hidrolavadoras de Proalv son de otro nivel. Las usamos en nuestra mecánica en Cuenca y la potencia es justo lo que necesitábamos.",
            rating: 5
        },
        {
            name: "Lucía Villamagua",
            location: "Loja",
            product: "Servicio de Lavado de Muebles a Vapor",
            text: "Increíble el servicio de lavado de muebles a vapor. Dejaron mi juego de sala como nuevo. 100% recomendados en Loja.",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-gray-50/30">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5a1a1a]/5 text-[#5a1a1a] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                        <MessageCircle className="w-4 h-4" />
                        Prueba Social y Validación
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Lo que dicen nuestros <span className="text-[#5a1a1a]">Clientes</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        La confianza de nuestros clientes en el Austro es el motor que nos impulsa a seguir ofreciendo excelencia y respaldo técnico.
                    </p>
                </div>

                {/* Testimonials Slider on Mobile, Grid on Desktop */}
                <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-8 md:pb-0 snap-x hide-scrollbar">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-[85%] sm:w-[400px] md:w-auto bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative snap-center"
                        >
                            <div className="absolute top-8 right-8 text-[#5a1a1a]/10 group-hover:text-[#5a1a1a]/20 transition-colors">
                                <Quote className="w-12 h-12 rotate-180" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-700 leading-relaxed mb-8 text-[1.05rem] relative z-10">
                                "{t.text}"
                            </p>

                            {/* Profile */}
                            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                                <div className="w-12 h-12 bg-[#5a1a1a]/5 rounded-full flex items-center justify-center text-[#5a1a1a] font-bold">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 leading-none mb-1">{t.name}</h4>
                                    <p className="text-xs text-[#5a1a1a] font-bold uppercase tracking-wider">{t.location}</p>
                                </div>
                            </div>

                            {/* Tag */}
                            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg border border-gray-100">
                                <ShieldCheck className="w-3 h-3 text-gray-400" />
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                                    {t.product}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Counter / Banner */}
                <div className="mt-20 flex flex-col items-center">
                    <div className="bg-white px-10 py-6 rounded-3xl border border-gray-100 shadow-lg flex flex-col md:flex-row items-center gap-6 animate-fade-in-up">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden relative">
                                    <Image
                                        src={`https://images.unsplash.com/photo-${[
                                            "1507003211169-0a1dd7228f2d",
                                            "1500648767791-00dcc994a43e",
                                            "1573496359142-b8d87734a5a2",
                                            "1544005313-94ddf0286df2"
                                        ][i - 1]}?w=100&h=100&fit=crop`}
                                        alt="User"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                                +18 Años <span className="text-[#5a1a1a]">de Clientes Satisfechos</span>
                            </p>
                            <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-1">
                                Presencia Líder en Loja, Cuenca y todo el Austro Ecuatoriano
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

// --- Marcas Component ---
const Marcas: React.FC = () => {
    const brands = [
        { name: "Karcher", logo: "/images/brand-karcher.webp" },
        { name: "Black & Decker", logo: "/images/brand-black-decker.webp" },
        { name: "DeWalt", logo: "/images/brand-dewalt.webp" },
        { name: "Makita", logo: "/images/brand-makita.webp" }
    ];

    return (
        <section className="py-16 bg-white border-y border-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-10">
                    Marcas de Confianza que Distribuimos y Reparamos
                </p>
                <div className="relative overflow-hidden group">
                    <div className="flex gap-12 lg:flex-wrap lg:justify-center items-center lg:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 lg:animate-none animate-marquee whitespace-nowrap py-4">
                        {[...brands, ...brands, ...brands].map((brand, i) => (
                            <div key={i} className="flex-shrink-0 relative w-32 h-12 md:w-40 md:h-16">
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- FAQ Component ---
const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const questions = [
        {
            q: "¿Ofrecen garantía en los equipos?",
            a: "Sí, todos nuestros equipos industriales cuentan con garantía directa de fábrica. Además, como Comercial Proalv, brindamos soporte técnico especializado y repuestos originales para asegurar tu inversión."
        },
        {
            q: "¿Hacen envíos a otras ciudades?",
            a: "Realizamos envíos a todo el Ecuador. Nuestra base principal es Loja, pero tenemos una cobertura logística preferencial para la ciudad de Cuenca y otras provincias del Austro."
        },
        {
            q: "¿El servicio técnico repara marcas que no compraron en el local?",
            a: "Generalmente atendemos equipos de marcas líderes (Karcher, etc.). Te recomendamos contactarnos por WhatsApp para confirmar si contamos con los repuestos específicos para tu modelo de máquina."
        },
        {
            q: "¿Qué métodos de pago aceptan?",
            a: "Aceptamos transferencias bancarias (Pichincha, Loja, Austro), depósitos y efectivo en nuestro local. Para pedidos grandes, también gestionamos planes de financiamiento bajo consulta."
        }
    ];

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Header */}
                    <div className="lg:w-1/3">
                        <span className="inline-block px-4 py-1.5 bg-[#5a1a1a]/5 text-[#5a1a1a] rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            Preguntas frecuentes
                        </span>
                        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                            ¿Tienes alguna <span className="text-[#5a1a1a]">Duda</span>?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Resolvemos tus inquietudes de forma rápida. Si no encuentras lo que buscas, nuestro equipo en WhatsApp está listo para ayudarte.
                        </p>
                        <a
                            href="https://wa.me/593999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#5a1a1a] font-bold border-b-2 border-[#5a1a1a] pb-1 hover:gap-4 transition-all"
                        >
                            Hablar con un asesor <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Accordion */}
                    <div className="lg:w-2/3 space-y-4">
                        {questions.map((item, idx) => (
                            <div
                                key={idx}
                                className={`border ${openIndex === idx ? 'border-[#5a1a1a] bg-[#5a1a1a]/[0.02]' : 'border-gray-100 bg-white'} rounded-2xl transition-all duration-300 overflow-hidden shadow-sm`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full text-left p-6 md:p-8 flex items-center justify-between group"
                                >
                                    <span className={`text-lg font-bold ${openIndex === idx ? 'text-[#5a1a1a]' : 'text-gray-900'} transition-colors`}>
                                        {item.q}
                                    </span>
                                    <div className={`p-2 rounded-xl ${openIndex === idx ? 'bg-[#5a1a1a] text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100 transition-colors'}`}>
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                                    </div>
                                </button>
                                {openIndex === idx && (
                                    <div className="px-8 pb-8 animate-fade-in">
                                        <p className="text-gray-600 leading-relaxed max-w-2xl border-t border-[#5a1a1a]/10 pt-6">
                                            {item.a}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Contacto Component ---
const Contacto: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        ciudad: 'Loja',
        interes: 'Comprar Maquinaria',
        mensaje: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `*🚀 NUEVA SOLICITUD DE COTIZACIÓN*%0A%0A` +
            `*👤 Cliente:* ${formData.nombre}%0A` +
            `*📞 Teléfono:* ${formData.telefono}%0A` +
            `*📍 Ubicación:* ${formData.ciudad}%0A` +
            `*⚙️ Interés:* ${formData.interes}%0A` +
            `*💬 Mensaje:* ${formData.mensaje || 'Sin mensaje adicional'}%0A%0A` +
            `_Enviado desde el sitio web de Comercial Proalv_`;

        const whatsappUrl = `https://wa.me/593999999999?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Column 1: Info & Map */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5a1a1a]/5 text-[#5a1a1a] rounded-full text-xs font-black uppercase tracking-widest mb-6">
                                <MapPin className="w-4 h-4" />
                                Ubicación Estratégica
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
                                Visítanos en nuestro Centro <span className="text-[#5a1a1a]">Técnico en Loja</span>
                            </h2>
                            <address className="not-italic space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-[#5a1a1a] flex-shrink-0 group-hover:bg-[#5a1a1a] group-hover:text-white transition-colors duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Dirección Exacta</p>
                                        <p className="text-gray-600">Av. Universitaria 219-28 entre Celica y Cariamanga, Loja, Ecuador.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-[#5a1a1a] flex-shrink-0 group-hover:bg-[#5a1a1a] group-hover:text-white transition-colors duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Teléfono de Atención</p>
                                        <p className="text-gray-600">+593 99 999 9999</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-[#5a1a1a] flex-shrink-0 group-hover:bg-[#5a1a1a] group-hover:text-white transition-colors duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Correo Electrónico</p>
                                        <p className="text-gray-600">ventas@proalv.com</p>
                                    </div>
                                </div>
                            </address>
                        </div>

                        {/* Google Maps Iframe */}
                        <div className="relative w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.585542854917!2d-79.20643!3d-4.00318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb37f6a70a5555%3A0x1234567890abcdef!2sAv.%20Universitaria%20219-28%2C%20Loja!5e0!3m2!1ses!2sec!4v1710000000000!5m2!1ses!2sec"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Ubicación Comercial Proalv"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                            <div className="absolute top-6 right-6">
                                <a
                                    href="https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=es-MX&fbclid=IwY2xjawQJxUVleHRuA2FlbQIxMABicmlkETJKeUoweHMwOW5IbUQxQ3lzc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHohYf8teiA8I9OFTQfxbsTIi8iBVUf4VqP6BXxiz7ECkgQZX6lVuzquLz1n2_aem_kCE4pULUZVqviDIQAOudAw&FORM=FBKPL1&q=Av.+Universitaria+219-28+entre+Celica+y+Cariamanga%2C+Loja%2C+Ecuador&cp=-4.003180%7E-79.204257&lvl=16&style=r"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-[#5a1a1a] font-bold hover:bg-[#5a1a1a] hover:text-white transition-all transform hover:scale-105"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Abrir en Mapa
                                </a>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5a1a1a]/10 text-[#5a1a1a]">
                                        <Award className="h-6 w-6" />
                                    </div>
                                    <p className="text-xs font-bold text-gray-900">Soporte técnico y ventas autorizadas para todo el Austro</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Form */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#5a1a1a]/5 rounded-full blur-3xl"></div>

                            <h3 className="text-3xl font-extrabold text-gray-900 mb-8 relative z-10">Solicita una <span className="text-[#5a1a1a]">Cotización</span></h3>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Nombre Completo</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ej. Juan Pérez"
                                            className="w-full px-6 py-4 bg-gray-50 border-transparent border-2 focus:border-[#5a1a1a] focus:bg-white rounded-2xl transition-all outline-none text-gray-900 font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Teléfono / WhatsApp</label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ej. 0999999999"
                                            className="w-full px-6 py-4 bg-gray-50 border-transparent border-2 focus:border-[#5a1a1a] focus:bg-white rounded-2xl transition-all outline-none text-gray-900 font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Ciudad</label>
                                        <div className="relative">
                                            <select
                                                name="ciudad"
                                                value={formData.ciudad}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 bg-gray-50 border-transparent border-2 focus:border-[#5a1a1a] focus:bg-white rounded-2xl transition-all outline-none text-gray-900 font-medium appearance-none"
                                            >
                                                <option>Loja</option>
                                                <option>Cuenca</option>
                                                <option>Otra ciudad</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                                <ChevronDown className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Me interesa</label>
                                        <div className="relative">
                                            <select
                                                name="interes"
                                                value={formData.interes}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 bg-gray-50 border-transparent border-2 focus:border-[#5a1a1a] focus:bg-white rounded-2xl transition-all outline-none text-gray-900 font-medium appearance-none"
                                            >
                                                <option>Comprar Maquinaria</option>
                                                <option>Servicio Técnico</option>
                                                <option>Suministros Químicos</option>
                                                <option>Equipos de Mecánica</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                                <ChevronDown className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Mensaje (Opcional)</label>
                                    <textarea
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Cuéntanos más sobre lo que necesitas..."
                                        className="w-full px-6 py-4 bg-gray-50 border-transparent border-2 focus:border-[#5a1a1a] focus:bg-white rounded-2xl transition-all outline-none text-gray-900 font-medium resize-none"
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full bg-[#5a1a1a] text-white py-5 rounded-2xl font-black text-center shadow-xl hover:bg-[#4a1515] transition-all flex items-center justify-center gap-3 group">
                                    Enviar Solicitud de Cotización
                                    <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>

                            {/* Bank Verification Section */}
                            <div className="mt-12 pt-10 border-t border-gray-100">
                                <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
                                    Aceptamos transferencias y pagos seguros para tu comodidad
                                </p>
                                <div className="flex justify-center flex-wrap gap-8 items-center opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale">
                                    <div className="text-xs font-bold text-gray-600 flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 mb-1"></div>
                                        <span>B. Loja</span>
                                    </div>
                                    <div className="text-xs font-bold text-gray-600 flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 mb-1"></div>
                                        <span>Pichincha</span>
                                    </div>
                                    <div className="text-xs font-bold text-gray-600 flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 mb-1"></div>
                                        <span>B. Austro</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- AnnouncementCard Component ---
// --- AnnouncementCard Component ---
const AnnouncementCard: React.FC = () => {
    const [announcements, setAnnouncements] = useState<any[]>([]);
    const [closedIds, setClosedIds] = useState<number[]>([]);

    useEffect(() => {
        fetch('/api/announcements')
            .then(res => res.json())
            .then(data => setAnnouncements(Array.isArray(data) ? data : []))
            .catch(() => { });
    }, []);

    const activeAnnouncements = announcements.filter(a => a.activo && !closedIds.includes(a.id));

    if (activeAnnouncements.length === 0) return null;

    const handleClose = (id: number) => {
        setClosedIds(prev => [...prev, id]);
    };

    return (
        <div className="fixed bottom-6 left-6 z-[100] flex flex-col gap-4">
            {activeAnnouncements.map((cardData, index) => (
                <div
                    key={cardData.id}
                    className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-4 pr-6 flex gap-5 max-w-[380px] relative border border-gray-100 group transition-all hover:scale-[1.02] animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => handleClose(cardData.id)}
                        className="absolute -top-1 -right-1 bg-white text-gray-400 hover:text-[#5a1a1a] p-1 rounded-full shadow-md border border-gray-100 transition-all hover:bg-gray-50 z-10"
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>

                    {/* Offer Badge */}
                    <div className="absolute top-3 right-8 bg-[#5a1a1a] text-white text-[9px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider shadow-lg animate-pulse">
                        {cardData.oferta}
                    </div>

                    {/* Left side: Image */}
                    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50 relative border-2 border-gray-50">
                        <img src={cardData.imagen_url} alt={cardData.titulo} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Right side: Content */}
                    <div className="flex-1 flex flex-col justify-center py-1">
                        <div className="mb-2">
                            <div className="flex items-center gap-1.5 mb-1 text-[#5a1a1a]">
                                <Megaphone className="w-3 h-3" />
                                <span className="text-[9px] font-black uppercase tracking-[0.2em]">Novedades</span>
                            </div>
                            <h5 className="font-extrabold text-gray-900 leading-tight text-sm mb-0.5 truncate">{cardData.titulo}</h5>
                            <p className="text-[10px] text-gray-500 leading-tight line-clamp-2 font-medium">{cardData.descripcion}</p>
                        </div>

                        <a
                            href={cardData.pdf_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#5a1a1a] text-white text-[9px] font-black py-2 rounded-xl text-center hover:bg-[#4a1515] transition-all flex items-center justify-center gap-2 uppercase tracking-wider shadow-sm"
                        >
                            <FileText className="w-3 h-3" />
                            Ver PDF
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

// --- Footer Component ---
const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="flex flex-col md:grid md:grid-cols-3 gap-12 text-center md:text-left">
                    {/* Column 1: About */}
                    <div className="space-y-6">
                        <div className="flex justify-center md:justify-start">
                            <Image
                                src="/images/Logo.webp"
                                alt="Comercial Proalv Logo"
                                width={180}
                                height={36}
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-600 leading-relaxed mx-auto md:mx-0 max-w-sm md:max-w-none">
                            Comercial Proalv: 18 años de experiencia en la comercialización de equipos de limpieza, mecánica y suministros químicos. Tu socio estratégico para el mantenimiento industrial y doméstico en el sur del Ecuador.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="https://www.facebook.com/profile.php?id=100085460783731" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#5a1a1a] transition-colors p-2 lg:p-0">
                                <span className="sr-only">Facebook</span>
                                {/* FB Icon */}
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/comercial.proalv/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#5a1a1a] transition-colors p-2 lg:p-0">
                                <span className="sr-only">Instagram</span>
                                {/* IG Icon */}
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Locations */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-[#5a1a1a]">Ubicación y Contacto</h3>
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-3 text-gray-600">
                                <svg className="w-6 h-6 text-[#5a1a1a] flex-shrink-0 mb-2 md:mb-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p><strong>Dirección:</strong> Av. Universitaria 219-28 entre Celica y Cariamanga, Loja, Ecuador.</p>
                            </div>
                            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-3 text-gray-600">
                                <svg className="w-6 h-6 text-[#5a1a1a] flex-shrink-0 mb-2 md:mb-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p><strong>Horarios:</strong> Atención personalizada en nuestro local físico.</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Safe Payments */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-[#5a1a1a]">Respaldo y Pagos</h3>
                        <p className="text-sm text-gray-500 mb-4 max-w-sm mx-auto md:mx-0">Aceptamos transferencias y depósitos: Banco de Loja, Banco del Austro y Banco del Pichincha.</p>
                        <div className="grid grid-cols-2 gap-4 max-w-[280px] mx-auto md:mx-0">
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default" title="Banco del Pichincha">
                                <span className="text-xs font-bold text-gray-400">Pichincha</span>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default" title="Banco de Loja">
                                <span className="text-xs font-bold text-gray-400">B. Loja</span>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default" title="Banco del Austro">
                                <span className="text-xs font-bold text-gray-400">B. Austro</span>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default">
                                <span className="text-xs font-bold text-gray-400">Efectivo</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-100 text-center md:flex md:justify-between text-sm text-gray-500">
                    <p>Diseñado por <a href="https://cesarreyesjaramillo.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#5a1a1a] underline decoration-[#5a1a1a]/30 underline-offset-4 transition-colors">Cesar Reyes</a> | Comercial Proalv 2026</p>
                    <div className="mt-6 md:mt-0 flex justify-center md:justify-end gap-6">
                        <a href="#" className="hover:text-[#5a1a1a]">Privacidad</a>
                        <a href="#" className="hover:text-[#5a1a1a]">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// --- Main Page Component ---
export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white font-[family-name:var(--font-montserrat)]">
            <Header />
            <main>
                <Hero />
                <About />
                <VideoShowcase />
                <Servicios />
                <Marcas />
                <Catalogo />
                <Testimonios />
                <FAQ />
                <Contacto />
                <AnnouncementCard />
                {/* Additional sections can be added here */}
            </main>
            <Footer />

            {/* Floating WhatsApp for Mobile */}
            <a
                href="https://wa.me/593999999999?text=Hola,%20deseo%20más%20información%20sobre%20sus%20productos"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform lg:hidden"
            >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </a>
        </div>
    );
}
