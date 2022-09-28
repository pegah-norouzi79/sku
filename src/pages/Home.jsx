import { useEffect, useState } from "react";
import AddNewPost from "../components/AddNewPost";
import Header from "../components/Header";
import Posts from "../components/Posts";
import QuickAccess from "../components/QuickAccess";
import UploadPost from "../components/UploadPost";
import User from "../components/User";
import {
  userApi,
  allPostApi,
  categoryApi,
  getpostByApi,
  searchApi,
} from "../utils/Api";
import { useDispatch, useSelector } from "react-redux";
import { userInformation } from "../features/userInfo";
import LoadingPost from "../components/LoadingPost";
import { useNavigate } from "react-router-dom";
import { useAllPosts, useSearch } from "../hooks/Request";
const Home = () => {
  const user = useSelector((state) => state.userInfo.user);
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadinMyProject, setIsLoadinMyProject] = useState(false);
  const [isLoadingMaster, setIsLoadingMaster] = useState(false);
  const [isLoadingStudent, setIsLoadingStudent] = useState(false);
  const [search, setSearch] = useState("");

  // custom hook for all posts
  useAllPosts({ setPosts, setIsLoading });

  //  useSearch( search,{ setIsLoading, setPosts });
  const findAllProject = () => {
    setIsLoading(true);
    allPostApi()
      .then((res) => {
        setIsLoading(false);
        setPosts(res.data.data.posts);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  const findStudentProject = () => {
    setIsLoadingStudent(true);
    categoryApi("", "student")
      .then((res) => {
        setIsLoadingStudent(false);
        setPosts(res.data.data.posts);
      })
      .catch((err) => {
        setIsLoadingStudent(false);
        console.log(err);
      });
  };
  const findMasterProject = () => {
    setIsLoadingMaster(true);
    categoryApi("master")
      .then((res) => {
        setIsLoadingMaster(false);
        setPosts(res.data.data.posts);
      })
      .catch((err) => {
        setIsLoadingMaster(false);
        console.log(err);
      });
  };
  const findMyProject = () => {
    setIsLoadinMyProject(true);
    getpostByApi(user._id)
      .then((res) => {
        setIsLoadinMyProject(false);
        console.log(res.data);
        setPosts(res.data.data.posts);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadinMyProject(false);
      });
  };

  useEffect(() => {
    if (search) {
      setIsLoading(true);
      searchApi(search)
        .then((res) => {
          setPosts(res.data.posts);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [search]);
  useEffect(() => {
    if (token) {
      userApi()
        .then((res) => {
          dispatch(userInformation({ user: res.data.data.user }));
        })
        .catch((err) => console.log(err));
    }
  }, [token]);
  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <QuickAccess
        findMyProject={findMyProject}
        findMasterProject={findMasterProject}
        findAllProject={findAllProject}
        findStudentProject={findStudentProject}
      />
      <main className="flex justify-between mt-5 lg:px-7">
        {/*upload image*/}
        <UploadPost />
        {/*posts*/}
        {isLoading ||
        isLoadinMyProject ||
        isLoadingMaster ||
        isLoadingStudent ? (
          <LoadingPost />
        ) : (
          <Posts posts={posts} />
        )}
        {/*user info*/}
        <User />
      </main>
      <AddNewPost />
    </div>
  );
};

export default Home;
