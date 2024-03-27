export function add(a: number, b: number): number {
	return a + b
}

export function sub(a: number, b: number): number {
	return a - b
}

export function mul(a: number, b: number): number {
	return a * b
}

export function div(a: number, b: number): number {
	if (b === 0) throw new Error("Division by zero is not allowed")
	return a / b
}
