import { useEffect, useState } from "react";

import st from "./RepoList.module.scss";
import RepoItem from "./RepoItem";
import FooterLabel from "../common/FooterLabel";

// const repoList = [
//   {
//     id: 1,
//     name: "twitter-algorithm",
//     visibility: "private",
//     language: "Python",
//     description: "Source code for Twitter's Recommendation Algorithm ",
//     updateDate: "Dec 29, 2021",
//     url: "https://github.com/tykimdream/twitter-algorithm",
//   },
//   {
//     id: 2,
//     name: "movie-list-crawling",
//     visibility: "public",
//     language: "Python",
//     description:
//       "movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project",
//     updateDate: "Dec 29, 2022",
//     url: "https://github.com/tykimdream/twitter-algorithm",
//   },
//   {
//     id: 3,
//     name: "twitter-algorithm",
//     visibility: "private",
//     language: "Python",
//     description: "Source code for Twitter's Recommendation Algorithm ",
//     updateDate: "Dec 29, 2021",

//     url: "https://github.com/tykimdream/twitter-algorithm",
//   },
//   {
//     id: 4,
//     name: "movie-list-crawling",
//     visibility: "public",
//     language: "Python",
//     description:
//       "movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project",
//     updateDate: "Dec 29, 2022",
//     url: "https://github.com/tykimdream/twitter-algorithm",
//   },
//   {
//     id: 5,
//     name: "twitter-algorithm",
//     visibility: "private",
//     language: "Python",
//     description: "Source code for Twitter's Recommendation Algorithm ",
//     updateDate: "Dec 29, 2021",
//     url: "https://github.com/tykimdream/twitter-algorithm",
//   },
//   {
//     id: 6,
//     name: "movie-list-crawling",
//     visibility: "public",
//     language: "Python",
//     description:
//       "movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project",
//     updateDate: "Dec 29, 2022",
//     url: "https://github.com/tykimdream/twitter-algorithm",
//   },
//   {
//     id: 7,
//     name: "twitter-algorithm",
//     visibility: "private",
//     language: "Python",
//     description: "Source code for Twitter's Recommendation Algorithm ",
//     updateDate: "Dec 29, 2021",
//     url: "https://github.com/tykimdream/twitter-algorithm",
//   },
//   {
//     id: 8,
//     name: "movie-list-crawling",
//     visibility: "public",
//     language: "Python",
//     description:
//       "movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project",
//     updateDate: "Dec 29, 2022",
//     url: "https://github.com/tykimdream/twitter-algorithm",
//   },
// ];

// const folderList = [
//   {
//     id: 1,
//     name: "FE",
//     color: "blue",
//     order: 1,
//     repositoryCount: 3,
//   },
//   {
//     id: 2,
//     name: "BE",
//     color: "pink",
//     order: 2,
//     repositoryCount: 3,
//   },
//   {
//     id: 3,
//     name: "Team Project For SSAFY 8th Generation",
//     color: "green",
//     order: 3,
//     repositoryCount: 3,
//   },
// ];
const RepoList = ({ folderName }) => {
  const [repoList, setRepoList] = useState([]);
  const [folderList, setFolderList] = useState([]);

  const [dropDownIndex, setDropDownIndex] = useState(-1);

  useEffect(() => {
    console.log(folderName);
    // folderName을 기반으로 axios해온다.
    setRepoList([
      {
        id: 1,
        name: "twitter-algorithm",
        visibility: "private",
        language: "Python",
        description: "Source code for Twitter's Recommendation Algorithm ",
        updateDate: "Dec 29, 2021",
        url: "https://github.com/tykimdream/twitter-algorithm",
      },
      {
        id: 2,
        name: "movie-list-crawling",
        visibility: "public",
        language: "Python",
        description:
          "movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project",
        updateDate: "Dec 29, 2022",
        url: "https://github.com/tykimdream/twitter-algorithm",
      },
      {
        id: 3,
        name: "twitter-algorithm",
        visibility: "private",
        language: "Python",
        description: "Source code for Twitter's Recommendation Algorithm ",
        updateDate: "Dec 29, 2021",

        url: "https://github.com/tykimdream/twitter-algorithm",
      },
      {
        id: 4,
        name: "movie-list-crawling",
        visibility: "public",
        language: "Python",
        description:
          "movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project",
        updateDate: "Dec 29, 2022",
        url: "https://github.com/tykimdream/twitter-algorithm",
      },
      {
        id: 5,
        name: "twitter-algorithm",
        visibility: "private",
        language: "Python",
        description: "Source code for Twitter's Recommendation Algorithm ",
        updateDate: "Dec 29, 2021",
        url: "https://github.com/tykimdream/twitter-algorithm",
      },
      {
        id: 6,
        name: "movie-list-crawling",
        visibility: "public",
        language: "Python",
        description:
          "movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project",
        updateDate: "Dec 29, 2022",
        url: "https://github.com/tykimdream/twitter-algorithm",
      },
      {
        id: 7,
        name: "twitter-algorithm",
        visibility: "private",
        language: "Python",
        description: "Source code for Twitter's Recommendation Algorithm ",
        updateDate: "Dec 29, 2021",
        url: "https://github.com/tykimdream/twitter-algorithm",
      },
      {
        id: 8,
        name: "movie-list-crawling",
        visibility: "public",
        language: "Python",
        description:
          "movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project movie list crawling project",
        updateDate: "Dec 29, 2022",
        url: "https://github.com/tykimdream/twitter-algorithm",
      },
    ]);
    setFolderList([
      {
        id: 1,
        name: "FE",
        color: "blue",
        order: 1,
        repositoryCount: 3,
      },
      {
        id: 2,
        name: "BE",
        color: "pink",
        order: 2,
        repositoryCount: 3,
      },
      {
        id: 3,
        name: "Team Project For SSAFY 8th Generation",
        color: "green",
        order: 3,
        repositoryCount: 3,
      },
      {
        id: 4,
        name: "기본 폴더",
        color: "white",
        order: 4,
        repositoryCount: 3,
      }
    ]);
  }, []);

  return (
    <>
      <div className={st.cardList}>
        {repoList.map((repo) => {
          // console.log(repo);
          return (
            <RepoItem
              repo={repo}
              folderList={folderList}
              dropDownIndex={dropDownIndex}
              setDropDownIndex={setDropDownIndex}
            />
          );
        })}
      </div>
      <FooterLabel />
    </>
  );
};

export default RepoList;
