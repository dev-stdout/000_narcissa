import { Routes, Route } from "react-router-dom";

import { E_news_001 } from "./news_001_hello_world";
import { E_news_002 } from "./news_002_journey";
import { E_news_003 } from "./news_003_mympheus";
import { E_news_004 } from "./news_004_hiring_artist";
import { E_page_not_found } from "../pages/not_found";

export const E_news = ({}) => {
	return (
		<Routes>
			<Route path="/001" element={<E_news_001 />} />
			<Route path="/hello-world" element={<E_news_001 />} />

			<Route path="/002" element={<E_news_002 />} />
			<Route path="/devlog-1" element={<E_news_002 />} />

			<Route path="/003" element={<E_news_003 />} />
			<Route path="/mympheus" element={<E_news_003 />} />

			<Route path="/004" element={<E_news_004 />} />
			<Route path="/hiring-2D-artist" element={<E_news_004 />} />
			<Route path="/hiring-artist" element={<E_news_004 />} />

			<Route path="/*" element={<E_page_not_found />} />
		</Routes>
	);
};
