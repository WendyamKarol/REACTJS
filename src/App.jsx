const title = 'Interpolation' 
const style = {color : 'red', backgroundColor: 'grey'}
const showTitle = true

function App() {

  return <>
      {showTitle && <h1 id="title" className="title" style={style}>{title}</h1>}
      <p>
        En utilisant, l'Interpolation, j'ai la main sur le titre en variable glogbale, au lieu d'entrer directement dans le code.
        C'est plus pratique et efficace. Très rapide le truc.
      </p>
  </>

}

export default App
