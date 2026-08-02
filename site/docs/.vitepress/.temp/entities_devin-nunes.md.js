import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Devin Nunes","description":"","frontmatter":{"title":"Devin Nunes","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["congress","intelligence","benghazi"],"sources":["raw/a-dereliction-of-duty.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/devin-nunes.md","filePath":"entities/devin-nunes.md","lastUpdated":null}');
const _sfc_main = { name: "entities/devin-nunes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="devin-nunes" tabindex="-1">Devin Nunes <a class="header-anchor" href="#devin-nunes" aria-label="Permalink to &quot;Devin Nunes&quot;">​</a></h1><p>Devin Nunes is a U.S. Representative from California who served as Chairman of the <a href="/entities/house-permanent-select-committee-on-intelligence">House Permanent Select Committee on Intelligence</a>. In the Badlands Media corpus, he is cited for pressing CIA director <a href="/entities/john-brennan">John Brennan</a> during a congressional hearing about the Benghazi attack and the non-disclosure agreements required of CIA operatives involved in the rescue efforts.</p><h2 id="role-in-the-benghazi-investigation" tabindex="-1">Role in the Benghazi Investigation <a class="header-anchor" href="#role-in-the-benghazi-investigation" aria-label="Permalink to &quot;Role in the Benghazi Investigation&quot;">​</a></h2><p>According to the source, Nunes questioned Brennan about why security operators involved in Benghazi rescue efforts were required to re-sign their non-disclosure agreements. The article cites a Fox News report stating that Brennan told the committee the NDAs were being updated, but Nunes and other committee members viewed the requirement as a form of intimidation intended to silence witnesses to the administration&#39;s handling of the attack.</p><p>Nunes&#39;s questioning highlighted the timeline discrepancy: Brennan became CIA director only months after the Benghazi attack, and the new NDAs were presented to operatives more than six months after the attack, during a memorial service for the fallen.</p><h2 id="related-pages" tabindex="-1">Related pages <a class="header-anchor" href="#related-pages" aria-label="Permalink to &quot;Related pages&quot;">​</a></h2><ul><li><a href="/entities/house-permanent-select-committee-on-intelligence">house-permanent-select-committee-on-intelligence</a></li><li><a href="/entities/john-brennan">john-brennan</a></li><li><a href="/concepts/benghazi">benghazi</a></li><li><a href="/entities/christopher-stevens">christopher-stevens</a></li><li><a href="/entities/hillary-clinton">hillary-clinton</a></li><li><a href="/entities/barack-obama">barack-obama</a></li><li><a href="/entities/cia">cia</a></li><li>fox news</li></ul><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/devin-nunes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const devinNunes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  devinNunes as default
};
