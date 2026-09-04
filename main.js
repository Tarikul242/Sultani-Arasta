// =============================================
//   SULTANI ARASTA.COM - MAIN SCRIPT (GITHUB PAGES - LOCALSTORAGE VERSION)
//   main.js
// =============================================

// ── BANGLADESH DISTRICTS & THANAS ──
const BD = {
  "ঢাকা":["আদাবর","বাড্ডা","বংশাল","ডেমরা","ধানমন্ডি","দোহার","গেন্ডারিয়া","গুলশান","হাজারীবাগ","কামরাঙ্গীরচর","কেরানীগঞ্জ","খিলগাঁও","খিলক্ষেত","কোতোয়ালি","লালবাগ","মিরপুর","মোহাম্মদপুর","মতিঝিল","নবাবগঞ্জ","পল্লবী","পল্টন","রমনা","সবুজবাগ","শাহজাহানপুর","শ্যামপুর","সূত্রাপুর","তেজগাঁও","তুরাগ","উত্তরা"],
  "চট্টগ্রাম":["আনোয়ারা","বাঁশখালী","বোয়ালখালী","চন্দনাইশ","ডবলমুরিং","ফটিকছড়ি","হাটহাজারী","কর্ণফুলী","খুলশী","কোতোয়ালি","লোহাগাড়া","মিরসরাই","পটিয়া","পাঁচলাইশ","রাঙ্গুনিয়া","রাউজান","সন্দ্বীপ","সাতকানিয়া","সীতাকুণ্ড"],
  "রাজশাহী":["বাঘা","বাগমারা","চারঘাট","দুর্গাপুর","গোদাগাড়ী","মোহনপুর","পবা","পুঠিয়া","তানোর","বোয়ালিয়া"],
  "খুলনা":["বটিয়াঘাটা","দাকোপ","ডুমুরিয়া","ফুলতলা","কয়রা","খানজাহান আলী","খুলনা সদর","পাইকগাছা","রূপসা","সোনাডাঙ্গা","তেরখাদা"],
  "বরিশাল":["আগৈলঝাড়া","বাবুগঞ্জ","বাকেরগঞ্জ","বানারীপাড়া","গৌরনদী","হিজলা","মেহেন্দিগঞ্জ","মুলাদী","উজিরপুর","বরিশাল সদর"],
  "সিলেট":["বালাগঞ্জ","বিয়ানীবাজার","বিশ্বনাথ","কোম্পানীগঞ্জ","ফেঞ্চুগঞ্জ","গোলাপগঞ্জ","গোয়াইনঘাট","জকিগঞ্জ","কানাইঘাট","ওসমানীনগর","সিলেট সদর","দক্ষিণ সুরমা"],
  "রংপুর":["বদরগঞ্জ","গঙ্গাচড়া","কাউনিয়া","মিঠাপুকুর","পীরগঞ্জ","পীরগাছা","রংপুর সদর","তারাগঞ্জ"],
  "ময়মনসিংহ":["ভালুকা","ধোবাউড়া","ফুলবাড়িয়া","গফরগাঁও","গৌরীপুর","হালুয়াঘাট","ঈশ্বরগঞ্জ","ময়মনসিংহ সদর","মুক্তাগাছা","নান্দাইল","ফুলপুর","তারাকান্দা","ত্রিশাল"],
  "গাজীপুর":["কালীগঞ্জ","কালিয়াকৈর","কাপাসিয়া","গাজীপুর সদর","শ্রীপুর","টঙ্গী"],
  "নারায়ণগঞ্জ":["আড়াইহাজার","বন্দর","নারায়ণগঞ্জ সদর","রূপগঞ্জ","সোনারগাঁও"],
  "কুমিল্লা":["বরুড়া","ব্রাহ্মণপাড়া","বুড়িচং","চান্দিনা","চৌদ্দগ্রাম","দাউদকান্দি","দেবিদ্বার","হোমনা","কুমিল্লা সদর","লাকসাম","লালমাই","মেঘনা","মুরাদনগর","নাঙ্গলকোট","তিতাস"],
  "ফেনী":["ছাগলনাইয়া","দাগনভূঞা","ফেনী সদর","ফুলগাজী","পরশুরাম","সোনাগাজী"],
  "নোয়াখালী":["বেগমগঞ্জ","চাটখিল","কোম্পানীগঞ্জ","হাতিয়া","কবিরহাট","নোয়াখালী সদর","সেনবাগ","সোনাইমুড়ী","সুবর্ণচর"],
  "লক্ষ্মীপুর":["কমলনগর","লক্ষ্মীপুর সদর","রামগঞ্জ","রামগতি","রায়পুর"],
  "চাঁদপুর":["চাঁদপুর সদর","ফরিদগঞ্জ","হাজীগঞ্জ","কচুয়া","মতলব উত্তর","মতলব দক্ষিণ","শাহরাস্তি"],
  "ব্রাহ্মণবাড়িয়া":["আখাউড়া","বাঞ্ছারামপুর","ব্রাহ্মণবাড়িয়া সদর","কসবা","নাসিরনগর","নবীনগর","সরাইল"],
  "কক্সবাজার":["চকরিয়া","কক্সবাজার সদর","কুতুবদিয়া","মহেশখালী","পেকুয়া","রামু","টেকনাফ","উখিয়া"],
  "বান্দরবান":["আলীকদম","বান্দরবান সদর","লামা","নাইক্ষ্যংছড়ি","রোয়াংছড়ি","রুমা","থানচি"],
  "রাঙ্গামাটি":["বাঘাইছড়ি","বরকল","বিলাইছড়ি","জুরাছড়ি","কাউখালী","কাপ্তাই","লংগদু","নানিয়ারচর","রাঙ্গামাটি সদর","রাজস্থলী"],
  "খাগড়াছড়ি":["দিঘীনালা","গুইমারা","খাগড়াছড়ি সদর","লক্ষীছড়ি","মানিকছড়ি","মাটিরাঙ্গা","মহালছড়ি","পানছড়ি","রামগড়"],
  "সুনামগঞ্জ":["বিশ্বম্ভরপুর","ছাতক","দক্ষিণ সুনামগঞ্জ","দিরাই","ধর্মপাশা","দোয়ারাবাজার","জামালগঞ্জ","জগন্নাথপুর","শাল্লা","সুনামগঞ্জ সদর","তাহিরপুর"],
  "হবিগঞ্জ":["আজমিরীগঞ্জ","বাহুবল","বানিয়াচং","চুনারুঘাট","হবিগঞ্জ সদর","লাখাই","মাধবপুর","নবীগঞ্জ"],
  "মৌলভীবাজার":["বড়লেখা","জুড়ী","কমলগঞ্জ","কুলাউড়া","মৌলভীবাজার সদর","রাজনগর","শ্রীমঙ্গল"],
  "নেত্রকোণা":["আটপাড়া","বারহাট্টা","দুর্গাপুর","খালিয়াজুরী","কলমাকান্দা","কেন্দুয়া","মদন","মোহনগঞ্জ","নেত্রকোণা সদর","পূর্বধলা"],
  "কিশোরগঞ্জ":["অষ্টগ্রাম","বাজিতপুর","ভৈরব","হোসেনপুর","ইটনা","কটিয়াদী","করিমগঞ্জ","কিশোরগঞ্জ সদর","কুলিয়ারচর","মিঠামইন","নিকলী","পাকুন্দিয়া","তাড়াইল"],
  "জামালপুর":["বকশীগঞ্জ","দেওয়ানগঞ্জ","ইসলামপুর","জামালপুর সদর","মাদারগঞ্জ","মেলান্দহ","সরিষাবাড়ী"],
  "শেরপুর":["ঝিনাইগাতী","নকলা","নালিতাবাড়ী","শেরপুর সদর","শ্রীবরদী"],
  "টাঙ্গাইল":["বাসাইল","ভূঞাপুর","দেলদুয়ার","ধনবাড়ী","ঘাটাইল","গোপালপুর","কালিহাতী","মধুপুর","মির্জাপুর","নাগরপুর","সখিপুর","টাঙ্গাইল সদর"],
  "মানিকগঞ্জ":["দৌলতপুর","ঘিওর","হরিরামপুর","মানিকগঞ্জ সদর","শিবালয়","সাটুরিয়া","সিঙ্গাইর"],
  "মুন্সীগঞ্জ":["গজারিয়া","লৌহজং","মুন্সীগঞ্জ সদর","শ্রীনগর","সিরাজদিখান","টঙ্গীবাড়ী"],
  "রাজবাড়ী":["বালিয়াকান্দি","গোয়ালন্দ","কালুখালী","পাংশা","রাজবাড়ী সদর"],
  "ফরিদপুর":["আলফাডাঙ্গা","ভাঙ্গা","বোয়ালমারী","চরভদ্রাসন","ফরিদপুর সদর","মধুখালী","নগরকান্দা","সালথা"],
  "মাদারীপুর":["কালকিনি","মাদারীপুর সদর","রাজৈর","শিবচর"],
  "শরীয়তপুর":["ডামুড্যা","গোসাইরহাট","জাজিরা","নড়িয়া","শরীয়তপুর সদর","ভেদরগঞ্জ"],
  "গোপালগঞ্জ":["কাশিয়ানী","কোটালীপাড়া","মুকসুদপুর","গোপালগঞ্জ সদর","টুঙ্গিপাড়া"],
  "বাগেরহাট":["বাগেরহাট সদর","চিতলমারী","ফকিরহাট","কচুয়া","মংলা","মোরেলগঞ্জ","মোল্লাহাট","রামপাল","শরণখোলা"],
  "সাতক্ষীরা":["আশাশুনি","দেবহাটা","কালিগঞ্জ","কলারোয়া","সাতক্ষীরা সদর","শ্যামনগর","তালা"],
  "যশোর":["অভয়নগর","বাঘারপাড়া","চৌগাছা","ঝিকরগাছা","কেশবপুর","মণিরামপুর","শার্শা","যশোর সদর"],
  "নড়াইল":["কালিয়া","লোহাগড়া","নড়াইল সদর"],
  "মাগুরা":["মাগুরা সদর","মোহাম্মদপুর","শালিখা","শ্রীপুর"],
  "ঝিনাইদহ":["হরিণাকুণ্ডু","ঝিনাইদহ সদর","কালীগঞ্জ","কোটচাঁদপুর","মহেশপুর","শৈলকুপা"],
  "কুষ্টিয়া":["ভেড়ামারা","দৌলতপুর","কুমারখালী","কুষ্টিয়া সদর","খোকসা","মিরপুর"],
  "মেহেরপুর":["গাংনী","মেহেরপুর সদর","মুজিবনগর"],
  "চুয়াডাঙ্গা":["আলমডাঙ্গা","চুয়াডাঙ্গা সদর","দামুড়হুদা","জীবননগর"],
  "বরগুনা":["আমতলী","বামনা","বরগুনা সদর","বেতাগী","পাথরঘাটা","তালতলী"],
  "পটুয়াখালী":["বাউফল","দশমিনা","গলাচিপা","কলাপাড়া","মির্জাগঞ্জ","পটুয়াখালী সদর","রাঙ্গাবালী"],
  "ভোলা":["বোরহানউদ্দিন","চরফ্যাশন","দৌলতখান","লালমোহন","মনপুরা","তজুমদ্দিন","ভোলা সদর"],
  "পিরোজপুর":["ভাণ্ডারিয়া","ইন্দুরকানী","কাউখালী","মঠবাড়িয়া","নাজিরপুর","নেছারাবাদ","পিরোজপুর সদর"],
  "ঝালকাঠি":["ঝালকাঠি সদর","কাঁঠালিয়া","নলছিটি","রাজাপুর"],
  "বগুড়া":["আদমদীঘি","বগুড়া সদর","ধুনট","দুপচাঁচিয়া","গাবতলী","কাহালু","নন্দীগ্রাম","সারিয়াকান্দি","শাজাহানপুর","শেরপুর","শিবগঞ্জ","সোনাতলা"],
  "নওগাঁ":["আত্রাই","বদলগাছী","ধামইরহাট","মান্দা","মহাদেবপুর","নওগাঁ সদর","নিয়ামতপুর","পত্নীতলা","পোরশা","রাণীনগর","সাপাহার"],
  "নাটোর":["বাগাতিপাড়া","বড়াইগ্রাম","গুরুদাসপুর","লালপুর","নলডাঙ্গা","নাটোর সদর","সিংড়া"],
  "চাঁপাইনবাবগঞ্জ":["ভোলাহাট","গোমস্তাপুর","নাচোল","চাঁপাইনবাবগঞ্জ সদর","শিবগঞ্জ"],
  "পাবনা":["আটঘরিয়া","বেড়া","ভাঙ্গুড়া","চাটমোহর","ফরিদপুর","ঈশ্বরদী","পাবনা সদর","সাঁথিয়া","সুজানগর"],
  "সিরাজগঞ্জ":["বেলকুচি","চৌহালী","কামারখন্দ","কাজিপুর","রায়গঞ্জ","শাহজাদপুর","সিরাজগঞ্জ সদর","তাড়াশ","উল্লাপাড়া"],
  "জয়পুরহাট":["আক্কেলপুর","কালাই","ক্ষেতলাল","পাঁচবিবি","জয়পুরহাট সদর"],
  "গাইবান্ধা":["ফুলছড়ি","গাইবান্ধা সদর","গোবিন্দগঞ্জ","পলাশবাড়ী","সাদুল্লাপুর","সাঘাটা","সুন্দরগঞ্জ"],
  "কুড়িগ্রাম":["ভুরুঙ্গামারী","চর রাজিবপুর","চিলমারী","ফুলবাড়ী","কুড়িগ্রাম সদর","নাগেশ্বরী","রাজারহাট","রৌমারী","উলিপুর"],
  "লালমনিরহাট":["আদিতমারী","হাতীবান্ধা","কালীগঞ্জ","লালমনিরহাট সদর","পাটগ্রাম"],
  "নীলফামারী":["ডিমলা","ডোমার","জলঢাকা","কিশোরগঞ্জ","নীলফামারী সদর","সৈয়দপুর"],
  "পঞ্চগড়":["আটোয়ারী","বোদা","দেবীগঞ্জ","পঞ্চগড় সদর","তেঁতুলিয়া"],
  "ঠাকুরগাঁও":["বালিয়াডাঙ্গী","হরিপুর","পীরগঞ্জ","রানীশংকৈল","ঠাকুরগাঁও সদর"],
  "দিনাজপুর":["বিরামপুর","বিরল","বোচাগঞ্জ","চিরিরবন্দর","দিনাজপুর সদর","ঘোড়াঘাট","হাকিমপুর","কাহারোল","খানসামা","নবাবগঞ্জ","পার্বতীপুর","ফুলবাড়ী"]
};

