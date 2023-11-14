import { useState } from "react";

interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
	const getMessage = () => {
		return items.length === 0 && <p>No Items Found</p>;
	};

	// Event Handler
	// const handleClick = (event: MouseEvent) => console.log(event);

	// Hook
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
			{getMessage()}
			<div className="card" style="width: 18rem;">
				<ul className="list-group list-group-flush">
					{items.map((item, index) => (
						<li
							className={
								selectedIndex === index
									? "list-group-item active"
									: "list-group-item"
							}
							key={item}
							onClick={() => {
								setSelectedIndex(index);
								onSelectItem(item);
							}}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default ListGroup;
