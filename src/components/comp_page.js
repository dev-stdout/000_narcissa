import { styled } from "../default_styles";
import { useState } from "react";

import { E_background_default } from "./comp_background";
import { E_bar_bottom_page } from "./comp_bar_bottom";
import { E_bar_top_page } from "./comp_bar_top";
import {style_cotton_candy } from "../default_styles_color";
import { ThemeProvider } from "styled-components";

export const E_page = ({ children }) => {

	return (
		<div>
			<ThemeProvider theme={style_cotton_candy}>
				<E_background_default></E_background_default>
				<E_bar_top_page></E_bar_top_page>
				<E_full_page>{children}</E_full_page>
				<E_bar_bottom_page></E_bar_bottom_page>
			</ThemeProvider>
		</div>
	);
};

const E_full_page = styled.div`
	padding: 80px 0px 80px;
`;
