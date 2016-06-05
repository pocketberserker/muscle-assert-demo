const assert = require("assert");
const test = require("eater/runner").test;
import add from "../src/add";

test("add should return x + y", (done) => {
  const result = add(1, 2);
  assert.equal(result, 3);
  done();
});

test("add arguments should be type of number", (done) => {
  try {
    add("string", "string");
    throw new Error("unreachable line");
  } catch (error) {
    assert.equal(error.name, assert.AssertionError.name);
    done();
  }
});

test("deep strict equal example", (done) => {
  const expected = {
    name: "foo"
  };
  const actual = {
    name: "foo"
  };
  assert.deepStrictEqual(actual, expected);
  done();
});
