import { GITHUB_API_URL, LATEST_RELEASE_URL } from './constants';

function getPlatformExtension(userAgent: string) {
  if (userAgent.match(/(mac|os x)/)) {
    return 'dmg';
  }
  if (userAgent.match(/windows/)) {
    return 'exe';
  }
  if (userAgent.match(/linux/)) {
    return 'AppImage';
  }

  return '';
}

export async function getDownloadUrl(userAgent: string | null) {
  const response = await fetch(GITHUB_API_URL);
  if (!response.ok || !userAgent) {
    return LATEST_RELEASE_URL;
  }
  const { assets }: { assets: Array<{ browser_download_url: string; name: string }> } = await response.json();
  const platformExtension = getPlatformExtension(userAgent.toLowerCase());
  const { browser_download_url } = assets.find(asset => asset.name.split('.').at(-1) === platformExtension) || {};

  return browser_download_url || LATEST_RELEASE_URL;
}
