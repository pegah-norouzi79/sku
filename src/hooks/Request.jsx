import { useEffect } from "react";
import { allPostApi, searchApi } from "../utils/Api";

export const useAllPosts = ({ setPosts, setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true);
    allPostApi()
      .then((res) => {
        setPosts(res.data.data.posts);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return { };
};

// export const usefindAllProject = ({setIsLoading, setPosts}) => {
//   setIsLoading(true);
//   allPostApi()
//     .then((res) => {
//       setIsLoading(false);
//       setPosts(res.data.data.posts);
//     })
//     .catch((err) => {
//       setIsLoading(false);
//       console.log(err);
//     });
//     return { };
// };

export const useSearch = ({ search, setIsLoading, setPosts }) => {
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
  return { };
};