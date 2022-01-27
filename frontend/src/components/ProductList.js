import React from 'react';

const ProductList = () => {
  return (
    <div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11</td>
            <td>salmon</td>
            <td>400</td>
            <td>
              <a className="button is-small is-info">Edit</a>
              <a className="button is-small is-danger">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
