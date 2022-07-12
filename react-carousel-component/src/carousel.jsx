import React from "react";
import ReactDom from "react-dom/client";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.circlerClicker = this.circlerClicker.bind(this)
    this.forwardClick= this.forwardClick.bind(this)
    this.backClick = this.backClick.bind(this)

    this.state={
    clickedOne: true,
    clickedTwo: false,
    clickedThree: false,
    clickedFour: false,
    clickedFive: false,
    timer: null}
  }




  circlerClicker(e){
    if(e===1){
      this.setState({clickedOne:true, clickedTwo:false, clickedThree:false, clickedFour:false, clickedFive:false})
    }else if(e===2){
      this.setState({ clickedOne: false, clickedTwo: true, clickedThree: false, clickedFour:false, clickedFive:false })
    }else if (e===3){
      this.setState({ clickedOne: false, clickedTwo: false, clickedThree: true, clickedFour:false, clickedFive:false })
    } else if (e === 4) {
      this.setState({ clickedOne: false, clickedTwo: false, clickedThree: false, clickedFour:true, clickedFive:false })
    } else if (e === 5) {
      this.setState({ clickedOne: false, clickedTwo: false, clickedThree: false, clickedFour: false, clickedFive: true })
    }
    let clear = clearInterval(this.state.timer)
    const timer = setInterval(this.forwardClick, 3000)
    this.setState({ timer })
  }


  backClick(){
    if(this.state.clickedOne===true){
      this.setState({ clickedOne: false, clickedTwo: false, clickedThree: false, clickedFour:false, clickedFive:true
      })
   } else if (this.state.clickedTwo === true) {
      this.setState({ clickedOne: true, clickedTwo: false, clickedThree: false, clickedFour:false, clickedFive:false
      })
    }else if (this.state.clickedThree ===true){
      this.setState({clickedOne:false, clickedTwo:true, clickedThree: false, clickedFour: false, clickedFive:false
      })
    } else if (this.state.clickedFour === true) {
      this.setState({ clickedOne: false, clickedTwo: false, clickedThree: true, clickedFour:false, clickedFive:false
      })
    } else if (this.state.clickedFive === true) {
      this.setState({ clickedOne: false, clickedTwo: false, clickedThree: false, clickedFour:true, clickedFive:false
      })
    }
    let clear = clearInterval(this.state.timer)
    const timer = setInterval(this.forwardClick, 3000)
    this.setState({ timer })
  }

  forwardClick(){
    if (this.state.clickedOne === true) {
      this.setState({
        clickedOne: false, clickedTwo: true, clickedThree: false, clickedFour: false, clickedFive:false
      })
    } else if (this.state.clickedTwo === true) {
      this.setState({
        clickedOne: false, clickedTwo: false, clickedThree: true, clickedFour: false, clickedFive: false
      })
    } else if (this.state.clickedThree === true) {
      this.setState({
        clickedOne: false, clickedTwo: false, clickedThree: false, clickedFour: true, clickedFive:false
      })
    } else if (this.state.clickedFour === true) {
      this.setState({
        clickedOne: false, clickedTwo: false, clickedThree: false, clickedFour: false, clickedFive:true
      })
    } else if (this.state.clickedFive === true) {
      this.setState({
        clickedOne: true, clickedTwo: false, clickedThree: false, clickedFour: false, clickedFive: false
      })
    }
    let clear = clearInterval(this.state.timer)
    const timer = setInterval(this.forwardClick, 3000)
    this.setState({ timer })
  }

  componentDidMount(){
    const timer = setInterval(this.forwardClick,3000)
    this.setState({timer})
  }



  render() {


    let circleFillOne;
    let circleFillTwo;
    let circleFillThree;
    let circleFillFour;
    let circleFillFive;
    let testImg


    if (this.state.clickedOne === true) {
      circleFillOne = 'fill';
      testImg= this.props.images[0]
    }else if(this.state.clickedTwo===true){
      circleFillTwo= 'fill'
      testImg=this.props.images[1]
    }else if(this.state.clickedThree===true){
      circleFillThree= 'fill'
      testImg=this.props.images[2]
    } else if (this.state.clickedFour === true) {
      circleFillFour = 'fill'
      testImg = this.props.images[3]
    } else if (this.state.clickedFive === true) {
      circleFillFive = 'fill'
      testImg = this.props.images[4]
    }




    return (
      <div className="container">

        <div className="img-container">
          <span className="arrow" onClick={this.backClick}>&#8249;</span>
            <img src={testImg} alt={testImg} className="image" />
          <span className="arrow" onClick={this.forwardClick}>&#8250;</span>
        </div>

        <div className="circles">
          <div className={`circle ${circleFillOne}`} onClick={()=> this.circlerClicker(1)}></div>
          <div className={`circle ${circleFillTwo}`} onClick={()=> this.circlerClicker(2)}></div>
          <div className={`circle ${circleFillThree}`} onClick={()=> this.circlerClicker(3)}></div>
          <div className={`circle ${circleFillFour}`} onClick={() => this.circlerClicker(4)}></div>
          <div className={`circle ${circleFillFive}`} onClick={() => this.circlerClicker(5)}></div>
        </div>

      </div>
    )
  }
}

export {Carousel}
