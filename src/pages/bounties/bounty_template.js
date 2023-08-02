import { E_page } from "../../components/comp_page";
import {
	styled,
	S_board_column,
	S_board_title,
	S_board_text,
	style_default_board_shadow,
} from "../../default_styles";

export const E_bounty_page = ({}) => {
	return (
		<E_page>
			<_img_cont/>
			<S_board_column>
				<S_board_title>Title</S_board_title>
				<S_board_text>
					<p>
						Something goes here
					</p>
				</S_board_text>
			</S_board_column>
		</E_page>
	);
};

const _img_cont = styled.div`
	${style_default_board_shadow}
	background-size: cover;

	margin: 0px auto 32px;

	background-size: contain;
	background-repeat: no-repeat;

	width: min(90vw, 800px);
	aspect-ratio: 1500/903;
`;
