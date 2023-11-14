// import ListGroup from "./components/ListGroup";

// function App() {
// 	let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

// 	const handleSelectItem = (item: string) => {
// 		console.log(item);
// 	};

// 	return (
// 		<div>
// 			<ListGroup
// 				items={items}
// 				heading="Cities"
// 				onSelectItem={handleSelectItem}
// 			/>
// 		</div>
// 	);
// }

// export default App;

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
	const [alertVisible, setAlertVisibility] = useState(false);
	return (
		<div>
			<>
				{alertVisible && (
					<Alert onClose={() => setAlertVisibility(false)}>
						<h1>Hey.</h1>
						<h2>Hi..</h2>
						<h3>Hello...</h3>
					</Alert>
				)}
				<Button color="danger" onClick={() => setAlertVisibility(true)}>
					Click Me
				</Button>
			</>
		</div>
	);
}

export default App;
