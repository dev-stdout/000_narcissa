import { E_page } from "../../components/comp_page";
import mympheus_title from "../../assets/mympheus_title.png";
import bottom_banner from "../../assets/banner_art.gif";
import { E_date_mark } from "../../components/comp_news_datemark";

import {
	styled,
	S_board_column,
	S_board_title,
	S_board_text,
	style_default_border,
	style_default_board_shadow,
} from "../../default_styles";
import { E_mympheus_canvas } from "./mympheus_canvas";

export const E_page_hidden = ({}) => {
	return (
		<E_page>
			<_board_hidden>
				<_image_logo src={mympheus_title} />
				<_board>
					<E_mympheus_canvas></E_mympheus_canvas>
					<_promo_gif src={bottom_banner}></_promo_gif>
				</_board>
			</_board_hidden>
			<S_board_column>
				<S_board_title>Description</S_board_title>
				<_special_text>
					Unlock powerful abilities tapping your foes away. Strategize in this mobile wave
					shooter unleashing abilities. Come for the fun gameplay, stay for the cute
					animations.
				</_special_text>
			</S_board_column>
			<E_date_mark created={"2023-05-07"}></E_date_mark>
		</E_page>
	);
};

const _image_logo = styled.img`
	position: relative;
	width: 110%;
	left: -5%;
	margin-top: -20%;

	filter: drop-shadow(-12px 10px 10px #2525259a);
	overflow: visible;
	pointer-events: none;
`;

const _board = styled.span`
	position: relative;
	padding-top: 25px;

	border-radius: 17px;

	overflow: hidden;
`;

const _board_hidden = styled.div`
	display: flex;
	width: 85vw;
	max-width: 650px;

	${style_default_border}
	${style_default_board_shadow}

	background: ${(props) => props.theme.style_gradient_pink};

	margin: auto;
	margin-bottom: 25px;
	margin-top: min(14vw, 130px);
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

	pointer-events: none;
`;
