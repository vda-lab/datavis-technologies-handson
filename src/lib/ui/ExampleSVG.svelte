<script>
	const width = 436;
	const height = 300;
	const margin = { top: 10, right: 10, bottom: 50, left: 50 };
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;
</script>

<svg {width} {height}>
	<g transform="translate({margin.left}, {margin.top})">
		<rect x="0" y="0" width={innerWidth} height={innerHeight} fill="skyblue" />
		<text x="6" y={innerHeight / 2}>y</text>
		<text x={innerWidth / 2} y="12">x</text>
		<line x1="0" y1="0" x2={innerWidth} y2="0" stroke="black" />
		<line x1="0" y1="0" x2="0" y2={innerHeight} stroke="black" />
		<line x1="-6" y1={innerHeight - 6} x2="0" y2={innerHeight} stroke="black" />
		<line x1="6" y1={innerHeight - 6} x2="0" y2={innerHeight} stroke="black" />
		<line x1={innerWidth - 6} y1="-6" x2={innerWidth} y2="0" stroke="black" />
		<line x1={innerWidth - 6} y1="6" x2={innerWidth} y2="0" stroke="black" />
	</g>
</svg>

<style>
	svg {
		background-color: steelblue;
	}
</style>
