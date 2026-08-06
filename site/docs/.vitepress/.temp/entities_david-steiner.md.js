import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Steiner","description":"","frontmatter":{"title":"David Steiner","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["usps","election-integrity","executive"],"sources":["raw/badlands-brief-323.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-steiner.md","filePath":"entities/david-steiner.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-steiner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-steiner" tabindex="-1">David Steiner <a class="header-anchor" href="#david-steiner" aria-label="Permalink to &quot;David Steiner&quot;">​</a></h1><p>David Steiner is the chief executive officer of the <a href="/entities/united-states-postal-service">United States Postal Service</a>.[1]</p><h2 id="role-in-federal-election-integrity-talks" tabindex="-1">Role in federal election integrity talks <a class="header-anchor" href="#role-in-federal-election-integrity-talks" aria-label="Permalink to &quot;Role in federal election integrity talks&quot;">​</a></h2><p>In May 2026 Steiner was reported to be among the senior officials taking part in <a href="/entities/white-house">White House</a> interagency discussions aimed at expanding federal involvement in voter verification and mail-in ballot rules.[1] The talks also involved <a href="/entities/department-of-justice">Justice Department</a> Civil Rights Division head <a href="/entities/harmeet-dhillon">Harmeet Dhillon</a> and her deputies, and <a href="/entities/department-of-homeland-security">DHS</a> election integrity official <a href="/entities/heather-honey">Heather Honey</a>.[1]</p><p>Under President <a href="/entities/donald-trump">Trump</a>&#39;s March executive order <a href="/concepts/ensuring-citizenship-verification-and-integrity-in-federal-elections">&quot;Ensuring Citizenship Verification and Integrity in Federal Elections&quot;</a>, the Postal Service is called upon to draft rules requiring states to provide voter registration lists in order for mail-in ballots to be processed.[1] USPS stated that it was reviewing the executive order and working on draft regulations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;We&#39;re Winning, plus Cuban Dominoes &amp; Weaponized Ethics&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-323" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-323</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-steiner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidSteiner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidSteiner as default
};
