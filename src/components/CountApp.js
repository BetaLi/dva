import { connect } from 'dva'

const CountApp = ({count, dispatch}) => {
    return (
        <div>
            <div>Highest Record: {count.record}</div>
            <div>{count.current}</div>
            <div>
                <button onClick={() => {dispatch({type:'count/add'})}}>+</button>
                <button onClick={() => {dispatch({type:'count/minus'})}}>-</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return { count: state.count }
}
const HomePage = connect(mapStateToProps)(CountApp);

export default HomePage;