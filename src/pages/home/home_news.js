import { S_board_column, S_board_title } from "../../default_styles";

import { E_news_card } from "./home_card";

export const _news_board = ({}) => {
	return (
		<S_board_column>
			<S_board_title>List of answers</S_board_title>
			<div style={{ width: "85%", margin: "auto" }}>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
				<E_news_card href={"news/001"}></E_news_card>
			</div>
		</S_board_column>
	);
};
