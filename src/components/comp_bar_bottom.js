import icon_twitter from "../assets/icon_twitter.png";
import icon_facebook from "../assets/icon_facebook.png";
import icon_discord from "../assets/icon_discord.png";
import { keyframes } from "styled-components";

import logo_sugargenix from "../assets/logo_sugargenix_white.png";

import { styled, style_border_base, style_text_base, style_media_break } from "../default_styles";

export const E_bar_bottom_page = ({}) => {
	return (
		<_footer>
			<_left_footer_section>
				<_text_row>2108 N Street, Suite 4241</_text_row>
				<_text_row>Sacramento, CA 95816</_text_row>
				<_text_row>
					{/* <_logo_copyright src={logo_sugargenix} /> */}
					{"Sugargenix LLC | Copyright © 2022"}
				</_text_row>
			</_left_footer_section>

			<_right_footer_section>
				<_footer_icon href="https://www.facebook.com/Sugargenix" src={icon_facebook} />
				<_footer_icon href="https://discord.gg/ejGtPwa2WG" src={icon_discord} />
				<_footer_icon href="https://twitter.com/sugargenix?lang=en" src={icon_twitter} />
			</_right_footer_section>
		</_footer>
	);
};
const _footer = styled.div`
	background-color: ${(props) => props.theme.style_main_color};
	${style_border_base}

	border-width: 2px 0px 0px;
	height: 48px;

	bottom: 0;
	position: fixed;

	display: flex;
	width: 100%;

	z-index: 3;
`;
const _left_footer_section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0px 3px 0px 10px;

	width: 100%;
`;
const _right_footer_section = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	padding: 2px 14px 0px 0px;

	gap: 14px;
`;
const _text_row = styled.div`
	${style_text_base}
	font-size: 8px;
	align-self: flex-start;
`;

const _logo_copyright = styled.img`
	top: 2px;
	height: 8px;
	position: relative;
`;

const bounce = keyframes`
	0% { transform: scale(.8) }
	35% { transform: scale(1.2) }
	65% { transform: scale(0.9) }
	70% { transform: scale(0.95) }
	75% { transform: scale(1.1) }
	80% { transform: scale(1) }
	85% { transform: scale(.9) }
	100% { transform: scale(1) }
`;

const _footer_icon = styled.a`
	width: 22px;
	height: 22px;
	@media (max-width: ${style_media_break}) {
		width: 26px;
		height: 26px;
	}

	background: ${(props) => "url(" + props.src + ")"};
	background-size: cover;

	filter: ${(props) =>
		props.theme.style_accent_color == "#ffffff"
			? ""
			: `opacity(0.5) drop-shadow(0 0 0 ${(props) =>
					props.theme.style_accent_color}) saturate(2000%)`};

	transform-style: preserve-3d;
	-webkit-transform-style: preserve-3d;
	&:hover {
		animation: ${bounce} 0.8s;
	}
`;