// ── STATE ──
let profile = {
  name: 'Mayeesha Farjana',
  bio: 'মায়িশা ফারজানা। পাঠকদের কাছে তিনি \'পুষ্প\' নামে পরিচিতা তথা এ নামে ওঠা। আগের গল্প, ইভেন্ট-ম্যানেজার। নবাবগঞ্জ সরকারি বালিকা উচ্চ বিদ্যালয় থেকে পাঠ চুকিয়ে ভর্তি হন নবাবগঞ্জ সরকারি কলেজে। বর্তমানে তিনি রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়ে কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং বিভাগে অধ্যয়নরত। ছোটবেলা থেকেই বিভিন্ন সাহিত্যমূলক কর্মকাণ্ডে সজাগ থেকে অংশগ্রহণ এবং নেতৃত্ব দেওয়ার সুযোগ জুটেছিল তাঁর - বিদ্যালয়। বিতর্ক, আবৃত্তি, পাবলিক স্পিকিং, কুইজিং - সবকিছুরই সাথে রয়েছেন। অর্জন করেছেন বিভিন্ন সম্মানজনক পুরষ্কার। ২০১৮ সালে জাতীয় শিশু দিবস উপলক্ষে আয়োজিত রচনা প্রতিযোগিতায় প্রথম হয়ে তিনি সুযোগ পেয়েছিলেন মাননীয় প্রধানমন্ত্রী শেখ হাসিনার হাত থেকে পুরষ্কার গ্রহণের। এছাড়াও ২০১৯ সালে ইন্টার-ক্যাম্পাস প্রোগ্রামিং এন্ড অ্যালগরিদমিকস কম্পিটিশনে ন্যাটিভ এশিয়ান রিজিওন চ্যাম্পিয়ন হয়েছিলেন তিনি। বহুমুখী প্রতিভার অধিকারী এই মেধাবী তরুণীর জীবনের লক্ষ্য \'সুখী মানুষ হওয়া\'।',
  image: 'images/profile.jpg',
  followers: 26
};
let books = [
  {id:1, title:"দ্য সাইফার (হার্ডকভার)", author:"by শিবলী মল্লিক, মায়িশা ফারজানা (অনুবাদক)", publisher:"সায়েন্স ফিকশন", originalPrice:580, price:406, discount:30, rating:5, ratingCount:13, cover:"images/book1.jpg", inStock:true},
  {id:2, title:"মানুষ (হার্ডকভার)", author:"মায়িশা ফারজানা", publisher:"সায়েন্স ফিকশন", originalPrice:299, price:249, discount:17, rating:5, ratingCount:1, cover:"images/book2.png", inStock:true},
  {id:3, title:"হালো-সাই-ফাই-ইয়ার (হার্ডকভার)", author:"মায়িশা ফারজানা", publisher:"সায়েন্স ফিকশন", originalPrice:209, price:159, discount:24, rating:5, ratingCount:7, cover:"images/book3.png", inStock:true},
  {id:4, title:"হ্যালোউনের মুখোশ (হার্ডকভার)", author:"by শিবলী মল্লিক, মায়িশা ফারজানা (অনুবাদক)", publisher:"সায়েন্স ফিকশন", originalPrice:269, price:230, discount:14, rating:5, ratingCount:3, cover:"images/book4.png", inStock:true},
  {id:5, title:"পরম বিন্দু (হার্ডকভার)", author:"মায়িশা ফারজানা", publisher:"সায়েন্স ফিকশন", originalPrice:299, price:210, discount:30, rating:5, ratingCount:7, cover:"images/book5.png", inStock:true}
];
let orders      = JSON.parse(localStorage.getItem('sa_orders'))  || [];
let cart        = JSON.parse(localStorage.getItem('sa_cart'))    || [];
let currentBook = null;

