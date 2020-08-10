import React, {useState, useEffect} from 'react';
import './item-add-form.css'

const ItemAddForm = ({messageText, onItemAdded, changeMessage, changeInputsMode, isInputSearchMode}) => {
  const [label, setLabel] = useState('');
  
  useEffect(() => {
    setLabel(messageText);    
  }, [messageText]);

  const onSubmit=(e)=>{
    e.preventDefault();    
    onItemAdded(label)
    setLabel('');
  };

  const onEdit = (e)=>{
    e.preventDefault();
    onLabelChange(e);
    changeMessage(label);
    setLabel('');
    changeInputsMode();
    };

  const onLabelChange=({target})=>{
      const value = target.value;    
      setLabel(value);    
    };

    return (
      <form className="item-add-form d-flex"
      onSubmit={isInputSearchMode ? onSubmit : onEdit} 
      >
  <input type='text'
        className='form-control'
        onChange={onLabelChange}
        placeholder={isInputSearchMode ? 'Введите сообщение...' : ''}
        value={label}
        required
  />
  <button type="button" 
        className="btn btn-outline-secondary"
        
        onClick={isInputSearchMode ? onSubmit : onEdit} 
        disabled={!label}
        >{isInputSearchMode ? 'Отправить' : 'Изменить'}</button>
  </form>
    )

}

export default ItemAddForm;


