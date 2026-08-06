import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John \\"Tig\\" Tiegen","description":"","frontmatter":{"title":"John \\"Tig\\" Tiegen","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["benghazi","cia-annex","contractor","whistleblower"],"sources":["raw/badlands-brief-eea.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-tiegen.md","filePath":"entities/john-tiegen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-tiegen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-tig-tiegen" tabindex="-1">John &quot;Tig&quot; Tiegen <a class="header-anchor" href="#john-tig-tiegen" aria-label="Permalink to &quot;John &quot;Tig&quot; Tiegen&quot;">​</a></h1><p>John &quot;Tig&quot; Tiegen is a former security contractor who was among the CIA annex forces present during the September 11, 2012 <a href="/entities/benghazi-attack">Benghazi attack</a> and who has said the annex team was told to stand down during the assault.[1]</p><p>Interviewed by <a href="/entities/ashe-in-america">Ashe in America</a> following the February 2026 extradition of Libyan suspect <a href="/entities/zubayar-al-bakoush">Zubayar Al-Bakoush</a>, Tiegen dismissed the prosecution as &quot;a waste of time and resources,&quot; asking, &quot;How much did it cost to track him down, fly his ass here, room and board him, now prosecute him, and then put him in prison for the rest of his life for being maybe number 36 not even top 20!&quot;[1] He allowed that authorities may have &quot;captured him for interrogation on more recent stuff,&quot; but said that outside that narrow possibility, &quot;It&#39;s a complete waste!&quot;[1]</p><p>Tiegen also framed the attack as a military rather than criminal matter: &quot;Benghazi wasn&#39;t a criminal act, it was an attack by an enemy force. If our government wants to hold people accountable, look at [the] people in our own government [and] hold them accountable!&quot;[1] That view aligned with Badlands&#39; broader argument that no U.S. officials were fired or sanctioned over the deaths of Ambassador <a href="/entities/christopher-stevens">J. Christopher Stevens</a>, Sean Smith, <a href="/entities/tyrone-woods">Tyrone Woods</a> and <a href="/entities/glen-doherty">Glen Doherty</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Epstein Fallout &amp; Middle East Madness&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-eea" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-eea</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-tiegen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnTiegen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnTiegen as default
};
