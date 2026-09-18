(() => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = savedTheme || (prefersDark ? 'dark' : 'light');

  const themeToggle = document.querySelector('[data-theme-toggle]');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', root.dataset.theme);
      themeToggle.setAttribute('aria-label', `Switch to ${root.dataset.theme === 'dark' ? 'light' : 'dark'} mode`);
    });
  }

  const menuButton = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav]');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  const progress = document.querySelector('.scroll-progress');
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  };
  addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const reveal = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveal.forEach(el => io.observe(el));
  } else {
    reveal.forEach(el => el.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-count]').forEach(el => {
    const target = Number(el.dataset.count || 0);
    let started = false;
    const animate = () => {
      if (started) return;
      started = true;
      const start = performance.now();
      const duration = 900;
      const tick = now => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if ('IntersectionObserver' in window) {
      const counterIo = new IntersectionObserver(entries => {
        if (entries.some(e => e.isIntersecting)) {
          animate();
          counterIo.disconnect();
        }
      });
      counterIo.observe(el);
    } else animate();
  });

  const updatesContainer = document.querySelector('[data-updates]');
  if (updatesContainer && window.PORTFOLIO_DATA) {
    updatesContainer.innerHTML = (updatesContainer.hasAttribute('data-updates-all') ? PORTFOLIO_DATA.updates : PORTFOLIO_DATA.updates.slice(0, 3)).map((u, i) => `
      <article class="update-card ${i === 0 ? 'featured' : ''}">
        <div class="update-meta"><span>${u.label}</span><time datetime="${u.date}">${new Date(`${u.date}T12:00:00`).toLocaleDateString(undefined, {year:'numeric', month:'short', day:'numeric'})}</time></div>
        <h3>${u.title}</h3>
        <p>${u.text}</p>
        <div class="chip-row">${u.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
      </article>`).join('');
  }

  const interestsContainer = document.querySelector('[data-interests]');
  if (interestsContainer && window.PORTFOLIO_DATA) {
    const icons = {
      human: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="3"/><path d="M5 21c0-4 3-7 7-7s7 3 7 7"/></svg>',
      vision: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
      robot: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M8 12h.01M16 12h.01M8 16h8"/></svg>',
      nodes: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="m8 7 3 9M16 7l-3 9M8 6h8"/></svg>'
    };
    interestsContainer.innerHTML = PORTFOLIO_DATA.interests.map(i => `
      <article class="interest-card spotlight-card" data-tilt>
        <div class="interest-icon">${icons[i.icon] || icons.nodes}</div>
        <h3>${i.title}</h3><p>${i.text}</p>
        <div class="chip-row">${i.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>
      </article>`).join('');
  }

  document.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  const blogGrid = document.querySelector('[data-blog-grid]');
  if (blogGrid && window.BLOG_POSTS) {
    const search = document.querySelector('[data-blog-search]');
    const filters = [...document.querySelectorAll('[data-blog-filter]')];
    let active = 'All';
    const render = () => {
      const q = (search?.value || '').trim().toLowerCase();
      const posts = BLOG_POSTS.filter(p => {
        const categoryMatch = active === 'All' || p.category.includes(active) || p.tags.includes(active);
        const text = `${p.title} ${p.excerpt} ${p.category} ${p.tags.join(' ')}`.toLowerCase();
        return categoryMatch && (!q || text.includes(q));
      });
      blogGrid.innerHTML = posts.map(p => `
        <a class="blog-card spotlight-card" href="posts/${p.slug}.html">
          <div class="blog-card-top"><span class="eyebrow">${p.category}</span><span>${p.minutes} min read</span></div>
          <h2>${p.title}</h2><p>${p.excerpt}</p>
          <div class="blog-card-bottom"><time datetime="${p.date}">${new Date(`${p.date}T12:00:00`).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})}</time><span aria-hidden="true">↗</span></div>
        </a>`).join('') || '<p class="empty-state">No posts match this filter.</p>';
      document.querySelectorAll('.spotlight-card').forEach(card => card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect(); card.style.setProperty('--mx', `${e.clientX-r.left}px`); card.style.setProperty('--my', `${e.clientY-r.top}px`);
      }));
    };
    search?.addEventListener('input', render);
    filters.forEach(btn => btn.addEventListener('click', () => {
      active = btn.dataset.blogFilter;
      filters.forEach(b => b.classList.toggle('active', b === btn));
      render();
    }));
    render();
  }

  const pubSearch = document.querySelector('[data-pub-search]');
  const pubFilters = [...document.querySelectorAll('[data-pub-filter]')];
  const pubItems = [...document.querySelectorAll('[data-publication]')];
  if (pubItems.length) {
    let active = 'all';
    const filterPubs = () => {
      const q = (pubSearch?.value || '').toLowerCase().trim();
      pubItems.forEach(item => {
        const matchType = active === 'all' || item.dataset.type === active || item.dataset.year === active;
        const matchQ = !q || item.textContent.toLowerCase().includes(q);
        item.hidden = !(matchType && matchQ);
      });
    };
    pubSearch?.addEventListener('input', filterPubs);
    pubFilters.forEach(btn => btn.addEventListener('click', () => {
      active = btn.dataset.pubFilter;
      pubFilters.forEach(b => b.classList.toggle('active', b === btn));
      filterPubs();
    }));
  }


  const featuredResearch = document.querySelector('[data-featured-research]');
  if (featuredResearch && window.RESEARCH_DATA) {
    featuredResearch.innerHTML = RESEARCH_DATA.featured.map((p, idx) => {
      const visual = p.image ? `
        <div class="project-visual">
          <img src="${p.image}" alt="${p.imageAlt || p.title + ' paper visual'}" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentElement.classList.add('placeholder');this.remove()">
          <div class="visual-caption"><span>${p.id === 'sarcasmsense' ? 'Original paper figure' : 'Public paper preview'} · source-linked</span>${p.figureSource ? `<a href="${p.figureSource}" target="_blank" rel="noopener">Source ↗</a>` : ''}</div>
        </div>` : `
        <div class="project-visual placeholder">
          <div class="diagram-orbit" aria-label="Method at a glance for ${p.title}">
            <div class="diagram-core">${p.title}</div>
            ${p.flow.slice(0,4).map(x=>`<span class="diagram-satellite">${x}</span>`).join('')}
          </div>
          <div class="visual-caption"><span>Portfolio method schematic</span>${p.figureSource ? `<a href="${p.figureSource}" target="_blank" rel="noopener">Original figure ↗</a>` : `<a href="${p.doi}" target="_blank" rel="noopener">Open paper ↗</a>`}</div>
        </div>`;
      return `<article class="research-project spotlight-card" id="${p.id}">
        <div class="project-copy">
          <div class="project-kicker"><span>${p.year}</span><span>${p.kind}</span><span>${p.role}</span></div>
          <h2>${p.title}</h2><p class="project-subtitle">${p.subtitle}</p>
          <div class="method-flow">${p.flow.map((x,i)=>`${i?'<span class="method-arrow">→</span>':''}<span class="method-node">${x}</span>`).join('')}</div>
          <div class="project-facts"><div class="project-fact"><strong>Problem</strong><p>${p.problem}</p></div><div class="project-fact"><strong>Method</strong><p>${p.method}</p></div><div class="project-fact"><strong>Reported outcome</strong><p>${p.result}</p></div></div>
          <div class="chip-row">${p.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div>
          <div class="paper-card-actions"><a class="button primary" href="${p.doi}" target="_blank" rel="noopener">Read paper ↗</a>${p.figureSource ? `<a class="button secondary" href="${p.figureSource}" target="_blank" rel="noopener">Paper figure / source ↗</a>` : ''}</div>
        </div>${visual}
      </article>`;
    }).join('');
  }

  const paperAtlas = document.querySelector('[data-paper-atlas]');
  if (paperAtlas && window.RESEARCH_DATA) {
    const search = document.querySelector('[data-research-search]');
    const filters = [...document.querySelectorAll('[data-research-filter]')];
    let active = 'all';
    const renderAtlas = () => {
      const q=(search?.value||'').trim().toLowerCase();
      const rows=RESEARCH_DATA.publications.filter(p=>{
        const hay=`${p.title} ${p.venue} ${p.authors} ${p.summary} ${(p.tags||[]).join(' ')} ${p.year} ${p.type}`.toLowerCase();
        const topic=active.toLowerCase();
        const match=active==='all'||p.type===active||p.year===active||hay.includes(topic);
        return match && (!q||hay.includes(q));
      });
      paperAtlas.innerHTML=rows.map(p=>`<article class="paper-card" data-paper-card>
        <div class="paper-card-top"><span>${p.year} · ${p.type}</span><span>${(p.tags||[]).slice(0,2).join(' · ')}</span></div>
        <h3>${p.title}</h3><p>${p.summary}</p><p class="venue">${p.venue}</p>
        <div class="paper-card-actions"><a class="mini-link" href="${p.url}" target="_blank" rel="noopener">Paper ↗</a>${p.project?`<a class="mini-link" href="#${p.project}">Project detail ↑</a>`:''}</div>
      </article>`).join('') || '<p class="empty-state">No papers match this filter.</p>';
    };
    search?.addEventListener('input',renderAtlas);
    filters.forEach(btn=>btn.addEventListener('click',()=>{active=btn.dataset.researchFilter;filters.forEach(b=>b.classList.toggle('active',b===btn));renderAtlas();}));
    renderAtlas();
  }

  const canvas = document.querySelector('#research-canvas');
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (canvas && !reduced) {
    const ctx = canvas.getContext('2d');
    let w, h, dpr, nodes = [], raf;
    const makeNodes = () => {
      const count = Math.max(18, Math.min(42, Math.floor(w / 34)));
      nodes = Array.from({length: count}, () => ({x: Math.random()*w, y: Math.random()*h, vx:(Math.random()-.5)*.22, vy:(Math.random()-.5)*.22, r:Math.random()*1.7+0.7}));
    };
    const resize = () => {
      dpr = Math.min(devicePixelRatio || 1, 2); w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w*dpr; canvas.height = h*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); makeNodes();
    };
    const draw = () => {
      ctx.clearRect(0,0,w,h);
      const accent = getComputedStyle(root).getPropertyValue('--accent-rgb').trim() || '89,102,255';
      nodes.forEach((n,i) => {
        n.x += n.vx; n.y += n.vy;
        if(n.x<0||n.x>w) n.vx*=-1; if(n.y<0||n.y>h) n.vy*=-1;
        ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2); ctx.fillStyle=`rgba(${accent},.48)`; ctx.fill();
        for(let j=i+1;j<nodes.length;j++){
          const m=nodes[j], dx=n.x-m.x, dy=n.y-m.y, dist=Math.hypot(dx,dy);
          if(dist<115){ctx.beginPath();ctx.moveTo(n.x,n.y);ctx.lineTo(m.x,m.y);ctx.strokeStyle=`rgba(${accent},${.12*(1-dist/115)})`;ctx.stroke();}
        }
      });
      raf=requestAnimationFrame(draw);
    };
    new ResizeObserver(resize).observe(canvas); draw();
    document.addEventListener('visibilitychange',()=>{ if(document.hidden) cancelAnimationFrame(raf); else draw(); });
  }
})();
