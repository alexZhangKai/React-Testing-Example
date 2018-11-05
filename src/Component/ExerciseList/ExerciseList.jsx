import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import "./ExerciseList.css";

const ExerciseList = ({ExerciseData}) => {
    if(!ExerciseData || ExerciseData.length === 0) {

        return (
            <div>
                <strong>{"No Exercise, you will die early!"}</strong>
            </div>
        )
    }

    return (
        <div className="list-container">
            <ListGroup>
                {ExerciseData.map(record => (
                    <ListGroupItem>{record}</ListGroupItem>
                ))}
            </ListGroup>
            <h3>Great Work!</h3>
        </div>
    );
}
 
export default ExerciseList;