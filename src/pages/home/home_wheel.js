import { useState } from "react";

import { keyframes, css} from "styled-components";

import { styled, style_default_border, style_default_board_shadow } from "../../default_styles";
import { E_wheel_card_cont } from "../../components/comp_wheel_card";
import { E_wheel_news_001, E_wheel_news_002, E_wheel_news_003 } from "../../components/comp_wheel_card";

import wheel_icon from "../../assets/wheel_count.png";
import left_caret from "./caret-left-solid.svg"
import right_caret from "./caret-right-solid.svg"

const news_amount = 2;

export const E_wheel_card = ({}) => {
	const [activeNo, setActiveNo] = useState(1);

	const handleSwitch = (no) => {
		setActiveNo(no);
	};

	const handleSwitchAdd = (no) => {
		setActiveNo(((activeNo + no) + news_amount) % news_amount);
	};

	return <>
		<_board_wheel>
			<_next_overlay>
				<_next_card_button onClick={() => handleSwitchAdd(-1)}/>
				<_next_card_button onClick={() => handleSwitchAdd(1)}/>
			</_next_overlay>

			<E_wheel_card_cont child={<E_wheel_news_001/>} activeCard={activeNo == 0} href_url={"/news/001"}/>
			<E_wheel_card_cont child={<E_wheel_news_002/>} activeCard={activeNo == 1} href_url={"/news/002"}/>
			{/* <E_wheel_card_cont child={<E_wheel_news_003/>} activeCard={activeNo == 2} href_url={"/news/004"}/> */}
			{/* <E_wheel_card_cont child={<E_wheel_news_001/>} activeCard={activeNo == 3}/>
			<E_wheel_card_cont child={<E_wheel_news_001/>} activeCard={activeNo == 4}/> */}

		</_board_wheel>

		<_wheel_indicator_div>
			<_wheel_indicator_next onClick={() => handleSwitchAdd(-1)} src={left_caret}></_wheel_indicator_next>

			<_wheel_indicator_cont onClick={() => handleSwitch(0)}><_wheel_indicator active={activeNo == 0}/></_wheel_indicator_cont>
			<_wheel_indicator_cont onClick={() => handleSwitch(1)}><_wheel_indicator active={activeNo == 1}/></_wheel_indicator_cont>
			<_wheel_indicator_cont onClick={() => handleSwitch(2)}><_wheel_indicator active={activeNo == 2}/></_wheel_indicator_cont>

			<_wheel_indicator_next onClick={() => handleSwitchAdd(1)} src={right_caret}></_wheel_indicator_next>
		</_wheel_indicator_div>
	</>;
};

const _next_overlay = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;

	width: 100%;
	height: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
	pointer-events: none;
`;

const _next_card_button = styled.div`
	width: 10%;
	aspect-ratio: 1 / 1;

	/* border: 1px solid blue; */

	z-index: 10;
	pointer-events: fill;
`;

const _board_wheel = styled.div`
	position: relative;
	width: 90vw;
	max-width: 720px;
	aspect-ratio: 90 / 55;

	margin: auto;
	${style_default_border}
	${style_default_board_shadow}
	/* background: ${(props) => props.theme.style_gradient_blue}, url($ {wheel_background}); */
	background: #6a6a6a ${(props) => props.theme.style_gradient_blue};
	background-size: cover;
`;

const _wheel_indicator_div = styled.div`
	margin: 14px auto;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2px;
`;

const bounce = keyframes`
	0% { transform: scale(.8) }
	35% { transform: scale(1.1) }
	65% { transform: scale(0.9) }
	70% { transform: scale(0.95) }
	75% { transform: scale(1.1) }
	80% { transform: scale(1) }
	85% { transform: scale(.9) }
	100% { transform: scale(1) }
	`;

const bounce1 = keyframes`
	0% { transform: scale(.8) }
	34% { transform: scale(1.1) }
	65% { transform: scale(0.9) }
	70% { transform: scale(0.95) }
	75% { transform: scale(1.1) }
	80% { transform: scale(1) }
	85% { transform: scale(.9) }
	100% { transform: scale(1) }
	`;

const bounce2 = keyframes`
	0% { transform: scale(.8) }
	50% { transform: scale(1.03) }
	85% { transform: scale(0.95) }
	100% { transform: scale(1) }
`;

const unbounce = keyframes`
	20% { transform: scale(.8) }
	42% { transform: scale(1.05) }
	55% { transform: scale(0.85) }
	65% { transform: scale(0.95) }
	80% { transform: scale(1) }
	`;

const _wheel_indicator_cont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 28px;
	aspect-ratio: 1 / 1;

	/* border: 1px solid blue; */
`

const _wheel_indicator_next = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	aspect-ratio: 1 / 1;

	background: ${(props) => "url(" + props.src + ")"};
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;

	/* filter: ${(props) =>
		props.theme.style_accent_color == "#ffffff"
			? ""
			: `opacity(0.5) drop-shadow(0 0 0 ${(props) =>
					props.theme.style_accent_color}) saturate(2000%)`}; */
	/* border: 1px solid blue; */

	filter: brightness(0) invert(1);
`

const _wheel_indicator = styled.div`
	& {
		max-width: ${(props) => (props.active == true ? "24px" : "16px")};
		max-height: ${(props) => (props.active == true ? "24px" : "16px")};
		width: ${(props) => (props.active == true ? "calc(8px + 2.8vw)" : "calc(5px + 2.2vw)")};
		height: ${(props) => (props.active == true ? "calc(8px + 2.8vw)" : "calc(5px + 2.2vw)")};

		z-index: 0;

		border: 2px solid ${(props) => props.theme.style_accent_color};
		border-radius: 50%;
	}

	&:before {
		content: "";

		height: 100%;

		border-radius: 50%;

		display: block;
		background-size: 180%;
		background-position: center;
		background-image: url(${wheel_icon});
		filter: ${(props) => (props.active == true ? "brightness(100%)" : "brightness(70%)")};
	}


	&:hover:before {
		filter: brightness(115%);
	}

	animation: ${(props) => (props.active ? css`${bounce} 0.8s` : css`${bounce2} 0.8s`)};

	&:hover {
		filter: brightness(100%);
		animation: ${(props) => (props.active ? css`${bounce1} 0.8s` : css`${unbounce} 0.8s`)};
	}
`;
