class Icon extends HTMLElement
{
	Icons =
	{
		'Receipt Long': `<g><path d='M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z'/><rect height='2' width='6' x='9' y='7'/><rect height='2' width='2' x='16' y='7'/><rect height='2' width='6' x='9' y='10'/><rect height='2' width='2' x='16' y='10'/></g>`,
		'List': `<path d='M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z'>`
	}

	connectedCallback()
	{
		console.log(1)
		this.innerHTML = `<SVG ViewBox='0 0 24 24'>${this.Icons[this.getAttribute('icon')]}</SVG>`;
	}
}

customElements.define('custom-icon', Icon);