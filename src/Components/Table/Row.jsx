import React from 'react'
import { MdDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { deletePost } from '../../slices/PostSlice'
import { deleteComments } from '../../slices/CommentsSlice'
import { deleteProfile } from '../../slices/ProfileSlice'
import { useDispatch } from 'react-redux';

export default function Row({data, columns, name, setEditData}) {

  const dispatch = useDispatch()

  function deleteRow(id){
    if(name === 'posts') dispatch(deletePost(id))
    if(name === 'comments') dispatch(deleteComments(id))
    if(name === 'profile') dispatch(deleteProfile(id))
  }

  return (
    <tr>
        <th scope="row">1</th>
        { columns.map(item => <td>{data[item]}</td>) }
        <td className="text-end">
            <MdDelete 
                  style={{marginRight:'15px'}} 
                  color='red' 
                  onClick={()=>{
                    deleteRow(data.id)
                  }}
                  size={20}
            />
            <MdOutlineModeEditOutline 
                  onClick={()=> {
                    setEditData(data)
                  }}
                  size={20}
            />
        </td>
    </tr>
  )
}
