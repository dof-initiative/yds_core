import { expect } from "chai";
import path from "path";
import { runLinkMLValidate, LinkMLValidateResults } from "../dist" // from "../src/validate";

const success_message = "No issues found"

describe("Test basic schema validation for identifier string type", () => {
  it("shall accept snake case names", () => {
    const specCasePath = "test/spec/1.1_types/1.1.1_identifier_string/"
    const schemaPath = path.join(specCasePath, "schema.yaml")
    const dataPath = path.join(specCasePath, "snakecase_names.yaml")
    const results = runLinkMLValidate(schemaPath, dataPath)
    expect(results.exitCode).to.equal(0)
    expect(results.stdout[0]).to.equal(success_message)
  });
  it("shall accept camel case names", () => {
    // set specCasePath to test/spec/1.1_types/1.1.1_identifier_string/camelCaseNames
    // run linkml-validate against schema for specCasePath
    // expect exit code to be 0
    // expect stdout to be "No issues found"
  });
  it("shall accept names that include dollar signs", () => {
    // set specCasePath to test/spec/1.1_types/1.1.1_identifier_string/dollar_sign_names.yaml
    // run linkml-validate against schema for specCasePath
    // expect exit code to be 0
    // expect stdout to be "No issues found"
  });
  it("shall accept names that start with a letter or an underscore or a dollar sign", () => {
    // set specCasePath to test/spec/1.1_types/1.1.1_identifier_string/_starting_character_names.yaml
    // run linkml-validate against schema for specCasePath
    // expect exit code to be 0
    // expect stdout to be "No issues found"
  });
  it("shall reject names with white space", () => {
    // set specCasePath to test/spec/1.1_types/1.1.1_identifier_string/white_space_names.yaml
    // run linkml-validate against schema for specCasePath
    // expect exit code to not be 0
    // expect each line of stdout to contain "is not of type 'YdsIdString'"
  });
  it("shall reject names with punctuation other than $ and _", () => {
    // set specCasePath to test/spec/1.1_types/1.1.1_identifier_string/punctuation_names.yaml
    // run linkml-validate against schema for specCasePath
    // expect exit code to not be 0
    // expect each line of stdout to contain "is not of type 'YdsIdString'"
  });
  it("shall reject names that are JS/TS reserved words", () => {
    // set specCasePath to test/spec/1.1_types/1.1.1_identifier_string/js_ts_reserved_keywords.yaml
    // run linkml-validate against schema for specCasePath
    // expect exit code to not be 0
    // expect each line of stdout to contain "is not of type 'YdsIdString'"
  });
  it("shall reject names that start with a digit", () => {
    // set specCasePath to test/spec/1.1_types/1.1.1_identifier_string/starts_with_a_digit.yaml
    // run linkml-validate against schema for specCasePath
    // expect exit code to not be 0
    // expect each line of stdout to contain "is not of type 'YdsIdString'"
  });
})
