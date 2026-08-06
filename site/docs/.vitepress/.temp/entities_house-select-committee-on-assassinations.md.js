import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"House Select Committee on Assassinations","description":"","frontmatter":{"title":"House Select Committee on Assassinations","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","investigation","assassinations","forensics"],"sources":["raw/badlands-brief-282.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/house-select-committee-on-assassinations.md","filePath":"entities/house-select-committee-on-assassinations.md","lastUpdated":null}');
const _sfc_main = { name: "entities/house-select-committee-on-assassinations.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="house-select-committee-on-assassinations" tabindex="-1">House Select Committee on Assassinations <a class="header-anchor" href="#house-select-committee-on-assassinations" aria-label="Permalink to &quot;House Select Committee on Assassinations&quot;">​</a></h1><p>The House Select Committee on Assassinations was the congressional body that reinvestigated the killings of prominent American figures, including <a href="/entities/martin-luther-king-jr">Martin Luther King Jr.</a> Its firearms panel examined the .30-06 slug recovered from King&#39;s body (exhibit Q64) against the Remington 760 Gamemaster rifle recovered near the crime scene (exhibit Q2).[1]</p><p>The panel found that the bullet&#39;s class characteristics matched the rifle — six grooves and six lands with a right twist — but concluded it was &quot;unable positively to identify or eliminate the Q64 bullet as having been fired from the Q2 rifle.&quot;[1] The committee also found no evidence that any U.S. government agency participated in the assassination, a conclusion <a href="/entities/ashe-in-america">Ashe in America</a> treated with open skepticism when drawing parallels to the inconclusive ballistics in the <a href="/entities/charlie-kirk">Charlie Kirk</a> case.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Jesus Walks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-282" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-282</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/house-select-committee-on-assassinations.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const houseSelectCommitteeOnAssassinations = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  houseSelectCommitteeOnAssassinations as default
};
