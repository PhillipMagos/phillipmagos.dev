import "bootstrap/dist/css/bootstrap.min.css"
import "./heroes.css"

import React, { useState, useEffect } from 'react';

function APIs() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    fetchPostData();
  }, []);


  const fetchPostData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      setPostData(data);
    } catch (error) {
      console.error(`The following error is:`, error);
    }
  };
  
  return (
    <div class="justify-content-center">
      <div class="px-4 py-5 my-5 text-center">
        {/* <img class="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"></img> */}
        <div>
          {postData ? (
            <div>
              <h2>{postData.title}</h2>
              <p>{postData.body}</p>
              <p>The Id is: {postData.id}</p>
              <p>The User's ID is: {postData.userId}</p>
              <p>asdfasdf</p>
              <h2>{postData[2]}</h2>
            </div>
          ) : (
            <p>Loading post data...</p>
          )}
        </div>

      </div>
    </div>

  );
}

export default APIs;



// 
// import React, { useState, useEffect } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./heroes.css";

// function APIs() {
//   const [postData, setPostData] = useState([]);

//   useEffect(() => {
//     fetchPostData();
//   }, []);

//   const fetchPostData = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await response.json();
//       setPostData(data);
//     } catch (error) {
//       console.error(`The following error is:`, error);
//     }
//   };

//   return (
//     <div className="justify-content-center">
//       <div className="px-4 py-5 my-5 text-center">
//         {/* <img className="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"></img> */}
//         <div>
//           {postData.length > 0 ? (
//             postData.map((post) => (
//               <div key={post.id}>
//                 <h2>{post.title}</h2>
//                 <p>{post.body}</p>
//                 <p>The Id is: {post.id}</p>
//                 <p>The User's ID is: {post.userId}</p>
//               </div>
//             ))
//           ) : (
//             <p>Loading post data...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default APIs;

// 