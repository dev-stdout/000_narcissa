import {
	styled,
	style_default_board_shadow,
	style_default_border,
	style_text_base,
} from "../../default_styles";

export const _team_member = ({ member, name, text }) => {
	text = text || "";

	return (
		<_member_card>
			<_member_photo member={member}></_member_photo>
			<_member_info>
				<_member_name style={{ textDecorationLine: "underline" }}>{name}</_member_name>
				<_member_description>
					{text.split("\n").map((line, index) => (
						<div key={index}>{line}</div>
					))}
				</_member_description>
			</_member_info>
		</_member_card>
	);
};

const _member_name = styled.div`
	margin: 8px 0px 1%;
	font-size: min(calc(6px + 1.5vw), 20px);
	margin-top: 64%;
`;
const _member_description = styled.div`
	font-size: min(calc(6px + 1vw), 15px);
	width: 100%;
`;

const _member_info = styled.div`
	${style_text_base}
	${style_default_border}

	border-color: ${(props) => props.theme.style_accent_color};
	background: rgba(255, 255, 255, 0.3) ${(props) => props.theme.style_gradient_blue};

	margin-top: -58%;
	width: 100%;

	aspect-ratio: 7 / 6;

	padding: 0px 4px 8px;
	box-sizing: border-box;
`;
const _member_photo = styled.div`
	${style_default_border};
	border-radius: 50%;

	background: ${(props) => props.theme.style_accent_color} url(${(props) => props.member});
	background-size: 100% 100%;

	z-index: 1;
	position: relative;
	aspect-ratio: 1 / 1;
`;
const _member_card = styled.div`
	margin: 15px min(2vw, 15px);
	width: 30vw;
	min-width: 120px;
	max-width: 180px;

	${style_default_board_shadow}
`;
