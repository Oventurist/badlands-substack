import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Senate Bill 73 (California)","description":"","frontmatter":{"title":"Senate Bill 73 (California)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["california","elections","legislation","ballots","law-enforcement"],"sources":["raw/badlands-brief-257.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/senate-bill-73.md","filePath":"concepts/senate-bill-73.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/senate-bill-73.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="senate-bill-73-california" tabindex="-1">Senate Bill 73 (California) <a class="header-anchor" href="#senate-bill-73-california" aria-label="Permalink to &quot;Senate Bill 73 (California)&quot;">​</a></h1><p>Senate Bill 73 is a California statute signed by Governor <a href="/entities/gavin-newsom">Gavin Newsom</a> in May 2026 that sharply restricts law-enforcement access to ballots and election records.[1]</p><h2 id="provisions" tabindex="-1">Provisions <a class="header-anchor" href="#provisions" aria-label="Permalink to &quot;Provisions&quot;">​</a></h2><p>The law limits peace officers from accessing ballots, voter lists, rosters, and certified voting technology.[1] Officers are generally barred from interfering with election administration except in cases involving urgent public health or safety threats.[1] A court order is required before law enforcement can take possession of key election materials, and removing packages containing voted ballots from election officials is classified as a crime.[1] Violations can carry criminal penalties, fines, and up to three years in jail, along with civil penalties of up to $50,000 for offenses involving ballot custody.[1]</p><p>Newsom said the measure was intended to &quot;clarify the rules of engagement.&quot;[1]</p><h2 id="reception" tabindex="-1">Reception <a class="header-anchor" href="#reception" aria-label="Permalink to &quot;Reception&quot;">​</a></h2><p>Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> framed the bill as pre-primary interference, noting that the criminalization of removing voted-ballot packages from election officials is ironic &quot;considering ballot chain of custody is essentially non-existent,&quot; and asking whether Newsom had effectively criminalized status-quo election administration.[1] The bill was presented in the Brief alongside Newsom&#39;s proposed 100% tax on payouts from the <a href="/concepts/anti-weaponization-fund">anti-weaponization fund</a> as part of a single defensive posture ahead of the California primaries.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bicameral Deal-Making and Accelerationism Acknowledged&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-257" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-257</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/senate-bill-73.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const senateBill73 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  senateBill73 as default
};
