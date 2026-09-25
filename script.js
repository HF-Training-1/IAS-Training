// ======================================================
// ✅ MASTER ADMIN — EDIT THESE DETAILS HERE ONLY
// ======================================================
const MASTER_EMAIL = "shane.ace1@outlook.com";   // ← Your master email
const MASTER_PASSWORD = "IRStraining1";   // ← Your master password
const MASTER_NAME = "IAS Training Admin";          // ← Your display name
// ======================================================
//    THAT'S IT — NO OTHER FILES NEED CHANGING!
// ======================================================

const STORAGE_KEY = 'ias_training_user';

// Check if current user is the master admin
function isMasterAdmin(email, password) {
  return email === MASTER_EMAIL && password === MASTER_PASSWORD;
}

// Save temp data between register pages
function setTempData(data) {
    sessionStorage.setItem('ias_temp', JSON.stringify(data));
}
function getTempData() {
    const d = sessionStorage.getItem('ias_temp');
    return d ? JSON.parse(d) : null;
}
function clearTempData() {
    sessionStorage.removeItem('ias_temp');
}

// Full user account
function saveUser(user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}
function getCurrentUser() {
    const d = localStorage.getItem(STORAGE_KEY);
    return d ? JSON.parse(d) : null;
}
function logout() {
    localStorage.removeItem(STORAGE_KEY);
    window.location.href = 'index.html';
}

// Redirect if not logged in
function requireAuth() {
    if (!getCurrentUser()) {
        window.location.href = 'index.html';
    }
}
