import { E_page } from "../../components/comp_page";
import {
	styled,
	S_board_column,
	S_board_title,
	S_board_text,
	S_text_link,
	style_default_board_shadow,
	style_default_board,
} from "../../default_styles";

export const E_page_not_found = ({}) => {
	let active = window.location.pathname.slice(1) === "404";
	console.log("Path: ", window.location.pathname);

	return (
		<E_page>
			<_big_text>Error 404</_big_text>
			<S_board_column>
				<S_board_title>Hold On!</S_board_title>
				{active ? (
					<S_board_text>
						<p>It appears that we do not have page:</p>
						<p>'{window.location.pathname.slice(1)}'</p>
						<p>Wait! WE DO HAVE IT! And you found it for us!</p>
						<p>Good Job!</p>
					</S_board_text>
				) : (
					<S_board_text>
						<p>It appears that we do not have page:</p>
						<p>'{window.location.pathname}'</p>
						<p>Please check that the above is correct. Sorry for the inconvenience.</p>
					</S_board_text>
				)}
			</S_board_column>

			<_board_smaller>
				<S_board_text>
					<p>
						Return <S_text_link href="home">home</S_text_link>?
					</p>
				</S_board_text>
			</_board_smaller>
		</E_page>
	);
};

const _big_text = styled(S_board_text)`
	font-size: calc(18px + 10vw);
	${style_default_board_shadow}
	margin: 20px auto;
`;

const _board_smaller = styled.div`
	${style_default_board};

	width: max(18vw, 80px);
`;
