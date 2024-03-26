/**
 * Adds two numbers together.
 * @param a The first number to add.
 * @param b The second number to add.
 * @returns The result of the addition of a and b.
 */
export function add(a: number, b: number): number {
	return a + b
}

/**
 * Subtracts one number from another.
 * @param a The number to subtract from.
 * @param b The number to subtract.
 * @returns The result of subtracting b from a.
 */
export function sub(a: number, b: number): number {
	// Subtracts b from a and returns the result
	return a - b
}

/**
 * Multiplies two numbers together.
 * @param a The first number to multiply.
 * @param b The second number to multiply.
 * @returns The result of the multiplication of a and b.
 */
export function mul(a: number, b: number): number {
	// Multiplies a and b and returns the result
	return a * b
}

/**
 * Divides one number by another.
 * @param a The dividend.
 * @param b The divisor.
 * @returns The result of dividing a by b, or an error if b is 0.
 * @throws {Error} If b is 0.
 */
export function div(a: number, b: number): number {
	// Divides a by b and returns the result, or throws an error if b is 0
	if (b === 0) throw new Error("Cannot divide by 0")
	return a / b
}
