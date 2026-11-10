function multiplyValue(value: number, multiplier?: number): number {
    const actualMultiplier: number = multiplier !== undefined ? multiplier : 2;
    return value * actualMultiplier;
}



function processInput(input: string | number | boolean): string | number {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    } else if (typeof input === "number") {
        return input * 10;
    } else {
        return input ? "Active" : "Inactive";
    }
}