import React,{useEffect} from 'react'
import Container from '../../Components/Container/Container'
import Table from '../../Components/Table/Table'
import { getComments, commentSelector, clearState } from '../../slices/CommentsSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function Comments() {
  
  const dispatch = useDispatch()
  const { comments , commentsUpdated } = useSelector(commentSelector)

  useEffect(() => {
    dispatch(getComments())
    dispatch(clearState())
  }, [commentsUpdated])

  return (
    <Container>
      <h1 style={{textAlign:'center'}}>Comments</h1>
      <Table columns={['id','body','postId']} data={comments} />
    </Container>
  )
}
