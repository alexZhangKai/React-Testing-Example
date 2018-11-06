import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import TypeSelector from "./TypeSelector";

describe("TypeSelector Component", () => {
    let propsData = {
        typeData:["type 1", "type 2"],
    }

    beforeEach(() => {
        // create new mock function to reset call history
        propsData.handleAddNewType = jest.fn(x => x);
        propsData.handleRemoveType = jest.fn(x => x);
        propsData.handleAddRecord = jest.fn(x => x);
    })

    afterEach(cleanup)

    const renderComponent = props => (
        render(<TypeSelector {...props} />)
    )

    it("renders type list", () => {
        const { container } = renderComponent(propsData);
        expect(container.textContent).toMatch(/type 1/);
        expect(container.textContent).toMatch(/type 2/);
    })

    it("allows to input new type", () => {
        const { getByPlaceholderText } = renderComponent(propsData);
        let inputBar = getByPlaceholderText("Enter A New Execerse Type Here");
        fireEvent.change(inputBar, {target:{value: "new type"}});
        expect(inputBar.getAttribute("value")).toMatch(/new type/);
    })

    it("allows to add new type", () => {
        const { container } = renderComponent(propsData);
        let formEle = container.querySelector("form");
        fireEvent.submit(formEle, { preventDefault: () => { } });
        expect(propsData.handleAddNewType.mock.calls.length).toBe(1);
    })

    it("allows to remove existing types", () => {
        const { getByText } = renderComponent(propsData);
        let removeBtn = getByText("X");
        fireEvent.click(removeBtn);
        expect(propsData.handleRemoveType.mock.calls.length).toBe(1);
    })

    it("allows to add new records", () => {
        const { getByText } = renderComponent(propsData);
        let addRecordBtn = getByText("type 1");
        fireEvent.click(addRecordBtn);
        expect(propsData.handleAddRecord.mock.calls.length).toBe(1);
    })
})