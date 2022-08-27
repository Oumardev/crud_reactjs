import React,{useEffect} from 'react'
import Container from '../../Components/Container/Container'
import Table from '../../Components/Table/Table'
import { getProfile, profileSelector, clearState } from '../../slices/ProfileSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function Profile() {
  
  const dispatch = useDispatch()
  const { profiles , profileUpdated } = useSelector(profileSelector)

  useEffect(() => {
    dispatch(getProfile())
    dispatch(clearState())
  }, [profileUpdated])

  return (
    <Container>
      <h1 style={{textAlign:'center'}}>Profile</h1>
      <div class="row g-3">
        <div class="col">
          <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
        </div>
      </div>
      <Table columns={['name']} data={profiles} />
    </Container>
  )
}
