class Example{
  constructor(ele) {
    this.ele = ele; 
    this.ele.innerHTML = "<h1>I'm Alive! </h1>";
    
    this.handleclick = this.handleclick.bind(this);
    this.ele.addEventListener("click", this.handleclick);
  }

  handleclick() {
    this.ele.children[0].innerText = "Ouch!"
  }
}

export default Example;
