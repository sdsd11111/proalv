"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Settings, Save, LogOut, Megaphone, Type, AlignLeft, Percent, Image as ImageIcon, FileText, Plus, Trash2, Eye, EyeOff, LayoutPanelLeft, Upload, Loader2, CheckCircle, AlertCircle, Home } from 'lucide-react';
import Link from 'next/link';

interface Announcement {
    id: number;
    titulo: string;
    descripcion: string;
    oferta: string;
    imagen_url: string;
    pdf_url: string;
    activo: boolean;
}

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [credentials, setCredentials] = useState({ user: '', pass: '' });
    const [error, setError] = useState('');

    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [uploadingPdf, setUploadingPdf] = useState(false);
    const [toast, setToast] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

    const showToast = (type: 'success' | 'error', msg: string) => {
        setToast({ type, msg });
        setTimeout(() => setToast(null), 3000);
    };

    const fetchAnnouncements = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/announcements');
            const data = await res.json();
            const normalized = data.map((a: any) => ({ ...a, activo: Boolean(a.activo) }));
            setAnnouncements(normalized);
            if (normalized.length > 0 && selectedId === null) setSelectedId(normalized[0].id);
        } catch {
            showToast('error', 'Error al cargar los anuncios');
        }
        setLoading(false);
    }, [selectedId]);

    useEffect(() => {
        if (isLoggedIn) fetchAnnouncements();
    }, [isLoggedIn]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (credentials.user === 'Proalv' && credentials.pass === 'Contraseña123.') {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Credenciales incorrectas');
        }
    };

    const handleSave = async () => {
        if (!currentAnn) return;
        setSaving(true);
        try {
            const res = await fetch(`/api/announcements/${currentAnn.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(currentAnn),
            });
            if (!res.ok) throw new Error('Fallo al guardar');
            showToast('success', 'Anuncio guardado correctamente');
        } catch {
            showToast('error', 'Error al guardar el anuncio');
        }
        setSaving(false);
    };

    const addAnnouncement = async () => {
        try {
            const res = await fetch('/api/announcements', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    titulo: 'Nuevo Anuncio',
                    descripcion: 'Descripción del anuncio...',
                    oferta: 'OFERTA',
                    imagen_url: '/images/cat-hidrolavadora.webp',
                    pdf_url: '#',
                    activo: true,
                }),
            });
            const newAnn = await res.json();
            setAnnouncements(prev => [{ ...newAnn, activo: Boolean(newAnn.activo) }, ...prev]);
            setSelectedId(newAnn.id);
        } catch {
            showToast('error', 'Error al crear el anuncio');
        }
    };

    const deleteAnnouncement = async (id: number) => {
        if (announcements.length <= 1) {
            showToast('error', 'Debe haber al menos un anuncio.');
            return;
        }
        try {
            await fetch(`/api/announcements/${id}`, { method: 'DELETE' });
            const newList = announcements.filter(a => a.id !== id);
            setAnnouncements(newList);
            if (selectedId === id) setSelectedId(newList[0]?.id ?? null);
        } catch {
            showToast('error', 'Error al eliminar el anuncio');
        }
    };

    const updateLocal = (id: number, updates: Partial<Announcement>) => {
        setAnnouncements(prev => prev.map(a => a.id === id ? { ...a, ...updates } : a));
    };

    const toggleVisible = async (ann: Announcement) => {
        const updated = { ...ann, activo: !ann.activo };
        updateLocal(ann.id, { activo: updated.activo });
        await fetch(`/api/announcements/${ann.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updated),
        });
    };

    const handleUpload = async (file: File, type: 'image' | 'pdf', field: 'imagen_url' | 'pdf_url') => {
        if (!currentAnn) return;
        const setUploading = type === 'image' ? setUploadingImage : setUploadingPdf;
        setUploading(true);
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('type', type);
            const res = await fetch('/api/upload', { method: 'POST', body: formData });
            const data = await res.json();
            if (data.url) {
                updateLocal(currentAnn.id, { [field]: data.url });
                showToast('success', 'Archivo subido correctamente');
            } else {
                throw new Error('Sin URL');
            }
        } catch {
            showToast('error', 'Error al subir el archivo');
        }
        setUploading(false);
    };

    const currentAnn = announcements.find(a => a.id === selectedId) || announcements[0];

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCredentials({ user: '', pass: '' });
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-[family-name:var(--font-montserrat)] relative">
                <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 text-gray-500 hover:text-[#5a1a1a] font-bold text-sm bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200 transition-all">
                    <Home className="w-4 h-4" /> Volver al inicio
                </Link>
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
                            <input type="text" value={credentials.user} onChange={(e) => setCredentials({ ...credentials, user: e.target.value })} className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 focus:border-[#5a1a1a] focus:bg-white rounded-2xl transition-all outline-none" placeholder="Usuario" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Contraseña</label>
                            <input type="password" value={credentials.pass} onChange={(e) => setCredentials({ ...credentials, pass: e.target.value })} className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 focus:border-[#5a1a1a] focus:bg-white rounded-2xl transition-all outline-none" placeholder="••••••••" required />
                        </div>
                        {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}
                        <button type="submit" className="w-full bg-[#5a1a1a] text-white py-5 rounded-2xl font-black text-center shadow-xl hover:bg-[#4a1515] transition-all">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-montserrat)]">
            {/* Toast notification */}
            {toast && (
                <div className={`fixed top-4 right-4 z-[999] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl text-white font-bold text-sm transition-all ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
                    {toast.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                    {toast.msg}
                </div>
            )}

            {/* Nav */}
            <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="bg-[#5a1a1a] p-2 rounded-lg"><Settings className="w-6 h-6 text-white" /></div>
                    <span className="font-black text-xl text-gray-900 tracking-tight">Admin <span className="text-[#5a1a1a]">Proalv</span></span>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/" className="bg-gray-100 text-[#5a1a1a] px-4 py-2 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all flex items-center gap-2 border border-gray-200">
                        <Home className="w-4 h-4" /> Ver Web
                    </Link>
                    <button onClick={handleSave} disabled={saving} className="bg-[#5a1a1a] text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg hover:bg-[#4a1515] transition-all flex items-center gap-2 disabled:opacity-60">
                        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Guardar
                    </button>
                    <button onClick={handleLogout} className="text-gray-400 hover:text-red-600 transition-colors font-bold text-sm">
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </nav>

            <main className="container mx-auto px-4 py-8 max-w-6xl">
                {loading ? (
                    <div className="flex items-center justify-center py-32"><Loader2 className="w-10 h-10 text-[#5a1a1a] animate-spin" /></div>
                ) : (
                    <div className="grid lg:grid-cols-[300px_1fr] gap-8">
                        {/* Sidebar */}
                        <aside className="space-y-4">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Anuncios ({announcements.length})</h3>
                                <button onClick={addAnnouncement} className="p-2 bg-[#5a1a1a]/5 text-[#5a1a1a] rounded-lg hover:bg-[#5a1a1a]/10 transition-all border border-[#5a1a1a]/10">
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="space-y-2 overflow-y-auto max-h-[70vh] pr-2">
                                {announcements.map((ann) => (
                                    <div key={ann.id} onClick={() => setSelectedId(ann.id)}
                                        className={`p-4 rounded-2xl cursor-pointer transition-all border-2 flex items-center justify-between group ${selectedId === ann.id ? 'bg-white border-[#5a1a1a] shadow-lg' : 'bg-gray-100 border-transparent hover:bg-white hover:border-gray-200'}`}>
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                                                <img src={ann.imagen_url} className="w-full h-full object-cover" alt="" />
                                            </div>
                                            <div className="truncate">
                                                <p className={`font-bold text-sm truncate ${selectedId === ann.id ? 'text-[#5a1a1a]' : 'text-gray-700'}`}>{ann.titulo || 'Sin título'}</p>
                                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{ann.activo ? 'Visible' : 'Oculto'}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={(e) => { e.stopPropagation(); toggleVisible(ann); }} className="p-1.5 hover:bg-gray-100 rounded-md text-gray-400 hover:text-[#5a1a1a]">
                                                {ann.activo ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                            </button>
                                            <button onClick={(e) => { e.stopPropagation(); deleteAnnouncement(ann.id); }} className="p-1.5 hover:bg-red-50 rounded-md text-gray-400 hover:text-red-600">
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
                                            <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#5a1a1a]"><Type className="w-4 h-4" /> Título</label>
                                            <input type="text" value={currentAnn.titulo} onChange={(e) => updateLocal(currentAnn.id, { titulo: e.target.value })} className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent focus:border-[#5a1a1a] rounded-xl outline-none transition-all font-bold" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#5a1a1a]"><AlignLeft className="w-4 h-4" /> Descripción</label>
                                            <textarea value={currentAnn.descripcion} onChange={(e) => updateLocal(currentAnn.id, { descripcion: e.target.value })} className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent focus:border-[#5a1a1a] rounded-xl outline-none transition-all resize-none h-24" />
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#5a1a1a]"><Percent className="w-4 h-4" /> Oferta/Tag</label>
                                                <input type="text" value={currentAnn.oferta} onChange={(e) => updateLocal(currentAnn.id, { oferta: e.target.value })} className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent focus:border-[#5a1a1a] rounded-xl outline-none transition-all font-bold" />
                                            </div>
                                            <div className="flex items-end pb-1">
                                                <label className="flex items-center gap-3 cursor-pointer group w-full bg-gray-50 p-3 rounded-xl border-2 border-transparent hover:border-[#5a1a1a]/10 transition-all">
                                                    <input type="checkbox" checked={currentAnn.activo} onChange={(e) => updateLocal(currentAnn.id, { activo: e.target.checked })} className="w-6 h-6 rounded-lg text-[#5a1a1a] border-gray-300" />
                                                    <span className="text-xs font-black text-gray-700 uppercase tracking-tighter">Visible en Web</span>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Image Upload */}
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#5a1a1a]"><ImageIcon className="w-4 h-4" /> Imagen</label>
                                            <div className="flex gap-2 items-center">
                                                <input type="text" value={currentAnn.imagen_url} onChange={(e) => updateLocal(currentAnn.id, { imagen_url: e.target.value })} className="flex-1 px-5 py-3 bg-gray-50 border-2 border-transparent focus:border-[#5a1a1a] rounded-xl outline-none transition-all text-sm" placeholder="URL de imagen o sube un archivo" />
                                                <label className="cursor-pointer flex items-center gap-2 bg-[#5a1a1a]/5 border border-[#5a1a1a]/20 text-[#5a1a1a] px-4 py-3 rounded-xl font-bold text-sm hover:bg-[#5a1a1a]/10 transition-all whitespace-nowrap">
                                                    {uploadingImage ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                                                    Subir
                                                    <input type="file" accept="image/*" className="hidden" onChange={(e) => { if (e.target.files?.[0]) handleUpload(e.target.files[0], 'image', 'imagen_url'); }} />
                                                </label>
                                            </div>
                                        </div>

                                        {/* PDF Upload */}
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#5a1a1a]"><FileText className="w-4 h-4" /> PDF / Documento</label>
                                            <div className="flex gap-2 items-center">
                                                <input type="text" value={currentAnn.pdf_url} onChange={(e) => updateLocal(currentAnn.id, { pdf_url: e.target.value })} className="flex-1 px-5 py-3 bg-gray-50 border-2 border-transparent focus:border-[#5a1a1a] rounded-xl outline-none transition-all text-sm" placeholder="URL del PDF o sube un archivo" />
                                                <label className="cursor-pointer flex items-center gap-2 bg-[#5a1a1a]/5 border border-[#5a1a1a]/20 text-[#5a1a1a] px-4 py-3 rounded-xl font-bold text-sm hover:bg-[#5a1a1a]/10 transition-all whitespace-nowrap">
                                                    {uploadingPdf ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                                                    Subir
                                                    <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => { if (e.target.files?.[0]) handleUpload(e.target.files[0], 'pdf', 'pdf_url'); }} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Preview Card */}
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 text-center">Vista Previa</h4>
                                        <div className="flex justify-center">
                                            <div className={`bg-white rounded-[2rem] shadow-2xl p-4 pr-6 flex gap-4 max-w-[350px] relative border border-gray-100 transition-all ${!currentAnn.activo ? 'opacity-40 grayscale' : ''}`}>
                                                <div className="absolute top-2 right-6 bg-[#5a1a1a] text-white text-[9px] px-2 py-0.5 rounded-full font-black uppercase">{currentAnn.oferta || 'OFERTA'}</div>
                                                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 relative">
                                                    <img src={currentAnn.imagen_url} alt="Preview" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 flex flex-col justify-between py-1 overflow-hidden">
                                                    <div className="overflow-hidden">
                                                        <h5 className="font-extrabold text-gray-900 leading-tight mb-1 text-sm truncate">{currentAnn.titulo}</h5>
                                                        <p className="text-[10px] text-gray-500 leading-tight line-clamp-2 font-medium">{currentAnn.descripcion}</p>
                                                    </div>
                                                    <div className="bg-[#5a1a1a] text-white text-[9px] font-black py-2 rounded-lg text-center uppercase tracking-wider flex items-center justify-center gap-2">
                                                        <FileText className="w-3 h-3" /> Ver PDF
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#f5e6b3]/30 p-4 rounded-2xl border border-[#f5e6b3]/50">
                                            <p className="text-[10px] text-[#5a1a1a] font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 text-center justify-center">
                                                <Megaphone className="w-3 h-3" /> Tip
                                            </p>
                                            <p className="text-xs text-gray-600 leading-relaxed text-center">
                                                Haz clic en "Guardar" para publicar los cambios. Las imágenes y PDFs subidos se guardan en el servidor.
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
                )}
            </main>
        </div>
    );
}
