import React from 'react'
import WrapperTable from './WrapperTable'
import Row from './Row'

export default function Table({columns,data, name, setEditData}) {
  return (
    <WrapperTable columns={columns}>
      {data.map(rw => <Row data={rw} columns={columns} name={name} setEditData={setEditData} />)}
    </WrapperTable>
  )
}
