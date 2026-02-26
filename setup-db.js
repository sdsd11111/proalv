// Script to create the announcements table in the database
// Run with: node setup-db.js
const mysql = require('mysql2/promise');

async function setup() {
    console.log('Creando tabla announcements...');
    const conn = await mysql.createConnection({
        host: 'mysql.gb.stackcp.com',
        port: 43230,
        user: 'deprueba-35303837362c',
        password: 'llnr64ma8b',
        database: 'deprueba-35303837362c',
        connectTimeout: 10000,
    });

    await conn.execute(`
    CREATE TABLE IF NOT EXISTS announcements (
      id INT AUTO_INCREMENT PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL DEFAULT '',
      descripcion TEXT NOT NULL DEFAULT '',
      oferta VARCHAR(100) NOT NULL DEFAULT '',
      imagen_url VARCHAR(1000) NOT NULL DEFAULT '',
      pdf_url VARCHAR(1000) NOT NULL DEFAULT '',
      activo TINYINT(1) NOT NULL DEFAULT 1,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
    console.log('✅ Tabla announcements creada (o ya existía)');

    // Insert a default announcement if the table is empty
    const [rows] = await conn.execute('SELECT COUNT(*) as count FROM announcements');
    if (rows[0].count === 0) {
        await conn.execute(`
      INSERT INTO announcements (titulo, descripcion, oferta, imagen_url, pdf_url, activo) 
      VALUES (?, ?, ?, ?, ?, ?)`,
            ['¡Oferta Especial!', 'Descubre nuestros nuevos productos de limpieza industrial.', '20% DESC', '/images/cat-hidrolavadora.webp', '#', 1]
        );
        console.log('✅ Anuncio de ejemplo insertado');
    }

    await conn.end();
    console.log('✅ Base de datos configurada correctamente');
}

setup().catch(console.error);
