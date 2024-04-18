import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Navigation =()=> {
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

const Banner = ()=>{
  return(
    <header>
      <Navigation/>
      <div className='Container'>
        <div className='row'>
          <div className='col-md-12'>
          <img src='images/img1.jpg'/>
            <h1>we have book</h1>
            <p>this is for discription</p>
            <a className='btnExplore' href='#'>Explore More--</a>
          </div>
        </div>
      </div>
    </header>
  );
}
const BookList = () =>{
  return(
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 p-5'>
            <div className='bookcard'>
              <img src='images/img1.jpg'/>
            </div>
            <div className='book-content'>
              <h5>Book Name Here</h5>
              <p>Discirption Here</p>
              <a className='btnBuy' herf='#'>Buy Now</a>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

ReactDOM.render(<BookList/>,document.getElementById('root'));
