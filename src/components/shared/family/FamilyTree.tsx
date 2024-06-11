import { Canvas, EdgeData, NodeData } from 'reaflow';
import TreeNode from "src/components/features/tree/TreeNode"
import React from "react";

export default function PlotFigure() {
    const nodeData: NodeData[] = [
        {
            id: '1',
            text: '1'
        },
        {
            id: '2',
            text: '2'
        }
    ];
    const edgeData: EdgeData[] = [
        {
            id: '1-2',
            from: '1',
            to: '2'
        }
    ]
    return (
        <Canvas
            maxWidth={800}
            maxHeight={600}
            nodes={nodeData}
            edges={edgeData}
            node={TreeNode}
        />
    );
}