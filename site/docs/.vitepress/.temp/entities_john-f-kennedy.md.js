import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John F. Kennedy","description":"","frontmatter":{"title":"John F. Kennedy","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["us-president","bretton-woods","deep-state"],"sources":["raw/a-gateway-to-a-new-world-of-cooperation.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/john-f-kennedy.md","filePath":"entities/john-f-kennedy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-f-kennedy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-f-kennedy" tabindex="-1">John F. Kennedy <a class="header-anchor" href="#john-f-kennedy" aria-label="Permalink to &quot;John F. Kennedy&quot;">​</a></h1><p>John Fitzgerald Kennedy was the 35th President of the United States, serving from January 1961 until his assassination in November 1963.</p><h2 id="role-in-the-badlands-corpus" tabindex="-1">Role in the Badlands corpus <a class="header-anchor" href="#role-in-the-badlands-corpus" aria-label="Permalink to &quot;Role in the Badlands corpus&quot;">​</a></h2><p>In the Badlands Media article <a href="/concepts/a-gateway-to-a-new-world-of-cooperation">A Gateway to a New World of Cooperation</a>, <a href="/entities/matthew-ehret">Matthew Ehret</a> names Kennedy — and, &quot;to a lesser but relevant extent,&quot; <a href="/entities/donald-trump">Donald Trump</a> — as a president who attempted to revive the noble origins of the <a href="/concepts/bretton-woods-system">Bretton Woods institutions</a> and of the United States government after they had, in the author&#39;s account, been hijacked by deep state operatives in the years following the Second World War. Kennedy thus functions in the article as evidence that the tradition of <a href="/entities/franklin-d-roosevelt">Franklin Roosevelt</a>&#39;s <a href="/concepts/four-freedoms">Four Freedoms</a> and development-oriented finance retained American adherents into the post-war period, even as institutional power moved against it.</p><p>Elsewhere in the Badlands corpus, Kennedy features in connection with the <a href="/concepts/bay-of-pigs-invasion">Bay of Pigs invasion</a> and the <a href="/entities/cia">Central Intelligence Agency</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-gateway-to-a-new-world-of-cooperation" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-f-kennedy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnFKennedy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnFKennedy as default
};
