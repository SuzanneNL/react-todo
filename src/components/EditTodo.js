import React from 'react'
import { Link } from 'react-router-dom'

import Card from './layout/Card'

const EditTodo = () => {
  return (
    <Card>
      <form>
        <div class="form-group">
          <label for="todo">Edit todo</label>
          <input
            type="text"
            class="form-control"
            id="todo"
            placeholder="Enter your todo"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Edit todo
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    </Card>
  )
}

export default EditTodo