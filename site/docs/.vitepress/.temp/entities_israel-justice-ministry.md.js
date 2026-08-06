import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Israel Justice Ministry","description":"","frontmatter":{"title":"Israel Justice Ministry","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","judiciary","netanyahu","corruption-trial"],"sources":["raw/badlands-brief-559.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/israel-justice-ministry.md","filePath":"entities/israel-justice-ministry.md","lastUpdated":null}');
const _sfc_main = { name: "entities/israel-justice-ministry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="israel-justice-ministry" tabindex="-1">Israel Justice Ministry <a class="header-anchor" href="#israel-justice-ministry" aria-label="Permalink to &quot;Israel Justice Ministry&quot;">​</a></h1><p>The Israel Justice Ministry is the government department responsible for the country&#39;s legal administration, including a dedicated unit that reviews clemency and pardon requests.[1]</p><p>In March 2026, the ministry&#39;s clemency unit reportedly did not recommend granting a pardon to Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a>, according to officials familiar with the matter.[1] The unit&#39;s position meant that any potential pardon request would face internal opposition within the justice system.[1] Netanyahu is standing trial on corruption charges including bribery, fraud, and breach of trust, all of which he denies; Israeli law allows the president to grant pardons, though these typically follow a conviction rather than occurring during an ongoing trial.[1]</p><p>Badlands commentary framed the ministry&#39;s position as decisive for Netanyahu&#39;s political strategy, arguing that the unresolved charges function as a sword of Damocles pushing him toward escalation in the war with <a href="/entities/iran">Iran</a> and toward the <a href="/concepts/greater-israel">Greater Israel</a> agenda ahead of the October election.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Narrative Warfare For Your Safety&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-559" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-559</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/israel-justice-ministry.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const israelJusticeMinistry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  israelJusticeMinistry as default
};
