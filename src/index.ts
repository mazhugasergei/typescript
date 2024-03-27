/**
 * Adds two numbers together.
 * @param a The first number to add.
 * @param b The second number to add.
 * @returns The result of the addition of a and b.
 */
export const add = (a: number, b: number): number => a + b

/**
 * Subtracts one number from another.
 * @param a The number to subtract from.
 * @param b The number to subtract.
 * @returns The result of subtracting b from a.
 */
export const sub = (a: number, b: number): number => a - b

/**
 * Multiplies two numbers together.
 * @param a The first number to multiply.
 * @param b The second number to multiply.
 * @returns The result of the multiplication of a and b.
 */
export const mul = (a: number, b: number): number => a * b

/**
 * Divides one number by another.
 * @param a The dividend.
 * @param b The divisor.
 * @returns The result of dividing a by b, or an error if b is 0.
 * @throws {Error} If b is 0.
 */
export const div = (a: number, b: number): number => {
	if (b === 0) throw new Error("Division by zero is not allowed")
	return a / b
}
