import { E_page } from "../../components/comp_page";
import { _news_board } from "./home_news";
import { E_wheel_card, _wheel_indicators } from "./home_wheel";

export const E_page_home = ({}) => {
	return (
		<E_page>
			<E_wheel_card></E_wheel_card>
			<_news_board></_news_board>
		</E_page>
	);
};
