import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { pick } from 'ramda';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';

import setCoinigyKeysAction from '../module/actions/set';
import clearCoinigyKeysAction from '../module/actions/clear';

import EditKeysComponent from './components/edit_keys';
import ViewDataComponent from './components/view_data';

const PagePaper = styled(Paper)`
  margin: auto;
  padding-bottom: 2em;
  max-width: 30em;
`;

class ViewDataContainer extends React.Component {
  componentDidMount() {
  }

  componentWillUnmount() {
    this.props.clearCoinigyKeys();
  }

  render() {
    // return !this.props.coinigy.data ?
      const { apiKey, apiSecret } = this.props.coinigy;

      return (
        <PagePaper elevation={1}>
          <EditKeysComponent onSave={this.props.setCoinigyKeys} />
          {apiKey && apiSecret && <ViewDataComponent {...pick(['apiKey', 'apiSecret'], this.props.coinigy)} />}
        </PagePaper>
      );
  }
}

const select = (state, props) => ({
  coinigy: state.coinigy,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCoinigyKeys: setCoinigyKeysAction,
      clearCoinigyKeys: clearCoinigyKeysAction,
    },
    dispatch,
  );

export default connect(
  select,
  mapDispatchToProps,
)(ViewDataContainer);
