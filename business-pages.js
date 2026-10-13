const pages = {
  gateway: {
    title: 'Payment Gateway',
    group: 'ACCEPT PAYMENTS',
    headline: 'A smoother way to\\ncheck out online.',
    summary: 'Explore a checkout concept that brings familiar payment choices and clear order details together in one responsive flow.',
    icon: '↗',
    label: 'CHECKOUT PREVIEW',
    previewTitle: 'Everyday essentials',
    previewDetail: 'Order #1048 · Example store',
    previewValue: '₹1,499',
    status: 'Ready to review',
    methods: ['UPI', 'Cards', 'Netbanking'],
    features: ['A focused checkout layout for web and mobile', 'Sample payment method selection and order summary', 'A clearer transaction status concept for the business'],
    steps: [['01', 'Connect your experience', 'Consider where checkout fits in your website or app.'], ['02', 'Present payment choices', 'Give customers an easy-to-scan order and payment summary.'], ['03', 'Review activity', 'Use a sample overview to understand the customer journey.']],
    questions: [['Does this process a payment?', 'No. The checkout shown here is a visual prototype and does not collect payment details or move money.'], ['Can I connect a real store?', 'Not in this demo. The integration and payment method descriptions are illustrative concepts.']]
  },
  links: {
    title: 'Payment Links',
    group: 'GET PAID ANYWHERE',
    headline: 'Share a payment\\nrequest in seconds.',
    summary: 'A simple payment-link concept for teams that need to send a clear request without building a full online checkout.',
    icon: '⇄',
    label: 'SHAREABLE LINK',
    previewTitle: 'Coffee & company',
    previewDetail: 'razorpay.example/pay/coffee',
    previewValue: '₹850',
    status: 'Link preview',
    methods: ['Message', 'Email', 'Invoice'],
    features: ['A shareable request concept for remote orders and services', 'A concise amount and description preview', 'A sample way to track whether a request needs attention'],
    steps: [['01', 'Set up a request', 'Choose a clear label and sample amount for the customer.'], ['02', 'Share with context', 'Send the request through the channel you already use.'], ['03', 'Keep an eye on status', 'Review the illustrative request state in one place.']],
    questions: [['Can customers pay through this link?', 'No. This is a sample link preview only; it is not connected to a payment processor.'], ['Do I need a website?', 'This page demonstrates the idea of a shareable request, but there is no live link creation in the prototype.']]
  },
  pages: {
    title: 'Payment Pages',
    group: 'SELL WITHOUT THE SETUP',
    headline: 'A storefront page\\nwithout the fuss.',
    summary: 'Explore a branded, no-code page concept for a product, event, service or campaign, with the essentials presented clearly.',
    icon: '▦',
    label: 'PAGE BUILDER PREVIEW',
    previewTitle: 'Studio collection',
    previewDetail: 'A sample product page',
    previewValue: '₹2,400',
    status: 'Draft preview',
    methods: ['Brand', 'Product', 'Checkout'],
    features: ['A compact page layout for a product or service', 'Space for a brand message and order details', 'A responsive call-to-action preview'],
    steps: [['01', 'Choose a page goal', 'Start with a product, service or event you want to present.'], ['02', 'Add your content', 'Arrange the sample description and purchase details.'], ['03', 'Preview the experience', 'Check the responsive page concept before sharing it.']],
    questions: [['Can I publish a live payment page?', 'No. The page shown here is a design demonstration and is not hosted as a real storefront.'], ['Do I need to write code?', 'This concept illustrates a simple page-builder experience, but does not publish or process orders.']]
  },
  subscriptions: {
    title: 'Subscriptions',
    group: 'RECURRING BILLING',
    headline: 'Make recurring\\nrevenue easier to see.',
    summary: 'A subscription-management concept to make plans, billing cadence and account status easier to understand at a glance.',
    icon: '↻',
    label: 'PLAN OVERVIEW',
    previewTitle: 'Studio membership',
    previewDetail: 'Monthly plan · Example only',
    previewValue: '₹999 / mo',
    status: 'Active sample',
    methods: ['Monthly', 'Annual', 'Custom'],
    features: ['A clear plan and billing-period summary', 'A sample subscription status and renewal view', 'A recurring-revenue workflow concept for teams'],
    steps: [['01', 'Define a plan', 'Describe the recurring service and its billing cadence.'], ['02', 'Keep status visible', 'Review a sample overview of active and paused plans.'], ['03', 'Understand renewals', 'Use clear dates and status labels to plan customer follow-up.']],
    questions: [['Are recurring payments enabled?', 'No. This prototype does not create plans, store payment information or initiate renewals.'], ['Are these subscription amounts real?', 'No. Any prices shown are fictional examples for the interface only.']]
  },
  payouts: {
    title: 'Payouts',
    group: 'MOVE MONEY OUT',
    headline: 'Outgoing payments,\\nwith more clarity.',
    summary: 'Explore a payout workflow concept for reviewing transfers, grouping recipients and making payment activity easier to follow.',
    icon: '↗',
    label: 'PAYOUT WORKSPACE',
    previewTitle: 'Northstar Studio',
    previewDetail: 'Vendor transfer · Example only',
    previewValue: '₹24,850',
    status: 'Needs review',
    methods: ['Single', 'Bulk', 'Scheduled'],
    features: ['A sample overview of outgoing payment activity', 'Concepts for scheduled and grouped transfer review', 'Clearer status and approval steps for teams'],
    steps: [['01', 'Prepare a payout', 'Collect the amount and recipient details in a reviewable format.'], ['02', 'Check the workflow', 'Confirm that the intended approvals are represented.'], ['03', 'Review status', 'See an example of how payout activity could be organised.']],
    questions: [['Will this send money to a bank account?', 'No. Payouts are not enabled, and no banking details or real recipients are handled.'], ['Can I schedule a transfer?', 'The page illustrates scheduling concepts only; it does not queue or execute transfers.']]
  },
  finance: {
    title: 'Business Finance',
    group: 'YOUR MONEY, IN SYNC',
    headline: 'See the moving parts\\nmore clearly.',
    summary: 'A finance workspace concept that brings balances, transaction activity and reconciliation ideas into one easy-to-scan view.',
    icon: '▤',
    label: 'BUSINESS OVERVIEW',
    previewTitle: 'Available balance',
    previewDetail: 'Illustrative balance · 24 transactions',
    previewValue: '₹4,82,640',
    status: 'Overview sample',
    methods: ['Balances', 'Activity', 'Insights'],
    features: ['A concise view of sample balances and transactions', 'A reconciliation concept for comparing activity records', 'Illustrative insights to support a routine finance review'],
    steps: [['01', 'Bring activity together', 'Start from a shared view of sample collections and outflows.'], ['02', 'Match what matters', 'Use a reconciliation concept to compare relevant records.'], ['03', 'Review the bigger picture', 'Scan activity trends and spot what needs attention.']],
    questions: [['Does this connect to a bank or accounting system?', 'No. All balances and transaction activity on this page are fictional examples.'], ['Can I export financial records?', 'No. The finance tools are interface concepts and do not access or store real business records.']]
  },
  payroll: {
    title: 'Payroll Workflows',
    group: 'TEAM PAYMENTS',
    headline: 'Make payday feel\\nmore organised.',
    summary: 'A payroll workflow concept for planning payment batches, checking approvals and keeping a sample team payout status in view.',
    icon: '▥',
    label: 'PAYROLL RUN PREVIEW',
    previewTitle: 'June team payroll',
    previewDetail: '12 team members · Sample run',
    previewValue: '₹3,46,000',
    status: 'Review required',
    methods: ['Prepare', 'Approve', 'Track'],
    features: ['A sample payroll-run overview with visible states', 'A review step before an outgoing payment workflow', 'A clearer way to scan a team’s payment checklist'],
    steps: [['01', 'Prepare the run', 'Gather a sample list of recipients and amounts.'], ['02', 'Review and approve', 'Make the approval sequence visible before any next step.'], ['03', 'Track completion', 'Use a concise status view to follow the example run.']],
    questions: [['Does this calculate salaries or run payroll?', 'No. Payroll here is a workflow illustration; it does not calculate wages or make payments.'], ['Are employee details stored?', 'No real employee records or personal details are collected by this page.']]
  },
  instore: {
    title: 'In-store Payments',
    group: 'IN PERSON, MADE SIMPLE',
    headline: 'Bring a faster flow\\nto the counter.',
    summary: 'A retail payment concept for bringing a digital checkout moment into a physical store, with a simple scan-to-pay preview.',
    icon: '⌗',
    label: 'STORE COUNTER PREVIEW',
    previewTitle: 'Order at the counter',
    previewDetail: 'Sample scan-to-pay experience',
    previewValue: '₹1,250',
    status: 'QR concept',
    methods: ['Scan', 'Confirm', 'Receipt'],
    features: ['A scan-to-pay experience concept for a store counter', 'A sample amount and order summary customers can review', 'A simple payment-status confirmation layout'],
    steps: [['01', 'Prepare the order', 'Show a clear amount and description at the point of sale.'], ['02', 'Let the customer review', 'Keep the sample payment flow simple and easy to scan.'], ['03', 'Confirm the outcome', 'Make a clear receipt and status concept part of the visit.']],
    questions: [['Can I scan this QR code to pay?', 'No. The graphic is decorative and does not encode a payment request.'], ['Can I use this for an actual shop?', 'Not as-is. The page is a frontend prototype with no point-of-sale or payment integration.']]
  }
};

