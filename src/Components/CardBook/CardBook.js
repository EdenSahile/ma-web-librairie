import React from 'react'
import '../../App.css'
 const CardBook = ({
   titre,
   auteurs,
  prix,
  image,
   alt,
   descriptioncut,
  
 }) => {


   return (
     <div className="col-sm-6 col-lg-4 ">
       <div className="card">
         <img
           className="mt-2"
           width="170"
           height="auto"
           src={image}
           alt={alt}
         />
         <div className="card-body">
           <div className="row">
             <div className="col-sm-12">
               <h4 className="card-title">{titre}...</h4>
             </div>
           </div>
           <div className="row">
             <div className="col-sm-12">
               <h4 className="card-desc text-secondary fw-bold">
                 {descriptioncut}...
               </h4>
             </div>
           </div>
           <div className="row">
             <div className="col-sm-12">
                {auteurs}
             </div>
           </div>
           <div className="row">
             <div className="col-sm-12">
               <p className="card-prix green text-center fs-6 fw-bold ">
                 {prix} €
               </p>
             </div>
           </div>
           <div className="row">
             <div className="text-center col-sm-12">
               <button
                 className="btn btn-green btn-md"
                 data-toggle="modal"
                 data-target={`#`}
               >
                 En savoir plus
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };
export default CardBook;
