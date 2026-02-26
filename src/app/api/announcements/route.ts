import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET all announcements
export async function GET() {
    try {
        const [rows] = await pool.execute('SELECT * FROM announcements ORDER BY created_at DESC');
        return NextResponse.json(rows);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// POST create new announcement
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { titulo, descripcion, oferta, imagen_url, pdf_url, activo } = body;
        const [result]: any = await pool.execute(
            'INSERT INTO announcements (titulo, descripcion, oferta, imagen_url, pdf_url, activo) VALUES (?, ?, ?, ?, ?, ?)',
            [titulo, descripcion, oferta, imagen_url || '', pdf_url || '', activo ? 1 : 0]
        );
        const [newRow] = await pool.execute('SELECT * FROM announcements WHERE id = ?', [result.insertId]);
        return NextResponse.json((newRow as any[])[0], { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
