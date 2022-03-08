import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

function Header() {
  const [searchKey, setSearchKey] = React.useState("");
  const router = useRouter();
  const goToSearch = () => {
    router.push(`/?search=${searchKey}`);
  };
  useEffect(() => {
    setSearchKey(router?.query?.search);
  }, [router?.query?.search]);

  return (
    <div class="flex w-full justify-center ">
      <div class="flex w-full max-w-sm max-w-md max-w-lg max-w-2xl top-0 pt-1 pb-1 px-1 fixed bg-white shadow-lg">
        <button
          class="pt-3 pl-1 focus:outline-none focus:shadow-outline absolute right-5"
          onClick={goToSearch}
          id="searchBtn"
        >
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <form class="w-full" id="formId" onSubmit={async e => {
          // never called
          goToSearch()
          e.preventDefault();
        }}>
          <input
            type="text"
            class="form-input px-4 py-3 w-full pl-4 pr-20"
            onChange={(e) => setSearchKey(e.target.value)}
            value={searchKey}
            placeholder="Search....."
            id="inputField"
          />
        </form>

        {searchKey && (
          <div
            className={styles.crossIcon}
            class="pt-3 pl-1 focus:outline-none focus:shadow-outline absolute right-12"
            onClick={() => {
              setSearchKey("");
              router.push("/");
            }}
            id="crossBtn"
            
          >
            <img src="./cross.png" alt="clear" width="20" />
          </div>
        )}
        {/* <button
          class="px-4 text-white bg-gray-600 border-l "
          onClick={goToSearch}
        >
          Search
        </button> */}
      </div>
    </div>
  );
}

export default Header;
