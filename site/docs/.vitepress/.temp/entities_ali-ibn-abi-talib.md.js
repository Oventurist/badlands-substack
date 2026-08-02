import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ali ibn Abi Talib","description":"","frontmatter":{"title":"Ali ibn Abi Talib","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["islam","shia-islam","rashidun-caliphate","arabian-history"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/ali-ibn-abi-talib.md","filePath":"entities/ali-ibn-abi-talib.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ali-ibn-abi-talib.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ali-ibn-abi-talib" tabindex="-1">Ali ibn Abi Talib <a class="header-anchor" href="#ali-ibn-abi-talib" aria-label="Permalink to &quot;Ali ibn Abi Talib&quot;">​</a></h1><p>Ali was the fourth caliph of the <a href="/concepts/rashidun-caliphate">rashidun-caliphate</a> and, in the account given by the Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a>, the first Muslim.</p><p>His father adopted <a href="/entities/prophet-muhammad">Muhammad</a> when Muhammad was orphaned as a child, making Ali effectively Muhammad&#39;s step-brother; Muhammad in turn raised Ali from the age of five. When Muhammad emerged from one of his meditative excursions into the caves around Mecca claiming that the archangel Gabriel — the same being who, Muhammad said, had visited Mary on the night of Jesus&#39;s birth — had brought him a message from God, it was the ten-year-old Ali who believed him when nobody else would.</p><p>Muhammad called Ali his brother, guardian and successor, and once called him <em>Mawla</em>, an Arabic word with a range of meanings including &quot;lord,&quot; &quot;trustee&quot; and &quot;helper.&quot; The source identifies the disputed interpretation of that single word as the origin of Islam&#39;s principal schism: on Muhammad&#39;s death, some followers held that Ali, who had been like a son and a brother to him, was his designated heir, and therefore that only descendants of Ali could qualify to lead Islam. These adherents became the <a href="/concepts/shia-islam">Shia</a>, roughly 10 to 15 percent of all Muslims, concentrated in modern Iran and the wider region of Persia. The remaining 85 to 90 percent, the <a href="/concepts/sunni-islam">Sunni</a>, hold that no heir was appointed.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ali-ibn-abi-talib.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aliIbnAbiTalib = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  aliIbnAbiTalib as default
};
