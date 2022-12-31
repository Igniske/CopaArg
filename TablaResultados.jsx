import React from "react";
import { useState } from "react";

function TablaResultados(){

    const [actual, setActual] = useState(true)

    const contenido = {
        "Results": [
            {
                "Team":  { "Name": "Ranelagh GC", "Id": 1},
                "TotalPoints": 12,
                "SmallPoints": 54,
                "HolesWon": 25
            },
            {
                "Team":  { "Name": "Olivos GC", "Id": 2},
                "TotalPoints": 12,
                "SmallPoints": 54,
                "HolesWon": 25
            },
            {
                "Team":  { "Name": "Buenos Aires GC", "Id": 3},
                "TotalPoints": 10,
                "SmallPoints": 54,
                "HolesWon": 25
            },
            {
                "Team":  {"Name": "Lomas AC", "Id": 4},
                "TotalPoints": 9,
                "SmallPoints": 54,
                "HolesWon": 25
            },
            {
                "Team":  {"Name": "Jockey Club San Isidro", "Id": 5},
                "TotalPoints": 8,
                "SmallPoints": 54,
                "HolesWon": 25
            },
            {
                "Team":  {"Name": "San Isidro GC", "Id": 6},
                "TotalPoints": 6,
                "SmallPoints": 54,
                "HolesWon": 25
            },
            {
                "Team":  {"Name":"Náutico San Isidro", "Id":7},
                "TotalPoints": 4,
                "SmallPoints": 54,
                "HolesWon": 25
            },
            {
                "Team":  {"Name":"Martindale CC", "Id": 8},
                "TotalPoints": 4,
                "SmallPoints": 54,
                "HolesWon": 25
            },
            {
                "Team":  {"Name":"GC Argentino", "Id": 9},
                "TotalPoints": 2,
                "SmallPoints": 54,
                "HolesWon": 25
            }
        ]
    }
    
   /*const peticion = fetch("https://copabuenosaires.up.railway.app/api/results", { mode: 'no-cors'}).then(response => response.json())
   
    console.log(peticion)*/


    const tableRows=contenido.Results.map(
        (element, i)=>{
            return( 
                
              <tr key={element.Team.Id}>
                <td key={element.Team.Name} scope="row">{element.Team.Name}</td>
                <td key={element.Team.Id + " Total"} >{element.TotalPoints}</td>
                <td key={element.Team.Id + " Small"}>{element.SmallPoints}</td>
                <td key={element.Team.Id + " Holes"}>{element.HolesWon}</td>
              </tr>
                
            )
        }
    )

    function changeToTeams(e){
        e.preventDefault()
        if(actual === false){
            setActual(true)
        }
        
    }

    function changeToResult(e){
        e.preventDefault()
        if(actual === true){
            setActual(false)
        }
       
    }
    

    return(<div>
        
        <div className="contenedor">
        <div className="contenedor-superior"><h3 className="contenedor-titulo">Posiciones de Copa Argentina</h3></div>
        <div className="contenedor-menus">
            <div onClick={changeToTeams} className={"menu " + (actual === true ? "highlight" : "") }>Equipos</div>
            <div onClick={changeToResult} className={"menu " + (actual === true ? "" : "highlight") }>Resultados</div>
            {/*<div className="menu">Elegir equipo para una fecha</div>
            <div className="menu">Ver resultados de la fecha</div>
    <div className="menu">Cargar resultados de la fecha</div>*/}
        </div>
    </div>
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Puntos</th>
                <th scope="col">Puntos chicos</th>
                <th scope="col">Hoyos ganados</th>
            </tr>
            </thead>
            <tbody>
            {tableRows}
            </tbody>
        </table>
    </div>)
}

export default TablaResultados;