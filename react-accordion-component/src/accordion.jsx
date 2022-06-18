import React from "react";
import ReactDOM from "react-dom/client";

class Accordion extends React.Component {
  constructor(props){
    super(props)

    this.state= {activeId: null}
  }

  clickHandle(id){


    if(this.state.activeId === id){
      this.setState({activeId:null})
    }else{
      this.setState({ activeId: id })

    }

  }


render(){

//for each element in the array the following will be returned
  const topics = this.props.topics.map(element =>{

    let content = null;
    if (this.state.activeId === element.id) {
      content = (
        <div className="topic-content">
          {element.description}
        </div>
      )
    }

    return(
      //passing information into the handler
      <div key={element.id}className="topic">
        <div className="topic-title" onClick={()=>this.clickHandle(element.id)}>
          <h3>{element.title}</h3>
        </div>

        {
        content
        }

      </div>
    )
  })
  return(
    <div>
      {topics}
    </div>
  )
}
}


export {Accordion}
