const express = require('express');
const cors = require('cors');
const app = express();

// Configurer CORS pour autoriser toutes les origines (à ajuster en fonction de vos besoins)
app.use(cors());

// ... Vos autres configurations

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
