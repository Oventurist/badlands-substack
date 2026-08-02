import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kash Patel","description":"","frontmatter":{"title":"Kash Patel","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","trump-ally","national-security","media"],"sources":["raw/all-assets-deployed.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/kash-patel.md","filePath":"entities/kash-patel.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kash-patel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kash-patel" tabindex="-1">Kash Patel <a class="header-anchor" href="#kash-patel" aria-label="Permalink to &quot;Kash Patel&quot;">​</a></h1><p>Kash Patel is an American lawyer, former federal prosecutor and national security official who served in senior roles during the administration of <a href="/entities/donald-trump">Donald Trump</a>, and who has remained one of Trump&#39;s most visible public allies and surrogates in the years since. Within the <a href="/concepts/maga">MAGA</a> and <a href="/concepts/america-first">America First</a> community he is widely regarded as a trusted conduit for signals about Trump&#39;s intentions.</p><h2 id="role-in-the-corpus" tabindex="-1">Role in the corpus <a class="header-anchor" href="#role-in-the-corpus" aria-label="Permalink to &quot;Role in the corpus&quot;">​</a></h2><p>In the Badlands Media essay <a href="/concepts/all-assets-deployed">All Assets Deployed</a>, published November 16, 2022, <a href="/entities/burning-bright">Burning Bright</a> writes that Trump&#39;s presidential announcement at <a href="/entities/mar-a-lago">Mar-a-Lago</a> &quot;was projected by Kash Patel and other close allies to the former—and current, to many of us—leader of this nation to light the media world on fire.&quot; The author judges that the announcement achieved precisely this effect, though not because it was unexpected: rather, he argues, because <a href="/concepts/con-inc">Con Inc.</a> and the &quot;DeSantis over Trump&quot; faction would use a demoralized base as an opening to widen divisions within the movement.</p><p>Patel&#39;s advance framing of the announcement is treated in the essay as evidence that the event was a deliberate strategic move within an ongoing <a href="/concepts/information-war">information war</a>, rather than an improvised or defensive gesture.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/all-assets-deployed" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kash-patel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kashPatel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kashPatel as default
};
