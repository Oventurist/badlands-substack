import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Guidehouse","description":"","frontmatter":{"title":"Guidehouse","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cybersecurity","data-breach","vendors","morgan-stanley"],"sources":["raw/badlands-news-brief-189.md"],"confidence":"low"},"headers":[],"relativePath":"entities/guidehouse.md","filePath":"entities/guidehouse.md","lastUpdated":null}');
const _sfc_main = { name: "entities/guidehouse.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="guidehouse" tabindex="-1">Guidehouse <a class="header-anchor" href="#guidehouse" aria-label="Permalink to &quot;Guidehouse&quot;">​</a></h1><p>Guidehouse is a professional services and technology vendor that stored corporate data for <a href="/entities/morgan-stanley">Morgan Stanley</a>.[1] In January 2021 a data breach at Guidehouse exposed sensitive Morgan Stanley client information, including Social Security numbers.[1]</p><h2 id="significance-in-badlands-coverage" tabindex="-1">Significance in Badlands coverage <a class="header-anchor" href="#significance-in-badlands-coverage" aria-label="Permalink to &quot;Significance in Badlands coverage&quot;">​</a></h2><p>The breach is cited by <a href="/entities/badlands-media">Badlands Media</a> because <a href="/entities/jen-easterly">Jen Easterly</a> was Morgan Stanley&#39;s global head of cybersecurity at the time, and in that role would have had oversight of the security of the vendor ecosystem in which Guidehouse operated.[1] Five months after the incident, Easterly was appointed to lead the <a href="/entities/cybersecurity-and-infrastructure-security-agency">Cybersecurity and Infrastructure Security Agency</a>, the agency charged with securing U.S. critical infrastructure — a sequence the Brief presents as undercutting her later categorical assurances about election security.[1] Morgan Stanley went on to have additional cybersecurity scandals after her departure.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: It&#39;s a Big Club. And It&#39;s Going Down.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-189" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-189</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/guidehouse.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const guidehouse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  guidehouse as default
};
