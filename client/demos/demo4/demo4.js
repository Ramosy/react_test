/**
 * Created by ramosy on 2016/7/8.
 */
var HelloMessage = React.createClass({
    render: function() {
        return <h1>Hello {this.props.name}</h1>;
    }
});

ReactDOM.render(
    <HelloMessage name="John" />,
    document.getElementById('example')
);