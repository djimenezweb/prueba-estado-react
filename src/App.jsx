import { useState } from 'react';

const App = () => {
	const [state, setState] = useState('hola');

	console.log(state);
	return (
		<>
			<h1>{state}</h1>
			<button onClick={() => console.log('clic')}>Click</button>
		</>
	);
};

export default App;
