import { NodeData } from 'reaflow';
import BasicNodeAdditionalData from './BasicNodeAdditionalData';

/**
 * Partial shape of any node.
 *
 * Used when expecting only part of a node's properties. (e.g: patch)
 */
export type BasicNodePartialData<AdditionalData extends Partial<BasicNodeAdditionalData> = Partial<BasicNodeAdditionalData>> = Partial<NodeData<AdditionalData>>;

export default BasicNodePartialData;