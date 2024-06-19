import { Canvas } from 'reaflow';
import MemberNode from "components/features/tree/MemberNode"
import React from "react";
import { FamilyTreeProps } from 'types/tree/Tree';
import { Tree } from 'models/Tree';

export default function FamilyTree(props: FamilyTreeProps) {
    const tree: Tree = props.tree;

    return (
        <Canvas
            maxWidth={800}
            maxHeight={600}
            nodes={tree.nodeData}
            edges={tree.edgeData}
            node={MemberNode}
        />
    );
}