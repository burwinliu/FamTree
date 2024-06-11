import { NodeData } from 'reaflow';
import BasicNodeAdditionalData from './BasicNodeAdditionalData';

/**
 * Shape of any node.
 *
 * Extends the Reaflow.NodeData and add additional data to its "data" property.
 */
export type BaseNodeData<AdditionalData extends BasicNodeAdditionalData = BasicNodeAdditionalData> = NodeData<AdditionalData>;

export default BaseNodeData;