import { styled } from "../default_styles";

import { E_background_default } from "./comp_background";
import { E_bar_bottom_page } from "./comp_bar_bottom";
import { E_bar_top_page } from "./comp_bar_top";
import {style_cotton_candy } from "../default_styles_color";
import { ThemeProvider } from "styled-components";

export const E_page = ({ children }) => {

	return (
		<ThemeProvider theme={style_cotton_candy}>
			<E_full_page>
				<E_background_default></E_background_default>
				<E_bar_top_page></E_bar_top_page>
				{children}
				<E_bar_bottom_page></E_bar_bottom_page>
			</E_full_page>
		</ThemeProvider>
	);
};

const E_full_page = styled.div`

	display: flex;
	align-items: center;
	flex-direction: column;


	width: 100%;
`;
