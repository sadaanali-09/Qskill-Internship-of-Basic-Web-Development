(() => {
  'use strict';
  const USER_KEY = 'payflow_demo_users_v1';
  const SESSION_KEY = 'payflow_demo_session_v1';
  const $ = (selector) => document.querySelector(selector);
  const form = $('#authForm');
  const page = document.body.dataset.authPage;
  const alertBox = $('#authMessage');

  function readUsers() {
    try { return JSON.parse(localStorage.getItem(USER_KEY) || '[]'); }
    catch { return []; }
  }
  function showMessage(message, type = 'error') {
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.className = type === 'success' ? 'auth-success show' : 'auth-error show';
    alertBox.setAttribute('role', type === 'success' ? 'status' : 'alert');
  }
  function hideMessage() {
    if (alertBox) { alertBox.textContent = ''; alertBox.className = 'auth-error'; }
  }
  function base64(bytes) {
    let binary = '';
    new Uint8Array(bytes).forEach(byte => { binary += String.fromCharCode(byte); });
    return btoa(binary);
  }
  async function makePasswordHash(password, saltBase64) {
    if (!window.crypto?.subtle) throw new Error('Secure password hashing is unavailable. Please open this project through VS Code Live Server or localhost.');
    const salt = saltBase64 ? Uint8Array.from(atob(saltBase64), c => c.charCodeAt(0)) : crypto.getRandomValues(new Uint8Array(16));
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
    const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 120000, hash: 'SHA-256' }, key, 256);
    return { salt: base64(salt), hash: base64(bits) };
  }
  function setSession(user, remember = false) {
    const session = JSON.stringify({ email: user.email, fullName: user.fullName, createdAt: Date.now() });
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    (remember ? localStorage : sessionStorage).setItem(SESSION_KEY, session);
  }
  function clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
  }
  function getSession() {
    try { return JSON.parse(sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY) || 'null'); }
    catch { return null; }
  }
  function goDashboard() { window.location.href = 'dashboard.html'; }
  function bindLogout(button, destination = 'index.html') {
    button?.addEventListener('click', event => {
      event.preventDefault();
      clearSession();
      window.location.href = destination;
    });
  }

  // Password visibility controls are keyboard-accessible buttons.
  document.querySelectorAll('[data-toggle-password]').forEach(button => {
    button.addEventListener('click', () => {
      const input = document.getElementById(button.dataset.togglePassword);
      if (!input) return;
      const reveal = input.type === 'password';
      input.type = reveal ? 'text' : 'password';
      button.textContent = reveal ? 'Hide' : 'Show';
      button.setAttribute('aria-pressed', String(reveal));
    });
  });

  const passwordInput = $('#password');
  passwordInput?.addEventListener('input', () => {
    const value = passwordInput.value;
    const score = [value.length >= 8, /[A-Z]/.test(value), /[a-z]/.test(value), /\d/.test(value), /[^A-Za-z0-9]/.test(value)].filter(Boolean).length;
    const bars = document.querySelectorAll('.password-meter span');
    bars.forEach((bar, index) => {
      bar.classList.toggle('on', index < score);
      bar.classList.toggle('strong', score >= 4 && index < score);
    });
    const label = $('#passwordStrength');
    if (label) label.textContent = value ? (score <= 2 ? 'Weak password' : score <= 3 ? 'Fair password' : 'Strong password') : 'Use at least 8 characters';
  });

  form?.addEventListener('input', hideMessage);
  form?.addEventListener('submit', async event => {
    event.preventDefault();
    hideMessage();
    const submit = form.querySelector('button[type="submit"]');
    if (submit) { submit.disabled = true; submit.textContent = page === 'signup' ? 'Creating account…' : 'Signing in…'; }
    try {
      const email = ($('#email')?.value || '').trim().toLowerCase();
      const password = $('#password')?.value || '';
      if (!email || !password) throw new Error('Enter your email address and password.');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Enter a valid email address.');
      if (page === 'signup') {
        const fullName = ($('#fullName')?.value || '').trim();
        const businessName = ($('#businessName')?.value || '').trim();
        const confirmPassword = $('#confirmPassword')?.value || '';
        if (!fullName) throw new Error('Enter your full name.');
        if (password.length < 8) throw new Error('Use a password with at least 8 characters.');
        if (password !== confirmPassword) throw new Error('Your passwords do not match.');
        if (!$('#acceptTerms')?.checked) throw new Error('Please acknowledge the prototype terms to continue.');
        const users = readUsers();
        if (users.some(user => user.email === email)) throw new Error('An account with this email already exists in this browser. Log in instead.');
        const derived = await makePasswordHash(password);
        const user = { email, fullName, businessName, salt: derived.salt, passwordHash: derived.hash, createdAt: new Date().toISOString() };
        users.push(user);
        localStorage.setItem(USER_KEY, JSON.stringify(users));
        setSession(user, false);
        showMessage('Demo account created. Opening your sample dashboard…', 'success');
        setTimeout(goDashboard, 500);
      } else {
        const user = readUsers().find(item => item.email === email);
        if (!user) throw new Error('No demo account was found for this email in this browser. Sign up first.');
        const derived = await makePasswordHash(password, user.salt);
        if (derived.hash !== user.passwordHash) throw new Error('The email or password is incorrect.');
        setSession(user, $('#rememberMe')?.checked === true);
        showMessage('Signed in successfully. Opening your sample dashboard…', 'success');
        setTimeout(goDashboard, 450);
      }
    } catch (error) {
      showMessage(error?.message || 'Something went wrong. Please try again.');
    } finally {
      if (submit) { submit.disabled = false; submit.innerHTML = page === 'signup' ? 'Create account <span aria-hidden="true">→</span>' : 'Log in <span aria-hidden="true">→</span>'; }
    }
  });

  $('#forgotPassword')?.addEventListener('click', () => {
    showMessage('Password reset requires a verified email service on a secure backend. This frontend demo cannot safely reset an account password.');
  });

  const session = getSession();
  if ((page === 'login' || page === 'signup') && session) {
    window.location.replace('dashboard.html');
    return;
  }

  if (page === 'home' && session) {
    const loginLink = $('.nav-actions a[href="login.html"]');
    const signupLink = $('.nav-actions a[href="signup.html"]');
    if (loginLink && signupLink) {
      loginLink.href = 'dashboard.html';
      loginLink.textContent = 'Dashboard';
      signupLink.href = '#logout';
      signupLink.textContent = 'Log out';
      signupLink.dataset.demoLogout = '';
      bindLogout(signupLink);
    }
    document.querySelectorAll('a[href="signup.html"]').forEach(link => {
      if (link === signupLink) return;
      link.href = 'dashboard.html';
      const label = link.firstChild;
      if (label?.nodeType === Node.TEXT_NODE) label.textContent = 'Open dashboard ';
    });
  }

  if (page === 'dashboard') {
    if (!session) { window.location.replace('login.html'); return; }
    const firstName = (session.fullName || session.email.split('@')[0]).split(/\s+/)[0];
    const nameNode = $('#dashboardName');
    if (nameNode) nameNode.textContent = firstName;
    const profileName = $('#profileName');
    if (profileName) profileName.textContent = session.fullName || session.email;
    const profileInitial = $('#profileInitial');
    if (profileInitial) profileInitial.textContent = (session.fullName || session.email)[0].toUpperCase();
    const businessName = readUsers().find(user => user.email === session.email)?.businessName;
    const business = $('#businessLabel');
    if (business && businessName) business.textContent = businessName;
    bindLogout($('#logoutButton'), 'login.html?loggedout=1');
    $('#dashboardExplore')?.addEventListener('click', () => window.location.href = 'index.html#products');
    $('#dashboardTestAction')?.addEventListener('click', () => {
      const target = $('#dashboardNotice');
      if (target) target.textContent = 'Demo action recorded on screen only. No money moved and no transaction was created.';
    });
  }
})();
