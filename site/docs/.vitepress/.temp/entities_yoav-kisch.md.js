import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Yoav Kisch","description":"","frontmatter":{"title":"Yoav Kisch","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","likud","iran-war","domestic-unrest"],"sources":["raw/badlands-brief-e3f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/yoav-kisch.md","filePath":"entities/yoav-kisch.md","lastUpdated":null}');
const _sfc_main = { name: "entities/yoav-kisch.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="yoav-kisch" tabindex="-1">Yoav Kisch <a class="header-anchor" href="#yoav-kisch" aria-label="Permalink to &quot;Yoav Kisch&quot;">​</a></h1><p>Yoav Kisch is an Israeli politician and member of <a href="/entities/likud">likud</a>, the party led by Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a>, serving as Education Minister in the Netanyahu government.[1]</p><h2 id="role-in-the-april-2026-domestic-unrest" tabindex="-1">Role in the April 2026 domestic unrest <a class="header-anchor" href="#role-in-the-april-2026-domestic-unrest" aria-label="Permalink to &quot;Role in the April 2026 domestic unrest&quot;">​</a></h2><p>Kisch entered Badlands Media&#39;s coverage of the <a href="/concepts/iran-war">Iran War</a> after he posted video of Israeli citizens assembling outside the homes of Netanyahu cabinet members to protest the continuing Iranian missile attacks on <a href="/entities/israel">Israel</a>.[1] In his accompanying commentary, Kisch characterised the demonstrators as &quot;deranged criminals.&quot;[1]</p><p>The Brief highlights the episode as a marker of deteriorating relations between citizen and state inside Israel. As the contributor GhostofBasedPatrickHenry notes, Kisch holds no authority over the military as Education Minister, yet he — like other ministers — is being blamed personally for a war in which missiles are described as falling on Israel unchecked.[1] The protests are read as a sign of escalation in Israeli domestic politics rather than a narrow policy dispute.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Blondie&#39;s Ouster, Peters Sentence, &amp; Several Foreign Ops&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e3f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e3f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/yoav-kisch.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const yoavKisch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  yoavKisch as default
};
