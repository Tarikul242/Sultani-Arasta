// =============================================
//   SULTANI ARASTA.COM - ADMIN SCRIPT (GITHUB PAGES - LOCALSTORAGE VERSION)
//   admin.js
// =============================================

// ── AUTH ──
var adminCreds = JSON.parse(localStorage.getItem('sa_admin')) || { user: 'admin', pass: 'admin123' };

function doLogin() {
  var u = document.getElementById('loginUser').value.trim();
  var p = document.getElementById('loginPass').value;
  if (u === adminCreds.user && p === adminCreds.pass) {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminWrap').style.display = 'flex';
    initAdmin();
  } else {
    document.getElementById('loginError').style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('loginPass').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') doLogin();
  });
});

function logout() {
  document.getElementById('adminWrap').style.display = 'none';
  document.getElementById('loginPage').style.display = 'flex';
  document.getElementById('loginUser').value = '';
  document.getElementById('loginPass').value = '';
  document.getElementById('loginError').style.display = 'none';
}

// ── DATA ──
var books   = JSON.parse(localStorage.getItem('sa_books'))   || [];
var orders  = JSON.parse(localStorage.getItem('sa_orders'))  || [];
var profile = JSON.parse(localStorage.getItem('sa_profile')) || { name:'', bio:'', image:'', followers:0 };

function saveBooks()   { localStorage.setItem('sa_books',   JSON.stringify(books));   }
function saveOrders()  { localStorage.setItem('sa_orders',  JSON.stringify(orders));  }
function saveProfile() { localStorage.setItem('sa_profile', JSON.stringify(profile)); }

// ── INIT ──
function initAdmin() {
  loadDashboard();
  loadBooksTable();
  loadOrdersTable(orders);
  loadProfileForm();
}

// ── NAVIGATION ──
var pageTitles = { dashboard:'ড্যাশবোর্ড', books:'বই ব্যবস্থাপনা', orders:'অর্ডার তালিকা', profile:'লেখকের প্রোফাইল', settings:'সেটিংস' };

function showPage(name) {
  document.querySelectorAll('.page').forEach(function (p) { p.classList.remove('active'); });
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(function (n) { n.classList.remove('active'); });
  var el = document.querySelector('[data-page="' + name + '"]');
  if (el) el.classList.add('active');
  document.getElementById('pageTitle').textContent = pageTitles[name] || name;
}

// ── DASHBOARD ──
function loadDashboard() {
  document.getElementById('statBooks').textContent   = books.length;
  document.getElementById('statOrders').textContent  = orders.length;
  document.getElementById('statPending').textContent = orders.filter(function (o) { return o.status === 'pending'; }).length;
  var revenue = orders.filter(function (o) { return o.status !== 'cancelled'; }).reduce(function (s, o) { return s + (o.totalPrice || 0); }, 0);
  document.getElementById('statRevenue').textContent = '৳' + revenue;

  var recent = orders.slice().reverse().slice(0, 5);
  var tbody  = document.getElementById('recentOrdersBody');
  if (!recent.length) {
    tbody.innerHTML = '<tr><td colspan="6" class="tbl-empty">কোনো অর্ডার নেই</td></tr>';
    return;
  }
  tbody.innerHTML = recent.map(function (o) {
    var bookNames = o.items ? o.items.map(function (i) { return i.bookTitle; }).join(', ') : (o.bookTitle || '—');
    return '<tr><td>' + o.buyerName + '</td><td>' + o.phone + '</td><td>' + bookNames + '</td>' +
      '<td>৳' + (o.totalPrice || 0) + '</td><td>' + o.date + '</td>' +
      '<td><span class="badge badge-' + o.status + '">' + statusText(o.status) + '</span></td></tr>';
  }).join('');
}

function statusText(s) {
  return s === 'pending' ? '⏳ পেন্ডিং' : s === 'delivered' ? '✅ ডেলিভারড' : '❌ বাতিল';
}

// ── BOOKS ──
function loadBooksTable() {
  var tbody = document.getElementById('booksBody');
  if (!books.length) {
    tbody.innerHTML = '<tr><td colspan="8" class="tbl-empty">কোনো বই যোগ করা হয়নি</td></tr>';
    return;
  }
  tbody.innerHTML = books.map(function (b) {
    var stars = '★'.repeat(b.rating || 0) + '☆'.repeat(5 - (b.rating || 0));
    return '<tr>' +
      '<td><img src="' + (b.cover || 'https://placehold.co/42x58/1a3c5e/white?text=Book') + '" class="book-thumb" onerror="this.src=\'https://placehold.co/42x58/1a3c5e/white?text=Book\'"></td>' +
      '<td><strong>' + b.title + '</strong></td>' +
      '<td>' + (b.author || '—') + '</td>' +
      '<td>' + (b.publisher || '—') + '</td>' +
      '<td>৳' + b.price + '<br><small style="color:#bbb;text-decoration:line-through">৳' + (b.originalPrice || b.price) + '</small></td>' +
      '<td>' + (b.discount || 0) + '%</td>' +
      '<td style="color:#e67e22">' + stars + '</td>' +
      '<td style="white-space:nowrap">' +
        '<button class="btn btn-warning btn-sm" onclick="editBook(' + b.id + ')">✏️</button> ' +
        '<button class="btn btn-danger btn-sm" onclick="deleteBook(' + b.id + ')">🗑️</button>' +
      '</td></tr>';
  }).join('');
}

