// SHARED LEFT MENU
// Add, rename, remove, or reorder entries here to update every connected page.
// The first entry is the home button. The next entry gets the top menu spacing.
// Example project: { label: "New Project", href: "page-new-project.html" },
(function () {
  const items = [
  {
    "label": "Barış Çavuşoğlu",
    "href": "index.html"
  },
  {
    "label": "zzz",
    "href": "page-zzz.html"
  },
  {
    "label": "evim yuva",
    "href": "page-evimyuva.html"
  },
  {
    "label": "1a.gölk",
    "href": "page-golk.html"
  },
  {
    "label": "Fly Animation",
    "href": "page-flyanimation.html"
  },
  {
    "label": "RTV-2 HRPgül",
    "href": "page-rtv2hrpgul.html"
  },
  {
    "label": "Speedy Cartoon Video",
    "href": "page-speedycartoonyvideo.html"
  },
  {
    "label": "Zalim Kader 001",
    "href": "page-zalimkader001.html"
  },
  {
    "label": "Hit Me Baby",
    "href": "page-hmbomt.html"
  },
  {
    "label": "#SLIPGNOSIS",
    "href": "page-slipgnosis.html"
  },
  {
    "label": "How I Got Applauded",
    "href": "page-howigotapplauded.html"
  },
  {
    "label": "Last Minutes",
    "href": "page-lastminutes.html"
  },
  {
    "label": "Mr. Bobby's Fun Evening",
    "href": "page-mrbobby.html"
  },
  {
    "label": "unnamed.mov",
    "href": "page-unnamedmov.html"
  },
  {
    "label": "2 Loops",
    "href": "page-2loops.html"
  },
  {
    "label": "LYF.SXD",
    "href": "page-lyfsxd.html"
  },
  {
    "label": "Bio",
    "href": "bio.html"
  },
  {
    "label": "Press",
    "href": "press.html"
  },
  {
    "label": "Contact",
    "href": "contact.html"
  }
];

  const container = document.getElementById('seq_fixed');
  if (!container) return;
  const currentPage = decodeURIComponent(window.location.pathname.split('/').pop());
  const menu = document.createDocumentFragment();

  items.forEach((item, index) => {
    const selected = item.href === currentPage;
    const link = document.createElement('a');
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = item.label;

    if (index === 0) {
      button.className = 'bariscavusoglu';
      button.id = 'baris-cavusoglu';
    } else {
      const first = index === 1;
      link.className = first ? 'page1href' : 'pageshref';
      button.className = first ? 'page1' : 'pages';
      if (selected) button.className += 'Selected';
    }

    if (selected) {
      button.setAttribute('aria-current', 'page');
    } else {
      link.href = item.href;
    }
    link.appendChild(button);
    menu.appendChild(link);
    menu.appendChild(document.createTextNode('\n'));
  });

  container.replaceChildren(menu);
})();
