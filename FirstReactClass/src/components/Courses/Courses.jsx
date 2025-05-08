import "./style.css"
import { FaCalendarDays } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import Chat from "../../assets/CourseImage/chat.jpg";
import Gist from "../../assets/CourseImage/gist.jpg";
import Students from "../../assets/CourseImage/students.jpg";
import Library from "../../assets/CourseImage/library.jpg";
import Read from "../../assets/CourseImage/read.jpg"
import Study from "../../assets/CourseImage/study.jpg"
import Student from "../../assets/CourseImage/student.jpg"

const StudentsData = [
    {
        id: 1,
        pic: Chat,
        title: "School Engagements",
        start: "12:00",
        end: "End Date"
    },
    {
        id: 2,
        pic: Gist,
        title: "School Engagements",
        start: "12:00",
        end: "End Date"
    },
    {
        id: 3,
        pic: Students,
        title: "School Engagements",
        start: "12:00",
        end: "End Date"
    },
    {
        id: 4,
        pic: Library,
        title: "School Engagements",
        start: "12:00",
        end: "End Date"
    },
    {
        id: 5,
        pic: Read,
        title: "School Engagements",
        start: "12:00",
        end: "End Date"
    },
    {
        id: 6,
        pic: Study,
        title: "School Engagements",
        start: "12:00",
        end: "End Date"
    },
    {
        id: 7,
        pic: Student,
        title: "School Engagements",
        start: "12:00",
        end: "End Date"
    },
    {
        id: 8,
        pic: Chat,
        title: "School Engagements",
        start: "12:00",
        end: "End Date"
    },
]

const courses = () => {
    return (
        <div className="courseCon">
            <div className="CoursesOne">
                <div className="popular">
                    <span>Popular Courses</span>
                    <button>
                        Explore Courses
                    </button>
                </div>

                <div className="contentCourses">
                    {
                        StudentsData.map((value) => {
                            return (
                                <div>
                                    <div className="CourseCard">
                                        <div className="imgCon">

                                            <img key={value.id}
                                                src={value.pic}
                                                width={value.width}
                                                height={value.height} />

                                        </div>
                                        <span>{value.title}</span>
                                        <div className="dateCon">
                                            <div>
                                                <FaCalendarDays />
                                                <span style={{ fontWeight: "300" }}>{value.start}</span>
                                            </div>
                                        </div>
                                        <div className="dateCon">
                                            <div style={{ border: "1px solid gray", backgroundColor: "whitesmoke", borderRadius: "10px", padding: "7px" }}>
                                                <MdStarRate />
                                                <span style={{ fontWeight: "300" }}>rate</span>
                                            </div>

                                            <div style={{ border: "1px solid gray", backgroundColor: "whitesmoke", borderRadius: "10px", padding: "7px" }}>
                                                <MdRateReview />
                                                <span style={{ fontWeight: "300" }}>chat</span>
                                            </div>

                                        </div>
                                        <hr />
                                        <div className="dateCon">
                                            <div style={{ border: "1px solid gray", backgroundColor: "whitesmoke", borderRadius: "10px", padding: "7px" }}>
                                                <MdStarRate />
                                                <span style={{ fontWeight: "300" }}>rate</span>
                                            </div>

                                            <div style={{ border: "1px solid gray", backgroundColor: "whitesmoke", borderRadius: "10px", padding: "7px" }}>
                                                <MdRateReview />
                                                <span style={{ fontWeight: "300" }}>chat</span>
                                            </div>

                                        </div>
                                    </div>


                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default courses