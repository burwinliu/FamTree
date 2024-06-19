import { Tree } from "models/Tree";
import { NodeStorageData } from "../node/Node";

export type FamilyTreeProps = {
    tree: Tree
};

export type TreeStorageData = {
    name: string,
    family: NodeStorageData[],
}