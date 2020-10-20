class repository extends React.Component{
    state = {
        change: <Overview />
    };
changetask = () => {
    this.setState({
        change: <Repo />
    });
};

render(){
return <div>{this.state.change}</div>
}
}