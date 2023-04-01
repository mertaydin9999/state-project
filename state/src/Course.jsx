import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
import "./Course.css";
const courseMap = {
    Angular ,
    Ccsharp,
    Bootstrap,
    KompleWeb

}


function Course({ courseName }) {
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} />
    </div>
  );
}

export default Course;
