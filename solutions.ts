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



function formatCoordinate(
    coordinate: readonly [number, number, string]
): string {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    for (const arr of arrays) {
        for (const item of arr) {
            result.push(item);
        }
    }
    return result;
}