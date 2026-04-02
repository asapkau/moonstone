/*
 * Moonstone — Dynamic content from Firestore
 * Modular SDK v10+ (ES Module)
 * Loads products (marquee) and events into the public site.
 */

import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// ─── Utility ───
function esc(str) {
  if (!str) return '';
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// ─── Load Products into Marquee ───
async function loadProducts() {
  const track = document.getElementById('crystalTrack');
  if (!track) return;

  try {
    const snap = await getDocs(collection(db, "products"));

    if (snap.empty) {
      track.closest('.crystals-marquee-wrapper').style.display = 'none';
      return;
    }

    const products = [];
    snap.forEach(d => products.push({ id: d.id, ...d.data() }));

    const cardsHTML = products.map(p => `
      <a href="/product.html?id=${p.id}" class="crystal-card" style="text-decoration:none;color:inherit;">
        <img src="${esc(p.imageUrl)}" alt="${esc(p.name)}" class="crystal-bracelet-img" />
        <h4>${esc(p.name)}</h4>
        <span class="crystal-property">${esc(p.tagline || '')}</span>
        <span class="crystal-price">From CA$${p.price}</span>
      </a>
    `).join('');

    // Duplicate for seamless infinite scroll
    track.innerHTML = cardsHTML + cardsHTML;

    // Adjust animation speed based on number of products (~3.3s per product)
    const duration = Math.max(20, products.length * 3.3);
    track.style.animationDuration = duration + 's';
  } catch (err) {
    console.error('Failed to load products:', err);
  }
}

// ─── Load Events ───
async function loadEvents() {
  const list = document.getElementById('eventsList');
  if (!list) return;

  try {
    const snap = await getDocs(collection(db, "events"));

    if (snap.empty) {
      list.innerHTML = `
        <div style="text-align:center; padding:2rem; color:var(--twilight); opacity:0.7;">
          <p style="font-family:'Satisfy',cursive; font-size:1.2rem;">No upcoming events at the moment</p>
          <p style="font-size:0.9rem; margin-top:0.5rem;">Check back soon — new gatherings are always on the horizon.</p>
        </div>`;
      return;
    }

    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const events = [];
    snap.forEach(doc => events.push(doc.data()));

    // Sort by date string (ascending)
    events.sort((a, b) => (a.date || '').localeCompare(b.date || ''));

    // Filter to upcoming events only
    const today = new Date().toISOString().split('T')[0];
    const upcoming = events.filter(e => (e.date || '') >= today);

    if (upcoming.length === 0) {
      list.innerHTML = `
        <div style="text-align:center; padding:2rem; color:var(--twilight); opacity:0.7;">
          <p style="font-family:'Satisfy',cursive; font-size:1.2rem;">No upcoming events at the moment</p>
          <p style="font-size:0.9rem; margin-top:0.5rem;">Check back soon — new gatherings are always on the horizon.</p>
        </div>`;
      return;
    }

    let html = '';
    upcoming.slice(0, 6).forEach(e => {
      const d = new Date(e.date + 'T00:00:00');
      const month = isNaN(d.getTime()) ? '' : months[d.getMonth()];
      const day = isNaN(d.getTime()) ? '' : d.getDate();

      const hasImage = e.imageUrl ? true : false;
      html += `
        <div class="event-card reveal${hasImage ? '' : ' no-image'}">
          <div class="event-date">
            <span class="event-date-month">${month}</span>
            <span class="event-date-day">${day}</span>
          </div>
          ${hasImage ? `<img src="${esc(e.imageUrl)}" alt="${esc(e.title)}" class="event-img" />` : ''}
          <div class="event-info">
            <h3>${esc(e.title)}</h3>
            <p>${esc(e.description)}</p>
          </div>
          <span class="event-tag tag-workshop">event</span>
        </div>`;
    });

    list.innerHTML = html;

    // Re-observe new .reveal elements for scroll animation
    if (typeof observer !== 'undefined') {
      list.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
  } catch (err) {
    console.error('Failed to load events:', err);
  }
}

// ─── Load Our Story ───
async function loadOurStory() {
  const container = document.getElementById('our-story');
  if (!container) return;

  try {
    const snap = await getDoc(doc(db, "content", "main"));
    if (!snap.exists()) return;

    const { ourStory, ourStoryPhotos } = snap.data();

    // Set story text
    if (ourStory) {
      const paragraphs = ourStory.split(/\n\s*\n/).filter(Boolean);
      container.innerHTML = paragraphs
        .map(p => `<p>${esc(p.trim())}</p>`)
        .join('');
    }

    // Set story photos
    if (ourStoryPhotos && ourStoryPhotos.length) {
      const photoEls = document.querySelectorAll('.about-photo');
      ourStoryPhotos.forEach((url, i) => {
        if (url && photoEls[i]) {
          photoEls[i].innerHTML = `<img src="${esc(url)}" alt="Our Story" />`;
        }
      });
    }

  } catch (err) {
    console.error('Failed to load Our Story:', err);
  }
}

// ─── Load Offerings (Homepage Cards) ───
async function loadOfferings() {
  const container = document.getElementById('offerings-container');
  if (!container) return;

  try {
    const snap = await getDoc(doc(db, "content", "main"));
    if (!snap.exists()) return;

    const { offerings } = snap.data();
    if (!offerings || !offerings.length) return;

    const icons = ['✦', '✦', '✦', '✦'];
    let html = '';
    offerings.forEach((o, i) => {
      const preview = o.description
        ? esc(o.description).substring(0, 120) + (o.description.length > 120 ? '...' : '')
        : '';

      html += `
        <a href="/offering.html?id=${i}" class="service-card reveal" style="text-decoration:none;color:inherit;">
          <div class="service-icon">${icons[i] || '✦'}</div>
          <h3>${esc(o.title)}</h3>
          <p>${preview}</p>
          <span class="service-link">Learn more →</span>
        </a>`;
    });

    container.innerHTML = html;

    // Re-observe new .reveal elements for scroll animation
    if (typeof observer !== 'undefined') {
      container.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
  } catch (err) {
    console.error('Failed to load offerings:', err);
  }
}

// ─── Load Footer Offerings ───
async function loadFooterOfferings() {
  const list = document.getElementById('footerOfferings');
  if (!list) return;

  try {
    const snap = await getDoc(doc(db, "content", "main"));
    if (!snap.exists()) return;

    const { offerings } = snap.data();
    if (!offerings || !offerings.length) return;

    list.innerHTML = offerings.map((o, i) =>
      `<li><a href="/offering.html?id=${i}">${esc(o.title)}</a></li>`
    ).join('');
  } catch (err) {
    console.error('Failed to load footer offerings:', err);
  }
}

// ─── Init ───
loadProducts();
loadEvents();
loadOurStory();
loadOfferings();
loadFooterOfferings();
