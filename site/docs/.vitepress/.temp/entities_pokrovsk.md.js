import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pokrovsk","description":"","frontmatter":{"title":"Pokrovsk","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","donetsk","russia","logistics","war"],"sources":["raw/badlands-news-brief-41f.md","raw/badlands-news-brief-711.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pokrovsk.md","filePath":"entities/pokrovsk.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pokrovsk.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pokrovsk" tabindex="-1">Pokrovsk <a class="header-anchor" href="#pokrovsk" aria-label="Permalink to &quot;Pokrovsk&quot;">​</a></h1><p><strong>Pokrovsk</strong> is a city in the Donetsk region of eastern Ukraine that served as a key Ukrainian logistical hub during the war with Russia.[1]</p><p>By early October 2024, Russian forces had advanced to within a few kilometers of Pokrovsk as part of a wide-reaching offensive in eastern Ukraine that continued making steady gains while a looming major war between Israel and Iran took over the news cycle.[1] Analysts cited by Badlands assessed that the collapse of Pokrovsk would likely portend a Russian takeover of the whole of Donetsk, given the city&#39;s role in sustaining Ukrainian supply lines across the region.[1] The advance came in the same period as the Ukrainian withdrawal from <a href="/entities/vuhledar">Vuhledar</a>, reinforcing the view that Russian forces would continue to plow through Ukrainian defenses.[1]</p><h2 id="september-2024-russian-advance" tabindex="-1">September 2024 Russian advance <a class="header-anchor" href="#september-2024-russian-advance" aria-label="Permalink to &quot;September 2024 Russian advance&quot;">​</a></h2><p>By early September 2024, Russian forces were closing in on Pokrovsk, described as a key rail junction town in the Donetsk region, after taking vast swaths of territory over the preceding month along the war&#39;s roughly 600-mile eastern front.[2] Badlands commentary argued that the Ukrainian troops committed to the <a href="/concepts/kursk-incursion">Kursk incursion</a> had left the eastern front vulnerable, allowing the Russians to march &quot;full tilt&quot; on Pokrovsk while Kyiv panicked and evacuated civilians.[2]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;FEMA&#39;s Broke. Ukraine is Collapsing. The EU is Doomed.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-41f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-41f</a></li><li>Badlands Brief — &quot;A Not so Brief Full of Sovereign SIGNAL&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-711" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-711</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pokrovsk.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pokrovsk = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pokrovsk as default
};
