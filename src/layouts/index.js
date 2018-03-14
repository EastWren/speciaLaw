import React from "react";
import Link from "gatsby-link";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div>
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/AttorneyProfile/">Attorney Profile</ListLink>
          <ListLink to="/FamilyLaw/">Family Law</ListLink>
          <ListLink to="/Contact/">Contact</ListLink>
        </ul>
      </header>
      {children()}
    </div>
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
      <footer style={{ marginBottom: `1.5rem` }}>
        <ul style={{ listStyle: `none` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/AttorneyProfile/">Attorney Profile</ListLink>
          <ListLink to="/FamilyLaw/">Family Law</ListLink>
          <ListLink to="/Contact/">Contact</ListLink>
        </ul>
      </footer>
    </div>
  </div>