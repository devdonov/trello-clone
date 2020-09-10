export const moveItem = <T>(items: T[], from: number, to: number) => {
  const startIndex = to < 0 ? items.length + to : to;
  const item = items.splice(from, 1)[0];
  items.splice(startIndex, 0, item);

  return items;
}
