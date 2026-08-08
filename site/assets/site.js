/* Badlands Wiki client JS: navbar search + filterable browse indexes.
   Replaces the old VitePress/Vue components with vanilla JS so the site can be
   served as plain static HTML (no build-time SPA overhead). */
(function () {
  "use strict";
  var BASE = "/badlands-substack/";
  var DATA_URL = BASE + "index-data.json";
  var data = null;

  function slugify(s) {
    return s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
  }

  function loadData(cb) {
    if (data) return cb(data);
    fetch(DATA_URL)
      .then(function (r) { return r.json(); })
      .then(function (d) { data = d; cb(d); })
      .catch(function (e) { console.error("index data load failed", e); });
  }

  /* ---- relevance ranking for search ---- */
  function searchScore(i, term) {
    var t = i.title.toLowerCase();
    if (t === term) return 1000;                              // exact title match
    if (t.indexOf(term) === 0) return 800;                    // title starts with term
    if (t.indexOf(" " + term) !== -1 || t.indexOf(term + " ") === 0) return 700; // whole word in title
    if (t.indexOf(term) !== -1) return 500;                   // substring in title
    if (i.tags) {
      var tags = i.tags.map(function (x) { return x.toLowerCase(); });
      if (tags.indexOf(term) !== -1) return 400;              // exact tag match
      if (tags.some(function (x) { return x.indexOf(term) === 0; })) return 300; // tag prefix
      if (tags.some(function (x) { return x.indexOf(term) !== -1; })) return 200; // tag substring
    }
    return 0;
  }

  function rankHits(d, term) {
    return d
      .map(function (i) { return { item: i, score: searchScore(i, term) }; })
      .filter(function (r) { return r.score > 0; })
      .sort(function (a, b) {
        if (b.score !== a.score) return b.score - a.score;
        if (a.item.title.length !== b.item.title.length) return a.item.title.length - b.item.title.length;
        return a.item.title.localeCompare(b.item.title);
      })
      .map(function (r) { return r.item; });
  }

  /* ---- home/header search (live suggestions; Enter -> /search/) ---- */
  function initSearch() {
    var input = document.getElementById("home-search") || document.getElementById("header-search");
    if (!input) return;
    var box = document.getElementById("home-search-results") || document.getElementById("header-search-results");
    if (!box) return;

    var t;
    input.addEventListener("input", function () {
      clearTimeout(t);
      var q = input.value.trim().toLowerCase();
      if (!q) { box.className = "home-search-results search-results"; box.innerHTML = ""; return; }
      t = setTimeout(function () {
        loadData(function (d) {
          var hits = rankHits(d, q).slice(0, 20);
          if (!hits.length) {
            box.className = "home-search-results search-results open";
            box.innerHTML = '<div class="search-empty">No matches for "' + escapeHtml(input.value) + '"</div>';
            return;
          }
          box.className = "home-search-results search-results open";
          box.innerHTML = hits
            .map(function (i) {
              return (
                '<a class="search-result" href="' + i.url + '">' +
                '<span class="sr-title">' + escapeHtml(i.title) + "</span></a>"
              );
            })
            .join("");
        });
      }, 120);
    });

    document.addEventListener("click", function (e) {
      if (!box.contains(e.target) && e.target !== input) {
        box.className = "home-search-results search-results";
      }
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { box.className = "home-search-results search-results"; input.blur(); }
    });
  }

  /* ---- browse indexes (entities / concepts / tags) ---- */
  var CATEGORY_TAGS = {
    people: ["person", "politician", "president", "author", "journalist", "historian", "actor", "whistleblower"],
    media: ["outlet", "media", "mainstream-media", "cable-news", "newspaper", "magazine", "independent-media", "substack"],
    government: ["agency", "government-agency", "us-government", "congress", "senate", "administration", "judiciary", "military"],
    organizations: ["organization", "international-organization", "advocacy-organization", "think-tank", "institution"],
    business: ["corporate", "bank", "asset-manager", "institutional-investor", "conglomerate", "tech", "finance"]
  };

  function initBrowser() {
    var mount = document.querySelector(".browser");
    if (!mount) return;
    var section = mount.getAttribute("data-section") || "all";
    var tagFromUrl = mount.getAttribute("data-tag-from-url") === "1";

    mount.innerHTML =
      '<div class="browser-controls">' +
      '<div class="browser-search"><span class="ib-search-icon">⌕</span>' +
      '<input type="search" class="browser-input" placeholder="' +
      (tagFromUrl ? "Filter by name…" : "Filter " + section + " by name…") +
      '"></div>' +
      '<div class="browser-chips"></div></div>' +
      '<div class="browser-meta"></div>' +
      '<div class="browser-groups"></div>';

    var input = mount.querySelector(".browser-input");
    var chips = mount.querySelector(".browser-chips");
    var meta = mount.querySelector(".browser-meta");
    var groups = mount.querySelector(".browser-groups");

    var urlTag = "";
    if (tagFromUrl && typeof window !== "undefined") {
      var p = new URLSearchParams(window.location.search);
      urlTag = p.get("tag") || "";
    }

    loadData(function (d) {
      var all = d.filter(function (i) {
        if (section === "all") return true;
        return i.section === section;
      });
      if (urlTag) {
        all = all.filter(function (i) {
          return i.tags && i.tags.some(function (t) { return slugify(t) === urlTag; });
        });
      }

      var cats = [
        { id: "all", label: "All", match: function () { return true; } },
        { id: "people", label: "People", match: function (i) { return i.tags && i.tags.some(function (t) { return CATEGORY_TAGS.people.indexOf(t) !== -1; }); } },
        { id: "media", label: "Media", match: function (i) { return i.tags && i.tags.some(function (t) { return CATEGORY_TAGS.media.indexOf(t) !== -1; }); } },
        { id: "government", label: "Government", match: function (i) { return i.tags && i.tags.some(function (t) { return CATEGORY_TAGS.government.indexOf(t) !== -1; }); } },
        { id: "organizations", label: "Orgs", match: function (i) { return i.tags && i.tags.some(function (t) { return CATEGORY_TAGS.organizations.indexOf(t) !== -1; }); } },
        { id: "business", label: "Business", match: function (i) { return i.tags && i.tags.some(function (t) { return CATEGORY_TAGS.business.indexOf(t) !== -1; }); } }
      ];

      var activeCat = "all";
      var query = "";

      function render() {
        var q = query.trim().toLowerCase();
        var filtered = all.filter(function (i) {
          var cat = cats.find(function (c) { return c.id === activeCat; });
          if (cat && !cat.match(i)) return false;
          if (!q) return true;
          return (
            i.title.toLowerCase().indexOf(q) !== -1 ||
            (i.tags && i.tags.join(" ").toLowerCase().indexOf(q) !== -1)
          );
        });
        meta.textContent = filtered.length + " shown" + (urlTag ? ' (tag: "' + urlTag + '")' : "");
        var map = {};
        filtered.forEach(function (i) {
          var letter = (i.title[0] || "#").toUpperCase();
          (map[letter] = map[letter] || []).push(i);
        });
        var letters = Object.keys(map).sort();
        groups.innerHTML = letters
          .map(function (letter) {
            var items = map[letter]
              .sort(function (a, b) { return a.title.localeCompare(b.title); })
              .map(function (i) {
                var tagHtml = "";
                if (i.tags && i.tags.length) {
                  tagHtml =
                    ' <span class="bi-tags">' +
                    i.tags.slice(0, 3).map(function (t) {
                      return '<span class="bi-tag">' + escapeHtml(t) + "</span>";
                    }).join(" ") +
                    "</span>";
                }
                return (
                  '<li class="browser-item"><a href="' + i.url + '">' +
                  escapeHtml(i.title) + "</a>" + tagHtml + "</li>"
                );
              })
              .join("");
            return (
              '<div class="browser-group"><div class="browser-letter">' + letter + "</div>" +
              '<ul class="browser-list">' + items + "</ul></div>"
            );
          })
          .join("");
        if (!letters.length) {
          groups.innerHTML = '<div class="browser-empty">No matches. Try a different name or category.</div>';
        }
      }

      chips.innerHTML = cats
        .map(function (c) {
          var count = all.filter(function (i) { return c.match(i); }).length;
          return '<button class="browser-chip' + (c.id === "all" ? " active" : "") + '" data-cat="' + c.id + '">' + c.label + ' <span class="bi-count">' + count + "</span></button>";
        })
        .join("");
      chips.querySelectorAll(".browser-chip").forEach(function (btn) {
        btn.addEventListener("click", function () {
          activeCat = btn.getAttribute("data-cat");
          chips.querySelectorAll(".browser-chip").forEach(function (b) { b.classList.remove("active"); });
          btn.classList.add("active");
          render();
        });
      });
      input.addEventListener("input", function () { query = input.value; render(); });
      render();
    });
  }

  /* ---- dark mode toggle (persisted, visible on all sizes) ---- */
  function initTheme() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var stored = null;
    try { stored = localStorage.getItem("theme"); } catch (e) {}
    if (stored === "dark" || (!stored && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    }
    btn.addEventListener("click", function () {
      var now = document.documentElement.classList.toggle("dark");
      try { localStorage.setItem("theme", now ? "dark" : "light"); } catch (e) {}
    });
  }

  /* ---- /search/ results page: read ?q=, list all matches ---- */
  function initSearchPage() {
    var input = document.getElementById("search-page-input");
    var meta = document.getElementById("search-meta");
    var results = document.getElementById("search-results");
    if (!input || !results) return;

    var qp = new URLSearchParams(window.location.search);
    var q = (qp.get("q") || "").trim();
    if (q) input.value = q;

    function render() {
      var term = input.value.trim().toLowerCase();
      if (!term) {
        meta.textContent = "";
        results.innerHTML = '<div class="browser-empty">Type a term and press Enter to see every matching page.</div>';
        return;
      }
      loadData(function (d) {
        var hits = rankHits(d, term);
        meta.textContent = hits.length + " result" + (hits.length === 1 ? "" : "s") + ' for "' + term + '"';
        if (!hits.length) {
          results.innerHTML = '<div class="browser-empty">No matching pages. Try another term.</div>';
          return;
        }
        // show all matches, most relevant first
        results.innerHTML = '<ul class="browser-list">' + hits
          .map(function (i) {
            return '<li class="browser-item"><a href="' + i.url + '">' + escapeHtml(i.title) + "</a></li>";
          })
          .join("") + "</ul>";
      });
    }

    input.addEventListener("input", function () {
      // update the URL without reloading so the page is shareable
      var url = BASE + "search/?q=" + encodeURIComponent(input.value.trim());
      if (window.history && window.history.replaceState) window.history.replaceState(null, "", url);
      render();
    });
    // re-render on Enter (covers form submission via GET too)
    input.form && input.form.addEventListener("submit", function (e) { e.preventDefault(); render(); });
    render();
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initSearch();
    initSearchPage();
    initBrowser();
  });
})();