const current = pages[document.body.dataset.businessPage] || pages.gateway;
const sectionLinks = [
  ['Gateway', 'payment-gateway.html', 'gateway'],
  ['Payment links', 'payment-links.html', 'links'],
  ['Payment pages', 'payment-pages.html', 'pages'],
  ['Subscriptions', 'subscriptions.html', 'subscriptions'],
  ['Payouts', 'payouts.html', 'payouts'],
  ['Business finance', 'business-finance.html', 'finance'],
  ['Payroll', 'payroll.html', 'payroll'],
  ['In-store', 'in-store-payments.html', 'instore']
];

document.title = `${current.title} — RazorPay`;
document.querySelector('meta[name="description"]').content = `${current.title} product concept from RazorPay, an independent fintech frontend prototype.`;

const navigation = sectionLinks.map(([label, href, key]) =>
  `<a href="${href}"${key === document.body.dataset.businessPage ? ' aria-current="page"' : ''}>${label}</a>`
).join('');
const featureList = current.features.map(feature => `<li>${feature}</li>`).join('');
const steps = current.steps.map(([number, title, description]) =>
  `<article class="workflow-step"><span>${number}</span><div><h3>${title}</h3><p>${description}</p></div></article>`
).join('');
const questions = current.questions.map(([question, answer]) =>
  `<details><summary>${question}<span aria-hidden="true">+</span></summary><p>${answer}</p></details>`
).join('');
const methods = current.methods.map(method => `<span>${method}</span>`).join('');

