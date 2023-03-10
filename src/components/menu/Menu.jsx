import { StyledButtonToggle, StyledList, StyledMenu } from './styles';
import { useState } from 'react';

const Menu = () => {
	const [open, setOpen] = useState(false);
	return (
		<StyledMenu>
			<StyledButtonToggle onClick={() => handleClick(open, setOpen)}>
				Menu
			</StyledButtonToggle>
			<StyledList menu={open}>
				<li>Home</li>
				<li>Link</li>
				<li>Link</li>
			</StyledList>
		</StyledMenu>
	);
};

const handleClick = (open, setOpen) => {
	setOpen(!open);
};

export default Menu;
