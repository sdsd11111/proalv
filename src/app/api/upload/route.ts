import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const type = formData.get('type') as string; // 'image' | 'pdf'

        if (!file) {
            return NextResponse.json({ error: 'No se recibió archivo' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadDir = type === 'pdf'
            ? path.join(process.cwd(), 'public', 'uploads', 'pdfs')
            : path.join(process.cwd(), 'public', 'uploads', 'images');

        await mkdir(uploadDir, { recursive: true });

        const ext = path.extname(file.name);
        const safeBase = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 60);
        const filename = `${Date.now()}_${safeBase}`;
        const filePath = path.join(uploadDir, filename);
        await writeFile(filePath, buffer);

        const publicUrl = type === 'pdf'
            ? `/uploads/pdfs/${filename}`
            : `/uploads/images/${filename}`;

        return NextResponse.json({ url: publicUrl }, { status: 200 });
    } catch (error: any) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
