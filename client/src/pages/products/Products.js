import React, {useState} from 'react';
import ModalContent from './ModalContent'
import Modal from '../../components/Modal/index'
import { DataGrid } from '@material-ui/data-grid';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import {Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import PageDesc from '../../components/pageDesc/PageDesc';

let onactionHandler;
const columns = [
  { field: 'id', headerName: 'ID', width: 100, sortable: false, },
  { field: 'icon',
   headerName: 'Product',
    width: 100,
     sortable: false,
     renderCell: (params) => {
      
        return <img style={{width : '40px',height : '40px'}} src={params.row.icon} alt="img"/>
    }
  },
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'price', headerName: 'Price', width: 90, sortable: false, },
  {
    field: 'stock',
    headerName: 'Stock',
    type: 'number',
    width: 100,
    sortable: false,
    align : 'center'
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 200,
     sortable: false,
    
  },
  {
    field: 'action',
    headerName: 'Actions',
    sortable: false,
    width: 150,
    renderCell: (params) => {
        
        return <div>
                    <IconButton onClick={() => onactionHandler('edit',params.row)}><EditIcon color={'primary'} /> </IconButton>
                    <IconButton onClick={() => onactionHandler('delete',params.row)}><CancelIcon color={'error'} /></IconButton>
                </div>
    }
    
  },
];
const rows = [
  { id: 10,icon : './img/a.png', name: 'Pink Fitness tracker', price: '$99.9', stock: 35, category : 'Tracker', action : 'some actions' },
  { id: 11,icon : './img/b.png', name: 'Purple Smartwatch', price: '$79.9', stock: 10, category : 'Gadget', action : 'some actions' },
  { id: 12,icon : './img/c.png', name: 'Black Mi Band Smartwatch', price: '$69.9', stock: 45, category : 'Smartwatch,', action : 'some actions' },
  { id: 13,icon : './img/d.png', name: 'Black Headphones', price: '$49.9', stock: 15, category : 'Headphone, Gadgets', action : 'some actions' },
  { id: 14,icon : './img/e.png', name: 'iPhone 7 Headphones', price: '$85.9', stock: 20, category : 'Headphone, Gadgets', action : 'some actions' },
  { id: 15,icon : './img/g.png', name: 'Purple Blue Gradient iPhone Case', price: '$105.9', stock: 20, category : 'Case, Gadgets', action : 'some actions' },
  { id: 16,icon : './img/c.png', name: 'Plug In Speaker', price: '$85.9', stock: 20, category : 'Gadgets, Speaker', action : 'some actions' },
 
];

 function Products() {
    const [open,setOpen] = useState(false);
   
    const [actionType,setActionType] = useState('');
    const [selected,setSelected] = useState({
      isSelected : false,
      selectedId : null
    });
    const [state, setstate] = React.useState({
      name:'',
      price : '',
      stock : '',
      category : ''
  })



    const handleChange = e => {
      const {name,value} = e.target
       setstate({
           ...state,
          [name] : value
      })
      
  }
  const handleSelected = (selectedId) => {
    if(selectedId.length > 0){
      setSelected({
        isSelected : true,
        selectedId
      })

    }else{
      setSelected({
        isSelected : false
      })
    }
  }
  const editFunc = () => {
    console.log('edited')
  }
  const deleteFunc = () => {
    console.log('deleted')
  }

   onactionHandler = (type,params) => {
        if(type === 'add' && !params){
          setstate({
              name:'',
              price : '',
              stock : '',
              category : ''
          })
        }
        setActionType(type);
        setOpen(true);
        if(params) setstate({...params});    
    }
        
  return (
      <>
      <PageDesc title='Products' notShow={true}/>
      <div style={{width : '100%',display : 'flex', justifyContent : 'flex-end', margin : '10px 0'}}>
      <Button disabled={!selected.isSelected} startIcon={<DeleteIcon />} size='small' variant="contained" color="secondary" onClick={deleteFunc}>
          Delete Selected
      </Button>
      <Button
        onClick={() => onactionHandler('add')}
        startIcon={<AddIcon />} size='small' 
        style={{marginLeft : '10px'}}
        variant="contained" color="primary" 
        >
          Add Product
      </Button>
      </div>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
       rows={rows}
       columns={columns}
       pageSize={5}
       checkboxSelection
       onSelectionModelChange = {(selected) => handleSelected(selected.selectionModel)}
           />
    </div>
      <Modal open={open} 
        maxWidth='sm'
        handleClose={() => { setOpen(false)}} actions={[{handler:() => {setOpen(false)},text:"Close",id:5}]} 
        title={actionType.toUpperCase()}>
        <ModalContent type={actionType} state={state} handleChange={handleChange} editFunc={editFunc} deleteFunc={deleteFunc}/>
      </Modal>
    </>
  );
}

export default Products