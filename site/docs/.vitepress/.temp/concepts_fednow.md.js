import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"FedNow","description":"","frontmatter":{"title":"FedNow","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["fednow","payments","federal-reserve","instant-settlement"],"sources":["raw/are-cbdcs-the-path-to-fear-or-freedom.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/fednow.md","filePath":"concepts/fednow.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/fednow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fednow" tabindex="-1">FedNow <a class="header-anchor" href="#fednow" aria-label="Permalink to &quot;FedNow&quot;">​</a></h1><p><strong>FedNow</strong> is an instant payment service built by the <a href="/entities/federal-reserve">Federal Reserve</a>. In the Badlands Media article &quot;Are CBDCs The Path To Fear, or Freedom?&quot;, <a href="/entities/joe-lange">Joe Lange</a> stresses that FedNow is a peer-to-peer payment system and <em>not</em> a digital currency, a distinction he says is widely confused in commentary about <a href="/concepts/central-bank-digital-currency">CBDCs</a>.<a href="https://badlands.substack.com/p/are-cbdcs-the-path-to-fear-or-freedom" target="_blank" rel="noreferrer">[1]</a></p><p>Lange nonetheless calls FedNow an important part of the broader plan, because the Fed has built a peer-to-peer platform that every financial service in the country can access and which eliminates fees charged by other intermediaries.<a href="https://badlands.substack.com/p/are-cbdcs-the-path-to-fear-or-freedom" target="_blank" rel="noreferrer">[1]</a> He contrasts it with the <a href="/concepts/automated-clearing-house">ACH</a> network, where settlement takes days and a third party retains the ability to cancel transactions.<a href="https://badlands.substack.com/p/are-cbdcs-the-path-to-fear-or-freedom" target="_blank" rel="noreferrer">[1]</a> Together with round-the-clock digital settlement, FedNow is presented as infrastructure that returns control and speed to individual users.<a href="https://badlands.substack.com/p/are-cbdcs-the-path-to-fear-or-freedom" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Are CBDCs The Path To Fear, or Freedom?&quot;, URL: <a href="https://badlands.substack.com/p/are-cbdcs-the-path-to-fear-or-freedom" target="_blank" rel="noreferrer">https://badlands.substack.com/p/are-cbdcs-the-path-to-fear-or-freedom</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/fednow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fednow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fednow as default
};
