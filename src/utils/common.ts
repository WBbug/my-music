export const formatNumber = (number: number): string | number => {
    return number > 100000 ? `${Math.round(number / 10000)}万` : number
}