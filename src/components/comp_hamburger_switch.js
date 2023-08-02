import { useState } from "react";

import {
	css,
	styled,
	style_media_break,
	style_default_board_shadow,
	S_board_title,
	S_text_link,
} from "../default_styles";
import { E_theme_buttons } from "./comp_theme_buttons";

export const E_hamburger_switch = ({ set_theme }) => {
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
				<_modal_side_title>Menu</_modal_side_title>
				<_modal_side_container>
					<_modal_side_bar href="/home">Home</_modal_side_bar>
					<_modal_side_bar href="/about">About</_modal_side_bar>
					<_modal_side_bar href="/team">Team</_modal_side_bar>
				</_modal_side_container>
				<div style={{ margin: "8vh 0px" }}>
					<E_theme_buttons set_theme={set_theme}></E_theme_buttons>
				</div>
			</_modal_side>
			<_hamburger onClick={handleToggle} active={active}>
				<_hamburger_bar_top active={active}></_hamburger_bar_top>
				<_hamburger_bar_mid active={active}></_hamburger_bar_mid>
				<_hamburger_bar_bot active={active}></_hamburger_bar_bot>
			</_hamburger>
			<_blur_background onClick={handleOff} active={active}></_blur_background>
		</_toggle_container>
	);
};

const _toggle_container = styled.div`
	@media (min-width: ${style_media_break}) {
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
	gap: 5px;
	display: flex;
	flex-direction: column;
`;
const _modal_side_bar = styled(S_text_link)`
	text-decoration: none;
	font-size: calc(15px + 2vw);

	color: ${(props) => props.theme.style_accent_color};
	border: 0px solid ${(props) => props.theme.style_accent_color + "44"};
	border-bottom-width: 1px;
`;

const _modal_side_title = styled(S_board_title)`
	font-size: calc(18px + 4vw);
`;

const _modal_side = styled.div`
	width: 40%;
	height: 100%;
	right: -30%;
	top: 40px;

	padding-top: 30px;

	${style_default_board_shadow}
	background: ${(props) => props.theme.style_main_color};
	pointer-events: ${(props) => (props.active ? "auto" : "none")};
	filter: brightness(90%);

	z-index: 2;
	position: fixed;

	display: flex;
	flex-direction: column;

	transition-duration: 0.8s;
	opacity: ${(props) => (props.active ? "1" : "0")};
	transform: ${(props) => (props.active ? "translate(-70%, 0px)" : "")};

	max-height: calc(100% - 100px);
	overflow-y: scroll;

	&::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 0px;
	}
`;

const _hamburger = styled.button`
	width: 32px;
	aspect-ratio: 1 / 1;
	right: 8px;
	top: 4px;

	z-index: 3;
	position: fixed;

	border: 0px;
	cursor: pointer;
	background: transparent;

	gap: 4px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

const _hamburger_common = css`
	width: 18px;
	height: 2px;

	border-radius: 3px;
	background-color: ${(props) => props.theme.style_accent_color};

	transition-duration: 0.6s;
`;

const _hamburger_bar_top = styled.div`
	${_hamburger_common}
	transform: ${(props) => (props.active ? "translate(0, 6px) rotate(-225deg)" : "")};
`;
const _hamburger_bar_mid = styled.div`
	opacity: ${(props) => (props.active ? "0" : "100")};
	${_hamburger_common}
`;
const _hamburger_bar_bot = styled.div`
	${_hamburger_common}
	transform: ${(props) => (props.active ? "translate(0px, -6px) rotate(45deg)" : "")};
`;
