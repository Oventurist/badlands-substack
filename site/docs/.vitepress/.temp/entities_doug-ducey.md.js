import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Doug Ducey","description":"","frontmatter":{"title":"Doug Ducey","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","arizona","governor","republican"],"sources":["raw/an-sos-from-ground-zero.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/doug-ducey.md","filePath":"entities/doug-ducey.md","lastUpdated":null}');
const _sfc_main = { name: "entities/doug-ducey.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="doug-ducey" tabindex="-1">Doug Ducey <a class="header-anchor" href="#doug-ducey" aria-label="Permalink to &quot;Doug Ducey&quot;">​</a></h1><p>Doug Ducey is an American businessman and Republican politician who served as Governor of Arizona from 2015 to January 2023, and was therefore the sitting governor during the disputed administration of the November 8, 2022 general election in <a href="/entities/maricopa-county">Maricopa County</a>.</p><h2 id="role-in-the-corpus" tabindex="-1">Role in the corpus <a class="header-anchor" href="#role-in-the-corpus" aria-label="Permalink to &quot;Role in the corpus&quot;">​</a></h2><p>Ducey appears in <a href="/concepts/an-sos-from-ground-zero">An SOS From Ground Zero</a> chiefly as the occasion for a constitutional question. <a href="/entities/kitty-gillespie">Kitty Gillespie</a> surmises that &quot;Governor Ducey was headed out of state on Friday, creating a &#39;temporary disability,&#39; so somebody needed to take the helm,&quot; which led to Attorney General <a href="/entities/mark-brnovich">Mark Brnovich</a> being described as acting governor. Gillespie contrasts this with Article V, Section 6 of the Constitution of Arizona, under which the <a href="/entities/arizona-secretary-of-state">Secretary of State</a> — then <a href="/entities/katie-hobbs">Katie Hobbs</a> — stands first in the line of succession. Ducey himself is not otherwise criticized in the article, but his absence during the final week before the statutory canvass deadline forms part of the picture of institutional drift the piece describes.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
