import { keyframes } from "styled-components";
import { styled, style_default_board_shadow, style_default_border, style_text_base, style_board_title } from "../../default_styles";
import { E_badge_new } from "../../components/comp_badge";

export const E_news_card_001 = ({ index }) => {
	return (
		<_card index={index}>
			<E_badge_new></E_badge_new>
			<_card_left>
				<_card_title>Website Unveiled!</_card_title>
				<_card_text>We are thrilled to introduce Sugargenix, a game studio company, and welcome you to our first post out of many to come!</_card_text>
			</_card_left>
		</_card>
	)
}

export const E_news_card_002 = ({ index }) => {
	return (
		<_card index={index}>
			<E_badge_new></E_badge_new>
			<_card_left>
				<_card_title>Mympheus Log 001</_card_title>
				<_card_text>Our first dev log where we delve into our first mobile game '<_special_text_style>Mympheus</_special_text_style>'.</_card_text>
			</_card_left>
		</_card>
	)
}

export const E_news_card_003 = ({ index }) => {
	return (
		<_card index={index}>
			<E_badge_new></E_badge_new>
			<_card_left>
				<_card_title>Hiring Pixel Artist</_card_title>
				<_card_text>Sugargenix is looking for a part-time pixel artist to join us!</_card_text>
			</_card_left>
		</_card>
	)
}
export const E_news_card = ({ child, href }) => {
	return (
		<a style={{textDecoration: "none"}} href={href}>
			{child}
		</a>
	);
};

const _special_text_style = styled.em`
	font-size: min(calc(4px + 1.3vw), 18px);

	background: ${(props) => props.theme.style_accent_color};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	/* font-style: normal; */
	-webkit-text-stroke: .2px white;
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
	width: 95%;
	aspect-ratio: 4 / 1;
	margin: min(2.5vw, 25px) auto;

	/* margin-left: ${(props) => (props.index % 2 == 1 ? "5%" : "0%")}; */

	display: flex;
	position: relative;

	${style_default_border}
	border-radius: min(max(10px, 2vw), 20px);
	${style_default_board_shadow}
	background: rgba(255, 255, 255, 0.5) ${(props) => props.theme.style_gradient_blue};
	animation: ${unbounce} .5s;
	/* animation: ${debounce} .8s; */

	&:hover {
		/* animation: ${shake} 0.5s; */
		animation: ${pop} 0.3s;
		/* animation-iteration-count: infinite; */
		transform: scale(1.03);
		filter: drop-shadow(-4px 7px 10px rgba(0, 0, 0, 0.6)) brightness(1.08);
	}
	padding: 6px;
	box-sizing: border-box;
	`;

const _card_left = styled.div`
	/* border: 1px solid red; */
	width: 100%;
	display: flex;
	flex-direction: column;
	`;

const _card_right = styled.div`
	/* border: 1px solid blue; */
	flex: auto;
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
