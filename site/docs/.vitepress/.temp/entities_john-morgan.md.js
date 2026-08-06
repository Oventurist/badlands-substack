import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Morgan","description":"","frontmatter":{"title":"John Morgan","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["democrats","donors","florida","attorney"],"sources":["raw/badlands-news-brief-24e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-morgan.md","filePath":"entities/john-morgan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-morgan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-morgan" tabindex="-1">John Morgan <a class="header-anchor" href="#john-morgan" aria-label="Permalink to &quot;John Morgan&quot;">​</a></h1><p>John Morgan is a Florida attorney and Democratic mega-donor who has known <a href="/entities/joe-biden">Joe Biden</a> for decades.[1]</p><p>In December 2024 Morgan wondered aloud whether Biden had deliberately forced <a href="/entities/kamala-harris">Kamala Harris</a> onto the ticket — throwing his endorsement behind her within minutes of withdrawing from the race — in order to spite <a href="/entities/nancy-pelosi">Nancy Pelosi</a> and <a href="/entities/barack-obama">Barack Obama</a>, both of whom had worked behind the scenes to push Biden out and both of whom held serious reservations about Harris&#39;s capabilities.[1]</p><p>&quot;[Biden] basically had the palace coup from all directions, from George Clooney to Pelosi. I think he got pissed off [and] said, &#39;F*** you&#39;, and gave us Harris,&quot; said Morgan, who had attended a &quot;thank you&quot; dinner for donors at the <a href="/entities/white-house">White House</a> the previous month. He added: &quot;Pelosi had told her delegation that there would be a convention and a nominating process. And Barack Obama did not endorse [Harris] for five days.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Shutdown Looms as Game Theory Plays Out&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-24e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-24e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-morgan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnMorgan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnMorgan as default
};
