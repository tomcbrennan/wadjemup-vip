module.exports = {
	content: ['./index.html', './privacy.html', './terms-and-conditions.html'],
	theme: {
		extend: {
			aspectRatio: {
				'16/9': '16/9',
				'3/2': '3/2',
				'4/3': '4/3',
				'3/4': '3/4',
				'5/7': '5/7',
				'1/1': '1/1',
			},
			colors: {
				white: '#FFFFFF',
				black: '#000000',
				brandDark: '#00303D',
				brandLight: '#00999C',
				brandYellow: '#FAA932',
				brandCyan: '#004D66',
				brandBlack: '#231F20',
			},
			fontFamily: {
				light: ['BentonSans-Light', 'sans-serif'],
				normal: ['BentonSans-Regular', 'sans-serif'],
				medium: ['BentonSans-Medium', 'sans-serif'],
				bold: ['BentonSans-Bold', 'sans-serif'],
			},
			screens: {
				xs: '380px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1690px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
