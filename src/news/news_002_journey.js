import { keyframes, css } from "styled-components";

import { E_connect_board } from "../components/comp_connect_board";
import { E_page } from "../components/comp_page";
import { E_date_mark } from "../components/comp_news_datemark";
import {
	styled,
	S_board_column,
	S_board_title,
	S_board_text,
	style_default_board_size,
	style_default_border,
	style_default_board_shadow,
	S_paragraph_compact,
	S_text_link,
} from "../default_styles";

import mympheus_title from "../assets/mympheus_title.png";
import bottom_banner from "../assets/banner_art.gif";

export const E_news_002 = ({}) => {
	return (
		<E_page>
			<_board_hidden>
				<_image_logo src={mympheus_title} />
				<_board>
					<S_board_text>
						<p>In the making!</p>
						<p>One byte at a time.</p>
					</S_board_text>
					<_promo_gif src={bottom_banner}></_promo_gif>
				</_board>
			</_board_hidden>
			<E_date_mark created={"2023-05-07"}></E_date_mark>
			<S_board_column>
				<S_board_title>Dev Log #1</S_board_title>
				<S_board_text>
					<p>
						We are excited to bring you our first post! Here is a
						brief introduction to '<_special_text_style>Mympheus and
						the Dawnlit Grotto</_special_text_style>'.
					</p>
				</S_board_text>
			</S_board_column>
			<S_board_column>
				<S_board_title>The Game</S_board_title>
				<S_board_text>
						<p>
						Embark on an epic adventure in '<_special_text_style>Mympheus and the Dawnlit
						Grotto</_special_text_style>'. Tap away your foes, incessantly unleashing abilities
						in this fast paced action wave shooter.
						</p>
						<p>
						Delve into the ancient caves below finding
						treasures and weapons of a bygone era. Unlock the secrets of your weapons as you
						progress in your journey making them faster, better, stronger and more destructive.
						</p>
				</S_board_text>
			</S_board_column>
			<S_board_column>
				<S_board_title>Theory Crafting</S_board_title>
				<S_board_text>
					<p>
						In this section we would like to point out the direction we hope to take the game.
					</p>

					<_list>
						<li>Fun</li>
						<li>Diverse abilities</li>
						<li>Tappity-tap, tap</li>
						<li>Chaotic but forgiving</li>
						<li>Adventure!</li>
					</_list>

					<p>
						We hope to make a forgiving but chaotic mobile game that has you tapping all over the
						screen unleashing hand-crafted abilities with diverse personalities and mechanics.
					</p>
					<p>
						So what are you waiting for come join us on this adventure!
					</p>
				</S_board_text>
			</S_board_column>
			<E_connect_board></E_connect_board>
			<S_board_column>
				<S_board_text>
					<p>
						Support me on <S_text_link href="https://www.patreon.com/sugargenix">Patreon</S_text_link> by buying me a shortcake. Donations are greatly
						appreciated and go a long way.
					</p>
				</S_board_text>
			</S_board_column>
			<_mini_board>
				<S_board_text style={{ fontSize: "min(calc(5px + 1.5vw), 20px)" }}>
					<S_paragraph_compact>Thank you,</S_paragraph_compact>
					<S_paragraph_compact> and be awesome!</S_paragraph_compact>
				</S_board_text>
			</_mini_board>
		</E_page>
	);
};

const _list = styled.ol`
	margin: 0px 40px 4%;
	text-align: start;
	font-size: min(calc(6px + 2.1vw), 25px);
`
const _mini_board = styled.div`
	${style_default_board_size}

	${style_default_border}
	${style_default_board_shadow}
	background: ${(props) => props.theme.style_main_color};
	background: ${(props) => props.theme.style_gradient_pink};
	background-size: cover;

	margin: auto;
	margin-bottom: 30px;

	background-image: ${(props) => props.theme.style_gradient_blue};
	padding: 0px;

	width: min(20vw, 200px);
	height: max-content;
`;

const _image_logo = styled.img`
	position: relative;
	width: 116%;
	left: -8%;
	margin-top: -20%;

	filter: drop-shadow(-12px 10px 10px #2525259a);
	overflow: visible;
`;

const _board = styled.span`
	position: relative;
	padding-top: 25px;

	aspect-ratio: 2.5 / 1;
	border-radius: 17px;

	overflow: hidden;
`;

const _board_hidden = styled.div`
	display: flex;
	${style_default_board_size}

	${style_default_border}
	${style_default_board_shadow}

	background: ${(props) => props.theme.style_gradient_pink};

	margin: auto;
	margin-bottom: 25px;
	margin-top: min(16vw, 130px);
	flex-direction: column;
`;

const _special_text_style = styled.em`
	font-size: min(calc(10px + 2.3vw), 28px);

	background: ${(props) => props.theme.style_gradient_multicolor};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	/* font-style: normal; */
	-webkit-text-stroke: .4px white;
`

const _special_text = styled(S_board_text)`
	font-size: min(calc(6px + 1.6vw), 20px);

	background: ${(props) => props.theme.style_gradient_multicolor};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
const _promo_gif = styled.img`
	width: 100%;
	position: absolute;
	bottom: -2px;
`;