document.querySelector('#businessPage').innerHTML = `
  <div class="product-announcement"><span>RAZORPAY PRODUCT CONCEPTS</span><a href="index.html">Back to the platform overview <b>↗</b></a></div>
  <header class="product-header">
    <a class="product-brand" href="index.html" aria-label="RazorPay home"><img src="assets/razorpay-logo.png" alt="RazorPay"></a>
    <button class="product-menu-toggle" aria-expanded="false" aria-controls="productNavigation" aria-label="Toggle product navigation"><span></span><span></span><span></span></button>
    <nav class="product-nav" id="productNavigation" aria-label="Product pages">${navigation}</nav>
    <div class="product-header-actions"><a href="login.html">Log in</a><a class="product-button product-button-blue" href="signup.html">Explore demo <span>→</span></a></div>
  </header>
  <nav class="product-crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="index.html#products">Products</a><span>/</span><span aria-current="page">${current.title}</span></nav>
  <section class="product-hero">
    <div class="product-hero-copy">
      <span class="product-eyebrow">${current.group}</span>
      <h1>${current.headline.replace('\\n', '<br>')}</h1>
      <p>${current.summary}</p>
      <div class="product-hero-actions"><a class="product-button product-button-blue" href="signup.html">Explore the demo <span>→</span></a><a class="product-text-link" href="#how-it-works">See how it works <span>↓</span></a></div>
      <div class="product-assurance"><span>✓</span> Fictional product concept · No payments are processed</div>
    </div>
    <div class="product-preview">
      <div class="preview-heading"><span class="preview-icon">${current.icon}</span><span><small>${current.label}</small><b>${current.status}</b></span><span class="preview-menu">•••</span></div>
      <div class="preview-total"><small>${current.previewTitle}</small><strong>${current.previewValue}</strong><span>${current.previewDetail}</span></div>
      <div class="preview-methods-label">WORKFLOW</div>
      <div class="preview-methods">${methods}</div>
      <div class="preview-state"><span>✓</span><div><b>Sample interface</b><small>All values are illustrative</small></div><span class="preview-state-tag">DEMO</span></div>
    </div>
    <div class="product-hero-orb product-hero-orb-one"></div><div class="product-hero-orb product-hero-orb-two"></div>
  </section>
  <section class="product-benefits">
    <div class="product-section-heading"><span class="product-eyebrow">A CLEARER WORKFLOW</span><h2>Designed to make the<br><span>important parts easier.</span></h2><p>Explore the ideas behind this RazorPay page. Every number, status and workflow shown is sample content.</p></div>
    <ul class="product-feature-list">${featureList}</ul>
  </section>
  <section class="product-workflow" id="how-it-works">
    <div class="product-section-heading"><span class="product-eyebrow">A SIMPLE STARTING POINT</span><h2>From first step<br><span>to clearer follow-through.</span></h2><p>A sample flow to help explain how a business might think about this part of its payment operations.</p></div>
    <div class="workflow-grid">${steps}</div>
  </section>
  <section class="product-cta"><span class="product-eyebrow">EXPLORE RAZORPAY</span><h2>See how the pieces<br>fit together.</h2><p>Return to the platform overview or explore the interactive account demo.</p><div><a class="product-button product-button-white" href="index.html#products">View all product concepts <span>→</span></a><a class="product-cta-secondary" href="signup.html">Create a demo account</a></div><small>This is an independent, fictional frontend prototype. It is not a financial service.</small></section>
  <section class="product-faq"><div class="product-section-heading"><span class="product-eyebrow">GOOD TO KNOW</span><h2>Questions, answered.</h2></div><div class="product-faq-list">${questions}</div></section>
  <footer class="product-footer"><a class="product-brand" href="index.html" aria-label="RazorPay home"><img src="assets/razorpay-logo.png" alt="RazorPay"></a><div class="product-footer-links">${navigation}<a href="index.html#faq">FAQs</a></div><p>Independent frontend demo · Not affiliated with Razorpay · No live payments, payouts, integrations or pricing.</p></footer>
`;

const menuToggle = document.querySelector('.product-menu-toggle');
const productNav = document.querySelector('.product-nav');
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(expanded));
  productNav.classList.toggle('is-open', expanded);
});
