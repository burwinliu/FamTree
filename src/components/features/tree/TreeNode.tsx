import React from "react";
import { Node, Port, Label } from 'reaflow';

export default function TreeNode() {
    return (
        <Node
            style={{ stroke: '#1a192b', fill: 'white', strokeWidth: 1 }}
            label={<Label style={{ fill: 'black' }} />}
            port={<Port style={{ fill: 'blue', stroke: 'white' }} rx={10} ry={10} />}
            draggable={false}
            linkable={false}
        >
            <g>
                TESTING CONTENTS
            </g>
        </Node>
    );
}