// Book modal
var editingBookId = null;

function openAddBook() {
  editingBookId = null;
  document.getElementById('bookModalTitle').textContent = '📚 নতুন বই যোগ করুন';
  document.getElementById('bookForm').reset();
  document.getElementById('coverPreview').style.display = 'none';
  document.getElementById('bAuthor').value = profile.name || '';
  document.getElementById('bookModal').classList.add('on');
}

function editBook(id) {
  var b = books.find(function (x) { return x.id == id; });
  if (!b) return;
  editingBookId = b.id;
  document.getElementById('bookModalTitle').textContent = '✏️ বই সম্পাদনা';
  document.getElementById('bTitle').value         = b.title || '';
  document.getElementById('bAuthor').value        = b.author || '';
  document.getElementById('bPublisher').value     = b.publisher || '';
  document.getElementById('bOrigPrice').value     = b.originalPrice || '';
  document.getElementById('bPrice').value         = b.price || '';
  document.getElementById('bDiscount').value      = b.discount || '';
  document.getElementById('bRating').value        = b.rating || '';
  document.getElementById('bRatingCount').value   = b.ratingCount || '';
  document.getElementById('bStock').value         = b.inStock === false ? '0' : '1';
  document.getElementById('bCover').value         = b.cover || '';
  if (b.cover) {
    var prev = document.getElementById('coverPreview');
    prev.src = b.cover;
    prev.style.display = 'block';
  } else {
    document.getElementById('coverPreview').style.display = 'none';
  }
  document.getElementById('bookModal').classList.add('on');
}

function previewCover() {
  var url  = document.getElementById('bCover').value;
  var prev = document.getElementById('coverPreview');
  if (url) { prev.src = url; prev.style.display = 'block'; }
  else      { prev.style.display = 'none'; }
}

function saveBook(e) {
  e.preventDefault();
  var title        = document.getElementById('bTitle').value.trim();
  var author       = document.getElementById('bAuthor').value.trim();
  var publisher    = document.getElementById('bPublisher').value.trim();
  var origPrice    = parseFloat(document.getElementById('bOrigPrice').value) || 0;
  var price        = parseFloat(document.getElementById('bPrice').value) || 0;
  var discount     = parseFloat(document.getElementById('bDiscount').value) || 0;
  var rating       = parseInt(document.getElementById('bRating').value) || 0;
  var ratingCount  = parseInt(document.getElementById('bRatingCount').value) || 0;
  var inStock      = document.getElementById('bStock').value === '1';
  var cover        = document.getElementById('bCover').value.trim();

  if (!title) { aToast('বইয়ের নাম দিন!', 'error'); return; }
  if (!price)  { aToast('বইয়ের দাম দিন!', 'error'); return; }

  if (editingBookId) {
    var idx = books.findIndex(function (b) { return b.id == editingBookId; });
    books[idx] = { id: editingBookId, title: title, author: author, publisher: publisher, originalPrice: origPrice, price: price, discount: discount, rating: rating, ratingCount: ratingCount, inStock: inStock, cover: cover };
    aToast('বই আপডেট হয়েছে! ✓');
  } else {
    books.push({ id: Date.now(), title: title, author: author, publisher: publisher, originalPrice: origPrice, price: price, discount: discount, rating: rating, ratingCount: ratingCount, inStock: inStock, cover: cover });
    aToast('নতুন বই যোগ হয়েছে! ✓');
  }
  saveBooks();
  loadBooksTable();
  loadDashboard();
  closeBookModal();
}

function deleteBook(id) {
  if (!confirm('এই বইটি মুছে ফেলতে চান?')) return;
  books = books.filter(function (b) { return b.id != id; });
  saveBooks();
  loadBooksTable();
  loadDashboard();
  aToast('বই মুছে ফেলা হয়েছে!');
}

function closeBookModal() { document.getElementById('bookModal').classList.remove('on'); }

