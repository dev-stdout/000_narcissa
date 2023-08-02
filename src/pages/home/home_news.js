import { S_board_column, S_board_title } from "../../default_styles";

import { E_badge } from "../../components/comp_badge";
import { E_news_card, E_news_card_001, E_news_card_002, E_news_card_003 } from "./home_card";

export const _news_board = ({}) => {
	return (
		<S_board_column>
			<S_board_title>Latest News</S_board_title>
			{/* <E_badge></E_badge> */}
			<div style={{ width: "85%", margin: "auto" }}>
				{/* <E_news_card href={"news/003"} child={<E_news_card_001 index={0}/>}></E_news_card> */}
				{/* <E_news_card href={"news/004"} child={<E_news_card_003 index={0}/>}></E_news_card> */}
				<E_news_card href={"news/002"} child={<E_news_card_002 index={0}/>}></E_news_card>
				<E_news_card href={"news/001"} child={<E_news_card_001 index={0}/>}></E_news_card>
			</div>
		</S_board_column>
	);
};
