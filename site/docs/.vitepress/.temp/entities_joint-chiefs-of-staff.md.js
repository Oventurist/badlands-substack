import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Joint Chiefs of Staff","description":"","frontmatter":{"title":"Joint Chiefs of Staff","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military","pentagon","middle-east","ceasefire"],"sources":["raw/badlands-brief-07c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/joint-chiefs-of-staff.md","filePath":"entities/joint-chiefs-of-staff.md","lastUpdated":null}');
const _sfc_main = { name: "entities/joint-chiefs-of-staff.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="joint-chiefs-of-staff" tabindex="-1">Joint Chiefs of Staff <a class="header-anchor" href="#joint-chiefs-of-staff" aria-label="Permalink to &quot;Joint Chiefs of Staff&quot;">​</a></h1><p>The Joint Chiefs of Staff is the body of senior United States military leaders whose chairman serves as the principal military adviser to the president; in April 2026 its chairman, <a href="/entities/dan-caine">Dan &quot;Razin&#39;&quot; Caine</a>, was assigned a direct diplomatic role in the <a href="/concepts/israel-lebanon-ceasefire">Israel–Lebanon ceasefire</a> effort.[1]</p><p>President <a href="/entities/donald-trump">Donald Trump</a> said he had directed Vice President <a href="/entities/jd-vance">JD Vance</a> and Secretary of State <a href="/entities/marco-rubio">Marco Rubio</a>, together with the Chairman of the Joint Chiefs of Staff, to work with <a href="/entities/israel">Israel</a> and <a href="/entities/lebanon">Lebanon</a> to achieve a lasting peace following the announcement of a ten-day ceasefire.[1] The assignment placed the chairman alongside civilian diplomatic leadership rather than in a purely advisory military capacity, reflecting the mixed political-military character of the negotiation.[1]</p><p>The Joint Chiefs sit atop the uniformed side of the <a href="/entities/department-of-defense">Department of Defense</a>, the same institution whose 2026 outreach to automakers and civilian manufacturers to scale weapons production was read as a shift toward a sustained wartime footing and an emerging <a href="/concepts/war-economy">war economy</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Supreme Conflicts, Criminal Probes, &amp; A Ceasefire&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-07c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-07c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/joint-chiefs-of-staff.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jointChiefsOfStaff = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jointChiefsOfStaff as default
};
