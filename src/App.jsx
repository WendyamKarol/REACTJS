const title = 'Interpolation' 
const style = {color : 'red', backgroundColor: 'grey'}
const showTitle = true
const todos = [
  'Présenter React',
  'Présenter le JSX',
  'Créer des composants'
]

function App() {

  return <>
      <Title color ="Red">Mon Titre</Title>
      <p>
        <input type="text"/>
        En utilisant, l'Interpolation, j'ai la main sur le titre en variable glogbale, au lieu d'entrer directement dans le code.
        C'est plus pratique et efficiace. Très rapide le truc.
      </p>
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))} 
      </ul>
  </>

}

const props ={
  id :'Samir',
  className : 'maclass'
}


function Title({color,children,hidden}){
  if (hidden){
    return null
  }
  return <h1 style ={{color : color}}  {...props}>{children}</h1>

}

export default  App
