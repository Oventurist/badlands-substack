import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rhodes Scholarship","description":"","frontmatter":{"title":"Rhodes Scholarship","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["british-empire","education","elite-networks","oxford"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/rhodes-scholarship.md","filePath":"concepts/rhodes-scholarship.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/rhodes-scholarship.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rhodes-scholarship" tabindex="-1">Rhodes Scholarship <a class="header-anchor" href="#rhodes-scholarship" aria-label="Permalink to &quot;Rhodes Scholarship&quot;">​</a></h1><p>The Rhodes Scholarship is a postgraduate award to the University of Oxford established under the will of <a href="/entities/cecil-rhodes">Cecil Rhodes</a> and first granted in 1902. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, the program is presented not as an academic honour but as the recruitment mechanism of an imperial cadre.</p><h2 id="the-source-s-characterization" tabindex="-1">The source&#39;s characterization <a class="header-anchor" href="#the-source-s-characterization" aria-label="Permalink to &quot;The source&#39;s characterization&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> writes that the program was &quot;begun in 1902 to advance a re-organized British Empire,&quot; has worked alongside the <a href="/entities/fabian-society">Fabian Society</a> for over a century, and has produced more than 7,000 scholars who have permeated across all fields of society — media, education, government, military and corporate. He grounds this in Rhodes&#39;s 1877 will, which envisioned members tested for endurance and eloquence, &quot;bound by oath to serve for the rest of his life,&quot; and &quot;sent to that part of the Empire where it was felt he was needed.&quot;</p><p>The article characterizes what &quot;every good Rhodes Scholar is conditioned to do upon their completion of their indoctrination at Oxford&quot; in the case of <a href="/entities/chrystia-freeland">Chrystia Freeland</a>: facilitate the transition of the pre-collapse world economy into a green post-collapse world economy. Other Rhodes Scholars named in the source include <a href="/entities/bob-rae">Bob Rae</a>, who managed Freeland&#39;s entry into Canadian politics, and Strobe Talbott, a participant in the post-Soviet liberalization of Russia. A footnote adds that five Rhodes Scholars founded the <a href="/entities/league-of-social-reconstruction">League for Social Reconstruction</a> in Canada in 1932.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/rhodes-scholarship.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rhodesScholarship = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rhodesScholarship as default
};