// ── INIT ──
document.addEventListener('DOMContentLoaded', function () {
  renderProfile();
  renderBooks(books);
  updateBadge();
  populateDistricts();

  document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') searchBooks();
  });
});

// ── PROFILE ──
function renderProfile() {
  var img = document.getElementById('profImg');
  img.src = profile.image || 'https://placehold.co/105x105/1a6b9a/white?text=' + encodeURIComponent(profile.name);
  img.onerror = function() { this.onerror = null; this.src = 'https://placehold.co/105x105/1a6b9a/white?text=' + encodeURIComponent(profile.name); };
  document.getElementById('profName').textContent        = profile.name || 'লেখকের নাম';
  document.getElementById('profBio').textContent         = profile.bio  || '';
  document.getElementById('profFollowers').textContent   = profile.followers || 0;
  document.getElementById('bcName').textContent          = profile.name || '—';
  document.getElementById('booksHeading').textContent    = profile.name || 'বইসমূহ';
  document.title = (profile.name || 'লেখক') + ' - Sultani Arasta.com';
}

function follow(btn) {
  if (btn.classList.contains('followed')) return;
  profile.followers = (profile.followers || 0) + 1;
  document.getElementById('profFollowers').textContent = profile.followers;
  btn.textContent = '✓ ফলো করা হয়েছে';
  btn.classList.add('followed');
  btn.disabled = true;
}

