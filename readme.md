## Eleventy Plugin: PDFEmbed

This is an Eleventy plugin that creates a shortcode for Adobe's [PDF Embed API](https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html). The PDF Embed API creates a web-based PDF viewer that gives you more control
over the PDF experience in the browser compared to the built-in browser renderer. You can control the size, layout, and more using the API. (See the [online demos](https://www.adobe.com/go/pdfEmbedAPI_demo) for examples.) 

In order to use this plugin, you must create a [free set of credentials](https://www.adobe.com/go/dcsdks_credentials) first. 

### Usage

To add the plugin to your Eleventy site, first install it:

```js
npm i eleventy-plugin-pdfembed
```

Then add it to your `.eleventy.js`:

```js
const pluginPDFEmbed = require('eleventy-plugin-pdfembed');

module.exports = (eleventyConfig) => {

	// more stuff here

	eleventyConfig.addPlugin(pluginPDFEmbed, {
		key: '<YOUR CREDENTIAL KEY>'
	});


}
```

Inside your templates, you can then use the shortcode like so:

```html
{% pdfembed 'https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf' %}
```

The plugin requires, at minimum, the URL to your PDF document. It supports two additional parameters now. The first is mode, which defines how the PDF is embedded on the page. See the [online demo](https://www.adobe.com/go/pdfEmbedAPI_demo) for examples. Valid values are:

* FULL_WINDOW (default)
* SIZED_CONTAINER
* IN_LINE
* LIGHT_BOX

For example:

```html
{% pdfembed 'https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf' 'LIGHT_BOX' %}
```

The third argument lets you customize the ID value used for the `div` tag. By default this is `adobe-pdf-view`, but you can set this to any valid ID:

```html
<style>
#pdfdemo {
    width: 500px;
    height: 500px;
}
</style>

{% pdfembed 'https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf' 'IN_LINE' 'pdfdemo' %}
```

### History

Feb 2, 2023 (1.0.2) - updated the script tag to use the modern viewer.

