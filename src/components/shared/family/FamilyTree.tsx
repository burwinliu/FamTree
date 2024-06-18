import { Canvas } from 'reaflow';
import MemberNode from "src/components/features/tree/MemberNode"
import React from "react";
import { FamilyTreeProps } from 'src/types/tree/Tree';
import { Tree } from 'src/models/Tree';

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