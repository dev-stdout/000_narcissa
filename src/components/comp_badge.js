import { styled } from "../default_styles";

import badge_blue_star from "../assets/badge_blue_star.svg";

export const E_badge = ({}) => {
	return (
		<_badge_root>
			<Star>
				<Star1>
					<Star3 src={"https://file.rendit.io/n/rtjLI79oKVv5pgoaLPh0.svg"} />
					<Star2 src={"https://file.rendit.io/n/toZjCNW1m6kB7C4q36hR.svg"} />
				</Star1>
			</Star>

			<_text_rotated>
				<_text_row color={"#43155e"}>Sugar + </_text_row>
				<_text_row color={"#f83564"}>Chemical X</_text_row>
			<_text_row color={"#43155e"}> = Games</_text_row>
			</_text_rotated>
		</_badge_root>
	);
};

export const E_badge_new = ({}) => {
	return (
		<_badge_root>
			<Star_new>
				<Star1_new>
					<Star3_new src={"https://file.rendit.io/n/rtjLI79oKVv5pgoaLPh0.svg"} />
					{/* <Star2_new src={"https://file.rendit.io/n/toZjCNW1m6kB7C4q36hR.svg"} /> */}
				</Star1_new>
			</Star_new>

			<_text_rotated_new>
				<_text_row color={"#f83564"}>NEW!</_text_row>
			</_text_rotated_new>
		</_badge_root>
	);
};


const _badge_root = styled.div`
	width: min(8vw, 70px);

	aspect-ratio: 1 / 1;

	position: absolute;
	top: -25px;
	left: -30px;

	@media (max-width: 500px) {
		display: none !important;
	}
	/* border: 1px solid black; */
`;
const Star_new = styled.div`
	width: 100%;
	aspect-ratio: 1 / 1;
	background-image: url("https://file.rendit.io/n/XYTITgsL41Uf3toVSpfW.svg");
	background-size: 100%;
	display: flex;

	/* border: 1px solid red; */
	`;

const Star1_new = styled.div`
	width: 90%;
	height: 90%;
	/* background-image: url("https://file.rendit.io/n/XYTITgsL41Uf3toVSpfW.svg"); */
	background-image: url(${badge_blue_star});
	background-size: cover;
	position: relative;
	display: flex;
	margin: auto;

	/* border: 1px solid red; */
`;

const Star2_new = styled.img`
	width: 84%;
	height: 88%;
	top: 6.5%;
	left: 8.5%;
	position: relative;
	/* border: 1px solid red; */
`;
const Star3_new = styled.img`
	width: 90%;
	height: 90%;
	position: absolute;
	top: 3%;
	left: 3%;
	/* border: 1px solid red; */
`;

const _text_rotated_new = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;

	top: 0px;
	transform: rotate(-22deg);
	transform-origin: 50% 50%;

	text-align: center;
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	/* border: 1px solid blue; */
`;

const Star = styled.div`
	width: 104px;
	aspect-ratio: 1 / 1;
	background-image: url("https://file.rendit.io/n/XYTITgsL41Uf3toVSpfW.svg");
	background-size: 100%;
`;
const Star1 = styled.div`
	width: 95px;
	height: 95px;
	background-image: url("https://file.rendit.io/n/TkcXtVls1bl6er9dqzxD.svg");
	background-size: cover;
	position: relative;
	top: 5px;
	left: 5px;
`;
const Star2 = styled.img`
	width: 81.54px;
	height: 81.99px;
	position: absolute;
	top: 6.84px;
	left: 6.75px;
`;
const Star3 = styled.img`
	width: 88.05px;
	height: 88.67px;
	position: absolute;
	top: 3px;
	left: 3px;
`;

const _text_rotated = styled.div`
	top: 40px;
	position: absolute;
	transform: rotate(-22deg);
	transform-origin: 0px 0px;

	height: 66px;
	width: 95px;

	text-align: center;
`;

const _text_row = styled.div`
	color: ${(props) => props.color};

	/* font-size: 38px; */
	font-size: min(3.5vw, 38px);
	font-family: Impact;
	-webkit-text-stroke: min(max(1px, .1vw), 2px) white;
	/* border: 1px solid black; */
`;
