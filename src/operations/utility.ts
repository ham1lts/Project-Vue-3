export function verifyCommomItems(firstList: unknown[], secondList: unknown[]) {
    return firstList.every((firstListItem) => secondList.includes(firstListItem));
}