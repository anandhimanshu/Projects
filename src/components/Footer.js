const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By: 
      <i class="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/himanshu-anand-3486ab2b2/" target="_blank">
        ❤️<b>Himanshu Anand</b>
      </a>
      &nbsp;&copy;{year} <b>AnshuBites</b>
    </div>
  );
};

export default Footer;
