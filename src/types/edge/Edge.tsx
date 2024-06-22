export enum EdgeType {
    CHIILD,
    PSEUDO
}

export type EdgeInternalData = {
    edge_type: EdgeType,
    year?: number,
    series?: number,
};