/**
 * Created by ramosy on 2016/7/8.
 */

var MyTitle = React.createClass({
    getDefaultProps : function () {
        return {
            title : 'Hello World'
        };
    },

    render: function() {
        return <h1> {this.props.title} </h1>;
    }
});

ReactDOM.render(
    <MyTitle />,
    document.body
);