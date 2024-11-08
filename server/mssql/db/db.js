// const sql = require('mssql');
// require('dotenv').config();

// const dbConfig = {
//   server: 'DESKTOP-BV3OFQU\\SQLEXPRESS02', // Use appropriate server name
//   database: 'DEMO',
//   driver: 'msnodesqlv8', // Ensure msnodesqlv8 is installed
//   options: {
//     trustedConnection: true, // Use this for Windows Authentication
//     encrypt: true,
//     trustServerCertificate: true,
//     connectionTimeout: 30000, // Set a higher connection timeout
//   }, 
// };

// const poolPromise = new sql.ConnectionPool(dbConfig)
//   .connect()
//   .then(pool => {
//     console.log('Connected to SQL Server');
//     return pool;
//   })
//   .catch(err => {
//     console.error('Database connection failed:', err);
//   });

// module.exports = {
//   sql,
//   poolPromise,
// };
