import React from "react";
import { render, cleanup } from "react-testing-library";
import ExerciseList from "./ExerciseList";

describe("ExerciseList Component", () => {

    const renderComponent = props => (
        render(<ExerciseList {...props} />)
    )

    afterEach(cleanup)

    it("renders no record message", () => {
        const { container } = renderComponent();
        expect(container.textContent).toMatch(/No Exercise, you will die early!/);
    })

    it("renders records", () => {
        const exerciseData = ["record 1", "record 2"];
        const { container } = renderComponent({exerciseData});
        expect(container.textContent).toMatch(/record 1/);
        expect(container.textContent).toMatch(/record 2/);
        expect(container.textContent).toMatch(/Great Work!/);
    })

})