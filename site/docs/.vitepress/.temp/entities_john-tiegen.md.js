import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John \\"Tig\\" Tiegen","description":"","frontmatter":{"title":"John \\"Tig\\" Tiegen","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["benghazi","cia-contractor","stand-down","witness"],"sources":["raw/a-dereliction-of-duty.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/john-tiegen.md","filePath":"entities/john-tiegen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-tiegen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-tig-tiegen" tabindex="-1">John &quot;Tig&quot; Tiegen <a class="header-anchor" href="#john-tig-tiegen" aria-label="Permalink to &quot;John &quot;Tig&quot; Tiegen&quot;">​</a></h1><p>John &quot;Tig&quot; Tiegen is a former United States Marine and CIA Global Response Staff contractor who was part of the security team at the <a href="/entities/cia">CIA</a> annex in <a href="/concepts/benghazi">Benghazi</a>, Libya, on the night of September 11, 2012.</p><h2 id="role-in-the-badlands-corpus" tabindex="-1">Role in the Badlands corpus <a class="header-anchor" href="#role-in-the-badlands-corpus" aria-label="Permalink to &quot;Role in the Badlands corpus&quot;">​</a></h2><p>Tiegen appears in <a href="/concepts/a-dereliction-of-duty">A Dereliction of Duty</a> as a first-hand witness to the disputed stand-down order. In an account given to Politico and quoted in the article, fellow contractor <a href="/entities/kris-paronto">Kris Paronto</a> recalls that as the team stood outside their compound villa readying two military vehicles and listening to radio calls for help from <a href="/entities/state-department">State Department</a> diplomats, Tiegen told the base chief that the security team was &quot;losing the initiative; we need to go now.&quot; Paronto then heard the words &quot;stand down&quot; before the team &quot;bucked&quot; leadership and left on their own accord.</p><p>The article presents Tiegen and his colleagues as men who defied the order and went to the aid of fellow Americans, and contrasts their conduct with what The Hill&#39;s account calls the &quot;dereliction of duty of so-called &#39;leaders&#39; in D.C.&quot; It further notes that survivors of the annex fight were later required by CIA director <a href="/entities/john-brennan">John Brennan</a> to re-sign non-disclosure agreements — in two cases presented during a memorial service at Langley honouring <a href="/entities/tyrone-woods">Tyrone Woods</a> and <a href="/entities/glen-doherty">Glen Doherty</a> — which the article characterises as intimidation intended to suppress testimony before the <a href="/entities/house-permanent-select-committee-on-intelligence">House Permanent Select Committee on Intelligence</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
