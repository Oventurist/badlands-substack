import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cedric Lodge","description":"","frontmatter":{"title":"Cedric Lodge","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["harvard","crime","body-parts","morgue"],"sources":["raw/badlands-news-brief-748.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/cedric-lodge.md","filePath":"entities/cedric-lodge.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cedric-lodge.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cedric-lodge" tabindex="-1">Cedric Lodge <a class="header-anchor" href="#cedric-lodge" aria-label="Permalink to &quot;Cedric Lodge&quot;">​</a></h1><p>Cedric Lodge is a former manager of the <a href="/entities/harvard-medical-school">Harvard Medical School</a> morgue who pleaded guilty to a federal charge of interstate transport of human remains in May 2025.[1]</p><p>Lodge, 57 at the time of his plea, was morgue manager when he committed the offenses, according to the United States Attorney&#39;s Office for the Middle District of Pennsylvania.[1] Over a five-year period he stole and sold &quot;head, brains, skins, bones, and other human remains&quot; taken from the morgue at <a href="/entities/harvard-university">Harvard University</a>, according to a federal indictment.[1] A man in Pennsylvania paid Lodge&#39;s wife Denise $37,355.16 over three years after she allegedly shipped him body parts her husband had taken; the indictment states the payments were sent via PayPal and included memos such as &quot;head number 7&quot; and &quot;braiiiiiiins.&quot;[1]</p><p>Badlands host <a href="/entities/jon-herold">Jon Herold</a> noted the coincidence that <a href="/entities/donald-trump">Donald Trump</a> posted about Harvard on Truth Social the same night the story was being discussed on air with <a href="/entities/chris-paul">Chris Paul</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Remembrance, Razor Blade Throat, &amp; Ukrainian Drone Assassins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-748" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-748</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cedric-lodge.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cedricLodge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cedricLodge as default
};
