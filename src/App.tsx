import { useState } from 'react'
import { State } from './store/State'
import './App.css'
import Child_Two from './Child_two'
import Child from './Child'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>this is legend test</div>
			<Child></Child>
			<div>----</div>
			<Child_Two></Child_Two>
		</>
	)
}

export default App
