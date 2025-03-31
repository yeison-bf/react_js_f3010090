import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Products = () => {

  return (
    <>
      <div>Listado de Products</div>
      <table className="table">
        <thead>
          <tr>
            <th >Nombre</th>
            <th >Imagen</th>
            <th >Genero</th>
            <th >Especie</th>
            <th >Estado</th>
            <th >Acciones</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>

    </>
  )
}
