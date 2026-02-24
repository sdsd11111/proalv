"use client";

import React, { useState, useEffect } from 'react';
import { Settings, Save, LogOut, Megaphone, Type, AlignLeft, Percent, Image as ImageIcon, FileText, Plus, Trash2, Eye, EyeOff, LayoutPanelLeft } from 'lucide-react';

interface Announcement {
    id: string;
    titulo: string;
    descripcion: string;
    oferta: string;
    imagen: string;
    pdfUrl: string;
    activo: boolean;
}

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [credentials, setCredentials] = useState({ user: '', pass: '' });
    const [error, setError] = useState('');

    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => {
        const savedData = localStorage.getItem('proalv_announcements');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            setAnnouncements(parsed);
            if (parsed.length > 0) setSelectedId(parsed[0].id);
        } else {
            // Migration/Default
            const legacyData = localStorage.getItem('proalv_announcement_card');
            if (legacyData) {
                const legacy = JSON.parse(legacyData);
                const first = { ...legacy, id: Date.now().toString() };
                setAnnouncements([first]);
                setSelectedId(first.id);
            } else {
                const initial = {
                    id: Date.now().toString(),
                    titulo: '¡Oferta Especial!',
                    descripcion: 'Descubre nuestros nuevos productos de limpieza industrial.',
                    oferta: '20% DESC',
                    imagen: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop',
                    pdfUrl: '#',
                    activo: true
                };
                setAnnouncements([initial]);
                setSelectedId(initial.id);
            }
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (credentials.user === 'Proalv' && credentials.pass === 'Contraseña123.') {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Credenciales incorrectas');
        }
    };

    const handleSave = () => {
        localStorage.setItem('proalv_announcements', JSON.stringify(announcements));
        alert('Configuración guardada correctamente');
    };

    const addAnnouncement = () => {
        const newAnn = {
            id: Date.now().toString(),
            titulo: 'Nuevo Anuncio',
            descripcion: 'Descripción del anuncio...',
            oferta: 'OFERTA',
            imagen: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop',
            pdfUrl: '#',
            activo: true
        };
        const newList = [...announcements, newAnn];
        setAnnouncements(newList);
        setSelectedId(newAnn.id);
    };

    const deleteAnnouncement = (id: string) => {
        if (announcements.length <= 1) {
            alert("Debe haber al menos un anuncio (aunque esté oculto).");
            return;
        }
        const newList = announcements.filter(a => a.id !== id);
        setAnnouncements(newList);
        if (selectedId === id) setSelectedId(newList[0].id);
    };

    const updateAnnouncement = (id: string, updates: Partial<Announcement>) => {
        setAnnouncements(announcements.map(a => a.id === id ? { ...a, ...updates } : a));
    };

    const currentAnn = announcements.find(a => a.id === selectedId) || announcements[0];

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCredentials({ user: '', pass: '' });
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-[family-name:var(--font-montserrat)]">
                <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-200">
                    <div className="flex flex-col items-center mb-8">
                        <div className="bg-[#5a1a1a]/10 p-4 rounded-2xl mb-4">
                            <Settings className="w-10 h-10 text-[#5a1a1a]" />
                        </div>
                        <h1 className="text-2xl font-black text-gray-900">Admin Proalv</h1>
                        <p className="text-gray-500 text-sm">Gestión de Anuncios</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Usuario</label>
                            <input
                                type="text"
                                value={credentials.user}
                                onChange={(e) => setCredentials({ ...credentials, user: e.target.value })}
                                className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 focus:border-[#5a1a1a] focus:bg-white rounded-2xl transition-all outline-none"
                                placeholder="Usuario"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Contraseña</label>
                            <input
                                type="password"
                                value={credentials.pass}
                                onChange={(e) => setCredentials({ ...credentials, pass: e.target.value })}
                                className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 focus:border-[#5a1a1a] focus:bg-white rounded-2xl transition-all outline-none"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-[#5a1a1a] text-white py-5 rounded-2xl font-black text-center shadow-xl hover:bg-[#4a1515] transition-all"
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-montserrat)]">
            {/* Nav */}
            <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="bg-[#5a1a1a] p-2 rounded-lg">
                        <Settings className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-black text-xl text-gray-900 tracking-tight">Admin <span className="text-[#5a1a1a]">Proalv</span></span>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleSave}
                        className="bg-[#5a1a1a] text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg hover:bg-[#4a1515] transition-all flex items-center gap-2"
                    >
                        <Save className="w-4 h-4" /> Guardar Todo
                    </button>
                    <button
                        onClick={handleLogout}
                        className="text-gray-400 hover:text-red-600 transition-colors font-bold text-sm"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </nav>

            <main className="container mx-auto px-4 py-8 max-w-6xl">
                <div className="grid lg:grid-cols-[300px_1fr] gap-8">
                    {/* Sidebar: List of Announcements */}
                    <aside className="space-y-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Anuncios ({announcements.length})</h3>
                            <button
                                onClick={addAnnouncement}
                                className="p-2 bg-[#5a1a1a]/5 text-[#5a1a1a] rounded-lg hover:bg-[#5a1a1a]/10 transition-all border border-[#5a1a1a]/10"
                            >
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-2 overflow-y-auto max-h-[70vh] pr-2 custom-scrollbar">
                            {announcements.map((ann) => (
                                <div
                                    key={ann.id}
                                    onClick={() => setSelectedId(ann.id)}
                                    className={`p-4 rounded-2xl cursor-pointer transition-all border-2 flex items-center justify-between group ${selectedId === ann.id
                                            ? 'bg-white border-[#5a1a1a] shadow-lg'
                                            : 'bg-gray-100 border-transparent hover:bg-white hover:border-gray-200'
                                        }`}
                                >
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                                            <img src={ann.imagen} className="w-full h-full object-cover" alt="" />
                                        </div>
                                        <div className="truncate">
                                            <p className={`font-bold text-sm truncate ${selectedId === ann.id ? 'text-[#5a1a1a]' : 'text-gray-700'}`}>{ann.titulo || 'Sin título'}</p>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                                                {ann.activo ? 'Visible' : 'Oculto'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); updateAnnouncement(ann.id, { activo: !ann.activo }); }}
                                            className="p-1.5 hover:bg-gray-100 rounded-md text-gray-400 hover:text-[#5a1a1a]"
                                        >
                                            {ann.activo ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); deleteAnnouncement(ann.id); }}
                                            className="p-1.5 hover:bg-red-50 rounded-md text-gray-400 hover:text-red-600"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Editor & Preview */}
                    <div className="space-y-8">
                        {currentAnn ? (
                            <div className="grid md:grid-cols-[1fr_350px] gap-8">
                                {/* Editor */}
                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <LayoutPanelLeft className="w-6 h-6 text-[#5a1a1a]" />
                                        <h3 className="font-black text-gray-900 text-xl tracking-tight">Editar Anuncio</h3>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#5a1a1a]">
                                            <Type className="w-4 h-4" /> Título
                                        </label>
                                        <input
                                            type="text"
                                            value={currentAnn.titulo}
                                            onChange={(e) => updateAnnouncement(currentAnn.id, { titulo: e.target.value })}
                                            className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent focus:border-[#5a1a1a] rounded-xl outline-none transition-all font-bold"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#5a1a1a]">
                                            <AlignLeft className="w-4 h-4" /> Descripción
                                        </label>
                                        <textarea
                                            value={currentAnn.descripcion}
                                            onChange={(e) => updateAnnouncement(currentAnn.id, { descripcion: e.target.value })}
                                            className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent focus:border-[#5a1a1a] rounded-xl outline-none transition-all resize-none h-24"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#5a1a1a]">
                                                <Percent className="w-4 h-4" /> Oferta/Tag
                                            </label>
                                            <input
                                                type="text"
                                                value={currentAnn.oferta}
                                                onChange={(e) => updateAnnouncement(currentAnn.id, { oferta: e.target.value })}
                                                className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent focus:border-[#5a1a1a] rounded-xl outline-none transition-all font-bold"
                                            />
                                        </div>
                                        <div className="flex items-end pb-1">
                                            <label className="flex items-center gap-3 cursor-pointer group w-full bg-gray-50 p-3 rounded-xl border-2 border-transparent hover:border-[#5a1a1a]/10 transition-all">
                                                <input
                                                    type="checkbox"
                                                    checked={currentAnn.activo}
                                                    onChange={(e) => updateAnnouncement(currentAnn.id, { activo: e.target.checked })}
                                                    className="w-6 h-6 rounded-lg text-[#5a1a1a] focus:ring-[#5a1a1a] border-gray-300"
                                                />
                                                <span className="text-xs font-black text-gray-700 uppercase tracking-tighter group-hover:text-[#5a1a1a] transition-colors">Visible en Web</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#5a1a1a]">
                                            <ImageIcon className="w-4 h-4" /> URL de Imagen
                                        </label>
                                        <input
                                            type="text"
                                            value={currentAnn.imagen}
                                            onChange={(e) => updateAnnouncement(currentAnn.id, { imagen: e.target.value })}
                                            className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent focus:border-[#5a1a1a] rounded-xl outline-none transition-all text-sm"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#5a1a1a]">
                                            <FileText className="w-4 h-4" /> URL del PDF
                                        </label>
                                        <input
                                            type="text"
                                            value={currentAnn.pdfUrl}
                                            onChange={(e) => updateAnnouncement(currentAnn.id, { pdfUrl: e.target.value })}
                                            className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent focus:border-[#5a1a1a] rounded-xl outline-none transition-all text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Preview Card */}
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 text-center">Vista Previa</h4>
                                    <div className="flex justify-center">
                                        <div className={`bg-white rounded-[2rem] shadow-2xl p-4 pr-6 flex gap-4 max-w-[350px] relative border border-gray-100 transition-all ${!currentAnn.activo ? 'opacity-40 grayscale' : ''}`}>
                                            <div className="absolute top-2 right-6 bg-[#5a1a1a] text-white text-[9px] px-2 py-0.5 rounded-full font-black uppercase">{currentAnn.oferta || 'OFERTA'}</div>
                                            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 relative">
                                                <img src={currentAnn.imagen} alt="Preview" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between py-1 overflow-hidden">
                                                <div className="overflow-hidden">
                                                    <h5 className="font-extrabold text-gray-900 leading-tight mb-1 text-sm truncate">{currentAnn.titulo}</h5>
                                                    <p className="text-[10px] text-gray-500 leading-tight line-clamp-2 font-medium">{currentAnn.descripcion}</p>
                                                </div>
                                                <div className="bg-[#5a1a1a] text-white text-[9px] font-black py-2 rounded-lg text-center uppercase tracking-wider flex items-center justify-center gap-2">
                                                    <FileText className="w-3 h-3" /> Descargar PDF
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#f5e6b3]/30 p-4 rounded-2xl border border-[#f5e6b3]/50">
                                        <p className="text-[10px] text-[#5a1a1a] font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 text-center justify-center">
                                            <Megaphone className="w-3 h-3" /> Tip de Admin
                                        </p>
                                        <p className="text-xs text-gray-600 leading-relaxed text-center">
                                            Recuerda hacer clic en "Guardar Todo" arriba para publicar tus cambios en la web principal.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-24 text-center space-y-4 opacity-30">
                                <LayoutPanelLeft className="w-20 h-20 text-[#5a1a1a]" />
                                <p className="font-black text-xl text-gray-900 tracking-tight">Selecciona o crea un anuncio para comenzar</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
