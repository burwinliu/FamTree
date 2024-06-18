import index from "public/data/index.json"
import { EdgeData } from "reaflow";
import { MemberNodeData } from "src/types/node/Node";
import { TreeStorageData } from "src/types/tree/Tree";

export class Tree {
    private familyData?: TreeStorageData;
    private baseNodeData?: MemberNodeData[];
    private baseEdgeData?: EdgeData[];

    readonly nodeData?: MemberNodeData[];
    readonly edgeData?: EdgeData[];

    constructor(familyName: string) {
        if (!this.validateFamilyName(familyName)) {
            return;
        }
        this.familyData = require("public/data/" + familyName + ".json");
        this.renderFamilyTree();
    }

    private validateFamilyName(familyName: string): boolean {
        return index.validFamilies.includes(familyName);
    }

    /**
     * Process a given {@link TreeStorageData} typed JSON and convert the data into {@link MemberNodeData[]} and {@link EdgeData[]}
     */
    private renderFamilyTree(): void {

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
    readonly edgeData: EdgeData[] = [
        {
            id: '1-2',
            from: '1',
            to: '2'
        }
    ]

    constructor() {
        super("");
    }
}