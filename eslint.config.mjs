import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
// import { rules } from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  {rules:{
'no-unused-vars':'warn',
'quotes':['warn','single']
  }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];