// ── BOOKS ──
function renderBooks(list) {
  var grid = document.getElementById('booksGrid');
  document.getElementById('booksCount').textContent = '(মোট ' + list.length + 'টি বই)';

  if (!list.length) {
    grid.innerHTML = '<div class="empty-state"><i class="fas fa-book-open"></i><p>এখনো কোনো বই যোগ করা হয়নি।</p></div>';
    return;
  }

  grid.innerHTML = list.map(function (b) {
    var disc  = b.discount || 0;
    var stars = '★'.repeat(b.rating || 0) + '☆'.repeat(5 - (b.rating || 0));
    var inStock = b.inStock !== false;
    return '<div class="book-card">' +
      '<div class="book-img-wrap">' +
        '<img src="' + (b.cover || 'https://placehold.co/165x237/1a3c5e/white?text=' + encodeURIComponent(b.title)) + '" alt="' + b.title + '" onerror="this.onerror=null; this.src=\'https://placehold.co/165x237/1a3c5e/white?text=' + encodeURIComponent(b.title) + '\'">' +
        (disc > 0 ? '<div class="disc-badge">' + disc + '% OFF</div>' : '') +
      '</div>' +
      '<div class="book-body">' +
        '<div class="b-title">' + b.title + '</div>' +
        '<div class="b-author">' + (b.author || profile.name || '') + '</div>' +
        '<div class="b-pub">প্রকাশনী: ' + (b.publisher || '—') + '</div>' +
        '<div class="b-rating">' + stars + (b.ratingCount ? '<span class="rc">(' + b.ratingCount + ')</span>' : '') + '</div>' +
        '<div class="b-price"><span class="b-price-now">৳' + b.price + '</span>' +
          (b.originalPrice > b.price ? '<span class="b-price-old">৳' + b.originalPrice + '</span>' : '') +
        '</div>' +
        '<div class="' + (inStock ? 'b-stock-yes' : 'b-stock-no') + '">' + (inStock ? '✔ স্টকে আছে' : '✘ স্টকে নেই') + '</div>' +
        '<button class="add-btn" onclick="orderBook(' + b.id + ')" ' + (inStock ? '' : 'disabled') + '>🛒 অর্ডার করুন</button>' +
      '</div></div>';
  }).join('');
}

