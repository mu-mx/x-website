import styles from "./style.module.less";

import { createSignal } from "solid-js";

import * as datals from "./../../data";

export default function Index() {
  const [isOpen, setIsOpen] = createSignal(
    localStorage.getItem("urlOpenType") === "true" ? true : false
  );

  return (
    <>
      <section>
        <For each={datals.allData} fallback={<div>Failed</div>}>
          {(item, index) => (
            <div class={styles.list}>
              <h3>
                <span>{item.title}</span>

                {index() == 0 && (
                  <label>
                    是否本页打开：
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
                )}
              </h3>
              <div class={styles["list-item"]}>
                <For each={item.data} fallback={<div>Failed</div>}>
                  {(it) => (
                    <a
                      target={isOpen() ? "_self" : "_blank"}
                      href={it.url}
                      class={styles["item-link"]}
                      title={it.title}
                    >
                      <span class={styles.first}>
                        {(it.text || "").slice(0, 2).toUpperCase()}
                      </span>
                      <span>{it.text}</span>
                    </a>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </section>
    </>
  );
}
