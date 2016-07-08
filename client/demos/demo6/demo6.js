/**
 * Created by ramosy on 2016/7/8.
 */
var MyTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function() {
        return <h1> {this.props.title} </h1>;
    }
});
var data = 123;

ReactDOM.render(
    <MyTitle title={data} />,
    document.body
);
