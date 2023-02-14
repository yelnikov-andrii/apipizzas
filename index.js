import express from 'express';
import cors from 'cors';
import { router as pizzasRouter} from './routes/pizzas.js';
import { router as sushiRouter} from './routes/sushi.js';
import { router as shaurmaRouter} from './routes/shaurma.js';
import { router as saladsRouter} from './routes/salads.js';
import { router as mangalRouter} from './routes/mangal.js';
import { router as snackRouter} from './routes/snack.js';
import { router as soupesRouter} from './routes/soupes.js';

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));

app.use(pizzasRouter);
app.use(sushiRouter);
app.use(shaurmaRouter);
app.use(saladsRouter);
app.use(mangalRouter);
app.use(snackRouter);
app.use(soupesRouter);

app.listen(PORT);