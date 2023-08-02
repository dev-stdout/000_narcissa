import logo_main from "../assets/logo_main.svg";

import {
	styled,
	style_text_base,
} from "../default_styles";

export const E_bar_top_page = ({}) => {

	return (
		<_bar>
			<_image_logo src={logo_main} />
			<_nav_tittle>
				Bounties of Princess Narcissa
			</_nav_tittle>
		</_bar>
	);
};

const _nav_tittle = styled.div`
	${style_text_base}
	font-size: ${(props) => (props.active ? `19px` : `17px`)};
`;

const _image_logo = styled.img`
`;

const _bar = styled.div`
	display: flex;
	align-items: end;

	padding: 2px 10px 0px 10vw;

	gap: 30px;

	width: 100%;
	box-sizing: border-box;
	height: 40px;
`;
