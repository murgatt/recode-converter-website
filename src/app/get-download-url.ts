import { GITHUB_API_URL, LATEST_RELEASE_URL } from './constants';

function getPlatformExtension(userAgent: string) {
  if (/(mac|os x)/.exec(userAgent)) {
    return 'dmg';
  }
  if (/windows/.exec(userAgent)) {
    return 'exe';
  }
  if (/linux/.exec(userAgent)) {
    return 'AppImage';
  }

  return '';
}

export async function getDownloadUrl(userAgent: string | null) {
  const response = await fetch(GITHUB_API_URL);
  if (!response.ok || !userAgent) {
    return LATEST_RELEASE_URL;
  }
  const { assets } = (await response.json()) as { assets: { browser_download_url: string; name: string }[] };
  const platformExtension = getPlatformExtension(userAgent.toLowerCase());
  const assetList = assets.filter(asset => asset.name.split('.').at(-1) === platformExtension);

  switch (assetList.length) {
    case 0:
      return LATEST_RELEASE_URL;
    case 1:
      return assetList[0].browser_download_url;
    default:
      return assetList.map(asset => asset.browser_download_url);
  }
}
