import { expect } from "chai";

describe("Test basic schema validation for identifier string type", () => {
  it("shall accept snake case names", () => {
    //TODO
  });
  it("shall accept camel case names", () => {
    //TODO
  });
  it("shall accept names that include dollar signs", () => {
    //TODO
  });
  it("shall accept names start with a letter or an underscore or a dollar sign", () => {
    //TODO
  });
  it("shall reject names with white space", () => {
    //TODO
  });
  it("shall reject names with punctuation other than $ and _", () => {
    //TODO
  });
  it("shall reject names that are JS/TS reserved words", () => {
    //TODO
  });
  it("shall reject names that start with a digit", () => {
    //TODO
  });
})
