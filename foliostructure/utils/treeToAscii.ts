import { TreeNode } from "../data/templates";

export function treeToAscii(nodes: TreeNode[], prefix: string = ""): string {
  let result = "";
  nodes.forEach((node, index) => {
    const isLast = index === nodes.length - 1;
    const connector = isLast ? "└── " : "├── ";
    
    const nodeName = node.type === "folder" ? `${node.name}/` : node.name;
    result += `${prefix}${connector}${nodeName}\n`;
    
    if (node.type === "folder" && node.children) {
      const childPrefix = prefix + (isLast ? "    " : "│   ");
      result += treeToAscii(node.children, childPrefix);
    }
  });
  return result;
}

export function generateFullAsciiTree(rootName: string, nodes: TreeNode[]): string {
  let result = `${rootName}/\n`;
  result += treeToAscii(nodes, "");
  return result.trimEnd(); // remove trailing newline
}

export function treeToIndent(nodes: TreeNode[], indent: number = 0): string {
  let result = "";
  const spaces = " ".repeat(indent * 4);
  nodes.forEach((node) => {
    const nodeName = node.type === "folder" ? `${node.name}/` : node.name;
    result += `${spaces}${nodeName}\n`;
    if (node.type === "folder" && node.children) {
      result += treeToIndent(node.children, indent + 1);
    }
  });
  return result;
}

export function generateFullIndentTree(rootName: string, nodes: TreeNode[]): string {
  let result = `${rootName}/\n`;
  result += treeToIndent(nodes, 1);
  return result.trimEnd();
}
