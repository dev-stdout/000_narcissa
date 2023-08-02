import { styled } from "../default_styles";
import { useState } from "react";

import { E_background_default } from "./comp_background";
import { E_bar_bottom_page } from "./comp_bar_bottom";
import { E_bar_top_page } from "./comp_bar_top";
import { E_hamburger_switch } from "./comp_hamburger_switch";
import { E_theme_switch } from "./comp_theme_switch";
import { style_dark, style_plum, style_cotton_candy } from "../default_styles_color";
import { ThemeProvider } from "styled-components";

function change_theme(current_theme, set_fn, theme) {
	if (current_theme.name != theme.name && localStorage.getItem("theme") == theme.name) {
		set_fn({ ...theme });
	}
}

export const E_page = ({ children }) => {
	const [theme, set_theme] = useState({ ...style_cotton_candy });

	change_theme(theme, set_theme, style_cotton_candy);
	change_theme(theme, set_theme, style_plum);
	change_theme(theme, set_theme, style_dark);

	return (
		<div>
			<ThemeProvider theme={theme}>
				<E_bar_top_page></E_bar_top_page>
				<E_theme_switch set_theme={set_theme}></E_theme_switch>
				<E_hamburger_switch set_theme={set_theme}></E_hamburger_switch>
				<E_background_default></E_background_default>
				<E_full_page>{children}</E_full_page>
				<E_bar_bottom_page></E_bar_bottom_page>
			</ThemeProvider>
		</div>
	);
};

const E_full_page = styled.div`
	padding: 80px 0px 80px;
`;
