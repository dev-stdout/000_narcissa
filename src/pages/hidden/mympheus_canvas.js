import { useEffect, useMountEffect } from "react";
import { styled, style_border_base, style_default_board_shadow } from "../../default_styles";

export const E_mympheus_canvas = () => {
	var loaded = false;

	useEffect(() => {
		if (loaded == false)
		{
			console.log("Loaded script News");

			window.mympheus_module({
				canvas: (() => document.getElementById("canvas"))(),
			});
		}
		loaded = true;
	}, []);
	return (
		<div style={{ margin: "auto" }}>
			<_container id="canvas"></_container>
		</div>
	);
};

const _container = styled.canvas`
	${style_border_base}
	filter: drop-shadow(-12px 10px 10px #151515bf);
	width: min(80%, 400px);
	height: min(80%, 400px);
	aspect-ratio: 302 / 604;

	border-radius: 10px;

	margin: 0px auto 70px;
	display: block;
	box-sizing: border-box;
`;
