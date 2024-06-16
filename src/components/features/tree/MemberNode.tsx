import React from "react";
import { Node, NodeChildProps } from 'reaflow';

export default function MemberNode() {
    return (
        <Node>
            {(event: NodeChildProps) => <foreignObject height={event.height} width={event.width} x={0} y={0}>
                <div style={{
                    padding: 10,
                }}>
                    <h3 style={{
                        color: 'white'
                    }}>Start Series: {event.node.data.startSeries}</h3>
                    <h3 style={{
                        color: 'white'
                    }}>End Series: {event.node.data.endSeries}</h3>
                </div>
            </foreignObject>}
        </Node>
    );
}