import index from "data/index.json"
import { EdgeData } from "reaflow";
import { EdgeInternalData, EdgeType } from "types/edge/Edge";
import { MemberNodeData, NodeStorageData } from "types/node/Node";
import { TreeStorageData } from "types/tree/Tree";

export class Tree {
    private familyData?: TreeStorageData;
    private baseNodeData?: MemberNodeData[];
    private baseEdgeData?: EdgeData<EdgeInternalData>[];

    readonly nodeData?: MemberNodeData[];
    readonly edgeData?: EdgeData<EdgeInternalData>[];
    readonly name?: string;

    constructor(familyName: string) {
        if (!this.validateFamilyName(familyName)) {
            return;
        }
        this.familyData = require("data/" + familyName + ".json");

        // Process {@link TreeStorageData} typed JSON and convert the data into {@link MemberNodeData[]} and {@link EdgeData[]}
        if(this.familyData === undefined) throw new Error(familyName + " is an invalid family name");
        this.name = this.familyData.name;
        this.baseEdgeData = [];
        this.baseNodeData = [];
        this.familyData.family.forEach((node: NodeStorageData) => {
            this.baseNodeData?.push(
                {
                    id: node.id.toString(),
                    height: 125,
                    width: 250,
                    data: {
                        name: node.name,
                        description: node.description,
                        startSeries: node.start_series,
                        endSeries: node.end_series,
                    }
                }
            );
            if (node.little_ids) {
                node.little_ids.forEach((id: number) => {
                    this.baseEdgeData?.push(this.constructEdgeData(node.id, id, EdgeType.CHIILD));
                });
            }
            if (node.pseudo_ids) {
                node.pseudo_ids.forEach((id: number) => {
                    this.baseEdgeData?.push(this.constructEdgeData(node.id, id, EdgeType.PSEUDO));
                });
            }
        });

        this.nodeData = this.baseNodeData;
        this.edgeData = this.baseEdgeData;

        console.log(this.edgeData, this.nodeData);
    }

    private validateFamilyName(familyName: string): boolean {
        return index.validFamilies.includes(familyName);
    }

    private constructEdgeData(parentId: number, childId: number, relationType: EdgeType): EdgeData{
        return {
            id: `${parentId}-${childId}-${relationType}`,
            from: parentId.toString(),
            to: childId.toString(),
            data: {
                edge_type: relationType
            }
        }

    }
}

export class FakeTree extends Tree {
    readonly nodeData: MemberNodeData[] = [
        {
            id: '1',
            height: 125,
            width: 250,
            data: {
                name: 'test 1',
                description: 'test values that are somewhat longer and may require some wrapping',
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
    readonly edgeData: EdgeData<EdgeInternalData>[] = [
        {
            id: '1-2',
            from: '1',
            to: '2',
            data: {
                edge_type: EdgeType.CHIILD
            }
        },
        {
            id: '2-1',
            from: '2',
            to: '1',
            data: {
                edge_type: EdgeType.PSEUDO
            }
        }
    ]

    constructor() {
        super("");
    }
}