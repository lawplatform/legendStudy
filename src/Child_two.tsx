import { State } from "./store/State"

export const Child_Two = () => {
	const click = () => {
		State.settings.showSidebar.set(false);
		console.log(State.settings.showSidebar.get());

	}
	return (
		<div>{State.settings.showSidebar.get() ? "hello" : "no"}
			<button onClick={click}> click </button>
		</div>
	)
}

export default Child_Two;
