import { TreeNode } from "../data/templates";

export type TreeStats = {
  files: number;
  folders: number;
  depth: number;
};

export function calculateTreeStats(tree: TreeNode[]): TreeStats {
  let files = 0;
  let folders = 0;
  let maxDepth = 0;

  function traverse(nodes: TreeNode[], currentDepth: number) {
    if (nodes.length > 0 && currentDepth > maxDepth) {
      maxDepth = currentDepth;
    }
    for (const node of nodes) {
      if (node.type === "file") {
        files++;
      } else if (node.type === "folder") {
        folders++;
        if (node.children) {
          traverse(node.children, currentDepth + 1);
        }
      }
    }
  }

  traverse(tree, 1);

  return { files, folders, depth: maxDepth };
}
