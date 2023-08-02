import { styled } from "../default_styles";

export const E_background_default = ({}) => {
	return (
		<_background>
		</_background>
	);
};

const _background = styled.div`
	z-index: -1;
	position: fixed;

	/* background: ${(props) => props.theme.style_gradient_pink}; */
	background: linear-gradient(#A9FFF0 0%, #FBBDFF 100%);
	filter: brightness(120%);
	background-size: 100% 100%;

	width: 100%;
	height: 100%;
`;
