import { styled, S_board_title } from "../../default_styles";

import { E_news_card } from "./home_card";

export const _news_board = ({}) => {
	return (
		<_bounty_list>
			<S_board_title>Bounty List</S_board_title>
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
		</_bounty_list>
	);
};

export const _bounty_list = styled.div`
	width: 80%;
	/* border: 1px solid blue; */
	padding: 0px;
	margin-top: 40px;
`