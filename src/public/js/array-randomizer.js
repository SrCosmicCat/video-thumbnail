export function randomizeArray(array) {
    return array.sort(() => Math.random() - 0.5);
}