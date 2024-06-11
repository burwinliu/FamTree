import { FunctionComponent } from 'react';
import BaseNodeProps from './BasicNodeProps';
import BasicPortData from './BasicPortData';
import { GetBasicNodeDefaultPropsProps } from './BasicNodeDefaultProps';

/**
 * React Block functional component.
 *
 * Used by all node components (BaseNode).
 */
export type BaseNodeComponent<Props extends BaseNodeProps = BaseNodeProps> = FunctionComponent<Props> & {
  /**
   * Function returning the default props of the node.
   *
   * Each node type might implement its own "getDefaultNodeProps".
   * Used when creating a new node.
   */
  getDefaultNodeProps?: GetBasicNodeDefaultPropsProps;

  /**
   * Function returning the default ports of the node.
   *
   * Invoked by getDefaultNodeProps.
   */
  getDefaultPorts?: () => BasicPortData[];
}

export default BaseNodeComponent;