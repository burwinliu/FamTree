import { NodeData } from 'reaflow';

export type MemberNodeInternalData = {
    startSeries: number;
    endSeries: number;
    description: string;
    name: string;
};

export type MemberNodeData = NodeData<MemberNodeInternalData>