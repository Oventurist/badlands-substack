import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Harmeet Dhillon","description":"","frontmatter":{"title":"Harmeet Dhillon","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","attorney","election-integrity","republican","arizona"],"sources":["raw/an-sos-from-ground-zero.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/harmeet-dhillon.md","filePath":"entities/harmeet-dhillon.md","lastUpdated":null}');
const _sfc_main = { name: "entities/harmeet-dhillon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="harmeet-dhillon" tabindex="-1">Harmeet Dhillon <a class="header-anchor" href="#harmeet-dhillon" aria-label="Permalink to &quot;Harmeet Dhillon&quot;">​</a></h1><p>Harmeet Dhillon is an American attorney and Republican Party figure known for litigation on election law, civil liberties, and free-speech matters, and for founding the Dhillon Law Group and the Center for American Liberty.</p><h2 id="role-in-the-corpus" tabindex="-1">Role in the corpus <a class="header-anchor" href="#role-in-the-corpus" aria-label="Permalink to &quot;Role in the corpus&quot;">​</a></h2><p>In <a href="/concepts/an-sos-from-ground-zero">An SOS From Ground Zero</a>, <a href="/entities/kitty-gillespie">Kitty Gillespie</a> reports that in the weeks after the November 8, 2022 election &quot;lawyers are swarming again&quot; in Arizona and singles out Dhillon among &quot;some savage lawyers fighting for election integrity in Arizona,&quot; calling her &quot;our beloved Harmeet Dhillon.&quot; The reference situates her within the broader post-election legal effort surrounding <a href="/entities/kari-lake">Kari Lake</a>&#39;s campaign and the demands for documentation from <a href="/entities/maricopa-county">Maricopa County</a>, alongside the parallel inquiry pursued by Assistant Attorney General <a href="/entities/jennifer-wright">Jennifer Wright</a> within the Arizona Attorney General&#39;s Election Integrity Unit.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/harmeet-dhillon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const harmeetDhillon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  harmeetDhillon as default
};
