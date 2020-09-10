interface Item {
  id: String
}

export const findItemIndexById = <T extends Item>(items: T[], id: String): number => {
  return items.findIndex(i => i.id === id)
}