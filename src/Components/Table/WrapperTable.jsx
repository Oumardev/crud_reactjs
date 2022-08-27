import React from 'react'

export default function WrapperTable({columns, children}) {
  return (
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        { columns.map(col => <th scope="col">{col}</th>) }
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
        {children}
    </tbody>
  </table>
  )
}
