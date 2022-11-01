
import './list.css';
 
function List(){

    return(
        <div className="body">
            <div className="main">
            <h1>THINGS TO DO</h1>
            <form action="" className='form-field'>
            <div className="new">
            <input type="text" placeholder="Add new"/>
            </div>
            <table className='check'>
                <tr>
                    <td>
                    <input type="checkbox" name="" id="" />Learn Javascript
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type="checkbox" name="" id="" />Learn React
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type="checkbox" name="" id="" />Build a React App
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type="checkbox" name="" id="" />Learn Next Js
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type="checkbox" name="" id="" />Learn Nuxt Js
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type="checkbox" name="" id="" />Learn Flutter
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type="checkbox" name="" id="" />Learn React Native
                    </td>
                </tr>
            </table>
            </form>
            <div className='footer' >
                <div className="footer1">
            <i class="fa-solid fa-plus icon"></i>
                <i class="fa-solid fa-magnifying-glass icon"></i>
                <p>| 7 items left</p>
                </div>
                <div className="footer2">
                <div className="btn">
                <button className='all'>
                All    
                </button>
                <button>
                 Active
                </button>
                <button>
                Completed
                </button>
                </div>
                </div>
            </div>
            <p>Please enter "ESC" for cancel</p>
            </div>
        </div>
    );
}
export default List;