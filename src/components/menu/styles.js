import styled from 'styled-components';

const StyledMenu = styled.nav`
	height: 100px;
	background-color: hotpink;
	position: relative;
`;

const StyledList = styled.ul`
	margin: 0;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	@media screen and (max-width: 640px) {
		width: 400px;
		background-color: paleturquoise;
		position: absolute;
		inset: 0 0 auto auto;
		padding: 4rem 0;
		flex-direction: column;
		gap: 2rem;
		transition: transform 250ms;
		transform: translateX(${({ menu }) => (menu ? '0' : '100%')});
	}
`;

const StyledButtonToggle = styled.button`
	position: absolute;
	inset: 1rem auto 1rem 1rem;
	@media screen and (min-width: 640px) {
		display: none;
	}
`;

export { StyledMenu, StyledList, StyledButtonToggle };
