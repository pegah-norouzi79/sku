import { FiMoreVertical, FiDownload } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { useEffect, useState } from "react";
import { convertEnToFa } from "../ConvertEnToFa";
import DropMenu from "./DropMenu";
import { SiWhatsapp } from "react-icons/si";
import Comments from "./Comments";
import { useSelector } from "react-redux";
import { updatePostByIdApi } from "../utils/Api";
import axios from "axios";
import { useNavigate } from "react-router";
import { BiUser } from "react-icons/bi";
const CardPost = ({ post }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState(post.comments);
  const [showHeart, setShowHeart] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const toggleHeart = () => {
    if (!token) {
      return navigate("/auth");
    }
    setShowHeart(!showHeart);
    updatePostLike();
  };
  const updatePostComment = () => {
    const data = {
      comment: text,
      sendComment: true,
    };
    axios
      .patch(`/post/${post._id}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const addNewComment = () => {
    if (!token) {
      return navigate("/auth");
    }
    const newComment = {
      imageProfile: user.image,
      username: user.username,
      comment: text,
    };
    setComments([...comments, newComment]);
    updatePostComment();
    setText("");
  };
  const updatePostLike = () => {
    const data = {
      liked: user._id,
      likes: !showHeart ? "like" : "dislike",
    };
    axios
      .patch(`/post/${post._id}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const user = useSelector((state) => state.userInfo.user);
  useEffect(() => {
    const checkUser = post.liked.find((item) => item === user._id);
    if (checkUser) {
      setShowHeart(true);
    }
    const token = localStorage.getItem("token");
    setToken(token)
  }, []);
  const downloadPost = () => {
    if (!token) {
      return navigate("/auth");
    }
  };
  
  return (
    <>
      <div className="border border-gray-100 shadow-sm rounded-lg lg:px-3 py-3 h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            {/*user info*/}
            <div className="flex justify-between items-center px-2 md:px-0">
              {/*user name & image profile & responsivable*/}
              <div className="flex items-center gap-5 pt-1">
                <img
                  className="rounded-full w-14 h-14"
                  src={`http://localhost:8080/${post.user.image}`}
                  alt=""
                />
                <div className="text-gray-700 text-xs space-y-1">
                  <p>{post.user.username}</p>
                  <p>
                    {post.user.responeible === "master"
                      ? "استاد"
                      : post.user.responeible === "PHD-student"
                      ? "دانشجوی دکترا"
                      : post.user.responeible === "MSc-student"
                      ? "دانشجوی ارشد"
                      : "دانشجوی کارشناسی"}
                  </p>
                </div>
              </div>
              {/*more items*/}
              <DropMenu icon={<FiMoreVertical size={20} />}>
                {token ? (
                  <a href={post.post} download>
                    <div className="flex items-center gap-2 p-2 cursor-pointer text-gray-600">
                      <FiDownload size={18} />
                      <p className="text-sm">دانلود پست</p>
                    </div>
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-2 p-2 cursor-pointer text-gray-600"
                    onClick={downloadPost}
                  >
                    <FiDownload size={18} />
                    <p className="text-sm">دانلود پست</p>
                  </div>
                )}
              </DropMenu>
            </div>
            {/*post*/}
            <img
              className="w-full h-80 object-fill mt-2"
              src={`http://localhost:8080/${post.post}`}
              alt=""
            />
            {/*options*/}
            <div className="flex gap-2 items-center mt-3 px-2 md:px-0">
              {showHeart ? (
                <AiFillHeart
                  className="text-red-600 cursor-pointer text-xl"
                  onClick={toggleHeart}
                />
              ) : (
                <AiOutlineHeart
                  className="text-gray-600 cursor-pointer text-xl"
                  onClick={toggleHeart}
                />
              )}
              <FaRegComment
                onClick={() => setShowComment(!showComment)}
                className="text-gray-600 cursor-pointer text-lg"
              />
              <DropMenu
                icon={
                  <IoIosShareAlt className="text-gray-600 cursor-pointer text-xl" />
                }
              >
                <a
                  href={`https://web.whatsapp.com/send?text=http://localhost:3000/`}
                >
                  <div className="flex items-center gap-2 p-2 cursor-pointer text-gray-600">
                    <SiWhatsapp className="text-green-500 text-lg" />
                    <p className="text-xs">از طریق واتساپ</p>
                  </div>
                </a>
              </DropMenu>
            </div>
            <p className="text-xs text-gray-500 mt-2 px-2 md:px-0">
              {convertEnToFa(likes)} پسند
            </p>
            <div className="py-2 px-2 md:px-0">
              <p className="text-sm"> توضیحات:</p>
              <p className="text-xs text-gray-500 text-justify pt-2 leading-5">
                {post.description[0]}
              </p>
            </div>
          </div>
          {/*@comment*/}
          <div className="flex justify-between items-center gap-3 px-2 md:px-0">
            {user.image ? (
              <img
                className="w-12 h-12 rounded-full"
                src={`http://localhost:8080/${user.image}`}
                alt=""
              />
            ) : (
              <BiUser size={22} />
            )}

            <div className="flex flex-1 bg-gray-100 rounded-lg py-3 px-2">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                className="w-full outline-none bg-transparent text-xs placeholder:text-gray-400"
                placeholder="لطفا نظر خود را بنویسید ..."
              />
              <button
                onClick={addNewComment}
                className="text-[#0096f5] text-xs"
              >
                ارسال
              </button>
            </div>
          </div>
        </div>
      </div>
      <Comments
        comments={comments}
        setShowComment={setShowComment}
        showComment={showComment}
      />
    </>
  );
};

export default CardPost;
