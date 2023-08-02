export const style_cotton_candy = {
	name: "narcissa",
	style_main_color: "#A9FFF0",
	style_accent_color: "#A629FF",
	style_text_color: "#000000",
	style_neutral_light_color: "#cb9fb472",
	// style_secondary_color: "#28fbff",
	style_secondary_color: "#289bff",
	style_darker_secondary_color: "#27d7ff",
	// style_gradient_multicolor: "linear-gradient(#13d658, #567af1)",
	style_gradient_multicolor: "linear-gradient(10deg, #9f74fd, #15d8ff, #13d678)",
	get style_gradient_blue() {
		return `linear-gradient(158deg, ${this.style_secondary_color}c0 0%, #21d7cbc0 103%)`;
	},
	get style_gradient_pink() {
		return `linear-gradient(#A9FFF0 0%, #FBBDFF 0%)`;
	},
};
