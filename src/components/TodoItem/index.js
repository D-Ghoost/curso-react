import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem({ completed, text, onComplete, onDelete }) {
    return(
      <li className={ `TodoItem ${ completed && "TodoItem--active" }` }>
        {/* <span 
          className={ `TodoItem-check ${ completed && "TodoItem-check--active" }` }
          onClick={ onComplete }
        > 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <path d="M5 12l5 5l10 -10" />
        </svg>
        </span>*/}
        <CompleteIcon onComplete={ onComplete } completed={ completed }/>
        <p className={`TodoItem-parrafo ${ completed && "TodoItem-parrafo--active" }`}>{ text }</p>
        {/* <span className='TodoItem-delete' onClick={ onDelete }>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
        </span> */}
        <DeleteIcon onDelete={ onDelete }/>
      </li>
    );
}

export { TodoItem };
  