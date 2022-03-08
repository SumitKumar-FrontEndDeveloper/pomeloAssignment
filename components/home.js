import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Loading from './loader'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { saveNews,saveNewsList, clearNewsList , saveIndex} from './../actions/news'
import Header from "./header";

export default function Home() {
  const scrollRef = useRef([])

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const newsList  = useSelector((state) => state?.news?.newsList);
  const newsIndex  = useSelector((state) => state?.news?.newsIndex);
  const router = useRouter()
  const dispatch = useDispatch()

  const getNewsData = async (q = null) => {
    console.log("newsList:::::",newsList)
    try {
      let url =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=kElLQtkGloYP50ybJpZVhDWI70TPaqau";
    if (q) {
      url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${q}&api-key=kElLQtkGloYP50ybJpZVhDWI70TPaqau`;
    }
    setLoading(true);
    const data = await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "OK") {
          setData(data?.response?.docs);
          setLoading(false);
          window.scrollTo(0,0)
        }
      }).catch(err => {
        console.log("something went wrong with api")
        setLoading(false);
        return err
      });
    return data;
    } catch(e) {
      return e
    }
   
  };

  useEffect(() => {
    console.log("news list::", newsList)
    if(!newsList){
      getNewsData(router?.query?.search);
    } else {
      setData(newsList);
      dispatch(clearNewsList())
    }
    setSearchKey(router?.query?.search)
  }, [router?.query?.search]);

  const goToDetail = async (nData,nIndex) =>{

    console.log("scrollRef?.current::", window.pageYOffset)

      await dispatch(saveNews(nData))
      await dispatch(saveNewsList(data))
      await dispatch(saveIndex(window.pageYOffset));
      router.push('./detail')
  }
  

  return (
    <div className={styles.container}>
      <Loading isLoading={isLoading} />
      <main className={styles.main}>
        <>
          <Header />
          <div class="my-20">
            {data &&
              data.map((value, key) => (
                <div
                  key={key}
                  class="max-w-sm max-w-md max-w-lg max-w-2xl rounded overflow-hidden shadow-lg my-2"
                  onClick={() => goToDetail(value,key)}
                  ref={(el) => scrollRef.current[key]=el}
                  id="searchButton"
                >
                  <img
                    class="w-full"
                    src={
                      value.multimedia
                        ? value.multimedia.length > 0
                          ? `https://static01.nyt.com/${value.multimedia[0].url}`
                          : "/noImage.png"
                        : "/noImage.png"
                    }
                    alt="Sunset in the mountains"
                    onLoad={()=> {
                      if(newsIndex){
                        window.scrollTo(0,newsIndex)
                    }
                    }}
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      {value?.headline?.main}
                    </div>
                    <p class="text-gray-700 text-base">
                      {value.lead_paragraph
                        ? value.abstract.substr(0, 150)
                        : ""}
                    </p>
                    <a
                      class="underline ..."
                      href={value?.web_url}
                      target="_blank"
                    >
                      News Link
                    </a>
                  </div>

                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{value.section_name}
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{value?.news_desk}
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{value?.type_of_material}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {data.length == 0 && !isLoading && (
            <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
            <p class="font-bold">Data Not Found</p>
            <p>Please enter correct search keyword</p>
          </div>
          )}
        </>
      </main>
    </div>
  );
}
