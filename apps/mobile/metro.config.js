const path = require("path");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

const config = {
  projectRoot,
  watchFolders: [workspaceRoot],
  resolver: {
    // Resolve hoisted packages from the workspace root AND the app
    nodeModulesPaths: [
      path.resolve(workspaceRoot, "node_modules"),
      path.resolve(projectRoot, "node_modules")
    ],
    // Let RN resolve TS from the shared package
    sourceExts: ["ts", "tsx", "js", "jsx", "json"]
  }
};

module.exports = mergeConfig(getDefaultConfig(projectRoot), config);