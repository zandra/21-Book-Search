import Head from './Head';
import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <>
  <Head />
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
  </>
);

export default Layout;