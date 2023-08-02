import background_hologram from "../assets/background_hologram_recourse.webp";
import { styled } from "../default_styles";

export const E_background_default = ({}) => {
	return (
		<_background>
			<_background_holograms rel="preload" />
		</_background>
	);
};

const _background = styled.div`
	z-index: -1;
	position: fixed;

	background: linear-gradient(
			158deg,
			#e6e6e633 -80%,
			${(props) => props.theme.style_darker_secondary_color + "33"} 100%
		),
		linear-gradient(
			158deg,
			${(props) => props.theme.style_neutral_light_color} -80%,
			${(props) => props.theme.style_main_color} 200%
		);
	filter: brightness(120%);
	background-size: 100% 100%;

	width: 100%;
	height: 100%;
`;

const _background_holograms = styled.div`
	opacity: 10%;
	background-image: url(${background_hologram});
	background-size: 1000px 700px;

	height: 100%;
`;
