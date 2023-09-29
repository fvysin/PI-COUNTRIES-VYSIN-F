const loadCountries = require ('./utils')
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;


conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    
    console.log(`Server listening on port ${PORT}`);
    loadCountries()
})
}).catch(error => console.error(error))
