'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ff0cc86a18cbeedbfe99960734cdd5ec",
"version.json": "fc8a7bb6a1d478e4d1f2b973f9ed459e",
"index.html": "31aedfffcc8fa669e61b56f76852e7c1",
"/": "31aedfffcc8fa669e61b56f76852e7c1",
"main.dart.js": "b3b1b1f7dc693f95ae46f263c8034ad1",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "3944eaa5682cef6e1fc29538cdb5bcc8",
"icons/Icon-192.png": "6b33e12e943cfd97aeea685125e87cae",
"icons/Icon-maskable-192.png": "6b33e12e943cfd97aeea685125e87cae",
"icons/Icon-maskable-512.png": "a3ca82c9ac2e390670c6c2c6e06927c6",
"icons/logo_blue.png": "3944eaa5682cef6e1fc29538cdb5bcc8",
"icons/Icon-512.png": "a3ca82c9ac2e390670c6c2c6e06927c6",
"manifest.json": "26208e876feb3ac33390c6108ccbc9c8",
"assets/NOTICES": "d0bb073bb4cf1ec61de659a3b1f7d1ae",
"assets/FontManifest.json": "60884f3726c3ddb992cd5f498fc75bca",
"assets/AssetManifest.bin.json": "7dd84159fd0830fe731bfab58191b0b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/timezone/data/latest_all.tzf": "df0e82dd729bbaca78b2aa3fd4efd50d",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "1abe3c06bee8dd15f5efcc027fdb1075",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "00f63634abc6bb4e0a8ad6fc1fccf332",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "e82985bd5e1f0f0e46e8356938026b75",
"assets/fonts/MaterialIcons-Regular.otf": "e51a05f0b9a3244942cf0b802b0cda5a",
"assets/assets/images/wrong.png": "6dc3b8430888ca89e6e8add98946b9b8",
"assets/assets/images/gift_icon.png": "9acb5b56ba0ad58fbf0df0096d53c24f",
"assets/assets/images/plus.png": "2b28d1faa6ae9e1c3c9c5b5114b5241e",
"assets/assets/images/goal.png": "c62ddeafc3a1bf0512661056a9ca25ad",
"assets/assets/images/selected_home.png": "02d7b2448008fb1d82abc9663dd29558",
"assets/assets/images/edit_icon.png": "5cebdd9f6cdf7de626de8aadf6b54e1d",
"assets/assets/images/three-dots-circle.png": "ae156c7ead0d101d8f7ba811ddeea26d",
"assets/assets/images/map.png": "f2d13475bd172c0df03d59595197f037",
"assets/assets/images/selected_plus.png": "eae8ccf8e55d3e480fc8254b183404b0",
"assets/assets/images/logout.png": "c3df8d548790d852ef5c585bc9cecf36",
"assets/assets/images/home.png": "35eb4ad580140f15ad0c11e02e86e7df",
"assets/assets/images/notfication.png": "37b29ad72bc28ae8ea88d27c6226fe38",
"assets/assets/images/gold_loan_ad.png": "8ffae5afdab626ea053eff73e8597e01",
"assets/assets/images/selected_calendar.png": "c3292ecb814e55af60bdb806348f3fb4",
"assets/assets/images/muthoot_ad.jpg": "ff4f59a8914cb2f09b73ba08025401a6",
"assets/assets/images/calendar-bottom.png": "08efeabff0fa59e964539456171642e2",
"assets/assets/images/background.png": "a95af4e88179c3a33a64037144c9c0f2",
"assets/assets/images/muthoot_logo.png": "3b37baacfd44f408ddcb9ffd83b647fa",
"assets/assets/images/trending-up.png": "6ecbd5a98b2d8cb14c60dc4acfd1e900",
"assets/assets/images/logo.png": "3b37baacfd44f408ddcb9ffd83b647fa",
"assets/assets/images/profile-circle.png": "648844206160f68c1b7f661e1c04e298",
"assets/assets/images/logo_white.png": "b15490a0b44466d2b335f79b814172c5",
"assets/assets/images/selected_map.png": "19adacc29d82e8820884ccbf22f56688",
"assets/assets/images/calendar.png": "08efeabff0fa59e964539456171642e2",
"assets/assets/images/dropdown.png": "fa5c607c3786d7cc69568b9774fa0d06",
"assets/assets/images/right_symbol.png": "7484c5fa1f4252b9da47059fa5f2589d",
"assets/assets/images/eye.png": "2623955723005e8b28a859efd413f719",
"assets/assets/images/metrics.png": "96aca1340fa381f4f8c4606ba87e9663",
"assets/assets/images/phone.png": "9444c870caee8a6d6f46f4bb72e38961",
"assets/assets/images/danger.png": "a68f99f38dce6dc3a93ecea6f565a0e3",
"assets/assets/images/whatsapp.png": "a5b70f8b7b40e1231096cdd8e1b3d818",
"assets/assets/images/phone-call.png": "a5b70f8b7b40e1231096cdd8e1b3d818",
"assets/assets/images/notify_new.png": "2bbae4cbd3b2aa46f4553d292d85d258",
"assets/assets/images/notify_white.png": "ba77530d4fc40508bf98ceb008a2990e",
"assets/assets/images/notify_new-highlight.png": "c76961213ec6ea3c4e4464bcadd7bf4f",
"assets/assets/json/customer_document.json": "dbd44a779ede7ac43729ea8ea8253d93",
"assets/assets/icon/check.png": "7c6b3ddf0347d7211c24d9baf9a01f96",
"assets/assets/icon/address.png": "1e07e809fb0e1dc4af561d095d7e2348",
"assets/assets/icon/timer.png": "4bb8bac33096fa75311809c48a90225a",
"assets/assets/icon/calendar.png": "696e7bd653b1c63eef2efb39816d2957",
"assets/assets/icon/eye.png": "c6d80dc59a3dc29791949837423866e9",
"assets/assets/icon/whatsapp.png": "71897626dc99d2a0395a6eeead8162b9",
"assets/assets/icon/refresh.png": "fd24b401851aa15065e75453dfd6a4f9",
"assets/assets/icon/close.png": "38a88308b478adfd3621052106ba8d96",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/fonts/Helvetica-Regular.ttf": "2f1ce6eb4f4f735776cf117e0aa8662b",
"assets/assets/fonts/Roboto-Italic.ttf": "1fc3ee9d387437d060344e57a179e3dc",
"assets/assets/fonts/Roboto-Bold.ttf": "8c9110ec6a1737b15a5611dc810b0f92",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
