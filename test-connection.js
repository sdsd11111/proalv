const mysql = require('mysql2/promise');

async function test() {
    console.log('Probando conexión directa a mysql.gb.stackcp.com:43230 ...');
    try {
        const conn = await mysql.createConnection({
            host: 'mysql.gb.stackcp.com',
            port: 43230,
            user: 'deprueba-35303837362c',
            password: 'llnr64ma8b',
            database: 'deprueba-35303837362c',
            connectTimeout: 10000,
        });
        console.log('✅ CONEXIÓN EXITOSA');
        const [rows] = await conn.execute('SELECT 1 AS ok');
        console.log('✅ QUERY OK:', rows);
        await conn.end();
    } catch (err) {
        console.log('❌ ERROR COMPLETO:');
        console.log('  Code:', err.code);
        console.log('  Message:', err.message);
        console.log('  Errno:', err.errno);
        console.log('  SQLState:', err.sqlState);
    }
}
test();
