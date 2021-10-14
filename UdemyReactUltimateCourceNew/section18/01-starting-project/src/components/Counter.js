import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/index";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  const incrementCounterHandler = () => {
    dispatch({ type: actions.INCREMENT });
  };

  const increaseHandler = (amountToIncreaseBy) => {
    dispatch({ type: actions.INCREASE, amount: amountToIncreaseBy });
  };

  const decrementCounterHandler = () => {
    dispatch({ type: actions.DECREMENT });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
