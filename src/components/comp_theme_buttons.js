import { styled, style_text_default } from "../default_styles";
import { style_dark, style_plum, style_cotton_candy } from "../default_styles_color";

export const E_theme_buttons = ({ set_theme }) => {
	const save_theme = (style) => {
		localStorage.setItem("theme", style.name);
		set_theme(style);
	};

	return (
		<div>
			<_modal_side_container>
				<_modal_side_bar
					onClick={() => save_theme(style_cotton_candy)}
					theme={style_cotton_candy}
				>
					Cotton Candy
				</_modal_side_bar>
				<_modal_side_bar onClick={() => save_theme(style_plum)} theme={style_plum}>
					Purple Plum
				</_modal_side_bar>
				<_modal_side_bar onClick={() => save_theme(style_dark)} theme={style_dark}>
					Dark Night
				</_modal_side_bar>
			</_modal_side_container>
		</div>
	);
};

const _modal_side_container = styled.div`
	margin: 0px auto;
	gap: 15px;
	display: flex;
	flex-direction: column;

	width: 30vw;
	max-width: 140px;
`;
const _modal_side_bar = styled.button`
	${style_text_default}
	text-decoration: none;
	font-size: min(calc(0px + 3vw), 18px);
	font-weight: bold;
	padding: 8px;

	color: white;
	border: 3px solid white;
	border-radius: 8px;

	background: ${(props) => props.theme.style_gradient_pink};
	&:hover {
		background: ${(props) => `${props.theme.style_secondary_color}cc`};
	}
`;
