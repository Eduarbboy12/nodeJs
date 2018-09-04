// =======================
// Puerto
// =======================
process.env.PORT = process.env.PORT || 3000;

// =======================
// Ambiente
// =======================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// =======================
// Base de Datos
// =======================

let urlDB;

if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb://eduarbboy12:abc123@ds145072.mlab.com:45072/cafe'
}

process.env.URLDB = urlDB;