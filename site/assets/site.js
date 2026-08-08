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

  /* ---- home search ---- */
  function initSearch() {
    var input = document.getElementById("home-search");
    if (!input) return;
    var box = document.getElementById("home-search-results");
    if (!box) return;

    var t;
    input.addEventListener("input", function () {
      clearTimeout(t);
      var q = input.value.trim().toLowerCase();
      if (!q) { box.className = "home-search-results search-results"; box.innerHTML = ""; return; }
      t = setTimeout(function () {
        loadData(function (d) {
          var hits = d
            .filter(function (i) {
              return i.title.toLowerCase().indexOf(q) !== -1 ||
                (i.tags && i.tags.join(" ").toLowerCase().indexOf(q) !== -1);
            })
            .slice(0, 20);
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
                '<span class="sr-title">' + escapeHtml(i.title) + "</span> " +
                '<span class="sr-section">' + i.section + "</span></a>"
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

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initSearch();
    initBrowser();
  });
})();
