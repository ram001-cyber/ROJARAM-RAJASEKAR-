/* This file reads SITE_CONTENT (from content.js) and fills in the page.
   You shouldn't need to edit this — just edit content.js instead. */

(function () {
  const c = SITE_CONTENT;

  document.title = `${c.name} — ${c.title}`;
  document.getElementById('nav-name').textContent = c.name;

  document.getElementById('hero-eyebrow').textContent = `${c.title} · ${c.location}`;
  document.getElementById('hero-title').textContent = c.tagline;
  document.getElementById('hero-lead').textContent = c.heroIntro;
  document.getElementById('hero-meta').textContent = c.name;

  // About
  const aboutBody = document.getElementById('about-body');
  c.about.paragraphs.forEach(p => {
    const el = document.createElement('p');
    el.textContent = p;
    aboutBody.appendChild(el);
  });

  // Services
  const servicesGrid = document.getElementById('services-grid');
  c.services.forEach(s => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `<h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.description)}</p>`;
    servicesGrid.appendChild(card);
  });

  // Experience timeline
  const timeline = document.getElementById('timeline');
  c.experience.forEach(e => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-year">${escapeHtml(e.year)}</div>
      <div>
        <h3>${escapeHtml(e.role)}</h3>
        <div class="org">${escapeHtml(e.org)}</div>
        <p class="desc">${escapeHtml(e.description)}</p>
      </div>`;
    timeline.appendChild(item);
  });

  // Education
  const eduList = document.getElementById('education-list');
  c.education.forEach(e => {
    const item = document.createElement('div');
    item.className = 'edu-item';
    item.innerHTML = `
      <h3>${escapeHtml(e.degree)}</h3>
      <div class="inst">${escapeHtml(e.institution)}</div>
      <div class="note">${escapeHtml(e.note)}</div>`;
    eduList.appendChild(item);
  });

  // Certifications
  const certTags = document.getElementById('cert-tags');
  c.certifications.forEach(cert => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = cert;
    certTags.appendChild(tag);
  });

  // Modalities
  const modTags = document.getElementById('modality-tags');
  c.modalities.forEach(m => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = m;
    modTags.appendChild(tag);
  });

  // Contact
  document.getElementById('contact-email').textContent = c.contact.email;
  document.getElementById('contact-phone').textContent = c.contact.phone;
  document.getElementById('contact-languages').textContent = c.contact.languages;
  document.getElementById('contact-location').textContent = c.location;
  document.getElementById('contact-note').textContent = c.contact.note;

  document.getElementById('footer-text').textContent = `© ${new Date().getFullYear()} ${c.name}`;

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
})();
