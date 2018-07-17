import dva from 'dva';
import './index.css';
import countModel from './models/countModel'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
countModel.map(item => app.model(item));


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
