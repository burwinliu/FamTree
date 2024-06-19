import { NodeData } from 'reaflow';

export type MemberNodeInternalData = {
    startSeries: number;
    endSeries: number;
    description: string;
    name: string;
};

export type MemberNodeData = NodeData<MemberNodeInternalData>

export type NodeStorageData = {
    id: number,
    name: string,
    start_series: number,
    end_series: number,
    description: string,
    little_ids: number[],
    pseudo_ids: number[],
}