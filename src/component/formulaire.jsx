import { useState } from 'react'
import './App.css'

function formulaire() {
  const [values,setValues]= useState({
    name :'',
    email: '',
    password :''
  })
  const [errors,setErrors] = useState({});

// On met à jour les valeurs lors du changement d'input
  const handleChange = (e) => {
    const {name ,value} =e.target
    setValues({...values,[name]:value})
  }
  const handlesubmit =(e)=>{
    e.preventDefault()
      if (!validateForm()){
        console.log('formulaire invalide')
        return;
      }
      console.log(values)
    
  }
  const validateForm =(e)=>{
    let error ={}
    if(!values.name.trim()){
      error.name = "Le nom est est obligatoire."
    }
    if(!values.email.trim()){
      error.email = "L'email est obligatoire."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
      error.email = "L'email est invalide."
    }
    if(!values.password.trim()){
      error.password = "Le mot de passe est obligatoire."
    } else if(values.password.length < 8){
      error.password = "Le mot de passe doit faire au minimum 8 caractères."
    }
    setErrors(errors)
    return Object.keys(error).length === 0 

  }

  return (
    <>
    <div className="container">
      <h1 className= "title"> Formulaire d'inscription</h1>
      

      <form onSubmit={handlesubmit}>
        <label htmlFor="name">Nom complet</label>
        <input type="text" id="name" name="name" placeholder="Nom" onChange={(e) =>handleChange(e)} />
        {errors.name && <p  className="error">{errors.name}</p>}
        <label htmlFor="email">Adresse email</label>
        <input type="email" id="email" name="email" placeholder="email" onChange={(e) =>handleChange(e)}  />
        {<errors className="email"></errors> && <p  className="error">{errors.email}</p>}
        <label htmlFor="password">mot de passe</label>
        <input type="password" id="password" name="password" placeholder="password" onChange={(e) =>handleChange(e)}  />
        {errors.password && <p  className="error">{errors.password}</p>}
        <button type = "submit">Enregistrer</button>
      </form>
    </div>
    
    </>
  )
}

export default formulaire