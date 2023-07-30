// const path = require("path");
import path from "path";
// const { mergeResolvers } = require("@graphql-tools/merge");
import { mergeResolvers } from "@graphql-tools/merge";
// const { loadFilesSync } = require("@graphql-tools/load-files");
import { loadFilesSync } from "@graphql-tools/load-files";

const resolversArray = loadFilesSync(path.join(__dirname), {
  extensions: ["js"],
  extractExports(fileExport) {
    if (typeof fileExport === "function") {
      return fileExport("query_root");
    }
    return fileExport;
  },
});

module.exports = mergeResolvers(resolversArray);
