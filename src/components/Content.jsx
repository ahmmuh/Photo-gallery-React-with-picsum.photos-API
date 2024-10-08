import React from "react"

const Content = () => {
  return (
    <div className="row w-75 mx-auto mt-2 mb-5">
      <div className="col-lg-5">
        <img
          src="https://picsum.photos/seed/picsum/350/370"
          className="img-fluid rounded-top"
          alt=""
        />
      </div>
      <div className="col-md-7 mt-3">
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          molestias a error reprehenderit, soluta quos. Ratione doloremque quae
          dolor voluptatum laborum magnam praesentium tempora atque accusantium
          tenetur, aliquam illo maxime hic adipisci corrupti in nam nesciunt
          ipsa dignissimos. Harum hic nihil consectetur minus eius quae vero
          perspiciatis enim molestiae modi officiis odit numquam et, est,
          recusandae debitis totam nam error odio nemo distinctio culpa
          mollitia. Dolores corporis aliquam deleniti porro, magni labore ex,
          totam corrupti fugiat inventore numquam
        </p>
        <button
          className="btn btn-outline-danger"
          onClick={() => alert("Not Implemented Yet")}
        >
          View
        </button>
      </div>
    </div>
  )
}

export default Content
