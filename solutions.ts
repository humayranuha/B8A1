function multiplyValue(value: number, multiplier?: number): number {
    const actualMultiplier: number = multiplier !== undefined ? multiplier : 2;
    return value * actualMultiplier;
}