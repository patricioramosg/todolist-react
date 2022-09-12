import userEvent from "@testing-library/user-event";
import { useEffect, useState } from 'react';

const List = () => {

    // const lista = [
    //     'ponerme al dia con el bootcamp',
    //     'pasear al elefante',
    //     'comprar comida de tigre',
    //     'ir a clase de ostura',
    //     'comprar pañales',
    // ];

    const [lista, setLista] = useState([]);

    const [tarea, setTarea] = useState('')

    const handleChange = (e)=>{
        setTarea(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLista(lista.concat(tarea))
        // setLista([...lista,tarea])
    }

    const handleDelete = (key) =>{
        setLista(lista.filter((item,index)=> index!==key));
        console.log(key);
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Todo List</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <ul className="list-group">
                    {lista.map((tarea, key) => <li className="list-group-item" key={key}>{tarea}<button onClick={()=>handleDelete(key)}>Delete</button></li>)}
                </ul>
            </div>
        </>
    )
};

export default List;


