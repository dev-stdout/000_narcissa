import { E_page } from "../components/comp_page";
import mympheus_title from "../assets/mympheus_title.png";
import bottom_banner from "../assets/banner_art.gif";

import {
	styled,
	S_board_column,
	S_board_title,
	S_board_text,
	style_default_board_size,
	style_default_border,
	style_default_board_shadow,
	S_text_link,
	S_paragraph_compact,
} from "../default_styles";
import { E_connect_board } from "../components/comp_connect_board";
import { E_date_mark } from "../components/comp_news_datemark";

export const E_news_003 = ({}) => {
	return (
		<E_page>
			<_board_hidden>
				<_image_logo src={mympheus_title} />
				<_board>
					<S_board_text>
						<p>In the making!</p>
					</S_board_text>
					<_promo_gif src={bottom_banner}></_promo_gif>
				</_board>
			</_board_hidden>
			<E_date_mark created={"2023-05-07"}></E_date_mark>
			<S_board_column>
				<S_board_title>Description</S_board_title>
				<_special_text>
					Unlock powerful abilities tapping your foes away. Strategize in this mobile wave
					shooter unleashing abilities. Come for the fun gameplay, stay for the cute
					animations.
				</_special_text>
			</S_board_column>
			<E_connect_board></E_connect_board>
			<S_board_column>
				<S_board_text>
					<p>
						Support this mobile game on{" "}
						<S_text_link href="https://www.patreon.com/sugargenix">Patreon</S_text_link>
						. Donations are greatly appreciated!
					</p>
				</S_board_text>
			</S_board_column>
		</E_page>
	);
};

const _image_logo = styled.img`
	position: relative;
	width: 116%;
	left: -8%;
	margin-top: -20%;

	filter: drop-shadow(-12px 10px 10px #2525259a);
	overflow: visible;
`;

const _mini_board = styled.div`
	${style_default_border}
	${style_default_board_shadow}
	background: ${(props) => props.theme.style_gradient_pink};

	display: flex;
	flex-direction: column;
	margin: auto;
	margin-bottom: 30px;
	padding: 10px 0px;

	width: min(70vw, 556px);
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
