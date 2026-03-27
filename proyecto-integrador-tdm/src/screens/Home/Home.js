import React from 'react';
import Peliculas_popular from '../../components/Peliculas_popular/Peliculas_popular';
import Header from '../../components/Header/Header';
 
function Home(){
    return(
        <React.Fragment>
            <h2>Peliculas Populares</h2>
            <section>
                <Peliculas_popular></Peliculas_popular>
            </section>
        </React.Fragment>
    )

}


 export default Home