/**
 * @jest-environment jsdom
 * 
 * FamilyTree.test.js
 */

import React from "react";
import { render, screen } from '@testing-library/react';
import FamilyTree from "./FamilyTree";
import { FakeTree } from "src/models/Tree";
import { MemberNodeData } from "src/types/node/Node";


it("renders tree with expected nodes + edge connections", () => {
    const fakeTree: FakeTree = new FakeTree();
    render(<FamilyTree tree={fakeTree}/>);
    fakeTree.nodeData.forEach(
        (node: MemberNodeData) => {
            const value: string = node?.data?.name ? node?.data?.name : "";
            expect(screen.getByText(value)).toBeTruthy();
        }
    )
});