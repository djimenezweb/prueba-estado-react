import { useState } from 'react';

const App = () => {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<h1>{counter}</h1>
			<button onClick={() => decrease(counter, setCounter)}>-1</button>
			<button onClick={() => reset(counter, setCounter)}>0</button>
			<button onClick={() => increase(counter, setCounter)}>+1</button>
		</>
	);
};

const decrease = (counter, setCounter) => {
	counter--;
	setCounter(counter);
};

const increase = (counter, setCounter) => {
	counter++;
	setCounter(counter);
};

const reset = (counter, setCounter) => {
	counter = 0;
	setCounter(counter);
};

export default App;
