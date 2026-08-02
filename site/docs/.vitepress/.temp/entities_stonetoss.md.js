import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stonetoss","description":"","frontmatter":{"title":"Stonetoss","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","cartoonist","satire","media-criticism"],"sources":["raw/a-hypnotists-take-on-israel-palestine.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/stonetoss.md","filePath":"entities/stonetoss.md","lastUpdated":null}');
const _sfc_main = { name: "entities/stonetoss.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stonetoss" tabindex="-1">Stonetoss <a class="header-anchor" href="#stonetoss" aria-label="Permalink to &quot;Stonetoss&quot;">​</a></h1><p><strong>Stonetoss</strong> is the pseudonym of an anonymous American webcomic artist whose short, four-panel political strips circulate widely on social media. The comic is a fixture of online right-wing and dissident-media discourse and is frequently described by critics as extremist, while its readers treat it as pointed satire of mainstream narratives.</p><p>The Badlands Media essay <a href="/concepts/a-hypnotists-take-on-israel-palestine">&quot;A Hypnotist&#39;s Take on Israel, Palestine, and Q&quot;</a> cites a Stonetoss strip titled &quot;Whodunit&quot; as &quot;hinting at the breakdown of Mockingbird influence.&quot; Together with a skit by comedian <a href="/entities/ryan-long">Ryan Long</a>, the comic is presented by <a href="/entities/american-hypnotist">American Hypnotist</a> as an artifact showing that audiences confronted with the <a href="/concepts/israel-palestine-conflict">Israel–Palestine conflict</a> have lost the pre-scripted response that <a href="/concepts/operation-mockingbird">Mockingbird</a> propaganda depends upon.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-hypnotists-take-on-israel-palestine" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/stonetoss.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stonetoss = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stonetoss as default
};
