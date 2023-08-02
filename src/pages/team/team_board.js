import { _team_member } from "./team_member";

import kevin_gif from "../../assets/team_kevin.gif";
import new_member_gif from "../../assets/team_unknown.png";

import {
	styled,
	S_board_title,
	S_board_text,
	S_board_column,
	S_text_link,
} from "../../default_styles";

export const E_team_board = ({}) => {
	return (
		<S_board_column>
			<S_board_title>Team</S_board_title>
			{/* <S_board_text>
				Sugargenix is hiring a 2D Game Artist. The position is a part-time remote position
				with hourly paid compensation. If you would like to apply reach out to:
			</S_board_text> */}
			{/* <S_text_link href="mailto:careers@sugargenix.com">careers@sugargenix.com</S_text_link> */}
			{/* <S_board_text>
				Ensure to include a link with your previous and best work! Emails without links to
				previous work won't be considered.
			</S_board_text> */}
			<_team_container>
				<_team_member
					member={kevin_gif}
					name={"Kevin Mira"}
					text={`
Computer Wizard.
1 bit Pyrotechnic, 128 bytes Programmer.`}
				></_team_member>
				{/* <_team_member
					member={new_member_gif}
					name={"2D Artist"}
					text={`
Got a burning desire to do game art?
This spot is for you.`}
				></_team_member> */}
				{/* <_team_member member={new_member_gif} name={"Open"}></_team_member> */}
			</_team_container>
		</S_board_column>
	);
};

const _team_container = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-evenly;
`;
