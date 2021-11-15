import { Link , useHistory} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import EditHospital from "./EditHospital";
import { toast } from "react-toastify";

const AllHospitals = () => {
  const history = useHistory();

  const [id, setId] = useState("");
  const [AllHospitals, setAllHospitals] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hospital`)
      .then((res) => setAllHospitals(res.data.data))

      .catch((e) => console.log(e.response));
  }, []);

  function delHospital(id) {
    axios
      .delete(`http://localhost:8000/api/hospital/${id}`)
      // .then((res) => console.log(res));
      .then(() => {
        toast.success("Hospital successfully deleted");
        history.push("/AllHospitals");
      })
      .catch((e) => toast.error(e.response.data.message));
  }
  
  return (
    <>
      <div className="tbl-heading">All Hospitals in Somaliland</div>

      <div
        className="adminsearch-wrapper"
        style={{ width: "40rem", marginLeft: "540px", marginTop: "10px" }}
      >
        <span className="las la-search"></span>
        <input
          type="search"
          placeholder="Search here"
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>

      <div class="table_responsive">
        <table>
          <thead>
            <tr>
              <th> Hospital-Name</th>
              <th>City</th>
              <th>Region</th>
              <th>Action</th>
            </tr>
          </thead>

          {AllHospitals.filter((val) => {
            if (search === "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          }).map((hospital) => (
            <tbody>
              <tr>
                <td>{hospital.name}</td>
                <td>{hospital.address.city}</td>
                <td>{hospital.address.region}</td> 
                <td>
                  <span class="action_btn">
                    <Link to={`/EditHospital/${hospital._id}`}>Edit</Link>
                    <a href="#" onClick={() => delHospital(hospital._id)}>
                      Remove
                    </a>
                  </span>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default AllHospitals;
