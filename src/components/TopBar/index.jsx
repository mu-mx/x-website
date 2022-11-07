import style from "./style.module.less";

export default function Index(props) {
  let ref = null;

  const getDefaultTarget = () =>
    ref.current && ref.current.ownerDocument
      ? ref.current.ownerDocument
      : window;

  const scrollToTop = (e) => {
    const { onClick, target, duration = 450 } = props;
    scrollTo(0, {
      getContainer: target || getDefaultTarget,
      duration,
    });
    if (typeof onClick === "function") {
      onClick(e);
    }
  };

  return (
    <div onClick={scrollToTop} class={style.backtop} ref={ref}>
      Top
    </div>
  );
}
