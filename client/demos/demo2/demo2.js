/**
 * Created by ramosy on 2016/7/8.
 */
var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
    <div>
        {
            names.map(function (name) {
                return <div>Hello, {name}!</div>
            })
        }
    </div>,
    document.getElementById('example')
);