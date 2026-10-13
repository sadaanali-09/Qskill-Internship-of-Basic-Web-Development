# RazorPay Clone Website  — For Qskill Intership Project

An independent frontend prototype for demonstrating payment and business-finance page concepts. This is **not the official Razorpay website**, is not affiliated with Razorpay, and does not provide any live payment service.

## Pages and files
- `index.html` — RazorPay-branded landing page prototype with product cards and tabs, finance overview, integrations, security concepts, sample pricing tiers, FAQ, developer code example, testimonial carousel and newsletter demo.
- `login.html` — demo login screen with field validation, password show/hide, remember-me behavior and error messages.
- `signup.html` — demo account creation screen with form validation, password confirmation and password-strength feedback.
- `dashboard.html` — demo dashboard shown after a successful signup/login, with sample metrics, sample activity, navigation and logout.
- `payment-gateway.html`, `payment-links.html`, `payment-pages.html`, `subscriptions.html`, `in-store-payments.html`, `payouts.html`, `business-finance.html`, and `payroll.html` — standalone product and business-section concept pages.
- `style.css` — landing-page styles, responsive layouts, dialogs and visual illustrations.
- `business-pages.css` and `business-pages.js` — shared responsive layouts and page-specific content for the standalone product pages. The pages use the project’s existing Razorpay logo asset.
- `auth.css` — login, signup and dashboard styles.
- `script.js` — landing-page interactions and product content.
- `auth.js` — browser-only demo account flow.

## Run locally
1. Extract the ZIP file.
2. Open the folder in Visual Studio Code.
3. Run `index.html` using the VS Code **Live Server** extension (recommended), or use another local HTTP server.
4. Choose **Sign up**, create a demo account, and you will be taken to `dashboard.html`. Log out, then use **Log in** with the same demo credentials to test the login flow.

## What works in the frontend
- Mobile navigation and desktop dropdowns.
- Expandable FAQ answers and responsive integration, security, and sample pricing sections.
- Product menus, product cards, and the footer link to individual payment and business-finance concept pages.
- Payment / payout / finance product tabs update the card set.
- Product-card action links open a detail dialog with product-specific feature summaries.
- Payment link and developer code copy buttons.
- Preview payment/page controls show a demo notice instead of attempting a transaction.
- Testimonial carousel, newsletter form demo, back-to-top button.
- Sign-up validation, duplicate-email check, password confirmation and strength meter.
- Login credential check against a locally created demo account, remember-me toggle, logout and dashboard greeting.
- While signed in, landing-page sign-up calls to action lead to the dashboard, and the header shows an explicit log-out action. Other navigation does not clear the demo session.

## Security and production limitations
This remains a **frontend-only learning prototype**. Demo account information is stored in browser local storage; passwords are hashed in the browser using PBKDF2 to demonstrate a flow, but browser-side authentication is **not production-secure** and can be bypassed or modified by the user. Never use this system to protect real accounts or enter real financial details. Real production authentication needs a secure backend, server-side password hashing, sessions/tokens, email verification, password reset, CSRF/rate-limit protections and secure storage. Actual payments need a legitimate payment processor and server-side verification. The sample metrics, transactions, testimonials and contact details are illustrative; verify or replace them before publishing.
