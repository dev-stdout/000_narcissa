import { styled, style_default_board_size } from "../default_styles";

export const E_date_mark = ({created, edited}) => {
	return <_wheel_card_container>
		<_date_mark_text2 active={true}>By: Kevin Mira</_date_mark_text2>
		<_date_mark_text active={true}>Created: {created}</_date_mark_text>
		<_date_mark_text active={edited != undefined}>Edited: {edited}</_date_mark_text>
	</_wheel_card_container>
}

const _wheel_card_container = styled.div`
	width: 150px;
	/* height: 1px; */

	width: 90%;
	margin: 4px auto 14px;

	${style_default_board_size}

	/* border: 1px solid red; */
	`

const _date_mark_text = styled.div`
	display: ${(props) => (props.active ? "flex" : "none")};
	font-size: min(calc(8px + 1.2vw), 22px);
	font-weight: bold;
	filter: brightness(2);

	-webkit-background-clip: text;
	background-clip: text;
	background-color: #2a1a2873;
	color: transparent;

	text-shadow: -1px 0px #ff00bf00, 1px .5px .75px #a37a9741;

	position: relative;
	left: -20px;
`

const _date_mark_text2 = styled.div`
	display: ${(props) => (props.active ? "flex" : "none")};
	font-size: min(calc(6px + 1.2vw), 18px);
	font-weight: bold;
	filter: brightness(2);

	-webkit-background-clip: text;
	background-clip: text;
	background-color: #2a1a2873;
	color: transparent;

	text-shadow: -1px 0px #ff00bf00, 1px .5px .75px #a37a9741;

	position: relative;
	left: -20px;
`
