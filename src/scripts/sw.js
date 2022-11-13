import CacheHelper from './utils/cache-helper';
import 'regenerator-runtime';

const {
  assets,
} = global.serviceWorkerOption;

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing Service Worker ...');
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating Service Worker ....');
  event.waitUntil(CacheHelper.deleteOldCache());
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
