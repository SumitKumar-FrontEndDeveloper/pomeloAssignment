import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import Header from "./header";
import { useRouter } from 'next/router'


function Detail(props) {
  const [newsData, setNewsData] = useState(null);
  const router = useRouter()
  const { news } = useSelector((state) => {
    return {
      news: state?.news?.response,
    };
  });
  useEffect(() => {
    setNewsData(news);
  }, []);

  
  

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div class="max-w-sm rounded overflow-hidden  pt-20">
          <img
            class="w-full"
            src={
              newsData?.multimedia
                ? newsData.multimedia.length > 0
                  ? `https://static01.nyt.com/${newsData.multimedia[0].url}`
                  : "/noImage.png"
                : "/noImage.png"
            }
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{newsData?.headline?.main}</div>
            <p class="text-gray-700 text-base">{newsData?.abstract}</p>
          </div>
          <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{newsData?.section_name}
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{newsData?.news_desk}
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{newsData?.type_of_material}
                    </span>
                  </div>
        

        </div>
      </main>
      <div className={styles.newsInfo} class="flex flex-col font-sans border-b-stone-300 border-2">
          <div class="flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 ">
              <div className={styles.left} class="">
              Lead paragraph
              </div>
              <div className={styles.right} class="">
              {newsData?.lead_paragraph || 'N/A'}
              </div>
          </div>
        </div>
        <div className={styles.newsInfo} class="flex flex-col font-sans border-b-stone-300 border-2">
          <div class="flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 ">
              <div className={styles.left} class="">
              News desk
              </div>
              <div className={styles.right} class="">
              {newsData?.news_desk}
              </div>
          </div>
        </div>
        <div className={styles.newsInfo} class="flex flex-col font-sans border-b-stone-300 border-2">
          <div class="flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 ">
              <div className={styles.left} class="">
              Document type
              </div>
              <div className={styles.right} class="">
              {newsData?.document_type || 'N/A'}
              </div>
          </div>
        </div>
        <div className={styles.newsInfo} class="flex flex-col font-sans border-b-stone-300 border-2">
          <div class="flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 ">
              <div className={styles.left} class="">
              Subsection name
              </div>
              <div className={styles.right} class="">
              {newsData?.subsection_name || 'N/A'}
              </div>
          </div>
        </div>
        
        <div className={styles.newsInfo} class="flex flex-col font-sans border-b-stone-300 border-2">
          <div class="flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 ">
              <div className={styles.left} class="">
              Type Of material
              </div>
              <div className={styles.right} class="">
              {newsData?.type_of_material || 'N/A'}
              </div>
          </div>
        </div>
    </div>
  );
}

export default Detail;
