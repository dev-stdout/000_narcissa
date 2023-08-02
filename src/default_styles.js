import styled, { css } from "styled-components";
import * as _themes from "./default_styles_color";

export const style_media_break = "770px";
export const style_text_default = "Source Code Pro";

export const style_border_base = css`
	border-style: solid;
	border-color: ${(props) => props.theme.style_text_color};
`;

export const style_default_border = css`
	${style_border_base}
	border-width: 1px;
`;

export const style_default_board_shadow = css`
	filter: drop-shadow(-4px 7px 7px rgba(0, 0, 0, 0.4));
`;

export const style_default_board_size = css`
	width: 80vw;
	max-width: 610px;
`;

export const style_default_board = css`
	display: flex;
	${style_default_board_size}

	${style_default_border}
	${style_default_board_shadow}

	background: ${(props) => props.theme.style_gradient_pink};
	background-size: cover;
	padding: 10px 5px 10px;

	margin: auto;
	margin-bottom: 30px;
`;

export const style_text_base = css`
	color: ${(props) => props.theme.style_text_color};
	text-align: center;
	font-family: ${style_text_default};
	font-display: swap;
`;

export const style_board_title = css`
	${style_text_base}

	font-size: min(calc(14px + 2.2vw), 36px);

	border-bottom: 1px solid ${(props) => props.theme.style_accent_color};

	width: 75%;
	align-self: center;
	margin: 0px 0px 5px;
`;

export const style_board_column = css`
	${style_default_board}
	flex-direction: column;
`;

export const style_text_link = css`
	${style_text_base}
	color: ${(props) => props.theme.style_darker_secondary_color};

	&:hover {
		text-shadow: 0 0 12px ${(props) => props.theme.style_secondary_color};
		color: ${(props) => props.theme.style_secondary_color};
		filter: brightness(110%);
	}
`;

export const style_board_text = css`
	${style_text_base}
	font-size: min(calc(8px + 2.2vw), 25px);

	width: 90%;
	margin: 5px auto;
`;

export const S_board_title = styled.div`
	${style_board_title}
`;

export const S_board_text = styled.div`
	${style_board_text}
`;

export const S_paragraph_compact = styled.p`
	${style_text_base}

	width: 90%;
	margin: 5px auto;
	margin-bottom: 2px;
	margin-top: 2px;
`;

export const S_board_text_alert = styled.em`
	${style_board_text}
	text-decoration: underline;
`;

export const S_board_column = styled.div`
	${style_board_column}
`;

export const S_text_link = styled.a`
	${style_text_link}
`;

export { styled, css };
