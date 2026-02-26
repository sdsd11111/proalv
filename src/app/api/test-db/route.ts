import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
    try {
        const connection = await pool.getConnection();
        await connection.ping();
        connection.release();
        return NextResponse.json({ message: 'Conexión a la base de datos exitosa' }, { status: 200 });
    } catch (error: any) {
        console.error('Error de conexión a BD:', error);
        return NextResponse.json({ error: 'Fallo al conectar', details: error.message }, { status: 500 });
    }
}
