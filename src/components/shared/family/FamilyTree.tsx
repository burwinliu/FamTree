import React, { MutableRefObject, useRef, useState } from "react";
import { Canvas, CanvasPosition, CanvasRef } from 'reaflow';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

import MemberNode from "components/features/tree/MemberNode"
import { FamilyTreeProps } from 'types/tree/Tree';
import { Tree } from 'models/Tree';
import { debounce } from "lodash";
import { useEffect } from "react";

export default function FamilyTree(props: FamilyTreeProps) {
    const canvasRef = useRef<CanvasRef>(null);
    const tree: MutableRefObject<Tree> = useRef(props.tree);
    const [height, setHeight] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);
    const familyWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (familyWrapperRef && familyWrapperRef.current) {
            setWidth(familyWrapperRef.current!.clientWidth-5);
            setHeight(familyWrapperRef.current!.clientHeight-5);
        }
    }, [familyWrapperRef.current?.clientWidth, familyWrapperRef.current?.clientHeight]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         canvasRef?.current?.fitCanvas?.();
    //         console.log("FITTED");
    //     }, 100);
    // }, [canvasRef]);

    return (
        <div ref={familyWrapperRef} style={{ height: "100%", width: "100%", maxHeight: "100%", maxWidth: "100%" }}>
            <TransformWrapper wheel={{ step: 40 }} minScale={0.5} maxScale={4} initialScale={1} limitToBounds={false}>
                <TransformComponent>
                    <Canvas
                        ref={canvasRef}
                        zoomable={false}
                        fit={true}
                        animated={false}
                        readonly={true}
                        nodes={tree.current.nodeData}
                        edges={tree.current.edgeData}
                        node={MemberNode}
                        defaultPosition={CanvasPosition.CENTER}
                        maxHeight={height}
                        maxWidth={width}
                    />
                </TransformComponent>
            </TransformWrapper>
        </div>

    );
}