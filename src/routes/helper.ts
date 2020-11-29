let history = null;

/**
 * store router history
 * @param routerHistory
 */
export function setHistory(routerHistory):void {
  history = routerHistory;
}

/**
 * navigation to...
 * @param href
 */
export function navTo(href: string): void {
  if (!history) return;

  history.push(href);
}
