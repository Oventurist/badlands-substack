import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Signal (messaging application)","description":"","frontmatter":{"title":"Signal (messaging application)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["encryption","records","national-security","technology"],"sources":["raw/badlands-news-brief-03a.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/signal.md","filePath":"concepts/signal.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/signal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="signal-messaging-application" tabindex="-1">Signal (messaging application) <a class="header-anchor" href="#signal-messaging-application" aria-label="Permalink to &quot;Signal (messaging application)&quot;">​</a></h1><p>Signal is an encrypted commercial messaging application that became the subject of litigation against Trump administration officials in March 2025.[1]</p><h2 id="the-2025-yemen-strike-chat" tabindex="-1">The 2025 Yemen strike chat <a class="header-anchor" href="#the-2025-yemen-strike-chat" aria-label="Permalink to &quot;The 2025 Yemen strike chat&quot;">​</a></h2><p>Defense Secretary <a href="/entities/pete-hegseth">Pete Hegseth</a> and other senior officials used Signal — an unclassified commercial app — to discuss military plans to strike Houthi targets in Yemen.[1] The chat mistakenly included <a href="/entities/jeffrey-goldberg">Jeffrey Goldberg</a>, editor-in-chief of The Atlantic.[1]</p><p>The watchdog group <a href="/entities/american-oversight">American Oversight</a> sued in a D.C. federal court, alleging that conducting government business on the platform violated federal records laws and seeking to &quot;recover unlawfully deleted messages and prevent further destruction.&quot;[1] The suit named Hegseth along with <a href="/entities/tulsi-gabbard">Tulsi Gabbard</a>, <a href="/entities/john-ratcliffe">John Ratcliffe</a>, <a href="/entities/scott-bessent">Scott Bessent</a>, and <a href="/entities/marco-rubio">Marco Rubio</a>.[1]</p><h2 id="records-retention-issue" tabindex="-1">Records-retention issue <a class="header-anchor" href="#records-retention-issue" aria-label="Permalink to &quot;Records-retention issue&quot;">​</a></h2><p>Under the <a href="/concepts/federal-records-act">Federal Records Act</a>, officials must preserve communications relating to government business; agencies commonly address encrypted-app usage by requiring that messages be forwarded to official systems or otherwise archived.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;SCOTUS and Subsidies, Banker Bonuses, and Six More Years of Lindsay Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-03a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-03a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/signal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  signal as default
};
