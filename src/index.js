import dva from 'dva';
import './index.css';
import key from 'keymaster'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model({
    namespace: 'count',
    state: {
        record: 0,
        current: 0,
    },
    reducers:{
       add(state) {
           const newCurrent = state.current+1;
           return {
               ...state,
               record:newCurrent>state.record?newCurrent:state.record,
               current:newCurrent,
           }
       },
       minus(state) {
            return {
                ...state,current:state.current-1
            }
       } 
    },
    effects: {
        *add(action, { call, put }) {
            yield call(delay,1000);
            yield put({type:'minus'})
        }
    },
    subscriptions:{
        keyboardWatcher({dispatch}) {
            key('ctrl+up', () => { dispatch({type:'add'})})
        }
    }
})
function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve,timeout)
    })    
}

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
