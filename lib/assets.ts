// Utility to handle asset paths for GitHub Pages deployment
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/malaury-boudon-portfolio' : '';
  return `${basePath}${path}`;
}