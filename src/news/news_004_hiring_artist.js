import { E_page } from "../components/comp_page";
import {
	S_board_column,
	S_board_title,
	S_board_text,
	S_text_link,
	S_board_text_alert,
} from "../default_styles";
import { E_date_mark } from "../components/comp_news_datemark";

export const E_news_004 = ({}) => {
	return (
		<E_page>
			<E_date_mark created={"2023-05-07"}></E_date_mark>
			<S_board_column>
				<S_board_title>We Are Hiring</S_board_title>
				<S_board_text>
					<p>Sugargenix is looking for a 2D Artist.</p>
					<p>
						The position is a <S_board_text_alert>part-time</S_board_text_alert>{" "}
						<S_board_text_alert>remote</S_board_text_alert> position with hourly{" "}
						<S_board_text_alert>paid</S_board_text_alert> compensation.
					</p>
				</S_board_text>
			</S_board_column>
			<S_board_column>
				<S_board_title>Your Responsibilities:</S_board_title>
				<S_board_text style={{ textAlign: "left" }}>
					<ul>
						<li>Creating new game assets.</li>
						<li>Updating existing game assets.</li>
						<li>Creating UI assets and layout.</li>
						<li>Adding 2D animations to assets.</li>
						<li>Creating effects for game events.</li>
						<li>Ensuring a consistent art style.</li>
						<li>Creating marketing material</li>
					</ul>
				</S_board_text>
			</S_board_column>
			<S_board_column>
				<S_board_title>How to Apply</S_board_title>
				<S_board_text>
					Apply by sending an email to{" "}
					<S_text_link href="mailto:careers@sugargenix.com">
						careers@sugargenix.com
					</S_text_link>
					.<p>Be sure to include the following:</p>
					<ol style={{ textAlign: "left" }}>
						<li>Requested Wage.</li>
						<li>Available start date.</li>
						<li>Best form of contact.</li>
						<li>Link to art work you have done or are doing.</li>
					</ol>
					<p>Submissions without art work will not be considered.</p>
				</S_board_text>
			</S_board_column>
		</E_page>
	);
};
