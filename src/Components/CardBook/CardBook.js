import React from 'react'
import '../../App.css'


export const CardBook= ({image, title, author, publicationDate}) => {


  return (

         <div className="col-sm-4">
            <div className="card">
              <img
                width="170"
                height="170"
               src={image}
                alt=""
              />
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <h4>{title}</h4>
                    <div className="col-sm-6">
                      <p>{author}</p>
                      <button
                        className="btn btn-warning btn-sm"
                        data-toggle="modal"
                        data-target={`#`}
                      >
                        view product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    

    
)}
export default CardBook;
