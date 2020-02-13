import React, { Component } from 'react';

export default class Drag extends Component {
    state = {
        tasks: [
            {name:"yellow",category:"ord1", bgcolor: "yellow"},
            {name:"pink", category:"ord2", bgcolor:"pink"},
            {name:"blue", category:"ord3", bgcolor:"skyblue"}
          ]
    }

    onDragStart = (ev, id, category) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
        let catNum = Number(cat.substr(3));
        let selectedNum = Number(ev.dataTransfer.getData('category').substr(3));
        let tasksLength = this.state.tasks.length;
       
       let tasks = this.state.tasks.filter((task) => {
           
           let otherNum = Number(task.category.substr(3));
           
           if (task.name == id) {
               task.category = cat;
           }
           else if (otherNum === catNum && otherNum > selectedNum) {
               task.category = 'ord' + (otherNum - 1) + '';
           }
            else if (otherNum < catNum && otherNum != 1) {
               task.category = 'ord' + (otherNum - 1) + '';
           }
            else if (otherNum > catNum && otherNum != tasksLength) {
               task.category = 'ord' + (otherNum + 1) + '';
           }
            else if (otherNum === catNum && otherNum < selectedNum) {
               task.category = 'ord' + (otherNum + 1) + '';
           }
                   
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
        var tasks = {
            ord1: [],
            ord2: [],
            ord3: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name}
                    onDragStart = {(e) => this.onDragStart(e, t.name, t.category)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">DRAG & DROP DEMO</h2>
                <div className="one"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "ord1")}}>
                    <span className="task-header">ONE</span>
                    {tasks.ord1}
                </div>
                <div className="two"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "ord2")}}>
                    <span className="task-header">TWO</span>
                    {tasks.ord2}
                </div>
                <div className="three"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "ord3")}}>
                    <span className="task-header">THREE</span>
                    {tasks.ord3}
                </div>
            </div>
        );
    }
}