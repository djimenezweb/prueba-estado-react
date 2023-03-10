import styled from 'styled-components';

const StyledDiv = styled.div`
	margin: 1rem;
	width: 12rem;
	height: 12rem;
	background-color: ${({ color }) => color};
	border-radius: ${({ borderRadius }) => borderRadius}px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { StyledDiv };
