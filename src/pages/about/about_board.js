import { E_badge } from "../../components/comp_badge";

import {
	styled,
	S_board_title,
	S_board_text,
	S_board_column,
	S_text_link,
	style_default_board,
} from "../../default_styles";

export const _about_board = ({}) => {
	return (
		<div>
			<S_board_column>
				{/* <E_badge></E_badge> */}
				<S_board_title>About Us</S_board_title>
				<S_board_text>
					<p>
						Sugargenix LLC is currently a one man game studio lead by Software Developer
						Kevin Mira (click <S_text_link href="team">here</S_text_link> if you are
						interested in joining me in an epic adventure). I am currently in
						development of our first mobile release, '
						{/* <S_text_link to="/about">Mympheus</S_text_link> */}
						Mympheus'.
					</p>
					<p>
						I have a passion for making games and am excited to bring a mobile game to
						the market. I have a prototype in the works and am looking to raise its
						production value to make a hella sweet game.
					</p>
				</S_board_text>
			</S_board_column>
			<S_board_column>
				<S_board_title>Contact</S_board_title>
				<S_board_text>
					<p>
						Stay tuned and check the news board at{" "}
						<S_text_link href="home">home</S_text_link> for updates and announcements.
					</p>
					<p>
						Twitter:{" "}
						<S_text_link href="https://twitter.com/sugargenix?lang=en">
							@sugargenix
						</S_text_link>
					</p>
					<p>
						Discord:{" "}
						<S_text_link href="https://discord.gg/ejGtPwa2WG">Sugargenix</S_text_link>
					</p>
					<p>
						Facebook:{" "}
						<S_text_link href="https://www.facebook.com/Sugargenix">
							@Sugargenix
						</S_text_link>
					</p>
					<p>
						I am taking donations through{" "}
						<S_text_link href="https://www.patreon.com/sugargenix">Patreon</S_text_link>
						, your contributions are greatly appreciated.
					</p>
				</S_board_text>
			</S_board_column>
			<_board_smaller>
				<S_board_text>
					A bit of Pixie dust, a byte of sugar and hope to make your day that much
					sweeter.
				</S_board_text>
			</_board_smaller>
		</div>
	);
};

const _board_smaller = styled.div`
	${style_default_board};

	width: max(40vw, 80px);
`;
