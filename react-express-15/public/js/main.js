var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass( {
    render: function() {
        return (
            <div>
                <h2>Stuff</h2>
            </div>
        );
    }
});

ReactDOM.render(<Hello />, document.getElementById('app'));
