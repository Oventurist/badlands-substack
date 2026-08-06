import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bill Cassidy","description":"","frontmatter":{"title":"Bill Cassidy","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["us-senate","republican","louisiana"],"sources":["raw/badlands-brief-6b4.md"],"confidence":"low"},"headers":[],"relativePath":"entities/bill-cassidy.md","filePath":"entities/bill-cassidy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bill-cassidy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bill-cassidy" tabindex="-1">Bill Cassidy <a class="header-anchor" href="#bill-cassidy" aria-label="Permalink to &quot;Bill Cassidy&quot;">​</a></h1><p>Bill Cassidy is a Republican United States Senator from Louisiana.[1]</p><h2 id="friction-with-the-trump-agenda-pace" tabindex="-1">Friction with the Trump agenda pace <a class="header-anchor" href="#friction-with-the-trump-agenda-pace" aria-label="Permalink to &quot;Friction with the Trump agenda pace&quot;">​</a></h2><p>In June 2026, Cassidy was among the Senate Republicans identified in reporting on tensions with President <a href="/entities/donald-trump">Donald Trump</a> over the pace and strategy of advancing the administration&#39;s 2026 agenda.[1] Alongside Senators <a href="/entities/thom-tillis">Thom Tillis</a> and <a href="/entities/john-cornyn">John Cornyn</a>, Cassidy pushed back on the expectation that senators simply approve proposals without changes or extended debate, citing Senate procedures and narrow majorities as constraints, while Majority Leader <a href="/entities/john-thune">John Thune</a> emphasized working through the legislative process.[1] Despite the disagreements, the senators involved were described as generally supportive of many of Trump&#39;s policy goals.[1]</p><p>Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> framed this resistance through the lens of change management, arguing that in a transformational change program one moves fast and breaks things, and that resisters such as Thune and his &quot;old guard collaborators&quot; were deliberately destabilized — discombobulated — and attempting delay to stop what was coming.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Deliberate Discombobulation Driving Transformational Change&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6b4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6b4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bill-cassidy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billCassidy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billCassidy as default
};
