import styles from "./style.module.less";

import { createSignal, createEffect } from "solid-js";

import * as datals from "./../../data";
import TopBar from "./../TopBar";

export default function Index() {
  const [isCol, setIsCol] = createSignal(
    localStorage.getItem("cardOpen")
      ? JSON.parse(localStorage.getItem("cardOpen"))
      : []
  );

  const [isOpen, setIsOpen] = createSignal(
    localStorage.getItem("urlOpenType") === "true" ? true : false
  );

  const useTip = (param) => {
    let allA = document.querySelectorAll(".tips");
    for (let index = 0; index < allA.length; index++) {
      const element = allA[index];
      const title = element.getAttribute("title");

      if (title) {
        tippy(element, {
          content: element.getAttribute("title"),
        });
      }
    }
  };

  createEffect(() => {
    useTip();
  }, []);

  return (
    <>
      <section>
        <div class={`${styles["top-tip"]}`}>
          <label>
            本页打开
            <input
              type="checkbox"
              onChange={(e) => {
                localStorage.setItem("urlOpenType", e.target.checked);
                setIsOpen(e.target.checked);
              }}
              checked={isOpen()}
              name=""
              id=""
            />
          </label>

          <span>
            <span
              onClick={() => {
                var oldss = [...Array(datals.allData.length).keys()];
                localStorage.setItem("cardOpen", JSON.stringify(oldss));
                setIsCol(oldss);
              }}
            >
              全展
            </span>
            &nbsp; &nbsp;
            <span
              onClick={() => {
                localStorage.setItem("cardOpen", JSON.stringify([0]));
                setIsCol([0]);
              }}
            >
              全收
            </span>
          </span>
        </div>
        <br />
        <For each={datals.allData} fallback={<div>Failed</div>}>
          {(item, index) => (
            <div
              class={`${styles.list}  card `}
              data-flag={index()}
              style={{
                height: isCol().includes(index()) ? "auto" : "42px",
              }}
            >
              <h3>
                <span>{item.title}</span>

                {isCol().includes(index()) ? (
                  <b
                    onClick={() => {
                      let oldData = isCol();
                      oldData = oldData.filter((item) => item !== index());
                      oldData = [...new Set(oldData)];
                      setIsCol(oldData);
                      localStorage.setItem("cardOpen", JSON.stringify(oldData));
                    }}
                  >
                    ∧
                  </b>
                ) : (
                  <b
                    onClick={() => {
                      let oldData = isCol();
                      oldData.push(index());
                      oldData = [...new Set(oldData)];
                      setIsCol(oldData);
                      localStorage.setItem("cardOpen", JSON.stringify(oldData));
                    }}
                  >
                    ∨
                  </b>
                )}
              </h3>
              <div class={`${styles["list-item"]}   `}>
                <For each={item.data} fallback={<div>Failed</div>}>
                  {(it) =>
                    it.type === "line" ? (
                      <>
                        <hr style={{ width: "100%", margin: "12px 0" }} />
                      </>
                    ) : (
                      <a
                        target={isOpen() ? "_self" : "_blank"}
                        href={it.url}
                        class={`${styles["item-link"]} tips`}
                        title={it.title || it.text}
                      >
                        {it.text}
                      </a>
                    )
                  }
                </For>
              </div>
            </div>
          )}
        </For>
      </section>

      <TopBar />
    </>
  );
}
