const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const toast = $('#toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

// Dismissible announcement
$('.announcement-close')?.addEventListener('click', () => {
  $('.announcement')?.remove();
});

// Responsive navigation and accessible dropdown toggles
const mobileMenuBtn = $('.mobile-menu-btn');
const mainNav = $('.main-nav');
mobileMenuBtn?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
});
$$('.menu-trigger').forEach(trigger => {
  trigger.addEventListener('click', event => {
    if (window.matchMedia('(max-width: 850px)').matches) {
      event.preventDefault();
      const parent = trigger.closest('.has-menu');
      const open = parent.classList.toggle('menu-open');
      trigger.setAttribute('aria-expanded', String(open));
    } else {
      const open = trigger.getAttribute('aria-expanded') !== 'true';
      trigger.setAttribute('aria-expanded', String(open));
    }
  });
});
document.addEventListener('click', event => {
  if (!event.target.closest('.has-menu')) {
    $$('.menu-trigger').forEach(button => button.setAttribute('aria-expanded', 'false'));
  }
});
$$('.main-nav a').forEach(link => link.addEventListener('click', () => {
  if (window.matchMedia('(max-width: 850px)').matches) {
    mainNav.classList.remove('open');
    mobileMenuBtn?.setAttribute('aria-expanded', 'false');
  }
}));

