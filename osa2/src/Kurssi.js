import React from 'react';

const Kurssi = ({kurssi}) => {
    return (
      <div>
        <Otsikko otsikko={kurssi.nimi} />
        <Sisalto sisalto={kurssi.osat} />
        <Maara osat={kurssi.osat} />
      </div>
    )
}
  
const Maara = ({osat}) => 
<p>
    yhteensä {osat.reduce((yht, osa) => yht + osa.tehtavia, 0)} tehtävää
</p>


const Otsikko = ({otsikko}) => <h1>{otsikko}</h1>

const Sisalto = ({sisalto}) => 
sisalto.map(osa => 
    <Osa 
    nimi={osa.nimi} 
    tehtavia={osa.tehtavia}
    key={osa.id}
    />
)

const Osa = ({nimi, tehtavia}) => (
<p>{nimi} {tehtavia}</p>
)

export default Kurssi;