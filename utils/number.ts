export function formatNumbers(input: number) {
  if (input > 1000) {
    return `${(input / 1000).toFixed(1)}k`
  }
  else if (input > 1000000) {
    return `${(input / 1000000).toFixed(1)}m`
  }
  else if (input > 1000000000) {
    return `${(input / 1000000000).toFixed(1)}b`
  }
  else {
    return input
  }
}