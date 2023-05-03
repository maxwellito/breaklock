/**
 * Wrapper to trigger the ShareAPI
 *
 * @param title Share title
 * @param url Share URL
 * @param svgContent SVG content to share as string
 */
export default function share(title, url, file) {
  const basicShare = {
    url,
    title,
  };
  const fullShare = {
    ...basicShare,
    files: [file],
  };
  if (!navigator.canShare) {
    window.alert(`The sharing feature isn't available in your browser`);
  } else if (navigator.canShare(fullShare)) {
    navigator.share(fullShare);
  } else if (navigator.canShare(basicShare)) {
    navigator.share(basicShare);
  } else {
    window.alert(`The sharing feature isn't available in your browser`);
  }
}