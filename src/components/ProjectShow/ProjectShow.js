import React from 'react';
import './ProjectShow.css'

const ProjectShow = (props) => {
    const { name, description, image, features, tools } = props.project;
    console.log(image)
    // npm install emailjs-com --save
    return (
        // <div className="col mt-5 h-100">
        //     <div className="card w-100 h-100 " style={{borderRadius:'0.75rem'}} >
        //         <div className="h-75">
        //             <img src={image} className=" w-100 h-100 p-2" alt="..." />
        //         </div>
        //         <div className="h-25 text-white card-footer " style={{backgroundColor:'#212729'}} >
        //             <div className="btn-group dropup text-center d-flex align-items-center justify-content-between" > 
        //               <h5 className=" me-2 text-center">{name}</h5>
        //                 <button type="button" className="btn btn-secondary dropdown-toggle" 
        //                 style={{height:'3rem',width:'3rem',backgroundColor:'#212729',borderRadius:'0.50rem'}} data-bs-toggle="dropdown">      
        //                 </button>
        //                 <ul className="dropdown-menu menu mx-1">
        //                      <h6 className="mx-2">{description}</h6>
        //                     <ul>
                           
        //                     {
        //                         features.map(detail => <li className="p-1">{detail.feature}</li>)
        //                     }
        //                     </ul>
        //                     <p className="fw-bold mx-1">Tools:</p>
        //                     <ul className="ulStyle">
        //                          {
        //                         tools.map(tool => <li className="liButton">{tool}</li>)
        //                     }
        //                     </ul>

                           
                               
                          
                            
        //                 </ul>
        //             </div>
        //         </div>

        //     </div>
        // </div >
        <div className="mb-5 col-lg-4 col-sm-6">
            <div className="card shadow-lg w-100 h-100 text-center rounded ">
                <div className="d-flex justify-content-center align-items-center h-100 contain ">
                    <img src={image} className="card-img-top" />
                    
                </div>

                <div className="btn-group dropup">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                        {name}
                    </button>
                    <ul className="dropdown-menu menu mx-1">
                       <h6 className="mx-2">{description}</h6>
                      <ul>
                           
                           {
                              features.map(detail => <li className="p-1">{detail.feature}</li>)
                         }
                         </ul>
                         <p className="fw-bold mx-1">Tools:</p>
                         <ul className="ulStyle">
                           {
                          tools.map(tool => <li className="liButton">{tool}</li>)
                          }
                         </ul>
                         </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectShow;
// {
//     features.map(detail => <li className="p-3">{detail.feature}></li>)
// }
// {
//     tools.map(tool => <li>{tool}</li>)
// }