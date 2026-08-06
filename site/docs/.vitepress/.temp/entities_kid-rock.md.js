import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kid Rock","description":"","frontmatter":{"title":"Kid Rock","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["music","culture","trump","ufc"],"sources":["raw/badlands-news-brief-204.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kid-rock.md","filePath":"entities/kid-rock.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kid-rock.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kid-rock" tabindex="-1">Kid Rock <a class="header-anchor" href="#kid-rock" aria-label="Permalink to &quot;Kid Rock&quot;">​</a></h1><p>Kid Rock is an American musician and cultural figure closely associated with the populist right and with public appearances alongside <a href="/entities/donald-trump">Donald Trump</a>.[1]</p><h2 id="ufc-295-appearance" tabindex="-1">UFC 295 appearance <a class="header-anchor" href="#ufc-295-appearance" aria-label="Permalink to &quot;UFC 295 appearance&quot;">​</a></h2><p>On November 11, 2023, Kid Rock was part of the entourage that accompanied Trump into Madison Square Garden for <a href="/entities/ufc">UFC</a> 295, alongside <a href="/entities/tucker-carlson">Tucker Carlson</a>, UFC president <a href="/entities/dana-white">Dana White</a>, and Donald Trump Jr.[1] Trump entered to a loud ovation, pumping his fist and waving to the sold-out crowd as Kid Rock&#39;s song &quot;American Badass&quot; played throughout the arena before the group took ringside seats.[1]</p><p>Badlands contributor <a href="/entities/burning-bright">Burning Bright</a> argued that such appearances are not mere anecdotes but culturally significant events, noting that the UFC represents &quot;THE counter-culture sport of the new century&quot; and that Trump timed his 2023 UFC appearances to coincide with major narrative deployments, summarizing the point as &quot;Politics IS Culture. Culture IS Politics.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Narrative Shielding &amp; Biden Bait&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-204" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-204</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kid-rock.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kidRock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kidRock as default
};
