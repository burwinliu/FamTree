import { Canvas, EdgeData, NodeData } from 'reaflow';
import MemberNode from "src/components/features/tree/MemberNode"
import React from "react";
import { MemberNodeData } from 'src/types/node/MemberNode';

export default function PlotFigure() {
    const nodeData: MemberNodeData[] = [
        {
            id: '1',
            height: 125,
            width: 250,
            data: {
                name: 'test 1',
                description: 'test values',
                startSeries: 50,
                endSeries: 51
            }
        },
        {
            id: '2',
            height: 125,
            width: 250,
            data: {
                name: 'test 2',
                description: 'test values',
                startSeries: 51,
                endSeries: 52
            }

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
            node={MemberNode}
        />
    );
}