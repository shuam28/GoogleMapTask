// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const departmentRoutes = require('./routes/departmentRoutes');
// const employeeRoutes = require('./routes/employeeRoutes');

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// app.use('/api/auth', authRoutes);
// app.use('/api/departments', departmentRoutes);
// app.use('/api/employees', employeeRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

////////////////////////////////////////

const express = require('express');
const googleDistanceMatrix = require('google-distance-matrix');

const app = express();

app.get('/distance', (req, res) => {
    const city1 = req.query.city1;
    const city2 = req.query.city2;

    try {
        const distance = googleDistanceMatrix.getDistance({
            origins: [city1],
            destinations: [city2],
            mode: 'driving',
        });

        res.status(200).json({
            distance: distance,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
});

app.listen(3000, () => console.log('API listening on port 3000'));
