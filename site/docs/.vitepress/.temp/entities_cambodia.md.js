import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cambodia","description":"","frontmatter":{"title":"Cambodia","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["southeast-asia","cambodia","transnational-crime","scam-compounds"],"sources":["raw/badlands-news-brief-398.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/cambodia.md","filePath":"entities/cambodia.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cambodia.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cambodia" tabindex="-1">Cambodia <a class="header-anchor" href="#cambodia" aria-label="Permalink to &quot;Cambodia&quot;">​</a></h1><p>Cambodia is a Southeast Asian nation that, in U.S. federal law enforcement filings unsealed in October 2025, was identified as the base of operations for large-scale forced-labor &quot;scam compounds&quot; run by <a href="/entities/prince-holding-group">Prince Holding Group</a>.[1]</p><h2 id="role-in-transnational-cyber-fraud" tabindex="-1">Role in transnational cyber-fraud <a class="header-anchor" href="#role-in-transnational-cyber-fraud" aria-label="Permalink to &quot;Role in transnational cyber-fraud&quot;">​</a></h2><p>Prosecutors allege that <a href="/entities/chen-zhi">Chen Zhi</a>, founder and chairman of Prince Group, directed the operation of compounds across Cambodia in which trafficked workers were held against their will and forced to conduct cryptocurrency investment fraud, known as <a href="/concepts/pig-butchering-scams">pig butchering</a>, stealing billions of dollars from victims in the United States and around the world.[1] The compounds are physically located in Cambodia, but the victims and the laundering networks were global, including one facilitation network in Brooklyn, New York, that handled millions of dollars from more than 250 victims.[1]</p><p>Prince Group itself is described in the indictment as a Cambodian corporate conglomerate operating dozens of business entities in more than 30 countries, ostensibly focused on real estate development, financial services, and consumer services.[1] Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> cautioned readers against tuning out because the compounds sit in Cambodia, arguing that the corporate structure involved is a portable template rather than a purely local phenomenon.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Satellite Secrets, Spanish Sanctions, &amp; Enslaved Scammers&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-398" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-398</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cambodia.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cambodia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cambodia as default
};
