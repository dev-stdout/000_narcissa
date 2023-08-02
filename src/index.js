import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import WebFont from "webfontloader";

import { E_page_home } from "./pages/home";
import { E_page_team } from "./pages/team/";
import { E_page_about } from "./pages/about";
import { E_page_not_found } from "./pages/not_found";
import { E_page_hidden } from "./pages/hidden";
import { E_news } from "./news";

WebFont.load({
	google: {
		families: ["Istok Web:400"],
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

				<Route path="/team" element={<E_page_team />} />
				<Route path="/about" element={<E_page_about />} />
				<Route path="/news/*" element={<E_news />} />

				<Route path="/*" element={<E_page_not_found />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
