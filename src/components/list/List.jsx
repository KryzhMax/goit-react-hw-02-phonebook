import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './List.module.css';

export class Filter extends Component {
  static defaultProps = {
    contacts: [],
  };

  onFinder = e => {
    this.props.onHandleFilter(e.target.value);
  };

  deleteName = id => {
    this.props.onDeleteHandler(id);
  };

  render() {
    console.log(this.props.contacts);
    return (
      <>
        <h3>Find contact by name</h3>
        <form className={s.finder}>
          <input type="text" onChange={this.onFinder} />
        </form>
        <ul className={s.list}>
          {this.props.contacts.map(item => {
            return (
              <>
                <li key={item.id} className={s.listItem}>
                  {item.name}: {item.number}
                  <button
                    className={s.delBtn}
                    type="button"
                    onClick={() => {
                      this.deleteName(item.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}

Filter.propTypes = {
  onHandleFilter: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
