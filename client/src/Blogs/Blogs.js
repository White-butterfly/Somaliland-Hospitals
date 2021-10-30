// import React from "react";
// import { Link } from "react-router-dom";
// import { useEffect ,useState } from 'react';
// import axios from "axios";
// function Blogs() {
//   const [id,setId] = useState("");
//   const [Blog, setBlog]= useState([]);
// const [hospital,sethospital]=useState([]);

//   useEffect(()=> {
    
//     axios
//     .get(`http://localhost:8000/api/blog/${id}`) 
//     .then((res)=> setBlog(res.data.data))

//  .catch((e)=> console.log(e.response))
// },[]);

//   return (
//     <div className="bolgs" > 
//       <div className="content clearfix">
//         <div className="main-content">
//         <div className="admincard-header" style={{color: '#000', background: 'white'}} >
//          <h2>Recent Blogs</h2>
//              <button>See All <span className="las la-arrow-right"></span> </button>
//             </div>

//             {Blog.map((Blogs) =>(
//             <div className="card mb-3" style={{maxWidth:"740px", color: '#000', border: '1px solid #000', height: "200px", borderRadius: "none"}}>
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img src="https://th.bing.com/th/id/OIP.1unrluQ9xXvbCcSKjJwkvwHaEp?w=262&h=180&c=7&r=0&o=5&pid=1.7"
//        class="img-fluid rounded-start "  alt=""/>
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <h2 className="card-title">{Blogs.title}</h2>
//         <h2>{Blogs.hospital.name}</h2>
//         <p className="card-text">{Blogs.description}</p> 
//         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div>
// ))}









// {/*             

          
//           <div className="post" style={{background: '#Fed8b1'}}>
//             <img
//               src="https://th.bing.com/th/id/OIP.1unrluQ9xXvbCcSKjJwkvwHaEp?w=262&h=180&c=7&r=0&o=5&pid=1.7"
//               className="post-image"
//             />
//             <div className="post-preview">
//               <h1>
//                 <a href="#">{Blogs.title}</a>
//               </h1>
//               <h2>{Blogs.hospital}</h2>
             
//               <i className="far fa-user">hargeisa</i>
//               &nbsp;
//               <i className="far calender">jun 12,2021</i>
//               <p className="preview-text">
//                 {Blogs.description}
//               </p>
//               <a href="#" className="bbtn read-more">
//                 read more
//               </a>
//             </div>
//           </div>

   
//    */}
//         </div>

//         <div className="sidebar">
//           <img src="https://www.seomarket.com.tr/tr/wp-content/uploads/2020/07/google-ads-yonetimi.jpg" />
//           <img src="https://www.seomarket.com.tr/tr/wp-content/uploads/2020/07/google-ads-yonetimi.jpg" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blogs;
