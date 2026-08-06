import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Silvio Berlusconi","description":"","frontmatter":{"title":"Silvio Berlusconi","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["italy","prime-minister","defense"],"sources":["raw/badlands-brief-9ea.md"],"confidence":"low"},"headers":[],"relativePath":"entities/silvio-berlusconi.md","filePath":"entities/silvio-berlusconi.md","lastUpdated":null}');
const _sfc_main = { name: "entities/silvio-berlusconi.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="silvio-berlusconi" tabindex="-1">Silvio Berlusconi <a class="header-anchor" href="#silvio-berlusconi" aria-label="Permalink to &quot;Silvio Berlusconi&quot;">​</a></h1><p>Silvio Berlusconi was the Prime Minister of <a href="/entities/italy">Italy</a> under whose government the 2003 defence cooperation memorandum of understanding with <a href="/entities/israel">Israel</a> entered into force in 2006.[1] That agreement — covering military procurement, training, the exchange of defence equipment and technology, and arms transit — renewed automatically every five years unless one party opted out, and remained the framework for Italian–Israeli defence cooperation until Prime Minister <a href="/entities/giorgia-meloni">Giorgia Meloni</a> suspended its automatic renewal in April 2026.[1] See <a href="/concepts/italy-israel-defence-memorandum-of-understanding">the memorandum</a> for details.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Politician is Swallowelled Whole as the Middle East Realigns in Real Time&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-9ea" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-9ea</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/silvio-berlusconi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const silvioBerlusconi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  silvioBerlusconi as default
};
