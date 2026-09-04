document.documentElement.classList.add('js');

window.enhanceRosterDetails = function({ units, statFields, showUnit }) {
  const isStructureRoster = document.querySelector('.preview-section-label')?.textContent.trim() === 'Structure Preview';
  statFields.splice(
    0,
    statFields.length,
    ['Prerequisite', 'prereq'], ['Cost', 'cost'], ['Hitpoint', 'hitpoint'], ['Armor Type', 'armor'],
    ['Sight', 'sight'], [isStructureRoster ? 'Power' : 'Speed', isStructureRoster ? 'power' : 'speed'],
    ['Primary', 'primary'], ['Secondary', 'secondary'], ['Range', 'range'], ['Special', 'special']
  );

  const descriptionSection = document.querySelector('.unit-detail-desc-section');
  const specialDetails = document.createElement('div');
  specialDetails.className = 'unit-detail-extra-section';
  specialDetails.hidden = true;
  specialDetails.innerHTML = '<span class="detail-section-label">Special Details</span><ul class="detail-list"></ul>';
  const additionalInfo = document.createElement('div');
  additionalInfo.className = 'unit-detail-extra-section';
  additionalInfo.hidden = true;
  additionalInfo.innerHTML = '<span class="detail-section-label">Additional Information</span><ul class="detail-list"></ul>';
  descriptionSection.before(specialDetails, additionalInfo);

  function renderDetailList(section, entries) {
    section.hidden = !entries.length;
    const list = section.querySelector('.detail-list');
    list.replaceChildren(...entries.map(entry => {
      const item = document.createElement('li');
      if (typeof entry === 'string') {
        item.textContent = entry;
        return item;
      }
      const icon = document.createElement('img');
      icon.className = 'detail-icon';
      icon.src = entry.icon;
      icon.alt = '';
      const text = document.createElement('span');
      text.className = 'detail-text';
      const name = document.createElement('strong');
      name.textContent = entry.name;
      const description = document.createElement('span');
      description.className = 'detail-description';
      description.textContent = entry.description;
      text.append(name, description);
      if (entry.facts?.length) {
        const facts = document.createElement('ul');
        facts.className = 'detail-facts';
        entry.facts.forEach(([label, value]) => {
          const fact = document.createElement('li');
          fact.className = 'detail-fact';
          fact.textContent = `${label}: `;
          const factValue = document.createElement('b');
          factValue.textContent = value;
          fact.append(factValue);
          facts.append(fact);
        });
        text.append(facts);
      }
      item.append(icon, text);
      return item;
    }));
  }

  function extractAdditionalInfo(unit) {
    const traitPattern = /[^.]*(?:\bimmune\b|\bimmunity\b|\bself[- ]?heal(?:ing)?\b|\bregenerat(?:e|es|ing|ion)\b|\bstealth\b|\bcloaked\b|\binvisible\b|\buntargetable\b|\bcannot\b|\bmust return\b|\bshut down\b|\boffline\b)[^.]*\./gi;
    return unit.desc.match(traitPattern) || [];
  }

  return function(id) {
    showUnit(id);
    window.setTimeout(() => {
      const unit = units.find(entry => entry.id === id);
      if (!unit) return;
      const specialDetailsForUnit = unit.special === '—'
        ? []
        : [{name: unit.special, icon: unit.icon, description: unit.desc}];
      renderDetailList(specialDetails, specialDetailsForUnit);
      renderDetailList(additionalInfo, extractAdditionalInfo(unit));
    }, 110);
  };
};

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '\u2715' : '\u2630';
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '\u2630';
    }));
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
