let history = null;

/**
 * store router history
 * @param routerHistory
 */
export function setHistory(routerHistory):void {
  history = routerHistory;
}

/**
 * get history
 */
export function getHistory(): void {
  return history;
}

/**
 * navigation to...
 * @param href
 */
export function navTo(href: string): void {
  if (!history) return;

  history.push(href);
}
