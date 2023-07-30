// const path = require("path");
import path from "path";
// const { loadFilesSync } = require("@graphql-tools/load-files");
import { loadFilesSync } from "@graphql-tools/load-files";
// const { mergeTypeDefs } = require("@graphql-tools/merge");
import { mergeTypeDefs } from "@graphql-tools/merge";

const typesArray = loadFilesSync(path.join(__dirname), {
  extensions: ["graphql"],
});

export default mergeTypeDefs(typesArray);