function searchBooks() {
  var q = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!q) { renderBooks(books); return; }
  renderBooks(books.filter(function (b) {
    return b.title.toLowerCase().includes(q) ||
           (b.publisher || '').toLowerCase().includes(q) ||
           (b.author || '').toLowerCase().includes(q);
  }));
}

// ── ORDER DIRECTLY ──
function orderBook(id) {
  currentBook = books.find(function (b) { return b.id == id; });
  if (!currentBook) return;
  document.getElementById('bookSummary').innerHTML =
    '<strong>📖 ' + currentBook.title + '</strong><br>' +
    'প্রকাশনী: ' + (currentBook.publisher || '—') + '<br>' +
    '<strong style="color:#c0392b;">মূল্য: ৳' + currentBook.price + '</strong>';
  document.getElementById('checkoutModal').classList.add('on');
  document.getElementById('orderForm').reset();
  document.getElementById('thanaSel').innerHTML = '<option value="">আগে জেলা বেছে নিন</option>';
}

// ── CART ──
function openCart() {
  document.getElementById('overlay').classList.add('on');
  document.getElementById('cartSidebar').classList.add('open');
  renderCart();
}
function closeCart() {
  document.getElementById('overlay').classList.remove('on');
  document.getElementById('cartSidebar').classList.remove('open');
}
function renderCart() {
  var el     = document.getElementById('csItems');
  var footer = document.getElementById('csFooter');
  if (!cart.length) {
    el.innerHTML = '<div class="cs-empty"><i class="fas fa-shopping-cart"></i><p>কার্ট খালি</p></div>';
    footer.style.display = 'none';
    return;
  }
  var total = 0;
  el.innerHTML = cart.map(function (c) {
    total += c.price;
    return '<div class="cs-item">' +
      '<img src="' + (c.cover || '') + '" onerror="this.onerror=null; this.src=\'https://placehold.co/56x76/1a3c5e/white?text=\' + encodeURIComponent(c.title)" alt="' + c.title + '">' +
      '<div class="cs-item-info"><div class="cs-item-title">' + c.title + '</div><div class="cs-item-price">৳' + c.price + '</div></div>' +
      '<button class="cs-remove" onclick="removeCart(' + c.id + ')">✕</button>' +
      '</div>';
  }).join('');
  document.getElementById('csTotal').textContent = '৳' + total;
  footer.style.display = 'block';
}
function removeCart(id) {
  cart = cart.filter(function (c) { return c.id != id; });
  localStorage.setItem('sa_cart', JSON.stringify(cart));
  updateBadge();
  renderCart();
}
function updateBadge() {
  document.getElementById('cartBadge').textContent = cart.length;
}
function openCheckout() {
  closeCart();
  if (!cart.length) return;
  currentBook = null;
  var total = cart.reduce(function (s, c) { return s + c.price; }, 0);
  document.getElementById('bookSummary').innerHTML =
    '<strong>🛒 ' + cart.length + 'টি বই</strong><br>' +
    '<strong style="color:#c0392b;">মোট মূল্য: ৳' + total + '</strong>';
  document.getElementById('checkoutModal').classList.add('on');
  document.getElementById('orderForm').reset();
  document.getElementById('thanaSel').innerHTML = '<option value="">আগে জেলা বেছে নিন</option>';
}

