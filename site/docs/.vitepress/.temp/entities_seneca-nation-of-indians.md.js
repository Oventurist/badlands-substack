import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Seneca Nation of Indians","description":"","frontmatter":{"title":"Seneca Nation of Indians","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["seneca-nation","native-american","new-york","education"],"sources":["raw/badlands-brief-414.md"],"confidence":"low"},"headers":[],"relativePath":"entities/seneca-nation-of-indians.md","filePath":"entities/seneca-nation-of-indians.md","lastUpdated":null}');
const _sfc_main = { name: "entities/seneca-nation-of-indians.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="seneca-nation-of-indians" tabindex="-1">Seneca Nation of Indians <a class="header-anchor" href="#seneca-nation-of-indians" aria-label="Permalink to &quot;Seneca Nation of Indians&quot;">​</a></h1><p>The Seneca Nation of Indians is a Native American nation whose reservation lies in western New York near the Pennsylvania border.[1]</p><h2 id="_2026-school-robot-controversy" tabindex="-1">2026 school robot controversy <a class="header-anchor" href="#_2026-school-robot-controversy" aria-label="Permalink to &quot;2026 school robot controversy&quot;">​</a></h2><p>The <a href="/entities/salamanca-city-central-school-district">Salamanca City Central School District</a>, a small rural district located on the Seneca Nation reservation, drew national attention in July 2026 when it approved and then paused a nearly $60,000 purchase of an AI-powered humanoid robot from <a href="/entities/realbotix">Realbotix</a> for classroom use. Parents, teachers, and state officials objected over student data privacy and the vendor&#39;s ties to a sex-doll manufacturer.[1]</p><p>Badlands writer <a href="/entities/ashe-in-america">Ashe in America</a> closed her commentary on the affair with a joke that, with the pilot on hold, &quot;the heterosexual men and boys of the Seneca Nation are ostensibly nursing disappointment,&quot; and remarked on the incongruity of such a project being attempted &quot;so close to Amish country.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Narcissistic Sociopathy &amp; Rebranded Sex Robots For Kids&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-414" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-414</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/seneca-nation-of-indians.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const senecaNationOfIndians = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  senecaNationOfIndians as default
};
