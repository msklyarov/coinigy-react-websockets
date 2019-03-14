import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class EditKeysForm extends React.Component {
  state = {
    apiKey: '',
    apiSecret: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onSave = () => {
    this.props.onSave(this.state.apiKey, this.state.apiSecret);
  };

  render() {
    const { apiKey, apiSecret } = this.state;

    return (
      <form noValidate autoComplete="off">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '25em',
            margin: 'auto',
            marginTop: '5em',
            paddingTop: '2em',
          }}
        >
          <TextField
            required
            id="apiKey"
            label="API Key"
            onChange={this.handleChange('apiKey')}
            margin="normal"
            value={apiKey}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="apiSecret"
            label="API Secret"
            onChange={this.handleChange('apiSecret')}
            margin="normal"
            value={apiSecret}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <span
            style={{
              textAlign: 'right',
            }}
          >
              <Button
                variant="contained"
                style={{
                  marginRight: '1em',
                }}
              >
                Reset
              </Button>
              <Button variant="contained" color="primary" onClick={this.onSave}>
                Save
              </Button>
            </span>
        </div>
      </form>
    );
  }
}

export default EditKeysForm;
