import s from "./Container.module.scss";
// import logoCity from "../../images/city-map.png";

const Container = ({ children }) => (
  <div className={s.Container}>
    {children}
    <div className={s.Box}>
      {/* <img title="my-img" src={logoCity} alt="logo" className={s.FormMape} /> */}
    </div>
  </div>
);

export default Container;
