import { NodeProps } from 'reaflow';
import BasicNodeData from './BasicNodeData';
import BasicNodePartialData from './BasicNodePartialData';

export type PatchCurrentNode<NodeData extends Partial<BasicNodeData> = Partial<BasicNodeData>> = (patch: BasicNodePartialData, stateUpdateDelay?: number) => void;

/**
 * Props received by any *Node component (InformationNode, etc.).
 */
export type BaseNodeProps<NodeData extends BasicNodeData = BasicNodeData> = {
    /**
     * Current node.
     */
    node: NodeData;
} & Partial<NodeProps>;

export default BaseNodeProps;