// ── CHECKOUT FORM ──
function populateDistricts() {
  var sel = document.getElementById('distSel');
  Object.keys(BD).sort().forEach(function (d) {
    sel.innerHTML += '<option value="' + d + '">' + d + '</option>';
  });
}
function fillThanas() {
  var d   = document.getElementById('distSel').value;
  var sel = document.getElementById('thanaSel');
  sel.innerHTML = '<option value="">-- থানা বেছে নিন --</option>';
  (BD[d] || []).forEach(function (t) {
    sel.innerHTML += '<option value="' + t + '">' + t + '</option>';
  });
}
function closeCheckout() { document.getElementById('checkoutModal').classList.remove('on'); }

function placeOrder(e) {
  e.preventDefault();
  var name    = document.getElementById('bName').value.trim();
  var phone   = document.getElementById('bPhone').value.trim();
  var address = document.getElementById('bAddress').value.trim();
  var dist    = document.getElementById('distSel').value;
  var thana   = document.getElementById('thanaSel').value;
  if (!dist || !thana) { alert('জেলা ও থানা/উপজেলা বেছে নিন!'); return; }

  var items = [], totalPrice = 0;
  if (currentBook) {
    items      = [{ bookId: currentBook.id, bookTitle: currentBook.title, price: currentBook.price }];
    totalPrice = currentBook.price;
  } else {
    items      = cart.map(function (c) { return { bookId: c.id, bookTitle: c.title, price: c.price }; });
    totalPrice = cart.reduce(function (s, c) { return s + c.price; }, 0);
    cart = [];
    localStorage.setItem('sa_cart', JSON.stringify(cart));
    updateBadge();
  }

  var order = {
    id: Date.now(),
    items: items,
    totalPrice: totalPrice,
    buyerName: name,
    phone: phone,
    address: address,
    district: dist,
    thana: thana,
    date: new Date().toLocaleDateString('bn-BD'),
    status: 'pending'
  };
  orders.push(order);
  localStorage.setItem('sa_orders', JSON.stringify(orders));
  closeCheckout();
  showSuccess(name, dist, thana, totalPrice);
}

function showSuccess(name, dist, thana, price) {
  document.getElementById('successMsg').innerHTML =
    'প্রিয় <strong>' + name + '</strong>, আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে!<br><br>' +
    '📦 ঠিকানা: <strong>' + dist + ', ' + thana + '</strong><br>' +
    '💰 মোট মূল্য: <strong>৳' + price + '</strong><br>' +
    '💳 পেমেন্ট: <strong>ক্যাশ অন ডেলিভারি</strong><br><br>' +
    '<span style="color:#27ae60;font-weight:600;">ধন্যবাদ! শীঘ্রই আপনার সাথে যোগাযোগ করা হবে। 🙏</span>';
  document.getElementById('successModal').classList.add('on');
}
function closeSuccess() { document.getElementById('successModal').classList.remove('on'); }

