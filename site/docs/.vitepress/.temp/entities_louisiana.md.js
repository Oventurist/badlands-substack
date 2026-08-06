import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Louisiana","description":"","frontmatter":{"title":"Louisiana","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["state","redistricting","voting-rights-act"],"sources":["raw/badlands-brief-6bf.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/louisiana.md","filePath":"entities/louisiana.md","lastUpdated":null}');
const _sfc_main = { name: "entities/louisiana.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="louisiana" tabindex="-1">Louisiana <a class="header-anchor" href="#louisiana" aria-label="Permalink to &quot;Louisiana&quot;">​</a></h1><p><strong>Louisiana</strong> is a U.S. state whose congressional redistricting became the subject of a landmark 2026 Supreme Court ruling.[1]</p><h2 id="redistricting-litigation" tabindex="-1">Redistricting litigation <a class="header-anchor" href="#redistricting-litigation" aria-label="Permalink to &quot;Redistricting litigation&quot;">​</a></h2><p>After extended litigation, Louisiana adopted a revised congressional map that created a second majority-Black district.[1] The map was challenged as an unconstitutional racial gerrymander, and the dispute reached the <a href="/entities/supreme-court-of-the-united-states">Supreme Court of the United States</a> through two rounds of argument.[1]</p><p>In <a href="/concepts/louisiana-v-callais">Louisiana v. Callais</a>, decided in April 2026, the Court ruled 6–3 that the map was an unconstitutional racial gerrymander, holding that Section 2 of the <a href="/concepts/voting-rights-act-of-1965">Voting Rights Act of 1965</a> did not require the state to adopt a map prioritizing racial outcomes.[1] The decision narrowed the role race may play in districting nationwide and is expected to shape subsequent <a href="/concepts/2026-redistricting-battle">redistricting</a> fights.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;SCOTUS: You Can Be Neither Racist Nor Unilaterally Murdery&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6bf" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6bf</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/louisiana.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const louisiana = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  louisiana as default
};
