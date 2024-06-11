import BasicPortData from './BasicPortData';

/**
 * Default node properties shared by all nodes, no matter what type they are.
 *
 * Can use the same properties as "BaseNodeData".
 */
export type BasicNodeDefaultProps = {
    baseWidth: number;
    baseHeight: number;
    ports: BasicPortData[];
}

/**
 * Arguments of the GetBaseNodeDefaultProps function.
 */
export type GetBasicNodeDefaultPropsProps = {
    baseWidth?: number;
    baseHeight?: number;
}

/**
 * Signature of the getDefaultNodeProps function.
 */
export type GetBaseNodeDefaultProps = (props: GetBasicNodeDefaultPropsProps) => BasicNodeDefaultProps;