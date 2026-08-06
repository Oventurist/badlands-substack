import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Office of Professional Responsibility","description":"","frontmatter":{"title":"Office of Professional Responsibility","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["doj","ethics","oversight","prosecutorial-misconduct"],"sources":["raw/badlands-news-brief-360.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/office-of-professional-responsibility.md","filePath":"entities/office-of-professional-responsibility.md","lastUpdated":null}');
const _sfc_main = { name: "entities/office-of-professional-responsibility.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="office-of-professional-responsibility" tabindex="-1">Office of Professional Responsibility <a class="header-anchor" href="#office-of-professional-responsibility" aria-label="Permalink to &quot;Office of Professional Responsibility&quot;">​</a></h1><p>The Office of Professional Responsibility is the internal ethics body of the United States <a href="/entities/department-of-justice">Department of Justice</a>, responsible for investigating allegations of professional misconduct by department attorneys and recommending discipline.[1]</p><p>In April 2024 the office received an ethics complaint from Representative <a href="/entities/elise-stefanik">Elise Stefanik</a> against special counsel <a href="/entities/jack-smith">Jack Smith</a>, accusing him of attempting to &quot;unlawfully interfere with the 2024 presidential election&quot; by rushing former President <a href="/entities/donald-trump">Donald Trump</a>&#39;s federal election subversion case to trial before November.[1] Stefanik argued that Smith should be censured for violating the Justice Department&#39;s manual, citing a section providing that attorneys may &quot;never select the timing of any action … for the purpose of affecting any election,&quot; and said that Smith&#39;s conduct &quot;has brought disrepute to the Department of Justice and the entire federal government, and the … Office of Professional Responsibility should impose the discipline that such conduct warrants.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Ethics Complaints &amp; COVID Comeuppance&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-360" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-360</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/office-of-professional-responsibility.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const officeOfProfessionalResponsibility = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  officeOfProfessionalResponsibility as default
};
