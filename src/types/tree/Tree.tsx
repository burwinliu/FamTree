import { Tree } from "src/models/Tree";
import { NodeStorageData } from "../node/Node";

export type FamilyTreeProps = {
    tree: Tree
};

export type TreeStorageData = {
    name: string,
    family: NodeStorageData[],
}