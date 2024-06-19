import React from "react";
import { Node, NodeChildProps } from 'reaflow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { MemberNodeInternalData } from "types/node/Node";

export default function MemberNode() {
    const getContent = (data: MemberNodeInternalData) =>
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Series {data.startSeries} - {data.endSeries}
                </Typography>
                <Typography variant="body2">
                    {data.description}
                </Typography>
            </CardContent>
        </React.Fragment>

    return (
        <Node>
            {(event: NodeChildProps) => <foreignObject height={event.height} width={event.width} x={0} y={0}>
                <Card sx={{ minWidth: event.width, minHeight: event.height }}>
                    {getContent(event.node.data)}
                </Card>
            </foreignObject>}
        </Node>
    );
}