function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span>{`@${year}Tm`}</span>
      <span>Proiect Front End Advanced React And Angular</span>
      <span>Verdes Constantin-Adrian 311</span>
    </footer>
  );
}

export default Footer;
