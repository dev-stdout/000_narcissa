export const style_cotton_candy = {
	name: "cotton_candy",
	style_main_color: "#e04470",
	style_accent_color: "#ffffff",
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
		return `${this.style_main_color} radial-gradient(#ffa62145, #e591c60d)`;
	},
};

export const style_plum = {
	name: "plum",
	style_main_color: "#2a044d",
	style_accent_color: "#ffffff",
	style_neutral_light_color: "#190522ff",
	style_secondary_color: "#2beb78",
	style_darker_secondary_color: "#11eaa1",
	style_gradient_multicolor: "linear-gradient(10deg, #e00e93, #7a7df8)",
	get style_gradient_blue() {
		return `linear-gradient(158deg, ${this.style_secondary_color}c0 0%, #096cb3c0 103%)`;
	},
	get style_gradient_pink() {
		return `${this.style_main_color} radial-gradient(#fea50025, #3b23850c)`;
	},
};

export const style_dark = {
	name: "dark",
	style_main_color: "#0c0a1f",
	style_accent_color: "#a7a7a7",
	style_neutral_light_color: "#2f042eff",
	style_secondary_color: "#00d9b8",
	style_darker_secondary_color: "#30c4bf",
	style_gradient_multicolor: "linear-gradient(#8600a8, #6869d6)",
	get style_gradient_blue() {
		return `linear-gradient(158deg, #183a79e5 0%, #010816e2 103%)`;
	},
	get style_gradient_pink() {
		return `${this.style_main_color} radial-gradient(#4305237f, #070626af)`;
	},
};
