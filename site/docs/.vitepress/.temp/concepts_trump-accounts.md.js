import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Trump Accounts","description":"","frontmatter":{"title":"Trump Accounts","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["economy","policy","savings","state-of-the-union"],"sources":["raw/badlands-brief-fbb.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/trump-accounts.md","filePath":"concepts/trump-accounts.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/trump-accounts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="trump-accounts" tabindex="-1">Trump Accounts <a class="header-anchor" href="#trump-accounts" aria-label="Permalink to &quot;Trump Accounts&quot;">​</a></h1><p>Trump Accounts are a savings program established under President <a href="/entities/donald-trump">Donald Trump</a>&#39;s second term intended to secure &quot;the financial futures of millions of American newborns.&quot;[1]</p><p>The program was cited in the <a href="/entities/white-house">White House</a> statement issued after the <a href="/concepts/2026-state-of-the-union">2026 State of the Union Address</a>, which listed Trump Accounts among the accomplishments congressional Democrats declined to applaud during the speech.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Unity, Patricide, &amp; Political Violence&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-fbb" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-fbb</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/trump-accounts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trumpAccounts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  trumpAccounts as default
};
