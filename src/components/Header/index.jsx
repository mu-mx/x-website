import { onMount, onCleanup, createSignal } from "solid-js";

import styles from "./style.module.less";
import * as allData from "./../../data";

const webSearchUrl = allData.webSearchUrl;

const imgSrc = `https://cn.bing.com/sa/simg/favicon-2x.ico`;

function App() {
  const [searchText, setSearchText] = createSignal("");
  const [scaleShow, setScaleShow] = createSignal(false);
  const [clearShow, setClearShow] = createSignal(true);

  let inputDom;

  onMount(() => {
    console.log("onMount");
  });

  const selectLogo = (param) => {};
  const handleKeyup = (e) => {
    switch (e.keyCode) {
      case 13:
        const value = searchText.trim();
        value && window.open(searchUrl + value);
        break;
      case 38:
        if (inputZh || searchList.length == 0) return;
        if (searchIndex <= 0) {
          searchIndex = searchList.length - 1;
        } else {
          searchIndex--;
        }
        searchText = searchList[searchIndex].q;
        break;
      case 40:
        if (inputZh || searchList.length == 0) return;
        if (searchIndex >= searchList.length - 1) {
          searchIndex = 0;
        } else {
          searchIndex++;
        }
        searchText = searchList[searchIndex].q;
        break;
      default:
        break;
    }
  };
  const handleInput = (param) => {
    setSearchText(param.target.value);
  };

  const setNull = (param) => {
    setSearchText("");
    setScaleShow(false);
    setClearShow(true);
  };
  return (
    <>
      <header>
        <div class={styles.search}>
          <div class={styles["search-logo"]}>
            <img class={styles["search-image"]} src={imgSrc} alt="" />
            <div class={styles["select-logo"]} onClick={selectLogo}>
              <p>Bing</p>
              <p>Google</p>
            </div>
          </div>
          <div
            class={styles["search-box"]}
            onKeyup={handleKeyup}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <input
              value={searchText()}
              onFocus={() => {
                // searchText

                setScaleShow(true);
              }}
              ref={inputDom}
              onInput={handleInput}
              data-url="https://www.baidu.com/s?wd="
              type="text"
              class={styles["search-ipt"]}
            />

            <div
              class={styles["search-list"]}
              style={{ transform: scaleShow() ? "scale(1)" : "scale(0)" }}
            >
              {/* {#each searchList as { q }, i}
                <div
                    class="search-item {searchIndex === i ? 'search-item-active' : ''}"
                    on:click={searchItem.bind(this, q, i)}
                >
                    {q}
                </div>
                {/each} */}
            </div>

            <span
              onClick={setNull}
              style={{ display: clearShow() ? "block" : "none" }}
              class={styles["remove"]}
            >
              x
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
