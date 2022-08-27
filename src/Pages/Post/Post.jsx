import React,{useEffect, useState} from 'react'
import Container from '../../Components/Container/Container'
import Table from '../../Components/Table/Table'
import { Formik, Form, ErrorMessage } from 'formik';
import './style.css'
import * as Yup from "yup";
import { getPost, createPost ,postSelector, clearState } from '../../slices/PostSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function Post() {

  const dispatch = useDispatch()
  const [editData, setEditData] = useState({})
  const { posts , postUpdated } = useSelector(postSelector)

  useEffect(() => {
    dispatch(getPost())
    dispatch(clearState())
  }, [postUpdated])
  
  const PostSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too short !')
      .max(30, 'Too long !')
      .required('Field required'),
    
    author: Yup.string()
      .min(2, 'Too short !')
      .max(30, 'Too long !')
      .required('Field required')
  });

  return (
    <Container>
      <h1 style={{textAlign:'center'}}>Post</h1>
        <Formik
              initialValues={{title : editData.title ?? '', author : editData.author ?? ''}}              
              onReset={true}
              validationSchema = {PostSchema}
                                
              onSubmit={(values, { resetForm }) => {
                dispatch(createPost(values))
                resetForm({values : ''})
              }}>
          {({handleChange, handleBlur, values, handleSubmit }) => (
            <Form>
              <div class="row g-3">
                <div class="col">
                  <input type="text" 
                    class="form-control" 
                    placeholder="title" 
                    name="title"
                    value={values.title} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                  />
                  <ErrorMessage className="error-msg" name="title" component={'div'} />
                </div>
                <div class="col">
                  <input type="text" 
                    class="form-control" 
                    placeholder="author"
                    name="author"
                    value={values.author} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                  />
                  <ErrorMessage className="error-msg" name="author" component={'div'} />
                </div>
                <div class="col">
                  <button type="button" onClick={handleSubmit} class="btn btn-info">Add new post</button>
                </div>
              </div>
              </Form>
            )}
        </Formik>
      <Table columns={['title', 'author']} data={posts} name={'posts'} setEditData={setEditData} />
    </Container>
  )
}