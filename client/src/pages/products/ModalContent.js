import React from 'react'
import {Grid, Button,TextField, InputAdornment} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

function ModalContent({type,state, handleChange, editFunc, deleteFunc}) {
    let modalContent;
    switch(type){
            case 'edit':
                modalContent = (
                    <Grid container spacing={3}>
                        <Grid item  xs={12} sm={6} >
                        <TextField
                               name='name'
                               fullWidth
                               value={state.name}
                               onChange={handleChange}
                               InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <EditIcon/>
                                  </InputAdornment>
                                ),
                              }}
                              label='Name'
                              variant="outlined"
                              type='text'
                           />
                        </Grid>
                        <Grid item  xs={12} sm={6} >
                        <TextField
                               name='price'
                               fullWidth
                               value={state.price}
                               onChange={handleChange}
                               InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <EditIcon/>
                                  </InputAdornment>
                                ),
                              }}
                              label='Price'
                              variant="outlined"
                              type='text'
                           />
                        </Grid>
                        <Grid item  xs={12} sm={6} >
                        <TextField
                               name='stock'
                               fullWidth
                               value={state.stock}
                               onChange={handleChange}
                               InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <EditIcon/>
                                  </InputAdornment>
                                ),
                              }}
                              label='Stock'
                              variant="outlined"
                              type='text'
                           />
                        </Grid>
                        <Grid item  xs={12} sm={6} >
                        <TextField
                               name='category'
                               fullWidth
                               value={state.category}
                               onChange={handleChange}
                               InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <EditIcon/>
                                  </InputAdornment>
                                ),
                              }}
                               
                              label='Category'
                              variant="outlined"
                              type='text'
                           />
                        </Grid>
                        <Button variant="contained" color="primary" onClick={editFunc}>
                             Update
                        </Button>
                        <div style={{marginLeft : '10px'}}>
                        <input
                            accept="image/*"
                            style={{display : 'none'}}
                            id="contained-button-file"
                            multiple
                            type="file"
                          />
                          <label htmlFor="contained-button-file">
                            <Button variant="contained" color="default" component="span">
                              Upload
                            </Button>
                          </label>
                        </div>

                    </Grid>
                   
                );
               
                break;
            case 'add':
                modalContent = (
                    <Grid container spacing={3}>
                        <Grid item  xs={12} sm={6} >
                        <TextField
                               name='name'
                               fullWidth
                               value={state.name}
                               onChange={handleChange}
                               InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <EditIcon/>
                                  </InputAdornment>
                                ),
                              }}
                              label='Name'
                              variant="outlined"
                              type='text'
                           />
                        </Grid>
                        <Grid item  xs={12} sm={6} >
                        <TextField
                               name='price'
                               fullWidth
                               value={state.price}
                               onChange={handleChange}
                               InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <EditIcon/>
                                  </InputAdornment>
                                ),
                              }}
                              label='Price'
                              variant="outlined"
                              type='text'
                           />
                        </Grid>
                        <Grid item  xs={12} sm={6} >
                        <TextField
                               name='stock'
                               fullWidth
                               value={state.stock}
                               onChange={handleChange}
                               InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <EditIcon/>
                                  </InputAdornment>
                                ),
                              }}
                              label='Stock'
                              variant="outlined"
                              type='text'
                           />
                        </Grid>
                        <Grid item  xs={12} sm={6} >
                        <TextField
                               name='category'
                               fullWidth
                               value={state.category}
                               onChange={handleChange}
                               InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <EditIcon/>
                                  </InputAdornment>
                                ),
                              }}
                               
                              label='Category'
                              variant="outlined"
                              type='text'
                           />
                        </Grid>
                        <Button variant="contained" color="primary" onClick={editFunc}>
                             Add Product
                        </Button>
                        <div style={{marginLeft : '10px'}}>
                        <input
                            accept="image/*"
                            style={{display : 'none'}}
                            id="contained-button-file"
                            multiple
                            type="file"
                          />
                          <label htmlFor="contained-button-file">
                            <Button variant="contained" color="default" component="span">
                              Upload
                            </Button>
                          </label>
                        </div>

                    </Grid>
                   
                );
               
                break;
            case 'delete':
                modalContent = (
                    <Grid container spacing={3}>
                        <Grid item  xs={12} >Are You Sure You Want to Delete This?</Grid>
                        <Grid item  xs={12} sm={6} >
                            <Button variant="contained" color="secondary" onClick={deleteFunc}>
                                Delete
                            </Button>
                        </Grid>

                    </Grid>
         
                   
                );
                
                break;
            default : return null
        }
    
    return modalContent
}

export default ModalContent
