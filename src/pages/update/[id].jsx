import Create from "@/components/Dashboard/Create";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { fetchByIdCourse } from "@/redux/action/courseAction";
import { getUserJwt } from "@/redux/action/userAction";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const update = () => {
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const { user, loading } = useSelector((e) => e.user);
  const { courses, course, loading: l2 } = useSelector((e) => e.course);
  const router = useRouter();
  useEffect(() => {
    if (!user && !loading) {
      dispatch(getUserJwt());
    }
  }, [user]);
  useEffect(() => {
    setId(router.query.id);
  }, [router]);

  useEffect(() => {
    if (id && !l2) {
      dispatch(fetchByIdCourse(id));
    }
  }, [dispatch, id, l2]);

  function err(error) {
    console.log(error);
  }

  return (
    <div className="bg-c2  px-[1vw] w-[100vw]">
      <Navbar color={"c2"}></Navbar>

      {loading && l2 && <Loader></Loader>}
      {course && (
        <>
          <Create course={course} err={err} isUpdate={true}></Create>
        </>
      )}
    </div>
  );
};

export default update;
