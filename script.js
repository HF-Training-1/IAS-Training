// ======================================================
// 🔑 YOUR MASTER ADMIN — EDIT ONLY THESE 3 LINES
// ======================================================
const MASTER_EMAIL = "admin@ias-training.co.uk";
const MASTER_PASSWORD = "YourSecurePassword123";
const MASTER_NAME = "IAS Training Admin";
// ======================================================
// ALL DONE — NOTHING ELSE TO EDIT!
// ======================================================

const STORAGE_KEY = 'ias_training_user';

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
function requireAuth() {
    if (!getCurrentUser()) {
        window.location.href = 'index.html';
    }
}
function isMasterAdmin(email, password) {
    return email === MASTER_EMAIL && password === MASTER_PASSWORD;
}