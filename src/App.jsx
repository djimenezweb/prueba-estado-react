import { useState } from 'react';
import Menu from './components/menu/Menu';
import { StyledDiv } from './styles';

const App = () => {
	const [counter, setCounter] = useState(0);
	const [bgcolor, setBgcolor] = useState('red');
	const [borderRadius, setBorderRadius] = useState(16);

	return (
		<>
			<header>
				<Menu />
			</header>
			<h1>{counter}</h1>
			<button onClick={() => decrease(counter, setCounter)}>-1</button>
			<button onClick={() => reset(counter, setCounter)}>0</button>
			<button onClick={() => increase(counter, setCounter)}>+1</button>
			<StyledDiv color={bgcolor} borderRadius={borderRadius}>
				{borderRadius} px
			</StyledDiv>
			<button onClick={() => handleClick('green', setBgcolor)}>Green</button>
			<button onClick={() => handleClick('blue', setBgcolor)}>Blue</button>
			<button onClick={() => handleClick('red', setBgcolor)}>Red</button>
			<p></p>
			<button onClick={() => handleBorder(-4, borderRadius, setBorderRadius)}>
				-4 px
			</button>
			<span> border-radius </span>
			<button onClick={() => handleBorder(4, borderRadius, setBorderRadius)}>
				+4 px
			</button>
		</>
	);
};

const handleBorder = (increment, borderRadius, setBorderRadius) => {
	borderRadius += increment;
	setBorderRadius(borderRadius);
};

const handleClick = (string, setBgcolor) => {
	setBgcolor(string);
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
