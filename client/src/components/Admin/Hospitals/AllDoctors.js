import { Link , useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const AllDoctors = () => {
  const history = useHistory();
  
  const [id, setId] = useState("");
  const [Alldoctors, setAlldoctors] = useState([]);
  const [search, setsearch] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/doctor`)
      .then((res) => {setAlldoctors(res.data.data)
        console.log("doctors ",res) 
      })
      .catch((e) => console.log(e.response));
  }, []);

  function delHospital(id) {
    axios
      .delete(`http://localhost:8000/api/doctor/${id}`)
      .then(() => {
        toast.success("Doctor successfully deleted");
        history.push("/AllDoctors");
      })
      .catch((e) => toast.error(e.response.data.message));
  }

  return (
    <div>
      <div className="tbl-heading">All Doctors in Somaliland</div>
       
      <div className="adminsearch-wrapper" style={{width: '40rem', marginLeft: '540px', marginTop: '10px'}}>
                   <span className="las la-search"></span>
                   <input type="search"
                   placeholder= "Search here" 
                   onChange={(e) => setsearch(e.target.value)}/>
            
</div>
      <div class="table_responsive">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>doc-Name</th>
              <th>expirence</th>
              <th>language</th>
              <th>email</th>
              <th>hours</th>
              <th>Action</th>
            </tr>
          </thead>

          {Alldoctors.filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.docName.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((doctor) => (
            <tbody>
              <tr>
                <td>01</td>
 
                <td>{doctor.docName}</td>
                <td>{doctor.expirence}</td>
                <td>{doctor.language}</td>
                <td>{doctor.email}</td> 
                <td>{doctor.hours}</td>
                <td>
                  <span class="action_btn">
                    <Link to={`/EditDoctor/${doctor._id}`}>
                   Edit
                    </Link>
                    <a href="#" onClick={() => delHospital(doctor._id)}>
                      Remove
                    </a>
                  </span>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      
      
    </div>
  );
};

export default AllDoctors;
