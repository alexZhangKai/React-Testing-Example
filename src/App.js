import React, { Component } from 'react';
import ExerciseList from "./Component/ExerciseList";
import TypeSelector from "./Component/TypeSelector";

import './App.css';

class App extends Component {

    state = {
        exerciseData: [
            "Swimming 06/11/2018, 00:06:57",
            "Arm Day 05/11/2018, 00:06:57",
            "Chest Day 04/11/2018, 00:06:57",
        ],
        typeData: [
            "Swimming",
            "Arm Day",
            "Chest Day"
        ]
    }

    handleAddNewType(newType) {
        this.setState(oldState => ({
            typeData: [...oldState.typeData, newType]
        }))
    }

    handleRemoveType(type) {
        this.setState(oldState => {
            let index = oldState.typeData.indexOf(type);
            oldState.typeData.splice(index, 1);
            return {
                typeData: oldState.typeData
            }
        })
    }

    handleAddRecord(newExercise) {
        this.setState(oldState => ({
            exerciseData: [...oldState.exerciseData, newExercise]
        }))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {"Exercise Tracker"}
                </header>
                <TypeSelector 
                    typeData={this.state.typeData} 
                    handleAddNewType={this.handleAddNewType.bind(this)}
                    handleRemoveType={this.handleRemoveType.bind(this)}
                    handleAddRecord={this.handleAddRecord.bind(this)}
                />
                <br></br>
                <ExerciseList exerciseData={this.state.exerciseData} />
            </div>
        );
    }
}

export default App;
