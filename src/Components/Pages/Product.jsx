import React from "react";
import { Table } from 'react-bootstrap';

function Product() {
  return (
    <div>
      <h1>Products</h1>
<main style={{ display:'flex', alignItems:"center", justifyContent:'center', width:'100vw'}}>
  
        <Table striped bordered hover size="md" className=" w-75">
        <thead>
          <tr>
            <th>Sl no</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Category</td>
            <td >Larry the Bird</td>
            <td >Larry the Bird</td>
            <td >Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>Operation</td>
            <td >Larry the Bird</td>
            <td >Larry the Bird</td>
            <td >Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
</main>

    </div>
  );
}

export default Product;
