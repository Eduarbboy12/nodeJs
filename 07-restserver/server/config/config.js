// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Vencimiento del token
// ============================

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============================
//  SEED
// ============================

process.env.SEED = process.env.SEED || 'secret';

// ============================
//  Google client id
// ============================

process.env.CLIENT_ID = process.env.CLIENT_ID || '552131373074-ti7c7f018firlb14jj2e4g74sj69kahg.apps.googleusercontent.com';

// ============================
//  Base de datos
// ============================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://eduarbboy12:abc123@ds145072.mlab.com:45072/cafe';
}

process.env.URLDB = urlDB;