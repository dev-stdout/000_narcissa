import logo_sugargenix from "../assets/logo_sugargenix.webp";

import {
	styled,
	style_default_border,
	style_media_break,
	style_text_base,
} from "../default_styles";

export const E_bar_top_page = ({}) => {
	let path = window.location.pathname.slice(1);

	return (
		<_bar>
			<_container>
				<_footer_icon href="/home" active={path == "home" || path == ""}>
					Home
				</_footer_icon>
				<_footer_icon href="/about" active={path == "about"}>
					About
				</_footer_icon>
				<_footer_icon href="/team" active={path == "team"}>
					Team
				</_footer_icon>
			</_container>
			<_rect_logo rel="preload" href="/home">
				<_image_logo src={logo_sugargenix} />
			</_rect_logo>
		</_bar>
	);
};

const _footer_icon = styled.a`
	${style_text_base}
	text-decoration: none;

	color: ${(props) =>
		props.active ? props.theme.style_accent_color : props.theme.style_accent_color + "aa"};
	font-size: ${(props) => (props.active ? `18px` : `17px`)};
	&:hover {
		text-shadow: 0 0 12px ${(props) => props.theme.style_secondary_color};
		color: ${(props) => props.theme.style_secondary_color};
		filter: brightness(110%);
	}

	width: 52px;
`;

const _container = styled.div`
	position: fixed;

	height: 38px;

	display: flex;
	align-items: center;
	padding: 2px 10px 0px 10px;

	gap: 4px;

	@media (max-width: ${style_media_break}) {
		display: none !important;
	}
`;
const _rect_logo = styled.a`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;

	${style_default_border}
	border-radius: 6vw;
	border-width: 2px;

	background: ${(props) => props.theme.style_gradient_blue} #aaaaaa;

	filter: drop-shadow(-4px 5px 2px rgba(0, 0, 0, 0.352));

	top: max(calc(30px - 6vw), 10px);
	margin: auto;

	width: 60vw;
	aspect-ratio: 60 / 10.8;

	max-width: 262px;
	min-width: 150px;
`;
const _image_logo = styled.img`
	width: 92%;
	height: 80%;
`;
const _bar = styled.div`
	z-index: 3;
	position: fixed;
	border-style: solid;
	border-color: ${(props) => props.theme.style_accent_color};
	border-width: 0px 0px 2px;
	background-color: ${(props) => props.theme.style_main_color};

	width: 100%;
	height: 40px;

	/* border: 1px solid red; */
`;
