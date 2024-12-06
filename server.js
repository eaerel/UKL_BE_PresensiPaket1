const express = require('express');
const app = express();


const port = 8000;
const cors = require('cors');


app.use(cors());


const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const attendanceRoute = require('./routes/attendance.route');
app.use('/api/user', userRoute);
app.use('/api/auth/login', authRoute);
app.use('/api/attendance', attendanceRoute)


app.listen(port, () => {
    console.log('Server is running on port ${port}');
})