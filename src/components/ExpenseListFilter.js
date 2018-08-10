import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setFilterText,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";

export class ExpenseListFilter extends React.Component {
  state = {
    calenderFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calenderFocused => {
 
    this.setState(() => ({
      calenderFocused
    }));
  };
  onTextChange = e => {
    this.props.setFilterText({ text: e.target.value });
  };
  onSortChange = e => {
    e.target.value === "date"
      ? this.props.sortByDate()
      : this.props.sortByAmount();
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          // onChange={e => {
          //   this.props.dispatch(setFilterText({ text: e.target.value }));
          // }}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          // onChange={e => {
          //   this.props.dispatch(
          //     e.target.value === "date" ? sortByDate() : sortByAmount()
          //   );
          // }}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          
        />
      </div>
    );
  }
}
//const ExpenseListFilter = props =>
const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};
const mapDispatchToProps = dispatch => ({
  setStartDate: startDate => {
    dispatch(setStartDate(startDate));
  },
  setEndDate: endDate => {
    dispatch(setEndDate(endDate));
  },
  setFilterText: text => {
    dispatch(setFilterText(text));
  },
  sortByDate: () => {
    dispatch(sortByDate());
  },
  sortByAmount: () => {
    dispatch(sortByAmount());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilter);
