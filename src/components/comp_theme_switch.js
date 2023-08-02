import { useState } from "react";

import {
	css,
	styled,
	style_media_break,
	style_default_board_shadow,
	S_board_title,
	S_board_text,
} from "../default_styles";

import icon_settings from "../assets/icon_setting_recourse.png";
import { keyframes } from "styled-components";
import { E_theme_buttons } from "./comp_theme_buttons";

export const E_theme_switch = ({ set_theme }) => {
	const [active, setHamburgerActive] = useState(false);
	const handleToggle = () => {
		setHamburgerActive((prev) => !prev);
	};

	const handleOff = () => {
		setHamburgerActive(false);
	};

	const updateSize = () => {
		if (window.innerWidth >= parseFloat(style_media_break)) {
			setHamburgerActive(false);
		}
	};
	window.addEventListener("resize", updateSize);

	return (
		<_toggle_container>
			<_modal_side active={active}>
				<_modal_side_title>Secret Menu</_modal_side_title>
				<_modal_side_container>
					<S_board_text>Themes:</S_board_text>
					<E_theme_buttons set_theme={set_theme}></E_theme_buttons>
					<_secret_text>↑↑↓↓←→←→BA</_secret_text>
				</_modal_side_container>
			</_modal_side>
			<_hamburger onClick={handleToggle} active={active}>
				<_hamburger_bar_top active={active}></_hamburger_bar_top>
			</_hamburger>
			<_blur_background onClick={handleOff} active={active}></_blur_background>
		</_toggle_container>
	);
};

const _secret_text = styled.div`
	color: transparent;

	position: relative;
	align-self: center;

	&::selection {
		color: white;
		opacity: 0.5;
		background-color: #b4d5fe;
	}
`;

const _toggle_container = styled.div`
	@media (max-width: ${style_media_break}) {
		display: none !important;
	}
`;

const _blur_background = styled.div`
	width: 100%;
	height: 100%;

	z-index: 1;
	position: fixed;
	backdrop-filter: blur(1px);

	transition-duration: 0.2s;
	opacity: ${(props) => (props.active ? "1" : "0")};
	visibility: ${(props) => (props.active ? "" : "hidden")};
	background: ${(props) => (props.active ? "#0000005f" : "")};
`;
const _modal_side_container = styled.div`
	margin: 0px auto;
	gap: 15px;
	display: flex;
	flex-direction: column;

	width: 140px;
`;

const _modal_side_title = styled(S_board_title)`
	font-size: min(calc(10px + 3vw), 30px);
`;

const _modal_side = styled.div`
	width: 300px;
	height: 100%;
	right: -300px;
	top: 40px;

	padding: 30px 0px;

	${style_default_board_shadow}
	background: ${(props) => props.theme.style_main_color};
	-webkit-tap-highlight-color: transparent;

	z-index: 2;
	position: fixed;

	display: flex;
	flex-direction: column;

	transition-duration: 0.8s;
	opacity: ${(props) => (props.active ? "1" : "0")};
	transform: ${(props) => (props.active ? "translate(-300px, 0px)" : "")};

	max-height: calc(100% - 140px);
	overflow-y: scroll;

	&::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 0px;
	}
`;

const bounce = keyframes`
	0% { transform: scale(.8) }
	35% { transform: scale(1.3) }
	65% { transform: scale(0.8) }
	70% { transform: scale(0.95) }
	75% { transform: scale(1.1) }
	80% { transform: scale(1) }
	85% { transform: scale(.9) }
	100% { transform: scale(1) }
`;

const unbounce = keyframes`
	0% { transform: scale(.8) }
	34% { transform: scale(1.3) }
	65% { transform: scale(0.8) }
	70% { transform: scale(0.95) }
	75% { transform: scale(1.1) }
	80% { transform: scale(1) }
	85% { transform: scale(.9) }
	100% { transform: scale(1) }
`;

const _hamburger = styled.button`
	width: 28px;
	aspect-ratio: 1 / 1;
	right: 8px;
	top: 5px;

	z-index: 3;
	position: fixed;

	border: 0px;
	cursor: pointer;
	background: transparent;

	gap: 4px;
	padding: 0px;
	display: flex;
	align-items: center;

	opacity: ${(props) => (props.active ? "100" : "0")};
	transition-duration: 1s;
	animation: ${(props) =>
		props.active
			? css`
					${bounce} 0.8s
			  `
			: css`
					${unbounce} 0.8s
			  `};
	&:hover {
		opacity: 1;
	}
`;

const _hamburger_bar_top = styled.div`
	transition-duration: 1s;

	width: 100%;
	aspect-ratio: 1 / 1;
	transform: ${(props) => (props.active ? "rotate(200deg)" : "")};

	background-image: url(${icon_settings});
	background-size: cover;
`;
