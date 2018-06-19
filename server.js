const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("it's working"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
