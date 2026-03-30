import React from 'react';
import Peliculas_popular from '../../components/Peliculas_popular/Peliculas_popular';
import Peliculas_cartel from '../../components/Peliculas_cartel/Peliculas_cartel';
import Header from '../../components/Header/Header';
 
function Home(){
    return(
        <React.Fragment>
            <h2>Peliculas Populares</h2>
            <section>
                <Peliculas_popular></Peliculas_popular>
            </section>
            <h2>Peliculas en cartel</h2>
            <section>
                <Peliculas_cartel></Peliculas_cartel>
            </section>

        </React.Fragment>
    )

}


 export default Home