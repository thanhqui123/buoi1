import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="nav nav-pills nav-fill">
          <a class="nav-link active" aria-current="page" href="#">
            Active
          </a>
          <a class="nav-link" href="#">
            Much longer nav link
          </a>
          <a class="nav-link" href="#">
            Link
          </a>
          <a className="nav-link disabled">Disabled</a>
        </nav>
      </div>
    );
  }
}
