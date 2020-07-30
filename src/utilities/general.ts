/**
 * Function generates and returns a random integer
 * @param {number} max - The maximum value allowed to be generated
 */
export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}
