import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ali Sait Akin","description":"","frontmatter":{"title":"Ali Sait Akin","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["diplomat","turkey","benghazi","2012-attack"],"sources":["raw/a-dereliction-of-duty.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/ali-sait-akin.md","filePath":"entities/ali-sait-akin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ali-sait-akin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ali-sait-akin" tabindex="-1">Ali Sait Akin <a class="header-anchor" href="#ali-sait-akin" aria-label="Permalink to &quot;Ali Sait Akin&quot;">​</a></h1><p>Ali Sait Akin was the Turkish Consul General in <a href="/concepts/benghazi">Benghazi</a>, Libya, at the time of the September 11, 2012 attack on the United States diplomatic compound there.</p><h2 id="role-in-the-badlands-corpus" tabindex="-1">Role in the Badlands corpus <a class="header-anchor" href="#role-in-the-badlands-corpus" aria-label="Permalink to &quot;Role in the Badlands corpus&quot;">​</a></h2><p>Akin appears in <a href="/concepts/a-dereliction-of-duty">A Dereliction of Duty</a> as the last known official visitor to Ambassador <a href="/entities/christopher-stevens">Christopher Stevens</a>. Citing Fox News, the article records that on the night of September 11, 2012, Stevens met with Akin at the Benghazi consulate and escorted him out of the front gate approximately one hour before the assault began at around 9:35 p.m. local time.</p><p>The article treats the meeting as significant rather than incidental. It links Akin&#39;s presence to reporting that the Libyan-flagged vessel Al Entisar, said to be carrying weapons bound for Syrian rebels, had arrived at the Turkish port of Iskenderun on September 6, 2012 — five days before the attack that killed Stevens, information management officer <a href="/entities/sean-smith">Sean Smith</a> and former Navy SEALs <a href="/entities/tyrone-woods">Tyrone Woods</a> and <a href="/entities/glen-doherty">Glen Doherty</a>. Framing <a href="/entities/turkey">Turkey</a> as a conduit in the alleged Libya-to-Syria weapons pipeline, the article asks rhetorically whether it was &quot;just a coincidence&quot; that the Turkish Consul General met Stevens at the lightly defended consulate rather than at the embassy in Tripoli, and whether it was coincidence that the attack began an hour after that meeting. The article offers no direct evidence of Akin&#39;s complicity, presenting the sequence of events as circumstantial support for its claim that Stevens was deliberately exposed.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ali-sait-akin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aliSaitAkin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  aliSaitAkin as default
};
