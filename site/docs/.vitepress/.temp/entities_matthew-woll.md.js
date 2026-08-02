import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Matthew Woll","description":"","frontmatter":{"title":"Matthew Woll","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["labor-unions","british-intelligence","cold-war"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/matthew-woll.md","filePath":"entities/matthew-woll.md","lastUpdated":null}');
const _sfc_main = { name: "entities/matthew-woll.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="matthew-woll" tabindex="-1">Matthew Woll <a class="header-anchor" href="#matthew-woll" aria-label="Permalink to &quot;Matthew Woll&quot;">​</a></h1><p>Matthew Woll was an American labor leader who served as a key figure in the <a href="/entities/american-federation-of-labor">American Federation of Labor (AFL)</a>. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, Woll is depicted as a staunch anti-communist who viewed organized labor as a frontline in the ideological battle against Soviet influence in Europe.</p><h2 id="role-in-covert-operations" tabindex="-1">Role in covert operations <a class="header-anchor" href="#role-in-covert-operations" aria-label="Permalink to &quot;Role in covert operations&quot;">​</a></h2><p>The article describes Woll as understanding that &quot;labor&#39;s collective strength could be leveraged to advance Western imperialism and to counter Soviet influence in Europe.&quot; It notes that Woll held key positions in two British intelligence fronts: the American Labor Committee to Aid British Labor and the League for Human Rights. It further cites historian and author Thomas E. Mahl, who suggests in his work <em>Desperate Deception</em> that &quot;Woll may have been a British intelligence contact.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/matthew-woll.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const matthewWoll = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  matthewWoll as default
};
