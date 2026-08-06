import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ted Lieu","description":"","frontmatter":{"title":"Ted Lieu","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","democrats","second-amendment","gun-control"],"sources":["raw/badlands-news-brief-670.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ted-lieu.md","filePath":"entities/ted-lieu.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ted-lieu.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ted-lieu" tabindex="-1">Ted Lieu <a class="header-anchor" href="#ted-lieu" aria-label="Permalink to &quot;Ted Lieu&quot;">​</a></h1><p>Ted Lieu is a Democratic member of the United States House of Representatives from California and a prominent progressive voice on constitutional and gun policy questions.[1]</p><h2 id="response-to-the-new-mexico-carry-suspension" tabindex="-1">Response to the New Mexico carry suspension <a class="header-anchor" href="#response-to-the-new-mexico-carry-suspension" aria-label="Permalink to &quot;Response to the New Mexico carry suspension&quot;">​</a></h2><p>In September 2023, Lieu was among the prominent figures on the left who publicly affirmed that states do not have the authority to strike down or suspend the <a href="/concepts/second-amendment">Second Amendment</a>, after Governor <a href="/entities/michelle-lujan-grisham">Michelle Lujan Grisham</a> of New Mexico issued an emergency order suspending public carry in Albuquerque.[1]</p><p>Badlands Media contributor <a href="/entities/ashe-in-america">Ashe in America</a> argued that Lieu&#39;s position — shared with gun control activist <a href="/entities/david-hogg">David Hogg</a> — was not motivated by devotion to the Constitution or to states&#39; rights, but by a preference for gun restrictions imposed at the federal level through constitutional amendment or federal legislation, in the same manner that the establishment responded to abortion policy being returned to the states by <a href="/concepts/roe-v-wade">the reversal of Roe v. Wade</a>.[1] Ashe conceded that, whatever the motive, the underlying legal claim was correct: states may not infringe the Second Amendment, and neither may the federal government.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Musk the Peacemaker, Constitutional Overreach &amp; POTATUS&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-670" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-670</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ted-lieu.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tedLieu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tedLieu as default
};
