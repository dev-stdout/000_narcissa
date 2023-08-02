import {
	styled,
	S_board_title,
	S_board_text,
	S_text_link,
	S_paragraph_compact,
	style_default_border,
	style_default_board_shadow,
} from "../default_styles";

export const E_connect_board = ({}) => {
	return (
		<_mini_board>
			<S_board_title>Connect with Us</S_board_title>
			<S_board_text>
				<S_paragraph_compact>Follow us on</S_paragraph_compact>
				<S_paragraph_compact>
					Twitter (
					<S_text_link href="https://twitter.com/sugargenix?lang=en">
						@sugargenix
					</S_text_link>
					) or{" "}
					<S_text_link href="https://www.facebook.com/Sugargenix">Facebook</S_text_link>!
				</S_paragraph_compact>
				<S_paragraph_compact>Join the <S_text_link href="https://discord.gg/ejGtPwa2WG">Discord</S_text_link> server and chat with us!</S_paragraph_compact>
			</S_board_text>
		</_mini_board>
	);
};

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