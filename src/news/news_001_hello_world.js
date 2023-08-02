import { E_date_mark } from "../components/comp_news_datemark";
import { E_page } from "../components/comp_page";
import {
	styled,
	S_board_column,
	S_board_title,
	S_board_text,
	S_paragraph_compact,
	style_default_board_size,
	style_default_border,
	style_default_board_shadow,
} from "../default_styles";

import news_image from "./news_001_center_cut.png"

export const E_news_001 = ({}) => {
	return (
		<E_page>
			<E_date_mark created={"2023-05-07"} edited={"2023-05-08"}></E_date_mark>
			<_img_cont/>
			<S_board_column>
				<S_board_title>Hello, World!</S_board_title>
				<S_board_text>
					<p>
						We are thrilled to introduce Sugargenix, a game studio company,
						and welcome you to our first post out of many to come!
					</p>
				</S_board_text>
			</S_board_column>

			<S_board_column>
				<S_board_title>Sugargenix</S_board_title>
				<S_board_text>
					<p>
						The making of Sugargenix started sometime mid 2020 when on my free time I
						began developing a game centered around the adorable robot, Mympheus. This
						would eventually lead me to have a presentable demo of a game and piece by
						piece I saw a possibility of a mobile release.
						{/* You can say the making
						of Sugargenix started sometime mid 2020. On my free time I began developing
						a small game centered around a cute adorable robot, Mympheus. This would
						eventually lead me to have a presentable demo of a game and piece by piece I
						saw a mobile release possible. */}
					</p>
					<p>
						However, it wasn't until early January of 2022 that I began to take
						seriously the prospect of making a Game Studio Company. By mid February I
						had settled on the name Sugargenix and filed the paperwork to incorporate.
						In the following four months I took to designing and researching different
						ways to set up an online presence.
					</p>
				</S_board_text>
			</S_board_column>
			<S_board_column>
				<S_board_text>
					<p>
						This brings us full circle to the websites first post. No better words can
						express my feelings for this launch than simply "Hello, World!". I look
						forward seeing where this adventure takes us.
					</p>
					<p>Sweet games one byte at a time.</p>
				</S_board_text>
			</S_board_column>
			<S_board_column>
				<S_board_title>Connect with Us</S_board_title>
				<S_board_text>
					<p>
						Join us on Twitter (@sugargenix) or Facebook. We appreciate any feedback you
						may have on how we may further improve your experience on our website.
					</p>
					<p>Email feedback to: feedback@sugargenix.com</p>
					<p>Or me directly at: feedback@sugargenix.com</p>
					<p>
						Stay tuned and check out the news board at home for updates and
						announcements.
					</p>
				</S_board_text>
			</S_board_column>
			<S_board_column>
				<S_board_text>
					<p>
						Support me on Patreon by buying me a shortcake. Donations are greatly
						appreciated and go a long way.
					</p>
				</S_board_text>
			</S_board_column>
			<_mini_board>
				<S_board_text style={{ fontSize: "min(calc(5px + 1.5vw), 20px)" }}>
					<S_paragraph_compact>Thank you,</S_paragraph_compact>
					<S_paragraph_compact> and go be epic!</S_paragraph_compact>
				</S_board_text>
			</_mini_board>
		</E_page>
	);
};

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

const _img_cont = styled.div`
	${style_default_board_shadow}
	background-size: cover;

	margin: 0px auto 32px;

	background-image: url(${news_image});
	background-size: contain;
	background-repeat: no-repeat;

	width: min(90vw, 800px);
	aspect-ratio: 1500/903;
`;
