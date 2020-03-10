import { connect } from "react-redux";
import Connexion from "../components/auth/Connexion";
import { checkToken } from "../actions/userActions";

const mapStateToProps = (state, props) => ({
  userProps: state.userState
});

const mapDispatchToProps = dispatch => ({
  checkToken: () => dispatch(checkToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);