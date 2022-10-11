import React , {useState ,useEffect} from 'react';

const HomeScreen = () => {


  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);


  return (
    <>

    {domLoaded && (
    <div className='Container'>

                               


    </div>

    )}
    </>
                      
  );
}

export default HomeScreen;