// Product category tabs update the visible cards with relevant products.
const productCatalog = {
  payments: [
    ['↗','icon-blue','Payment Gateway','Offer a smooth checkout experience with cards, UPI, wallets and more.','Explore gateway','checkout'],
    ['⇄','icon-purple','Payment Links','Get paid anywhere with easy-to-share payment links. No website required.','Create a link','link'],
    ['▦','icon-orange','Payment Pages','Launch a beautiful branded payment page without writing code.','Build your page','page'],
    ['⌁','icon-green','Subscriptions','Manage recurring payments and give customers a more flexible way to pay.','Automate billing','subscription'],
    ['⌗','icon-pink','QR & in-store payments','Bring quick, convenient digital payments to your physical store.','Explore in-store','qr'],
    ['◎','icon-yellow','Payment analytics','Understand transactions, spot trends and make decisions with clarity.','View insights','analytics']
  ],
  payouts: [
    ['↗','icon-blue','Instant payouts','Move money to vendors and partners with streamlined payout workflows.','Explore payouts','payout'],
    ['⇄','icon-purple','Bulk transfers','Prepare multiple transfers together and reduce repetitive admin.','See bulk transfers','link'],
    ['▤','icon-orange','Vendor management','Keep vendor details and payment activity organised in one place.','Manage vendors','page'],
    ['⌁','icon-green','Scheduled payouts','Plan recurring disbursements and keep predictable payments on track.','Set a schedule','subscription'],
    ['⌗','icon-pink','Payout approvals','Build clear review steps into your team’s payment process.','Review workflows','qr'],
    ['◎','icon-yellow','Payout analytics','Understand outgoing cash flow with a simple activity overview.','View insights','analytics']
  ],
  finance: [
    ['▤','icon-blue','Finance dashboard','Get a clearer view of balances, transactions and business activity.','View dashboard','payout'],
    ['⇄','icon-purple','Reconciliation','Bring transaction records together to make matching easier.','Explore tools','link'],
    ['▦','icon-orange','Invoices','Organise customer billing with a repeatable invoice workflow.','Create invoices','page'],
    ['⌁','icon-green','Recurring expenses','Keep recurring business payments visible and easier to track.','Manage expenses','subscription'],
    ['⌗','icon-pink','Team permissions','Give teammates appropriate access to the tools they need.','Explore controls','qr'],
    ['◎','icon-yellow','Finance insights','Turn payment activity into a more useful business overview.','View insights','analytics']
  ]
};
const productPageLinks = {
  'Payment Gateway': 'payment-gateway.html',
  'Payment Links': 'payment-links.html',
  'Payment Pages': 'payment-pages.html',
  Subscriptions: 'subscriptions.html',
  'QR & in-store payments': 'in-store-payments.html',
  'Payment analytics': 'business-finance.html',
  'Instant payouts': 'payouts.html',
  'Bulk transfers': 'payouts.html',
  'Vendor management': 'payouts.html',
  'Scheduled payouts': 'payouts.html',
  'Payout approvals': 'payouts.html',
  'Payout analytics': 'payouts.html',
  'Finance dashboard': 'business-finance.html',
  Reconciliation: 'business-finance.html',
  Invoices: 'business-finance.html',
  'Recurring expenses': 'business-finance.html',
  'Team permissions': 'business-finance.html',
  'Finance insights': 'business-finance.html'
};
function previewMarkup(type) {
  const previews = {
    checkout: '<div class="mini-checkout"><div class="mini-checkout-head"><span class="mini-brand">RazorPay</span><span>🔒 Secure</span></div><div class="mini-item"><div class="mini-product-art">✦</div><div><b>Everyday essentials</b><small>Order #1048</small></div><strong>₹1,499</strong></div><div class="mini-pay-row"><span>Pay with</span><b>UPI&nbsp;&nbsp; Cards&nbsp;&nbsp; Netbanking</b></div><div class="mini-pay-btn">Pay ₹1,499 <span>→</span></div></div>',
    link: '<div class="link-preview"><span class="link-preview-icon">↗</span><div><small>PAYMENT LINK</small><b>razorpay.example/pay/coffee</b></div><button class="copy-demo" aria-label="Copy demo payment link">Copy</button></div>',
    page: '<div class="page-preview"><div class="page-preview-top"><span>YOUR STORE</span><span>•••</span></div><div class="page-preview-art"><span>☼</span></div><div class="page-preview-lines"><i></i><i></i><i></i></div><div class="page-preview-button">Continue</div></div>',
    subscription: '<div class="subscription-preview"><div class="sub-icon">↻</div><div><small>MONTHLY PLAN</small><b>Business plan</b><span>₹999 / month</span></div><span class="sub-status">Active</span></div>',
    qr: '<div class="qr-preview"><div class="fake-qr"><i></i><i></i><i></i><b></b></div><div><b>Scan to pay</b><small>Fast. Simple. Secure.</small></div></div>',
    analytics: '<div class="analytics-preview"><div class="analytics-number"><small>SUCCESS RATE</small><b>98.6%</b><span>↑ 2.4% this month</span></div><div class="bar-chart"><i style="height:35%"></i><i style="height:54%"></i><i style="height:44%"></i><i style="height:70%"></i><i style="height:61%"></i><i style="height:88%"></i><i style="height:76%"></i><i style="height:100%"></i></div></div>',
    payout: '<div class="link-preview"><span class="link-preview-icon">↗</span><div><small>TRANSFER STATUS</small><b>Scheduled successfully</b></div><span class="sub-status">Ready</span></div>'
  };
  return previews[type] || previews.checkout;
}
function renderProducts(category) {
  const grid = $('#productGrid');
  grid.innerHTML = productCatalog[category].map(([icon, color, title, desc, action, preview]) => `
    <article class="product-card">
      <div class="product-card-top"><span class="product-icon ${color}">${icon}</span><span class="card-arrow">↗</span></div>
      <h3>${title}</h3><p>${desc}</p>
      <a href="${productPageLinks[title] || 'business-finance.html'}" class="text-link">${action} <span>→</span></a>
      ${previewMarkup(preview)}
    </article>`).join('');
  $$('.copy-demo', grid).forEach(btn => btn.addEventListener('click', () => {
    copyText('https://razorpay.example/pay/coffee', 'Demo link copied');
  }));
}
$$('.product-tab').forEach(tab => tab.addEventListener('click', () => {
  $$('.product-tab').forEach(item => {
    const active = item === tab;
    item.classList.toggle('active', active);
    item.setAttribute('aria-selected', String(active));
  });
  renderProducts(tab.dataset.category);
}));

