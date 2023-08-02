import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import WebFont from "webfontloader";

import { E_page_home } from "./pages/home";
import { E_page_not_found } from "./pages/not_found";
import { E_bounty_page } from "./pages/bounties/bounty_template";

WebFont.load({
	google: {
		families: ["Source Code Pro:400"],
	},
});

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path="sugargenix.com"
					element={<Navigate to="www.sugargenix.com" replace />}
				/>
				<Route path="/" element={<E_page_home />} />
				<Route path="/home" element={<E_page_home />} />

				<Route path="/bounty/:id" element={<E_bounty_page />} />

				<Route path="/*" element={<E_page_not_found />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
