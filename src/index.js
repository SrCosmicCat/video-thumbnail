import express from 'express';
import { join } from 'node:path';

const app = express();

const DIR = process.cwd();
const PORT = 3000;

app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.sendFile(join(DIR, 'src/public/pages/index.html'));
});

app.use('/css', express.static(join(DIR, 'src/public/css')));
app.use('/js', express.static(join(DIR, 'src/public/js')));
app.use('/components', express.static(join(DIR, 'src/public/components')));
app.use('/font', express.static(join(DIR, 'src/public/font')));
app.use('/img', express.static(join(DIR, 'src/public/img')));
app.use('/data', express.static(join(DIR, 'src/public/data')));

app.listen(PORT, () => {
    console.log(`App running in http://localhost:${PORT}`);
});
