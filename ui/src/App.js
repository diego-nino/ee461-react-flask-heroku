import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Projects/>
      </header>
    </div>
  );
}

export default App;

class Projects extends React.Component {
  render() {
    return(
      <div class="projectWrap">
        <p class="projectTitle">Projects</p>
          <List />
          <div class="emptySpace"/>
      </div>
    )
  }
}

class List extends React.Component {
  render() {
    return(
      <div>
        <Data/>
      </div>
    )
  }
}

function Project(props) {
  return(
    <div class="project">

        <div class="column">
            <p class="projectName">{props.Name}</p>
        </div>

        <div class="column">
          <p class="user">{props.User}</p>
        </div>

        <div class="column">
          <p class="hwDescription">{props.HWSet1}</p>
          <p class="hwDescription">{props.HWSet2}</p>
        </div>

        <div class="column">
          <p class="hwDescription">Select HWSet:</p>
          <select class="hwSelect" name="hwset" id="hwset">
            <option value="hws1">HWSet 1</option>
            <option value="hws1">HWSet 2</option>
          </select>
        </div>

        <div class="column">
          <input class="hwInput" type="text" placeholder="Enter Value"/>
          <button class="checkBtn" type="button">Check In</button>
        </div>

        <div class="column">
          <input class="hwInput" type="text" placeholder="Enter Value"/>
          <button class="checkBtn" type="button">Check Out</button>
        </div>

        <div class="column">
          <button class="joinBtn" type="button">Join</button>
        </div>

    </div>
  )
}

class Data extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      project_list: Array(3)
    };
    this.state.project_list.fill(this.renderProject("Project 1", "Bob", "HWSet 1: 100/100", "HWSet 2: 70/100"))
    this.state.project_list.fill(this.renderProject("Project 2", "John", "HWSet 1: 70/100", "HWSet 2: 100/100"))
    this.state.project_list.fill(this.renderProject("Project 3", "Sarah", "HWSet 1: 10/100", "HWSet 2: 90/100"))
  }

  renderProject(proj, usr, hw1, hw2) {
    return (
      <Project
        Name = {proj}
        User = {usr}
        HWSet1 = {hw1}
        HWSet2 = {hw2}
      />
    )
  }

  render() {
    return(projectData(this.state.project_list))
  }

}

function projectData(data) {
  return (
    <div>
      {data.map(item => {
        return item
      })}
    </div>
  );
}