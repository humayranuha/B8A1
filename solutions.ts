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



interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    return courses.filter(
        (course: Course): boolean =>
            course.isPublished && course.students >= minStudents
    );
}



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    const values: T[K][] = [];
    for (const item of items) {
        values.push(item[key]);
    }
    return values;
}


