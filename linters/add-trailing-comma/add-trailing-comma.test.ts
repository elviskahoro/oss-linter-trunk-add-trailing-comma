import { TrunkLinter, linterTestCase } from "tests/utils";

const linter = new TrunkLinter("add-trailing-comma");

linter.runLinter(
  [
    linterTestCase({
      linterName: "add-trailing-comma",
      testName: "basic",
      expectation: "no issues",
    }),
  ],
  {
    env: {
      TRUNK_LINTER_IGNORE_CONFIGS: "true",
    },
  },
);
