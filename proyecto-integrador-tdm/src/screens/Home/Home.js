import React from 'react';
import Peliculas_popular from '../../components/Peliculas_popular/Peliculas_popular';
import Buscador from '../../components/Buscador/Buscador';
import Series from '../../components/Series/Series';

function Home(){
    return(
        <React.Fragment>
            <Buscador/>
            <h2>Peliculas Populares</h2>
            <section>
                <Peliculas_popular></Peliculas_popular>
            </section>
            <h2>Series trending</h2>
            <section>
                <Series></Series>
            </section>

        </React.Fragment>
    )

}


 export default Home