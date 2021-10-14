import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/slices/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.showCounter());
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = (amountToIncreaseBy) => {
    dispatch(counterActions.increase(amountToIncreaseBy)); //<-- Anything sent to the action arrives as a property named payload underneath actions
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, 20)}>Increase by 20</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementCounterHandler() {
//     this.props.increment();
//   }

//   decrementCounterHandler() {
//     this.props.decrement();
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementCounterHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementCounterHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch({ type: actions.INCREMENT });
//     },
//     decrement: () => {
//       dispatch({ type: actions.DECREMENT });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
