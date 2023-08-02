import { E_page } from "../../components/comp_page";
import { E_team_board } from "./team_board";
import { styled, S_board_column, S_board_text, S_board_title, S_text_link } from "../../default_styles";

import bottom_banner from "../../assets/banner_art.gif";

export const E_page_team = ({}) => {
	return (
		<E_page>
			<E_team_board></E_team_board>
			<S_board_column>
				<S_board_title>Connect with Us</S_board_title>
				<S_board_text>
					<p>
						Join us on Twitter (
						<S_text_link href="https://twitter.com/sugargenix?lang=en">
							@sugargenix
						</S_text_link>
						) or Facebook. We appreciate any feedback you may have on how we may further
						improve your experience on our website.
					</p>
					<p>Email feedback to: feedback@sugargenix.com</p>
					<p>Or me directly at: feedback@sugargenix.com</p>
					<p>
						Stay tuned and check out the news board at home for updates and
						announcements.
					</p>
				</S_board_text>
			</S_board_column>
			<S_board_column style={{ marginBottom: "100px" }}>
				<S_board_text>
					<p>
						Support me on{" "}
						<S_text_link href="https://www.patreon.com/sugargenix">Patreon</S_text_link>{" "}
						by buying me a shortcake. Donations are greatly appreciated and go a long
						way.
					</p>
				</S_board_text>
			</S_board_column>
			<_container>
				<_promo_gif src={bottom_banner}></_promo_gif>
			</_container>
		</E_page>
	);
};

const _container = styled.div`
	width: 100vw;
	display: flex;

	bottom: 44px;
	position: fixed;

	@media (min-width: 769px) {
		display: none !important;
	}
`;

const _promo_gif = styled.img`
	width: 100%;
`;
