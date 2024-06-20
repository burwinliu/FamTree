import React, { MutableRefObject, useRef } from "react";
import { Canvas } from 'reaflow';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

import MemberNode from "components/features/tree/MemberNode"
import { FamilyTreeProps } from 'types/tree/Tree';
import { Tree } from 'models/Tree';

export default function FamilyTree(props: FamilyTreeProps) {
    const tree: MutableRefObject<Tree> = useRef(props.tree);

    return (
        <TransformWrapper wheel={{ step: 40 }} maxScale={4} limitToBounds={false}>
            <TransformComponent>
                <Canvas
                    fit={true}
                    readonly={true}
                    nodes={tree.current.nodeData}
                    edges={tree.current.edgeData}
                    node={MemberNode}
                />
            </TransformComponent>
        </TransformWrapper>
    );
}