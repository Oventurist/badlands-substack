import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jeremy Bash","description":"","frontmatter":{"title":"Jeremy Bash","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["us-government","pentagon","benghazi","obama-administration"],"sources":["raw/a-dereliction-of-duty.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/jeremy-bash.md","filePath":"entities/jeremy-bash.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jeremy-bash.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jeremy-bash" tabindex="-1">Jeremy Bash <a class="header-anchor" href="#jeremy-bash" aria-label="Permalink to &quot;Jeremy Bash&quot;">​</a></h1><p>Jeremy Bash served as Chief of Staff at the United States Department of Defense under Secretary of Defense <a href="/entities/leon-panetta">Leon Panetta</a> during the Obama administration, having previously held the same role at the <a href="/entities/cia">CIA</a> while Panetta was director.</p><h2 id="role-in-the-badlands-corpus" tabindex="-1">Role in the Badlands corpus <a class="header-anchor" href="#role-in-the-badlands-corpus" aria-label="Permalink to &quot;Role in the Badlands corpus&quot;">​</a></h2><p>Bash appears in <a href="/concepts/a-dereliction-of-duty">A Dereliction of Duty</a> as documentary evidence against the official position that no military help could have reached <a href="/concepts/benghazi">Benghazi</a> in time. Citing Fox News, the article reports that a Freedom of Information Act lawsuit revealed that Bash &quot;immediately offered assistance to the State Department on the night of Sept. 11,&quot; writing that forces could move to Benghazi and that &quot;they are spinning up as we speak.&quot;</p><p>The article uses this message to contradict the claim by <a href="/entities/hillary-clinton">Hillary Clinton</a> and the <a href="/entities/state-department">State Department</a> that nothing more could have been done, and to undercut the State Department Accountability Review Board&#39;s conclusion that the interagency response was &quot;timely and appropriate.&quot; In the article&#39;s reconstruction, the <a href="/entities/pentagon">Pentagon</a> was already generating options and moving forces when the &quot;Deputies Meeting&quot; chaired by Clinton shifted the discussion to whether the Libyan government would consent to a deployment — a delay the article characterises as deliberate obstruction rather than caution.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jeremy-bash.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jeremyBash = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jeremyBash as default
};
