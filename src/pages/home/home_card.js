import { keyframes } from "styled-components";
import { styled, style_default_border, style_text_base, style_board_title, style_text_default, style_border_base } from "../../default_styles";

import border_dashed from "../../assets/border_dashed.svg"

export const E_news_card = ({ href }) => {
	return (
		<a style={{textDecoration: "none"}} href={href}>
			<_card>
				<_card_left>
					<_card_title>Title of the bounty, this is the title, this is the title.</_card_title>
					<_dots></_dots>
				</_card_left>
				<_card_right>
					<_bounty_cost>
						<_special_font cost_color="yellow">5</_special_font>AVAX
					</_bounty_cost>
					<_dots></_dots>
					<_bounty_status>unclaimed</_bounty_status>
					<_dots></_dots>
					<_bounty_date>Feb 25th, 2022</_bounty_date>
				</_card_right>
			</_card>
		</a>
	);
};

const _special_font = styled.div`
	color: ${(props) => props.cost_color};
	font-family: ${style_text_default};
	font-family: Saira;

	font-weight: 700;
	font-size: 36px;

	-webkit-text-fill-color: orange;
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: blue;
`
const _bounty_cost = styled.div`
	/* font-size: min(calc(4px + 1.3vw), 18px); */
	font-family: ${style_text_base};
	font-weight: bold;
	font-size: 24px;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	width: 30%;
	`
const _bounty_status = styled.div`
	width: 120px;
	aspect-ratio: 5/2;
	display: flex;
	align-items: center;
	justify-content: center;
	background: cyan;

	${style_default_border}
	position: relative;

	::before {
		content: "";
		${style_default_border}
		position: absolute;
		top: -10px;
		left: 10px;
		background: purple;

		width: 100%;
		height: 100%;
		z-index: -1;
	};
`
const _bounty_date = styled.div`
	display: flex;
	align-items: center;

	${style_text_base}
	/* border: 1px solid red; */
`

const _dots = styled.div`
	width: 30px;
	height: 0px;

	border-style: dotted;
	border-width: 2px;
`

const shake = keyframes`
	0%   { transform: scale(1.01) translate(.2px,	.2px)	rotate(0deg); }
	20%  { transform: scale(1.01) translate(-.2px,	0px)	rotate(.1deg); }
	40%  { transform: scale(1.01) translate(.2px,	-.2px)	rotate(.1deg); }
	60%  { transform: scale(1.01) translate(-.2px,	.2px)	rotate(0deg); }
	80%  { transform: scale(1.01) translate(-.2px,	-.2px)	rotate(.1deg); }
	100% { transform: scale(1.01) translate(.2px,	-.2px)	rotate(-.1deg); }
`;

const unbounce = keyframes`
	1% { transform: scale(1.033, 1.038) }
	10% { transform: scale(1.03, 1.032) }
	25% { transform: scale(1.02, 1.02) }
	40% { transform: scale(1, 1) }
	42% { transform: scale(.99, .95) }
	45% { transform: scale(1.005, 1.005) }
	50% { transform: scale(1.01, 1.015) }
	100% { transform: scale(1, 1) }
`;

const debounce = keyframes`
	20% { transform: scale(.8) }
	42% { transform: scale(1.05) }
	55% { transform: scale(0.85) }
	65% { transform: scale(0.95) }
	80% { transform: scale(1) }
	`;

const pop = keyframes`
	0%   { transform: scale(1.01) }
	20%  { transform: scale(1.04) }
	40%  { transform: scale(1.05) }
	70%  { transform: scale(1.03) }
	80%  { transform: scale(1.02) }
	100% { transform: scale(1.03) }
`;

const _card = styled.div`
	width: 100%;
	display: flex;

	${style_default_border}
	border-width: 0px 0px 1px 0px;
	border-bottom-color: ${(props) => props.theme.style_neutral_light_color};
	padding: 20px 40px;

	background: transparent;
	animation: ${unbounce} .5s;
	/* animation: ${debounce} .8s; */

	&:hover {
		/* animation: ${shake} 0.5s; */
		animation: ${pop} 0.3s;
		/* animation-iteration-count: infinite; */
		transform: scale(1.03);
		filter: drop-shadow(-4px 7px 10px rgba(0, 0, 0, 0.6)) brightness(1.08);
	}
	box-sizing: border-box;
`;

const _card_left = styled.div`
	/* border: 1px solid red; */
	width: 45%;
	display: flex;
	flex-direction: row;
	align-items: center;
	`;

const _card_right = styled.div`
	width: 60%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: end;
	/* border: 1px solid blue; */
`;

const _card_title = styled.div`
	/* ${style_text_base} */
	/* align-self: center; */

	${style_board_title}
	font-size: min(calc(2px + 2vw), 24px);
	margin-bottom: min(1vw, 8px);

	/* border: 1px solid black; */
	`;

const _card_text = styled.div`
	${style_text_base}
	font-size: min(calc(2px + 1.3vw), 16px);
	width: 100%;

	position: relative;
`;
