import { styled, style_default_border, style_default_board_shadow, theme, style_default_board_size, S_board_title, S_board_text, style_media_break, style_board_text, style_text_base } from "../default_styles";
import news_image from "../news/news_001_center_cut.png"
import news_image3 from "../news/news_002_center_cut.png"
import news_image2 from "../news/SugargenixBlueGradient.png"
import mympheus_title from "../assets/mympheus_title.png";

export const E_wheel_news_001 = ({}) => {
	return <>
		<S_board_title>Website Unveiled</S_board_title>
		<_wheel_card_container_inner>

			<_left_side>
				<_description_small>Join us on an adventure as we bring sweet games to life, one byte at a time.</_description_small>
				<_description>
					We are thrilled to introduce Sugargenix, a game studio company that embarked on a journey to create captivating experiences.
					<p>
						Join us on an adventure as we bring sweet games to life, one byte at a time.
					</p>
				</_description>
			</_left_side>
			<_right_side>
			</_right_side>
		</_wheel_card_container_inner>
	</>
}

export const E_wheel_news_002 = ({}) => {
	return <>
		<S_board_title>Introducing Mympheus!</S_board_title>
		<_wheel_card_container_inner>
			<_right_side_mympheus>
			</_right_side_mympheus>
		</_wheel_card_container_inner>
		<_description>
			Find out more about Mympheus and the Dawnlit Grotto, our first mobile wave shooter!
			<p>
				Join us on an adventure as we bring sweet games to life, one byte at a time.
			</p>
		</_description>
	</>
}

export const E_wheel_news_003 = ({}) => {
	return <>
		<S_board_title>Hiring Pixel Artist</S_board_title>
		<_wheel_card_container_inner>

			<_right_side2>
			</_right_side2>
			<_left_side>
				<_description_small>Sugargenix is hiring a Pixel artist for our upcoming mobile game, Mympheus.</_description_small>
				<_description>
					Sugargenix is hiring a Pixel artist for our upcoming mobile game, Mympheus.
					<p>
						Responsibilities include animation, character design, ui, backgrounds, particle effects, etc...
					</p>
				</_description>
			</_left_side>
		</_wheel_card_container_inner>
	</>
}

export const E_wheel_card_cont = ({ activeCard, child, href_url }) => {
	let path = window.location.pathname.slice(1);

	return <_wheel_card_container activeC={activeCard} href={href_url} active={path == "/news/001"}>
		{child}
	</_wheel_card_container>
}

const _wheel_card_container = styled.a`
	height: 100%;

	padding: 8px 18px 0px;
	padding-left: min(calc(4px + 4vw), 32px);
	box-sizing: border-box;

	/* display: flex; */
	flex-direction: column;
	text-decoration: none;

	display: ${(props) => (props.activeC == true ? "flex" : "none")};
	/* display: flex; */
`

const _wheel_card_container_inner = styled.div`
	height: 100%;

	display: flex;

	/* border: 1px solid red; */
`

const _left_side = styled.div`
	width: 38%;
	height: 100%;
	margin-right: 14px;

	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* border: 1px solid purple; */
	`

const _description_small = styled.div`
	${style_text_base}
	margin-top: 10px;

	font-size: min(calc(4px + 2vw), 24px);
	line-height: min(calc(4px + 2vw), 24px);

	height: 85%;
	padding: 15px 10px;
	margin-top: -15px;

	display: flex;
	justify-self: center;
	justify-items: center;
	justify-content: center;
	align-items: center;
	align-self: center;
	align-content: center;

	@media (min-width: ${'451px'}) {
		display: none !important;
	}
`

const _description = styled.div`
	${style_text_base}
	font-size: min(calc(4px + 2vw), 25px);
	line-height: min(calc(4px + 2vw), 25px);

	/* height: 100%; */
	padding: 15px 0px 0px;
	text-align: start;

	@media (max-width: ${'450px'}) {
		display: none !important;
	}
`

const _right_side = styled.div`
	width: 62%;

	background-image: url(${news_image});
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;

	${style_default_board_shadow}
`

const _right_side2 = styled.div`
	width: 52%;
	height: 70%;

	background-image: url(${news_image3});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	border-radius: 20px;
	border: 3px solid white;
	margin: auto;

	${style_default_board_shadow}
`

const _right_side_mympheus = styled.div`
	width: 100%;
	height: 100%;

	background-image: url(${mympheus_title});
	background-size: contain;
	background-position: 45% 50%;
	background-repeat: no-repeat;

	${style_default_board_shadow}
`