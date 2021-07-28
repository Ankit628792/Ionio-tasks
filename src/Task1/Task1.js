import './Task1.css';
import Sidebar from './Sidebar'
import CardBox from './CardBox'

function Task1() {
    return (
        <main>
            <Sidebar />
            <div className="main__inner">
                <CardBox />
            </div>
        </main>
    );
}

export default Task1;
