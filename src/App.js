import React, {useState, useEffect} from 'react';
import './App.scss';
import Nav from './components/Nav';
import Head from './components/Head';
import Search from './components/Search';
import Container from './components/container/Container';
import Footer from './components/Footer';

const App = () => {
  const [details, setDetails] = useState({});
  const [dataobj, setDataobj] = useState({
      buyer_name: null, 
      product_name: null,  
      weight_gsm: null,
      fabric_quality: null,
      length_mtr: null
  })
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [productlist, setProductlist] = useState();
  useEffect(() => {
    fetch('https://morning-bayou-46861.herokuapp.com/api/products/options',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataobj)
    })
        .then(res => res.json())
        .then(data => {
            setDetails(data);
        })
        .catch(e => console.log(e));
  }, [dataobj]);
  useEffect(() => {
      setLoading(true);
      fetch('https://morning-bayou-46861.herokuapp.com/api/products/filter', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataobj)
      })
          .then(res => res.json())
          .then(data => {
              setProductlist(data);
              setLoading(false);
          })
          .catch(e => console.log(e));
  }, [toggle, dataobj]);
  const selected = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      const forbid = ['Buyer', 'Product', 'Weight', 'Quality', 'Length'];
      setDataobj(dataobj => ({
          ...dataobj,
          [name] : forbid.includes(value) ? null : value
      }))
      e.target.selectedIndex = 0;
  }
  return (
    <>
      <Nav />
      <Head />
      <Search dataobj={dataobj} setDataobj={setDataobj} details={details} selected={selected} setToggle={setToggle} />
      {
        (productlist && !loading) ? <Container productlist={productlist} /> : <h5 className="font-weight-bold text-center mt-5">Loading....</h5>
      }
      <Footer />
    </>
  );
}

export default App;