// Clipboard helper with fallback for browsers without Clipboard API.
async function copyText(text, successMessage) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const temp = document.createElement('textarea');
      temp.value = text;
      temp.style.position = 'fixed';
      temp.style.opacity = '0';
      document.body.appendChild(temp);
      temp.select();
      const copied = document.execCommand('copy');
      temp.remove();
      if (!copied) throw new Error('Copy unavailable');
    }
    showToast(successMessage);
  } catch {
    showToast('Copy is unavailable in this browser. Select the text manually.');
  }
}
$('#copyCode')?.addEventListener('click', () => {
  const code = $('#api-demo code')?.innerText || '';
  copyText(code, 'Example code copied');
});

// Demo testimonial carousel
const testimonials = [
  { quote: 'We needed a payment experience that felt like a natural part of our product. Having the key pieces in one place made our workflow much simpler.', name: 'Riya Mehta', role: 'Founder, Northstar Studio', initials: 'RM', company: 'northstar' },
  { quote: 'The best tools are the ones that make complicated work feel manageable. A clear dashboard helps our team spend more time on customers.', name: 'Arjun Shah', role: 'Operations Lead, Orbit Goods', initials: 'AS', company: '◉ orbit' },
  { quote: 'As we grew, we wanted more visibility into how money moved through the business. Bringing the workflow together gave us a better starting point.', name: 'Maya Kapoor', role: 'Co-founder, Kinfolk', initials: 'MK', company: 'kinfolk' }
];
let testimonialIndex = 0;
function updateTestimonial() {
  const item = testimonials[testimonialIndex];
  $('#quoteText').textContent = item.quote;
  $('#quoteName').textContent = item.name;
  $('#quoteRole').textContent = item.role;
  $('#quoteAvatar').textContent = item.initials;
  $('#quoteCompany').textContent = item.company;
  $('#quoteCurrent').textContent = String(testimonialIndex + 1).padStart(2, '0');
  $('#quoteProgress').style.width = `${((testimonialIndex + 1) / testimonials.length) * 100}%`;
}
$('#testimonialPrev')?.addEventListener('click', () => {
  testimonialIndex = (testimonialIndex + testimonials.length - 1) % testimonials.length;
  updateTestimonial();
});
$('#testimonialNext')?.addEventListener('click', () => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  updateTestimonial();
});

// Newsletter is frontend-only; no email is sent to a server.
$('#newsletterForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const email = $('#newsletterEmail').value.trim();
  if (!email) return;
  $('#newsletterMessage').textContent = 'Thanks! This demo does not send or store email addresses.';
  $('#newsletterEmail').value = '';
  showToast('You’re on the demo list — no data was sent.');
});

// Back-to-top visibility
const backToTop = $('#backToTop');
window.addEventListener('scroll', () => {
  backToTop?.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Mark prototype-only links with a clear, non-deceptive interaction.
$$('a[href="#login"], a[href="#privacy"], a[href="#terms"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    showToast('This section is a placeholder in the frontend prototype.');
  });
});


