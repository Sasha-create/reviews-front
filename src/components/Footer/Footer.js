import s from "./Footer.module.scss";

const Footer = ({ page }) => {
  //   let footerClass = [];

  return (
    <footer className={s.FooterClass}>
      <div className={s.Social}>
        <ul className={s.Link}></ul>
      </div>
    </footer>
  );
};
export default Footer;
