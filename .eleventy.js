module.exports = (eleventyConfig, options) => {

	if(!options.key) {
		console.error('The key option was not passed to the PDFEmbed plugin and embeds will not work!');
	}

	eleventyConfig.addShortcode('pdfembed', (url, mode, divid) => {
		if(!divid) divid = 'adobe-pdf-view';
		if(!mode) mode = 'FULL_WINDOW';
		let filename = url.split('/').pop();

		return `
<div id="${divid}"></div>
<script src="https://documentservices.adobe.com/view-sdk/viewer.js"></script>
<script type="text/javascript">
	document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
		var adobeDCView = new AdobeDC.View({clientId: "${options.key}", divId: "${divid}"});
		adobeDCView.previewFile({
			content:{location: {url: "${url}"}},
			metaData:{fileName: "${filename}"}
		}, {
			embedMode: "${mode}"
		});
	});
</script>
		`
	});

}
