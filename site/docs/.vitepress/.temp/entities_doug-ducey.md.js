import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Doug Ducey","description":"","frontmatter":{"title":"Doug Ducey","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["arizona","governor","republican-party","elections"],"sources":["raw/an-sos-from-ground-zero.md"],"confidence":"low"},"headers":[],"relativePath":"entities/doug-ducey.md","filePath":"entities/doug-ducey.md","lastUpdated":null}');
const _sfc_main = { name: "entities/doug-ducey.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="doug-ducey" tabindex="-1">Doug Ducey <a class="header-anchor" href="#doug-ducey" aria-label="Permalink to &quot;Doug Ducey&quot;">​</a></h1><p>Doug Ducey was the Republican Governor of Arizona during the <a href="/concepts/2022-arizona-general-election">2022 general election</a> and its disputed aftermath.<a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">[1]</a></p><p>Badlands Media contributor <a href="/entities/kitty-gillespie">Kitty Gillespie</a> surmised that Ducey left the state on Friday, November 18, 2022, creating the &quot;temporary disability&quot; contemplated by Article V, Section 6 of the Arizona Constitution and requiring another officer to take the helm.<a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">[1]</a> That designation reportedly fell to Attorney General <a href="/entities/mark-brnovich">Mark Brnovich</a> rather than to Secretary of State <a href="/entities/katie-hobbs">Katie Hobbs</a>, who under the constitutional order of succession stands ahead of the Attorney General — an anomaly Gillespie said no outlet in the state had explained.<a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;An SOS From Ground Zero&quot;, URL: <a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">https://badlands.substack.com/p/an-sos-from-ground-zero</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/doug-ducey.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dougDucey = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dougDucey as default
};
