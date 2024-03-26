import assert from "assert"
import { describe, it } from "node:test"
import { add, div, mul, sub } from "./meth"

describe("addition", () => {
	it("success", () => {
		assert.strictEqual(add(1, 1), 2)
	})
})

describe("subtraction", () => {
	it("success", () => {
		assert.strictEqual(sub(1, 1), 0)
	})
})

describe("multiplication", () => {
	it("success", () => {
		assert.strictEqual(mul(1, 1), 1)
	})
})

describe("division", () => {
	it("success", () => {
		assert.strictEqual(div(1, 1), 1)
	})
	it("error", () => {
		assert.throws(() => div(1, 0))
	})
})