// Product cards open a real detail dialog instead of sending every product link to the same anchor.
const productDetails = {
  'Payment Gateway': ['Accept online payments through a streamlined checkout experience. This section demonstrates a product overview and sample checkout UI.', ['Card, UPI and netbanking method concepts', 'Checkout preview with responsive layout', 'Transaction status and analytics concepts']],
  'Payment Links': ['Create a shareable request for payment and send it through a channel your customers already use.', ['Sample copyable payment link', 'Useful for invoices, remote orders and services', 'No website required in this demo']],
  'Payment Pages': ['A sample hosted page layout for a simple product, event or service purchase.', ['Branded checkout page concept', 'Responsive layout preview', 'Call-to-action and order-summary components']],
  'Subscriptions': ['A recurring-billing overview to demonstrate plan status and monthly pricing.', ['Plan and billing-period summary', 'Active subscription status example', 'Designed for recurring-payment workflows']],
  'QR & in-store payments': ['A storefront-oriented digital payment concept with a scan-to-pay visual.', ['QR-style preview graphic', 'Designed for point-of-sale concepts', 'No actual QR payment is initiated']],
  'Payment analytics': ['A visual overview of payment success rate and activity trends, using illustrative sample values.', ['Success-rate summary', 'Compact activity chart', 'Sample values only—not live business data']],
  'Instant payouts': ['A prototype for tracking one outgoing transfer from preparation through completion.', ['Transfer readiness status', 'Payout activity concepts', 'Demo only—no transfer is executed']],
  'Bulk transfers': ['A sample view of grouped payouts for teams who manage many vendors or recipients.', ['Batch processing concept', 'Recipient workflow overview', 'No bank transfer is created']],
  'Vendor management': ['A conceptual place to organise vendor payment operations and their status.', ['Vendor workflow overview', 'Payment status concepts', 'Sample data only']],
  'Scheduled payouts': ['A recurring or scheduled payout workflow designed to make payment planning clearer.', ['Scheduling concept', 'Review before submission', 'No payments run in the background']],
  'Payout approvals': ['A conceptual review process for outgoing payments within a business team.', ['Approval workflow concept', 'Clear review states', 'No real approval or transfer occurs']],
  'Payout analytics': ['A sample view into outgoing cash-flow activity and payout trends.', ['Payout status summary', 'Activity trends', 'Illustrative metrics only']],
  'Finance dashboard': ['A consolidated finance overview designed to make balances and transactions easier to scan.', ['Balance and transaction summaries', 'Business activity overview', 'Illustrative dashboard values']],
  'Reconciliation': ['A conceptual reconciliation workflow for comparing payment records with business records.', ['Matching workflow concept', 'Transaction tracking', 'No financial records are imported']],
  'Invoices': ['An overview of a simple digital invoicing workflow for customer billing.', ['Invoice process concept', 'Customer billing workflow', 'No invoice is emailed or recorded']],
  'Recurring expenses': ['A simple concept for identifying repeating outgoing payments.', ['Recurring expense overview', 'Payment planning concepts', 'Sample information only']],
  'Team permissions': ['A concept for defining who in a team can view and manage finance tools.', ['Role-based access concept', 'Permission workflow overview', 'Real account roles require a backend']],
  'Finance insights': ['A high-level overview of trends that can support better finance decisions.', ['Trend summaries', 'Activity metrics', 'Illustrative values only']]
};
const productModal = $('#productModal');
function closeProductModal() {
  if (productModal) productModal.hidden = true;
}
function openProductModal(title, description) {
  const details = productDetails[title] || [description || 'Explore this product concept and its workflow.', ['Product overview', 'Responsive interface', 'Prototype interaction']];
  $('#productModalTitle').textContent = title;
  $('#productModalDescription').textContent = details[0];
  $('#productModalFeatures').innerHTML = details[1].map(feature => `<div class="product-modal-feature"><i>✓</i><span>${feature}</span></div>`).join('');
  productModal.hidden = false;
  $('#closeProductModal')?.focus();
}
$('#closeProductModal')?.addEventListener('click', closeProductModal);
$('#productModalBack')?.addEventListener('click', closeProductModal);
productModal?.addEventListener('click', event => { if (event.target === productModal) closeProductModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeProductModal(); });
$('#productGrid')?.addEventListener('click', event => {
  const link = event.target.closest('.product-card .text-link');
  if (link && link.getAttribute('href')?.startsWith('#')) {
    event.preventDefault();
    const card = link.closest('.product-card');
    openProductModal(card?.querySelector('h3')?.textContent.trim(), card?.querySelector('p')?.textContent.trim());
    return;
  }
  if (event.target.closest('.mini-pay-btn, .page-preview-button')) {
    showToast('Demo interaction only — no payment was made.');
  } else if (event.target.closest('.qr-preview')) {
    showToast('This is a visual QR demo; it does not initiate a payment.');
  }
});
