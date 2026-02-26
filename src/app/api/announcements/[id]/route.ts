import { NextResponse } from 'next/server';
import pool from '@/lib/db';

interface RouteParams { params: Promise<{ id: string }> }

// GET single announcement
export async function GET(_req: Request, { params }: RouteParams) {
    const { id } = await params;
    try {
        const [rows] = await pool.execute('SELECT * FROM announcements WHERE id = ?', [id]);
        const data = rows as any[];
        if (data.length === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 });
        return NextResponse.json(data[0]);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// PUT update announcement
export async function PUT(request: Request, { params }: RouteParams) {
    const { id } = await params;
    try {
        const body = await request.json();
        const { titulo, descripcion, oferta, imagen_url, pdf_url, activo } = body;
        await pool.execute(
            'UPDATE announcements SET titulo=?, descripcion=?, oferta=?, imagen_url=?, pdf_url=?, activo=? WHERE id=?',
            [titulo, descripcion, oferta, imagen_url || '', pdf_url || '', activo ? 1 : 0, id]
        );
        const [rows] = await pool.execute('SELECT * FROM announcements WHERE id = ?', [id]);
        return NextResponse.json((rows as any[])[0]);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// DELETE announcement
export async function DELETE(_req: Request, { params }: RouteParams) {
    const { id } = await params;
    try {
        await pool.execute('DELETE FROM announcements WHERE id = ?', [id]);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