// ── ORDERS ──
function loadOrdersTable(list) {
  var tbody = document.getElementById('ordersBody');
  if (!list.length) {
    tbody.innerHTML = '<tr><td colspan="9" class="tbl-empty">কোনো অর্ডার নেই</td></tr>';
    return;
  }
  tbody.innerHTML = list.slice().reverse().map(function (o, i) {
    var bookNames = o.items ? o.items.map(function (x) { return x.bookTitle; }).join(', ') : (o.bookTitle || '—');
    return '<tr>' +
      '<td>' + (list.length - i) + '</td>' +
      '<td><strong>' + o.buyerName + '</strong></td>' +
      '<td>' + o.phone + '</td>' +
      '<td style="font-size:12px">' + o.address + '<br><strong>' + o.district + ', ' + o.thana + '</strong></td>' +
      '<td style="font-size:12px;max-width:150px">' + bookNames + '</td>' +
      '<td>৳' + (o.totalPrice || 0) + '</td>' +
      '<td>' + o.date + '</td>' +
      '<td><span class="badge badge-' + o.status + '">' + statusText(o.status) + '</span></td>' +
      '<td>' +
        '<select onchange="updateStatus(' + o.id + ', this.value)" style="padding:4px 6px;font-size:12px;border:1px solid #ddd;border-radius:4px;font-family:inherit;">' +
          '<option value="pending"   ' + (o.status === 'pending'   ? 'selected' : '') + '>⏳ পেন্ডিং</option>' +
          '<option value="delivered" ' + (o.status === 'delivered' ? 'selected' : '') + '>✅ ডেলিভারড</option>' +
          '<option value="cancelled" ' + (o.status === 'cancelled' ? 'selected' : '') + '>❌ বাতিল</option>' +
        '</select>' +
      '</td></tr>';
  }).join('');
}

function filterOrders() {
  var val      = document.getElementById('orderFilter').value;
  var filtered = val === 'all' ? orders : orders.filter(function (o) { return o.status === val; });
  loadOrdersTable(filtered);
}

function updateStatus(id, status) {
  var o = orders.find(function (x) { return x.id == id; });
  if (o) {
    o.status = status;
    saveOrders();
    loadDashboard();
    aToast('অর্ডার স্ট্যাটাস আপডেট হয়েছে! ✓');
  }
}

function clearAllOrders() {
  if (!confirm('সকল অর্ডার মুছে ফেলতে চান? এটি পূর্বাবস্থায় ফেরানো যাবে না!')) return;
  orders = [];
  saveOrders();
  loadOrdersTable(orders);
  loadDashboard();
  aToast('সকল অর্ডার মুছে ফেলা হয়েছে!');
}

// ── PROFILE ──
function loadProfileForm() {
  document.getElementById('pName').value      = profile.name      || '';
  document.getElementById('pImage').value     = profile.image     || '';
  document.getElementById('pBio').value       = profile.bio       || '';
  document.getElementById('pFollowers').value = profile.followers || 0;
  updateProfPreview();
}

function updateProfPreview() {
  var name = document.getElementById('pName').value;
  var img  = document.getElementById('pImage').value;
  document.getElementById('prevName').textContent = name || 'লেখকের নাম';
  var pi = document.getElementById('prevImg');
  pi.src = img || 'https://placehold.co/72x72/1a6b9a/white?text=Author';
  pi.onerror = function () { this.src = 'https://placehold.co/72x72/1a6b9a/white?text=Author'; };
}

function saveProfileData() {
  profile = {
    name:      document.getElementById('pName').value.trim(),
    image:     document.getElementById('pImage').value.trim(),
    bio:       document.getElementById('pBio').value.trim(),
    followers: parseInt(document.getElementById('pFollowers').value) || 0
  };
  saveProfile();
  aToast('প্রোফাইল সেভ হয়েছে! ✓');
}

// ── SETTINGS ──
function changePassword() {
  var curr = document.getElementById('currPass').value;
  var nw   = document.getElementById('newPass').value;
  var conf = document.getElementById('confPass').value;
  if (curr !== adminCreds.pass) { aToast('বর্তমান পাসওয়ার্ড ভুল!', 'error'); return; }
  if (nw.length < 6)            { aToast('পাসওয়ার্ড কমপক্ষে ৬ অক্ষর হতে হবে!', 'error'); return; }
  if (nw !== conf)               { aToast('নতুন পাসওয়ার্ড মিলছে না!', 'error'); return; }
  adminCreds.pass = nw;
  localStorage.setItem('sa_admin', JSON.stringify(adminCreds));
  aToast('পাসওয়ার্ড পরিবর্তন হয়েছে! ✓');
  document.getElementById('currPass').value = '';
  document.getElementById('newPass').value  = '';
  document.getElementById('confPass').value = '';
}

// ── TOAST ──
function aToast(msg, type) {
  var t = document.getElementById('adminToast');
  t.textContent = msg;
  t.style.background = (type === 'error') ? '#e74c3c' : '#27ae60';
  t.classList.add('show');
  setTimeout(function () { t.classList.remove('show'); }, 3000);
}
