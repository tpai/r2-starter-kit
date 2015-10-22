import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Pager from "./Pager";
import * as PagerAction from "../actions/PagerAction";

function mapStateToProps(state) {
	return {
		nowPage: state.nowPage
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(PagerAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pager);